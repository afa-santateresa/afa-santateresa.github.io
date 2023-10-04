// docs: https://www.11ty.io/docs/config/
const markdownIt = require("markdown-it")
const markdownItAnchor = require("markdown-it-anchor")
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");


module.exports = function(eleventyConfig) {
  // Options for the `markdown-it` library
  const markdownItOptions = { html: false, }

  // Options for the `markdown-it-anchor` library
  const markdownItAnchorOptions = { permalink: false, }

  const markdownLib = markdownIt(markdownItOptions).use(
    markdownItAnchor,
    markdownItAnchorOptions
  )

  eleventyConfig.setLibrary("md", markdownLib)

  // eleventyConfig.addFilter( "myFilter", function() {});
  
  eleventyConfig.setBrowserSyncConfig({
    // https://www.browsersync.io/docs/options/#option-ghostMode
    ghostMode: false
  });


	eleventyConfig.addPassthroughCopy({
    "static/*": "assets/",
    "static/css/*": "assets/css/"
  });

  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  };
};