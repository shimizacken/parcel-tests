import React from 'react';
import { compose } from 'redux';
import { withDynamicImports } from './withDynamicImports.hoc';
import { ImportMap } from 'Types/common';

type AppProps = {
  imports?: ImportMap;
};

const JsonPanel: React.FC<AppProps> = ({ imports }) => {
  console.log('🚀 ~ modules:', imports);

  return (
    <textarea
      style={{
        width: '500px',
        height: '250px',
      }}
    ></textarea>
  );
};

// @ts-ignore
const lazyImports: ImportMap = {
  brace: () => import('brace'),
  braceModeJson: () => import('brace/mode/json'),
  braceThemeDracula: () => import('brace/theme/dracula'),
  braceExtSearchbox: () => import('brace/ext/searchbox'),
  braceExtLanguageTools: () => import('brace/ext/language_tools'),
  braceExtLinking: () => import('brace/ext/linking'),
};

// const EnhancedComponent = withDynamicImports<AppProps>(lazyImports)(JsonPanel);

const EnhancedComponent = compose(withDynamicImports<AppProps>(lazyImports))(JsonPanel);

export { EnhancedComponent as JsonPanel };
