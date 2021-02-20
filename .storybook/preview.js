import { useDarkMode } from 'storybook-dark-mode';
import { brightTheme, darkTheme, ThemeProvider } from '@blackmaker/core/src';
import * as React from 'react';
import cxs from 'cxs';
import { sortStories } from './utils/story-helpers';
import { storyOrder } from './utils/storyOrder';
import { BlackmakerProvider } from '../packages/core/src/globalProvider/BlackmakerProvider';
import { Helmet } from 'react-helmet';

function ThemeWrapper(props) {
  const theme = useDarkMode() ? darkTheme : brightTheme;
  return (
    <>
      <BlackmakerProvider theme={theme}>
        <Helmet>
          <style>{`
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
          `}</style>
        </Helmet>
        <div
          className={cxs({
            backgroundColor: theme.primaryBackgroundColor,
            color: theme.textColor,
            width: '100%',
            height: '100%',
            overflow: 'auto',
            fontFamily: "'Manrope', sans-serif",
            position: 'relative',
          })}
        >
          <div className="story-inner">{props.children}</div>
        </div>
      </BlackmakerProvider>
    </>
  );
}

// addParameters({
// viewMode: 'docs', // Remove if default view should be canvas mode
// viewMode: 'canvas',
// darkMode: {
//   current: 'dark',
// },
// });

export const globalTypes = {
  theme: {
    toolbar: {
      icon: 'circlehollow',
      // array of plain string values or MenuItem shape (see below)
      items: ['light', 'dark'],
    },
  },
};

export const parameters = {
  options: {
    storySort: sortStories(storyOrder),
  },
  //   backgrounds: {
  //     values: [
  //       { name: "Dark Primary", value: darkTheme.primaryBackgroundColor },
  //       { name: "Dark Secondary", value: darkTheme.secondaryBackgroundColor },
  //       { name: "Dark Tertiary", value: darkTheme.tertiaryBackgroundColor },
  //       { name: "Dark Menu", value: darkTheme.menuBackgroundColor },
  //       { name: "Bright Primary", value: brightTheme.primaryBackgroundColor },
  //       { name: "Bright Secondary", value: brightTheme.secondaryBackgroundColor },
  //       { name: "Bright Tertiary", value: brightTheme.tertiaryBackgroundColor },
  //       { name: "Bright Menu", value: brightTheme.menuBackgroundColor },
  //     ]
  //   }
};

export const decorators = [
  Story => (
    <ThemeWrapper>
      <Story />
    </ThemeWrapper>
  ),
];
