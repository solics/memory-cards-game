import React from 'react';

function createContext<T>(initialValue?: T) {
  const context = React.createContext<T | undefined>(initialValue || undefined);
  const useCtx = () => {
    const c = React.useContext(context);
    if (!c) {
      throw new Error('useCtx must be inside a Provider with a value');
    }
    return c;
  };
  return [useCtx, context.Provider] as const;
}

export default createContext;
