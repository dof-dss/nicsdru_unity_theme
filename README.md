# NICS Unity theme

This repository contains code for a Drupal 8 theme from which NICS sites could be sub-themed from.

## Table of contents

- [Quick start](#quick-start)
- [What's included](#whats-included)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Using the NPM scripts](#using-the-npm-scripts)
- [Sub-theming](#sub-theming)
- [Documentation](#documentation)

## Quick start

- [Download the latest release](https://github.com/dof-dss/nicsdru_unity_theme/archive/master.zip) or clone the repo: `git clone https://github.com/dof-dss/nicsdru_unity_theme.git`
- `brew install libjpeg`
- `npm install`

## What's included

The theme uses [NPM scripts](https://docs.npmjs.com/misc/scripts) and packages to create tooling to:

* write and compile scss to css
* apply appropriate prefixing for css rules
* write and uglify js
* detect features the user’s browser has to offer (via Modernizr)
* code linting
* optimise and compress images for the web

Within the download you'll find the following directories and files, logically grouping common assets, you'll see something like this:

```
nicsdru_unity_theme/
└── config/
│   ├── install/
│   ├── .sass-lint.yml
│   ├── modernizr-config.json
│   ├── postcss.config.js
└── css/
└── images/
└── js/
└── src/
│   ├── images/
│   ├── js/
│   ├── scss/
│   ├── styleguide/
└── templates/
│   ├── block/
│   ├── content/
│   ├── field/
│   ├── layout/
│   ├── misc/
│   ├── navigation/
│   ├── user/
└── .gitignore
└── composer.json
└── imagemin.js
└── nicsdru_unity_theme.breakpoints.yml
└── nicsdru_unity_theme.info.yml
└── nicsdru_unity_theme.layouts.yml
└── nicsdru_unity_theme.libraries.yml
└── nicsdru_unity_theme.theme
└── package.json
└── README.md
└── screenshot.png
```

## Using the NPM scripts

The `package.json` includes the following commands and tasks:

| Task | Description |
| --- | --- |
| `npm run build` | `npm run build` compiles files into their build directories ready for use in a production environment. **Uses [Sass](https://sass-lang.com/), [Autoprefixer][autoprefixer], [Modernizr](https://modernizr.com) and [UglifyJS](https://github.com/mishoo/UglifyJS2).** |
| `npm run watch` | Watches for changes to scss and js files & compiles them for development purposes.|
| `npm run lint`  | Will run all `.scss` and `.js` files through their respective linting tools - [eslint]() & [sass-lint](https://github.com/sasstools/sass-lint), note however that linting is also performed as part of the the build scripts. This is useful for finding issues being flagged by the linting rules. To only lint css or js files, prefix the lint command with the file type you which to scope the linting to eg `npm run css-lint` or `npm run js-lint` |

Run `npm run` to see all the npm scripts.

## Documentation

[Guidance on styling and developer helpers on how to use this theme is available here](https://dof-dss.github.io/nicsdru_unity_theme/).

[autoprefixer]: https://github.com/postcss/autoprefixer


