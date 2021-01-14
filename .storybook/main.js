module.exports = {
  stories: ['../packages/**/*.stories.@(js|jsx|mdx|ts|tsx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-a11y', 'storybook-dark-mode'],
  typescript: {
    check: true,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
        module: 'CommonJS',
      },
    },
  },
};
