/*
	Christian Weersink
	September 2024
	11ty config
*/

import ejsPlugin from "@11ty/eleventy-plugin-ejs";
//const ejsPlugin = require("@11ty/eleventy-plugin-ejs");

import fs from "node:fs";

export default function (eleventyConfig) {
  // Add css and image folders to dist when build happens
  eleventyConfig.addPassthroughCopy("./src/public");
  // watch css folder for changes
  eleventyConfig.addWatchTarget("./public/css");

  // Configure base url for development or production
  let env = process.env.ELEVENTY_ENV || "development";
  let baseUrl = env === "development" ? "" : "/dist";
  // base url will be placed before each url so links work in both dev and production
  eleventyConfig.addGlobalData("baseUrl", baseUrl);
  eleventyConfig.addPlugin(ejsPlugin);

  if (process.env.NODE_ENV !== "production") {
    import("dotenv/config");
  }

  // Delete dist directory before build
  eleventyConfig.on("eleventy.before", async ({ dir }) => {
    console.log("Deleting dist");
    fs.rmSync(dir.output, { recursive: true, force: true });
  });

  
  // COLLECTIONS:

  // Blogs Collection
  eleventyConfig.addCollection("blog", (collectionApi) => {
    const cmsData = collectionApi.getAll()[0].data.datoPosts;
  return cmsData.filter(item => item.tags === "blog");
  });

  // Lab Collection
  eleventyConfig.addCollection("lab", (collectionApi) => {
    const cmsData = collectionApi.getAll()[0].data.datoPosts;
  return cmsData.filter(item => item.tags === "lab");
  });

  // Instructions Collection
  eleventyConfig.addCollection("instructions", (collectionApi) => {
    const cmsData = collectionApi.getAll()[0].data.datoPosts;
  return cmsData.filter(item => item.tags === "instructions");
  });
  
  // All posts collection
  eleventyConfig.addCollection("posts", (collectionApi) => {
    const cmsData = collectionApi.getAll()[0].data.datoPosts;
  return cmsData.filter(item => item);
  });
  // End collections
  
  return {
    dir: {
      input: "src",
      output: "dist", // stands for distributable replaces _site folder
    },
  };
}
