// docs: https://www.11ty.io/docs/config/
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const pluginTOC = require('eleventy-plugin-toc');

const { DateTime } = require("luxon");
const yaml = require("js-yaml");

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
    "static/css/*": "assets/css/",
    "static/imgs/*": "assets/imgs/",
    "static/admin/*": "admin/"
  });

  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(pluginTOC);

  eleventyConfig.addFilter("comAData", (dateObj) => {
    return DateTime
      .fromJSDate(dateObj)
      .setLocale('ca')
      .toLocaleString(DateTime.DATE_MED);
   });


  eleventyConfig.addFilter("comAny", (dateObj) => {
    return DateTime
      .fromJSDate(dateObj)
      .toFormat('yyyy')
   });


  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  };
};