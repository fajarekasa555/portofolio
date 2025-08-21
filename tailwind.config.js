/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addVariant, e, postcss }) {
        addVariant('firefox', ({ container, separator }) => {
            const isFirefoxRule = postcss.atRule({
                name: '-moz-document',
                params: 'url-prefix()',
            });
                isFirefoxRule.append(container.nodes);
                container.append(isFirefoxRule);
                isFirefoxRule.walkRules((rule) => {
                rule.selector = `.${e(
                    `firefox${separator}${rule.selector.slice(1)}`
                )}`;
            });
        });
    }),
  ],
};
