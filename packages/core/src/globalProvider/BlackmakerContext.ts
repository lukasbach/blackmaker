import React, { useContext } from 'react';

export interface BlackmakerContextValue {
  keyboardMode: boolean;
}

export const BlackmakerContext = React.createContext<BlackmakerContextValue>({ keyboardMode: false });
export const useBlackmakerContext = () => useContext(BlackmakerContext);
