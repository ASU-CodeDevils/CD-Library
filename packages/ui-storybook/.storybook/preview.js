export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "light",
    values: [
        {
        name: "light",
        value: "#f5f5f5",
        },
        {
        name: "inverted",
        value: "#8c1d40",
        },
    ]
    }
};
