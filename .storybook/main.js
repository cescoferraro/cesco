const path = require('path')

module.exports = {
  stories: ['./src/**/*.stories.(tsx|mdx)'],
  addons: [
    '@storybook/addon-viewport/register',
    {
      name: '@component-controls/storybook',
      options: {
        webpack: ['instrument', 'react-docgen-typescript'],
      },
    },
  ],
}
