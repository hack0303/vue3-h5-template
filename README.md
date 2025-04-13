[![RealWorld Frontend](https://img.shields.io/badge/realworld-frontend-%23783578.svg)](http://realworld.io)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

----
##New Maintainers wanted##
Anyone up for the challenge of maintaining this repo?
Reach out on twitter @vilsbole
----



# ![RealWorld Example App](./static/rwv-logo.png)

> Vue.js codebase containing real world examples (CRUD, auth, advanced patterns, etc) that adheres to the [RealWorld](https://github.com/gothinkster/realworld) spec and API.

Project demo is available at https://vue-vuex-realworld.netlify.app/

This codebase was created to demonstrate a fully fledged fullstack application built with **Vue.js** including CRUD operations, authentication, routing, pagination, and more.

We've gone to great lengths to adhere to the **Vue.js** community styleguides & best practices.

For more information on how to this works with other frontends/backends, head over to the [RealWorld](https://github.com/gothinkster/realworld) repo.

## Getting started

Before contributing please read the following:

1. [RealWorld guidelines](https://github.com/gothinkster/realworld/tree/master/spec) for implementing a new framework,
2. [RealWorld frontend instructions](https://github.com/gothinkster/realworld-starter-kit/blob/master/FRONTEND_INSTRUCTIONS.md)
3. [Realworld API endpoints](https://github.com/gothinkster/realworld/tree/master/api)
4. [Vue.js styleguide](https://vuejs.org/v2/style-guide/index.html). Priority A and B categories must be respected.
5. [Editorconfig setup](https://editorconfig.org/#download). Most of the common editors support editorconfig by default (check the editorconfig download link for your ide), but editorconfig npm package have to installed globally for it to work,

```bash
# install editorconfig globally
> npm install -g editorconfig
```

The stack is built using [vue-cli webpack](https://github.com/vuejs-templates/webpack) so to get started all you have to do is:

``` bash
# install dependencies
> yarn install
# serve with hot reload at localhost:8080
> yarn serve
```

Other commands available are:

``` bash
# build for production with minification
yarn run build

# run unit tests
yarn test
```

## To know

Current arbitrary choices are:

- Vuex modules for store
- Vue-axios for ajax requests
- 'rwv' as prefix for components

These can be changed when the contributors reach a consensus.

## FAQ

<p><details>
  <summary><b>Where can I find the service worker file?</b></summary>

  The service worker file is generated automatically. The implementation can be found under [`src/registerServiceWorker.js`](https://github.com/gothinkster/vue-realworld-example-app/blob/eeaeb34fa440d00cd400545301ea203bd2a59284/src/registerServiceWorker.js). You can find the dependencies implementation in this repo: [yyx990803/register-service-worker](https://github.com/yyx990803/register-service-worker#readme).

  Also, Google provided a good documentation on how to register a service worker: https://developers.google.com/web/fundamentals/primers/service-workers/registration
</details></p>

<p><details>
  <summary><b>Vue.js Function API / Migration to Vue.js 3</b></summary>

  Related resources:

  - [Vue.js Function API RFC](https://github.com/vuejs/rfcs/blob/function-apis/active-rfcs/0000-function-api.md)
  - [`vue-function-api` plugin](https://github.com/vuejs/vue-function-api)

  Vue.js 3 will likely introduce breaking changes on how Vue.js applications will look like. For example, the Vue.js Function API might be introduced. This would cause a lot of our components to change in the overall structure. The changes would be minimal though. With the `vue-function-api` plugin, these changes could be applied already. The problem is that multiple integrations are not working with the plugin. There are intentions to make this work, but for the time being, we should rather focus on different areas. If you still want to be experimental with it, we are happy to get a Pull Request with some experimental feature implementations.
</details></p>

## Connect

Join us on [Discord](https://discord.gg/NE2jNmg)

# Vue 3 H5 Template

A modern Vue 3 + Vite template project.

## Project Structure

```tree
vue3-h5-template/
├── public/                 # Static assets that will be served directly
│   └── vite.svg           # Favicon
├── src/                   # Source code
│   ├── api/              # API requests and services
│   │   └── index.js      # API endpoints and axios instance
│   ├── assets/           # Project assets (images, fonts, etc.)
│   │   ├── images/       # Image files
│   │   ├── fonts/        # Font files
│   │   └── styles/       # Global styles
│   │       ├── main.scss # Main stylesheet
│   │       └── variables.scss # SCSS variables and mixins
│   ├── components/       # Reusable Vue components
│   │   ├── common/      # Common components (buttons, inputs, etc.)
│   │   └── layout/      # Layout components (header, footer, etc.)
│   ├── composables/     # Vue 3 composables (reusable logic)
│   │   └── useHttp.js   # HTTP request composable example
│   ├── config/          # App configuration files
│   │   └── constants.js # Constants and environment variables
│   ├── directives/      # Vue custom directives
│   │   └── index.js     # Directives registration
│   ├── hooks/           # Custom Vue hooks
│   │   └── index.js     # Hooks registration
│   ├── layouts/         # Page layout components
│   │   └── default.vue  # Default page layout
│   ├── router/          # Vue Router configuration
│   │   ├── index.js     # Router setup and configuration
│   │   └── routes/      # Route modules
│   ├── store/           # Vuex/Pinia store (state management)
│   │   ├── index.js     # Store setup
│   │   └── modules/     # Store modules
│   ├── utils/           # Utility functions
│   │   ├── request.js   # Axios configuration
│   │   └── validate.js  # Validation helpers
│   ├── views/           # Page components
│   │   └── home/        # Home page and related components
│   ├── App.vue          # Root component
│   └── main.js          # Application entry point
├── tests/               # Test files
│   ├── unit/           # Unit tests
│   └── e2e/            # End-to-end tests
├── types/              # TypeScript type definitions
│   └── index.d.ts      # Global type definitions
├── .env               # Environment variables
├── .env.development   # Development environment variables
├── .env.production    # Production environment variables
├── .eslintrc.js      # ESLint configuration
├── .prettierrc       # Prettier configuration
├── .gitignore        # Git ignore rules
├── index.html        # HTML entry point
├── package.json      # Project dependencies and scripts
├── vite.config.js    # Vite configuration
├── postcss.config.js # PostCSS configuration
├── tsconfig.json     # TypeScript configuration (if using TS)
└── README.md         # Project documentation
```

## Directory Structure Details

### `/src/api`
- API integration layer
- Axios instances and interceptors
- API endpoints organization

### `/src/assets`
- Static assets (images, fonts, icons)
- Global styles and themes
- SCSS/LESS variables and mixins

### `/src/components`
- Reusable UI components
- Common components (buttons, forms, etc.)
- Layout components (header, footer, etc.)

### `/src/composables`
- Vue 3 composition API utilities
- Reusable logic across components
- Custom hooks and composables

### `/src/config`
- Application configuration
- Environment variables
- Constants and settings

### `/src/directives`
- Custom Vue directives
- Directive registration and configuration

### `/src/hooks`
- Custom Vue hooks
- Shared component logic

### `/src/layouts`
- Page layouts and templates
- Layout components and wrappers

### `/src/router`
- Vue Router configuration
- Route guards and middleware
- Route modules and organization

### `/src/store`
- State management (Vuex/Pinia)
- Store modules and actions
- State persistence

### `/src/utils`
- Helper functions and utilities
- Common functions and tools
- HTTP request helpers

### `/src/views`
- Page components
- Route-level components
- Feature-specific components

### `/tests`
- Unit tests (Jest/Vitest)
- E2E tests (Cypress/Playwright)
- Test utilities and mocks

### `/types`
- TypeScript type definitions
- Global type declarations
- Module type augmentations

## Configuration Files

- `.env.*` - Environment-specific variables
- `.eslintrc.js` - ESLint rules and plugins
- `.prettierrc` - Code formatting rules
- `vite.config.js` - Build and dev server settings
- `postcss.config.js` - CSS processing configuration
- `tsconfig.json` - TypeScript compiler options

## Tech Stack

- Vue 3.4
- Vite 5.4
- Vue Router 4.2
- ESLint + Prettier
- SASS/LESS support

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- Yarn (>= 1.22.x)

### Installation

```bash
# Install dependencies
yarn install
```

### Development

```bash
# Start development server
yarn serve
```

The application will be available at `http://localhost:5173`

### Build

```bash
# Build for production
yarn build

# Preview production build
yarn preview
```

## Available Scripts

- `yarn serve` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build

## Dependencies

### Core
- vue: ^3.4.0
- vue-router: ^4.2.0

### Development Tools
- @vitejs/plugin-vue: ^5.0.0
- vite: ^5.4.0
- eslint: ^8.57.0
- prettier: ^3.3.3
- sass: ^1.77.0
- less: ^4.1.2

## Git Hooks

The project uses `lint-staged` for pre-commit hooks:
- ESLint check and auto-fix
- Prettier formatting
- Automatic git add for fixed files

## Browser Support

The project is configured to support modern browsers through browserslist configuration.

## License

[MIT License](LICENSE)
