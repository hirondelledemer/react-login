export const todos = [
  {
    sectionId: 'product',
    sectionName: 'Product Improvements',
    items: [
      'Unify heading styles.',
      'Introduce dark mode.',
      'Improve suggestion tooltip. For demo purposes, there is only one user; consider adding a "Fill User Data" button to fill the login form.',
      'Implement table search. Add an additional field above the table where users can search servers by name.',
      'Create a more exciting home page.',
      'Use a translation manager to make the app bilingual.',
      'Improve accessibility tests. Currently, there is one test covering basic violations on the Login page. Extend it to other pages.',
    ],
  },
  {
    sectionId: 'code',
    sectionName: 'Code Improvements',
    items: [
      'Create a generic button that allows the creation of custom buttons (e.g., currently needed in the table component, but more might be needed in the future).',
      'Add Storybook for generic components to provide nicer previews and testing for components such as buttons, links, tables, etc.',
    ],
  },
  {
    sectionId: 'dev',
    sectionName: 'Dev Experience Improvements',
    items: [
      'Upload `playwright-report` folder with Azure Pipelines to allow clearer visibility of failing tests.',
      'Show deployment link on PRs.',
    ],
  },
];
