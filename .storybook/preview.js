import { addParameters } from '@storybook/client-api';
import { useDarkMode } from 'storybook-dark-mode';
import { brightTheme, darkTheme, ThemeProvider } from '@blackmaker/core';

function ThemeWrapper(props) {
  return (
    <>
      <style>
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
      <ThemeProvider themeDefinition={useDarkMode() ? darkTheme : brightTheme}>
        <div className="story-inner">
          {props.children}
        </div>
      </ThemeProvider>
    </>
  );
}

addParameters({
  // viewMode: 'docs', // Remove if default view should be canvas mode
  viewMode: 'canvas'
});

export const decorators = [
  Story => <ThemeWrapper><Story/></ThemeWrapper>
];
