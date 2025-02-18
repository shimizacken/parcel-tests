import React from 'react';
import { LoadingPanel } from './LoadingPanel.view';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

const withLazyImport = (imports, options) => (WrappedComponent) => {
  class WithLazyImport extends React.Component {
    constructor(props) {
      super(props);

      const loadedImports = {};
      let promiseArray;
      if (options && options.sequential) {
        promiseArray = Object.values(imports).reduce(
          (promiseChain, curr) =>
            promiseChain.then((chainResults) =>
              curr().then((currentResult) => [...chainResults, currentResult])
            ),
          Promise.resolve([])
        );
      } else {
        promiseArray = Promise.all(Object.values(imports).map((f) => f()));
      }

      promiseArray.then((values) => {
        for (const [i, v] of values.map((v) => v.default).entries()) {
          const key = Object.keys(imports)[i];
          loadedImports[key] = v;
        }
        this.imports = loadedImports;
        this.setState({ loaded: true });
      });

      this.state = {
        loaded: false,
      };
    }
    render() {
      return this.state.loaded ? (
        <WrappedComponent {...this.props} imports={this.imports} />
      ) : (
        <LoadingPanel />
      );
    }
  }

  // Convention
  WithLazyImport.displayName = `WithLazyImport(${getDisplayName(WrappedComponent)})`;

  return WithLazyImport;
};

export default withLazyImport;
