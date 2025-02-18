import React, { useState, useEffect, ComponentType } from 'react';
import { ImportMap, WithDynamicImportsProps } from 'Types/common';

export const withDynamicImports =
  <P extends object>(importMap: ImportMap) =>
  (WrappedComponent: ComponentType<P & WithDynamicImportsProps>) => {
    return (props: P) => {
      const [modules, setModules] = useState<WithDynamicImportsProps>({});
      const [loading, setLoading] = useState<boolean>(true);
      const [error, setError] = useState<Error | null>(null);

      useEffect(() => {
        const loadModules = async () => {
          try {
            const loadedModules: WithDynamicImportsProps = {};

            for (const [key, importFunc] of Object.entries(importMap)) {
              loadedModules[key] = await importFunc();
            }

            setModules(loadedModules);
            setLoading(false);
          } catch (err) {
            setError(err as Error);
            setLoading(false);
          }
        };
        loadModules();
      }, []);

      if (loading) {
        return <div>Loading...</div>;
      }

      if (error) {
        return <div>Error loading modules: {error.message}</div>;
      }

      return <WrappedComponent {...props} imports={modules} />;
    };
  };
