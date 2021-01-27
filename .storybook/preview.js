import { addParameters } from '@storybook/client-api';
import { useDarkMode } from 'storybook-dark-mode';
import { brightTheme, darkTheme, ThemeProvider } from '@blackmaker/core';
import { ThemeContext } from '@blackmaker/core/src';
import * as React from 'react';
import cxs from 'cxs';

function ThemeWrapper(props) {
  const theme = useDarkMode() ? darkTheme : brightTheme;
  return (
    <>
      <style>
        {`@import 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';
        @import "https://fonts.googleapis.com/icon?family=Material+Icons+Outlined";
        @import "https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap";
        @import "https://fonts.googleapis.com/css?family=Manrope:300,400,500,600,700,800&display=swap";
        @import '~tippy.js/dist/svg-arrow.css';`}
        {`
          html, body, #root {
            margin: 0;
            padding: 0 !important;
            height: 100%;
          }
          
          .story-inner {
            padding: 24px;
            height: 100%;
            box-sizing: border-box;
          }
        `}
      </style>
      <ThemeContext.Provider value={theme}>
        <div
          className={cxs({
            backgroundColor: theme.primaryBackgroundColor,
            color: theme.textColor,
            width: '100%',
            height: '100%',
            overflow: 'auto',
            fontFamily: "'Montserrat', sans-serif",
          })}
        >
          <div className="story-inner">{props.children}</div>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

addParameters({
  // viewMode: 'docs', // Remove if default view should be canvas mode
  // viewMode: 'canvas',
  // darkMode: {
  //   current: 'dark',
  // },
});

export const decorators = [
  Story => (
    <ThemeWrapper>
      <Story />
    </ThemeWrapper>
  ),
];
