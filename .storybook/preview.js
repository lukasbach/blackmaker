import { useDarkMode } from 'storybook-dark-mode';
import { BackgroundColor, brightTheme, darkTheme, lighten, Theme } from '@blackmaker/core';
import * as React from 'react';
import cxs from 'cxs';
import { sortStories } from './utils/story-helpers';
import { storyOrder } from './utils/storyOrder';
import { Helmet } from 'react-helmet';
import { BlackmakerProvider } from '@blackmaker/core';
import { BlackmakerProvider as RelativeBlackmakerProvider } from '../packages/core/src';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

function ThemeWrapper(Story, context) {
  const isDark = useDarkMode();
  const themeColor = context.globals.themeColor ?? 'default';
  const backgroundColor = context.globals.backgroundColor ?? BackgroundColor.Primary;
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
      brandButtonShadowColors: {
        ...theme.brandButtonShadowColors,
        primary: lighten(themeColor, isDark ? -0.5 : 0.2),
      },
    };
  }

  /*
   * We use two blackmaker providers, BlackmakerProvider imported from the compiled package,
   * and RelativeBlackmakerProvider from sources, because stories within the core package
   * use the theme context from the sources and stories from other packages use the context
   * from the compiled core package.
   */

  return (
    <>
      <BlackmakerProvider theme={theme}>
        <RelativeBlackmakerProvider theme={theme}>
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
        </RelativeBlackmakerProvider>
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
        { title: 'Blue (#3182EB)', value: '#3182EB' },
        { title: 'Purple (#6C5FC7)', value: '#6C5FC7' },
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
        { title: 'Secondary Background', value: BackgroundColor.Secondary },
        { title: 'Tertiary Background', value: BackgroundColor.Tertiary },
        { title: 'Menu Background', value: BackgroundColor.Menu },
      ],
    },
  },
};

export const parameters = {
  options: {
    storySort: sortStories(storyOrder),
  },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
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
