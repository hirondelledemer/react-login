# React Login Page example

<br>

## Demo

A live demo is available [here](https://react-login-seven-virid.vercel.app/).

Example screens:

![Login Page](assets/images/login-page.png 'Login Page')

![Servers Page](assets/images/servers-page.png 'Servers Page')

## Stack

- React
- TypeScript
- ESLint
- Webpack
- React Fast Refresh + Webpack HMR
- Tailwind CSS
- Jest
- Playwright
- React Router Dom
- React Query

<br />

## Installation

Clone the repository:

```
git clone git@github.com:hirondelledemer/react-login.git
```

Install dependencies:

```
yarn install
```

<br />

## Development

To start development:

```
yarn start
```

To lint:

```
yarn lint
```

To run tests:

```
yarn test         // unit tests
yarn test:watch   // unit tests in watch mode
yarn test:e2e     // e2e tests
```

<br />

## Production

To build production-ready files:

```
yarn build
```

To serve production files:

```
yarn serve
```

<br />

## TODOs

### Product Improvements

- Unify heading styles.
- Introduce dark mode.
- Improve suggestion tooltip. For demo purposes, there is only one user; consider adding a "Fill User Data" button to fill the login form.
- Implement table search. Add an additional field above the table where users can search servers by name.
- Create a more exciting home page.
- Use a translation manager to make the app bilingual.
- Improve accessibility tests. Currently, there is one test covering basic violations on the Login page. Extend it to other pages.

### Code Improvements

- Create a generic button that allows the creation of custom buttons (e.g., currently needed in the table component, but more might be needed in the future).
- Add Storybook for generic components to provide nicer previews and testing for components such as buttons, links, tables, etc.

### Dev Experience Improvements

- Upload `playwright-report` folder with Azure Pipelines to allow clearer visibility of failing tests.
- Show deployment link on PRs.
