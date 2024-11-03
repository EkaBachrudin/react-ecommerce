module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended', // TypeScript rules
    'plugin:tailwindcss/recommended', // Tailwind CSS rules
  ],
  parser: '@typescript-eslint/parser', // Use TypeScript parser
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y',
    '@typescript-eslint',
    'tailwindcss',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off', // React 17 and later don't need React in scope
    'tailwindcss/no-custom-classname': 'off', // Turn off if you use custom Tailwind classes
    // Add other rules as needed
    'react/prop-types': 'off'
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
