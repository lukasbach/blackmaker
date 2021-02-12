import { ThemeContext } from './ThemeContext';
import * as React from 'react';
import cxs from 'cxs';
import { ThemeDefinition } from './ThemeDefinition';
import { useEffect, useState } from 'react';

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

  console.log(theme.isDark);

  return (
    <>
      <style>
        {`@import 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';
        @import "https://fonts.googleapis.com/icon?family=Material+Icons+Outlined";
        @import "https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap";
        @import "https://fonts.googleapis.com/css?family=Manrope:300,400,500,600,700,800&display=swap";
        @import '~tippy.js/dist/svg-arrow.css';`}
      </style>
      <div
        className={cxs({
          backgroundColor: !props.noRoot && theme.primaryBackgroundColor,
          width: !props.noRoot && '100%',
          height: !props.noRoot && '100%',
          overflow: !props.noRoot && 'auto',
          color: theme.textColor,
          fontFamily: "'Manrope', sans-serif",
        })}
      >
        <ThemeContext.Provider value={theme}>{props.children}</ThemeContext.Provider>
      </div>
    </>
  );
};
