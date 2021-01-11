# Blackmaker UI

![Testing](https://github.com/lukasbach/blackmaker/workflows/Testing/badge.svg)
![Pretty](https://github.com/lukasbach/blackmaker/workflows/Pretty/badge.svg)
![Storybook Deployment](https://github.com/lukasbach/blackmaker/workflows/Storybook%20Deployment/badge.svg)

WIP React-based UI framework. Current storybook available at 
https://lukasbach.github.io/blackmaker/

## Setup

When developing locally, run in the root directory...

- `yarn` to install dependencies
- `yarn test` to run tests in all packages
- `yarn build` to build distributables and typings in `packages/{package}/out`
- `yarn storybook` to run a local storybook server
- `yarn build-storybook` to build the storybook
- [`npx lerna version`](https://github.com/lerna/lerna/tree/main/commands/version#readme) to interactively bump the
  packages versions. This automatically commits the version, tags the commit and pushes to git remote.
- [`npx lerna publish`](https://github.com/lerna/lerna/tree/main/commands/publish#readme) to publish all packages
  to NPM that have changed since the last release. This automatically bumps the versions interactively.
