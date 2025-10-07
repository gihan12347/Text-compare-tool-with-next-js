// configures PostCSS to use the Tailwind, autofixer etc
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;



// this is an ES Module, regardless of package.json "type" field.
// You must use ES Module syntax (import / export) inside .mjs.
// Useful for configs or packages that require pure ES module syntax.