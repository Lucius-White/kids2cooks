export const config = {
  dir: {
    input: "src",
    includes: "_includes",
    layouts: "_layouts",
  },
};

export default function (eleventyConfig) {
  eleventyConfig.setServerOptions({
    // Default values are shown:

    // Whether the live reload snippet is used
    liveReload: true,

    // Whether DOM diffing updates are applied where possible instead of page reloads
    domDiff: true,

    // The starting port number
    // Will increment up to (configurable) 10 times if a port is already in use.
    port: 8080,

    // Additional files to watch that will trigger server updates
    // Accepts an Array of file paths or globs (passed to `chokidar.watch`).
    // Works great with a separate bundler writing files to your output folder.
    // e.g. `watch: ["_site/**/*.css"]`
    watch: [],

    // Show local network IP addresses for device testing
    showAllHosts: false,

    // Use a local key/certificate to opt-in to local HTTP/2 with https
    https: {
      // key: "./localhost.key",
      // cert: "./localhost.cert",
    },

    // Change the default file encoding for reading/serving files
    encoding: "utf-8",

    // Show the dev server version number on the command line
    showVersion: false,

    // Added in Dev Server 2.0+
    // The default file name to show when a directory is requested.
    indexFileName: "index.html",

    // Added in Dev Server 2.0+
    // An object mapping a URLPattern pathname to a callback function
    // for on-request processing (read more below).
    onRequest: {},
  });

  // Copy `src/css/` to `_site/css`
  eleventyConfig.addPassthroughCopy("src/css");

  // Keeps the same directory structure.
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addCollection("recipes", function (collectionApi) {
    return collectionApi
      .getAll()
      .filter((item) => item.inputPath.startsWith("./src/recipes/"));
  });

  eleventyConfig.addCollection("allTags", function (collectionApi) {
    const tags = collectionApi
      .getFilteredByGlob("./src/recipes/*.md")
      .flatMap((item) => item.data.tags || []); // Get all tags from recipes
    return Array.from(new Set(tags)); // Remove duplicates
  });

  eleventyConfig.addCollection("allRestrictions", function (collectionApi) {
    const restrictions = collectionApi
      .getFilteredByGlob("./src/recipes/*.md")
      .flatMap((item) => item.data.restrictions || []); // Get all tags from recipes
    return Array.from(new Set(restrictions)); // Remove duplicates
  });

  // Create a collection grouped by meal
  eleventyConfig.addCollection("recipesByMeal", function (collectionApi) {
    const recipes = collectionApi.getFilteredByGlob("./src/recipes/*.md");
    const grouped = {};
    recipes.forEach((recipe) => {
      const meal = recipe.data.meal || "all";
      if (!grouped[meal])
        grouped[meal] = { recipes: [], tags: [], restrictions: [] };
      grouped[meal].recipes.push(recipe);
      grouped[meal].tags = grouped[meal].tags.concat(recipe.data.tags || []);
      grouped[meal].restrictions = grouped[meal].restrictions.concat(
        recipe.data.restrictions || []
      );
    });
    return Object.entries(grouped).map(
      ([meal, { recipes, tags, restrictions }]) => ({
        meal,
        recipes,
        tags: Array.from(new Set(tags)),
        restrictions: Array.from(new Set(restrictions)),
      })
    );
  });
}
