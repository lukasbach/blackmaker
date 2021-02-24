import { useDarkMode } from 'storybook-dark-mode';
import { brightTheme, darkTheme, lighten, ThemeProvider } from '@blackmaker/core/src';
import * as React from 'react';
import cxs from 'cxs';
import { sortStories } from './utils/story-helpers';
import { storyOrder } from './utils/storyOrder';
import { BlackmakerProvider } from '../packages/core/src/globalProvider/BlackmakerProvider';
import { Helmet } from 'react-helmet';
import { BackgroundColor } from '@blackmaker/core/out/theming/BackgroundColor';
import { Theme } from '@blackmaker/core';

function ThemeWrapper(Story, context) {
  const isDark = useDarkMode();
  const themeColor = context.globals.themeColor;
  const backgroundColor = context.globals.backgroundColor;
  let theme = isDark ? darkTheme : brightTheme;

  if (themeColor !== 'default' || !themeColor) {
    theme = {
      ...theme,
      brandColors: {
        ...theme.brandColors,
        primary: themeColor,
      },
      brandTextColors: {
        ...theme.brandTextColors,
        primary: lighten(themeColor, isDark ? 0.2 : -0.2),
      },
      minimalBrandBaseColors: {
        ...theme.minimalBrandBaseColors,
        primary: themeColor,
      },
    };
  }

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
            backgroundColor: new Theme(theme).getBackgroundColor(backgroundColor),
            color: theme.textColor,
            width: '100%',
            height: '100%',
            overflow: 'auto',
            fontFamily: "'Manrope', sans-serif",
            position: 'relative',
          })}
        >
          <div className="story-inner">
            <Story />
          </div>
        </div>
      </BlackmakerProvider>
    </>
  );
}

export const globalTypes = {
  themeColor: {
    name: 'Theme Colors',
    defaultValue: 'default',
    toolbar: {
      icon: 'circlehollow',
      title: 'Theme Colors',
      items: [
        { title: 'Default', value: 'default' },
        { title: 'Blue (#6C5FC7)', value: '#6C5FC7' },
        { title: 'Red (#d4335e)', value: '#d4335e' },
        { title: 'Lime (#87d132)', value: '#87d132' },
        { title: 'Orange (#db8137)', value: '#db8137' },
      ],
    },
  },
  backgroundColor: {
    name: 'Background Color',
    defaultValue: BackgroundColor.Primary,
    toolbar: {
      icon: 'circle',
      title: 'Background Color',
      items: [
        { title: 'Primary Background (default)', value: BackgroundColor.Primary },
        { title: 'Secondary Background (default)', value: BackgroundColor.Secondary },
        { title: 'Tertiary Background (default)', value: BackgroundColor.Tertiary },
        { title: 'Menu Background (default)', value: BackgroundColor.Menu },
      ],
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

export const decorators = [ThemeWrapper];
