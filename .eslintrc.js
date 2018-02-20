module.exports = {
  extends: "airbnb",
  plugins: ['react', 'jsx-a11y', 'import'],
  rules: {
    'react/jsx-filename-extension': 0,
    // windows linebreaks when not in production environment
    'linebreak-style': ["error", (require("os").EOL === "\r\n" ? "windows" : "unix")],
    'react/prop-types': 0,
  },
  globals: {
    document: 1,
  },
  parser: 'babel-eslint',
  env: {
    browser: 1,
  },
};