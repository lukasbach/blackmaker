import * as React from 'react';
import { useContext } from 'react';
import { Theme } from './Theme';
import { darkTheme } from './darkTheme';
import { ThemeDefinition } from './ThemeDefinition';

export const ThemeContext = React.createContext<ThemeDefinition>(darkTheme);
export const useTheme = () => {
  const context = useContext(ThemeContext);
  return new Theme(context);
};
