# React-odyssey

React components for Odyssey design framework.

[![Build Status](https://travis-ci.org/oktadeveloper/react-odyssey.svg?branch=master)](https://travis-ci.org/oktadeveloper/react-odyssey)


## Usage

To see how components look and behave, visit https://oktadeveloper.github.io/react-odyssey/

Or clone this repository and run:
- `yarn`
- `yarn demo`

Then visit http://localhost:3000/ to see a hot-reloading demo of existing react-odyssey components. If you edit `demo/demo.tsx`, your changes will be reflected in the browser.


## Dependencies

- [yarn](https://yarnpkg.com/)


## Useful Links

- [Odyssey docs](https://design-docs.trexcloud.com/)
- [React+TypeScript Cheatsheet](https://github.com/sw-yx/react-typescript-cheatsheet)
- [How to JSX + TypeScript](https://www.typescriptlang.org/docs/handbook/jsx.html)
- [React Types](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts)

## Hacking

### Building

- yarn && yarn demo

### Odyssey Subtree

[Odyssey](https://github.com/okta/odyssey/tree/kans/asa) (formerly Nim) is embedded in this repo as a subtree for ease of carrying patches.
Changes are marked in the code with a comment `// ASA: ` indicating what has changed and why.

`git remote add odyssey git@github.com:okta/odyssey.git`

To pull in changes:
`git subtree pull --prefix odyssey git@github.com:okta/odyssey kans/asa --squash`

To push changes to the fork:
`git subtree push --prefix odyssey git@github.com:okta/odyssey kans/asa --squash`

