export default defineAppConfig({
  ui: {
    primary: "neutral", // https://tailwindcss.com/docs/customizing-colors#color-palette-reference
    gray: "cool",
    container: {
      padding: "px-2 sm:px-6 lg:px-8",
    },
    card: {
      header: {
        padding: "px-2 py-3 sm:py-4 sm:px-6",
      },
      body: {
        padding: "px-2 py-3 sm:py-4 sm:p-6",
      },
    },
  },
});
