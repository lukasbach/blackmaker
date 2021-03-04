import { ThemeContext } from './ThemeContext';
import * as React from 'react';
import cxs from 'cxs';
import { ThemeDefinition } from './ThemeDefinition';
import { useEffect, useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { darken } from '../common';

export const ThemeProvider: React.FC<{
  themeDefinition: ThemeDefinition;
  noRoot?: boolean;
}> = props => {
  const [theme, setTheme] = useState(props.themeDefinition);
  useEffect(() => {
    setTheme(props.themeDefinition);
  }, [props.themeDefinition]);

  if (!theme) {
    return null;
  }

  return (
    <>
      <Helmet>
        <style>{`
          @import "https://fonts.googleapis.com/icon?family=Material+Icons";
          @import "https://fonts.googleapis.com/icon?family=Material+Icons+Outlined";
          @import 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';
          @import "https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap";
          @import "https://fonts.googleapis.com/css?family=Manrope:300,400,500,600,700,800&display=swap";
          
          ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
          }
          ::-webkit-scrollbar-track {
            background: transparent;
          }
          ::-webkit-scrollbar-thumb {
            border-radius: 999px;
            background: ${darken(theme.primaryBackgroundColor, theme.isDark ? -0.2 : 0.2)};
          }
          ::-webkit-scrollbar-thumb:hover {
            background: ${darken(theme.primaryBackgroundColor, theme.isDark ? -0.3 : 0.3)};
          }
        `}</style>
      </Helmet>
      <div
        className={cxs({
          backgroundColor: !props.noRoot ? theme.primaryBackgroundColor : undefined,
          width: !props.noRoot ? '100%' : undefined,
          height: !props.noRoot ? '100%' : undefined,
          overflow: !props.noRoot ? 'auto' : undefined,
          color: theme.textColor,
          fontFamily: "'Manrope', sans-serif",
          position: 'relative',
        })}
      >
        <ThemeContext.Provider value={theme}>{props.children}</ThemeContext.Provider>
      </div>
    </>
  );
};
