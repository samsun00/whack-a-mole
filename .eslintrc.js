module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: "eslint:recommended",
  overrides: [
    {
      files: ["src/**/*.test.js", "src/**/__tests__/**/*.js"],
      plugins: ["jest"],
      extends: ["plugin:jest/recommended"],
      rules: {
        "jest/prefer-expect-assertions": "off",
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/valid-expect": "error",
      },
      env: {
        jest: true,
      },
    },
    {
      files: ["src/**/*.js", "!src/**/*.test.js", "!src/**/__tests__/**/*.js"],
      rules: {
        "no-console": "warn",
        "no-unused-vars": [
          "warn",
          {
            argsIgnorePattern: "^_",
            varsIgnorePattern: "^_",
          },
        ],
        "no-var": "error",
        "prefer-const": "warn",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    indent: [
      "error",
      4,
      {
        SwitchCase: 1,
        flatTernaryExpressions: true,
      },
    ],
    "linebreak-style": ["error", "unix"],
    quotes: [
      "error",
      "single",
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    semi: ["error", "always"],
    "comma-dangle": ["error", "always-multiline"],
    "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 1 }],
    "eol-last": ["error", "always"],
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],
  },
  ignorePatterns: [
    "dist/",
    "build/",
    "node_modules/",
    "coverage/",
    "*.config.js",
    "*.config.json",
    "*.html",
    "*.css",
    "*.png",
    "*.jpg",
    "*.jpeg",
    "*.gif",
    "*.svg",
    "*.md",
    "*.json",
    "*.lock",
    "*.txt",
    "src/img/",
    "src/**/*.html",
    "src/**/*.css",
    "src/**/*.png",
    "src/**/*.jpg",
  ],
};
