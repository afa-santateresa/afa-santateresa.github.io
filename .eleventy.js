// docs: https://www.11ty.io/docs/config/
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";

import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import pluginTOC from "eleventy-plugin-toc";

import { DateTime } from "luxon";
import yaml from "js-yaml";


export default async function(eleventyConfig) {
  // Options for the `markdown-it` library
  const markdownItOptions = { html: false };

  // Options for the `markdown-it-anchor` library
  const markdownItAnchorOptions = { permalink: false };

  const markdownLib = markdownIt(markdownItOptions).use(
    markdownItAnchor,
    markdownItAnchorOptions
  );

  eleventyConfig.setLibrary("md", markdownLib);

  // eleventyConfig.addFilter( "myFilter", function() {});

  eleventyConfig.setBrowserSyncConfig({
    // https://www.browsersync.io/docs/options/#option-ghostMode
    ghostMode: false,
  });

  eleventyConfig.addPassthroughCopy({
    "static/root/*": "/",
    "static/css/*": "assets/css/",
    "static/imgs/*": "assets/imgs/",
    "static/favicon/*": "assets/favicon/",
    "static/docs/*": "assets/docs/",
    "static/admin/*": "admin/",
  });

  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(pluginTOC);

  eleventyConfig.addFilter("comAData", (dateObj) => {
    return DateTime.fromJSDate(dateObj)
      .setLocale("ca")
      .toLocaleString(DateTime.DATE_MED);
  });

  eleventyConfig.addFilter("comAny", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat("yyyy");
  });

  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
