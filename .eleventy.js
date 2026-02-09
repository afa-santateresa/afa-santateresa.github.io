// docs: https://www.11ty.io/docs/config/
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import metagen from "eleventy-plugin-metagen"


import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import pluginTOC from "eleventy-plugin-toc";
import pluginRss from "@11ty/eleventy-plugin-rss";

import { DateTime } from "luxon";
import yaml from "js-yaml";

export default async function (eleventyConfig) {
  // Options for the `markdown-it` library
  const markdownItOptions = { html: true };

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
    "static/root": "/",
    "static/css": "assets/css",
    "static/imgs": "assets/imgs",
    "static/favicon": "assets/favicon",
    "static/docs": "assets/docs",
    "static/admin": "admin",
  });

  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(pluginTOC);
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addPlugin(metagen);

  eleventyConfig.addFilter("comAData", (dateObj) => {
    return DateTime.fromJSDate(dateObj)
      .setLocale("ca")
      .toLocaleString(DateTime.DATE_MED);
  });

  eleventyConfig.addFilter("comADataCurta", (dateObj) => {
    return DateTime.fromJSDate(dateObj)
      .setLocale("ca")
      .toLocaleString(DateTime.DATE_MED); //.toFormat("yyyy-MM-dd")
  });

  eleventyConfig.addFilter("comADataISO", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toISODate();
  });

  eleventyConfig.addFilter("comAny", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat("yyyy");
  });

  eleventyConfig.addFilter("comAMesIDia", (dateObj) => {
    return DateTime.fromJSDate(dateObj)
      .setLocale("ca")
      .toFormat("DDD")
      .replace(` del ${dateObj.getFullYear()}`, "");
  });

  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));

  eleventyConfig.addCollection("postsByYear", (collection) => {
    const posts = collection.getFilteredByTag("post").reverse();
    const years = posts.map((post) => post.date.getFullYear());
    const uniqueYears = [...new Set(years)];

    const postsByYear = uniqueYears.reduce((prev, year) => {
      const filteredPosts = posts.filter(
        (post) => post.date.getFullYear() === year
      );

      return [...prev, [year, filteredPosts]];
    }, []);

    return postsByYear;
  });

  eleventyConfig.addCollection("postsPerCurs", (collection) => {
    const posts = collection.getFilteredByTag("post").reverse();
    const cursos = posts.map((post) => post.data.curs);
    const uniqueCursos = [...new Set(cursos)];

    const postsPerCurs = uniqueCursos.reduce((prev, curs) => {
      const filteredPosts = posts.filter((post) => post.data.curs === curs);

      return [...prev, [curs, filteredPosts]];
    }, []);

    return postsPerCurs;
  });

  eleventyConfig.addShortcode("youtube", (videoURL, title) => {
    const url = new URL(videoURL);
    const id = url.searchParams.get("v");
    return `
    <iframe class="youtube-video" src="https://www.youtube.com/embed/${id}" title="${title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
  });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
}
