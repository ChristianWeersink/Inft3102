/*
	Christian Weersink
	September 2024
	11ty config
*/

//import ejsPlugin from "@11ty/eleventy-plugin-ejs";
const ejsPlugin = require("@11ty/eleventy-plugin-ejs");


const fs = require('node:fs');

module.exports = function (eleventyConfig) {
	// Add css and image folders to dist when build happens
	eleventyConfig.addPassthroughCopy("./src/public");
	// watch css folder for changes
	eleventyConfig.addWatchTarget("./public/css");

	// Configure base url for development or production
	let env = process.env.ELEVENTY_ENV || 'development';
	let baseUrl = env === 'development' ? "" : "/dist";
	// base url will be placed before each url so links work in both dev and production
	eleventyConfig.addGlobalData("baseUrl", baseUrl);
	eleventyConfig.addPlugin(ejsPlugin);

	// Delete dist directory before build
	eleventyConfig.on("eleventy.before", async ({ dir }) => {
		console.log("Deleting dist");
		fs.rmSync(dir.output, { recursive: true, force: true });
	});

	
	// eleventyConfig.addPassthroughCopy({"./node_modules/bootstrap/dist/css/bootstrap.mins.css": "/css/bootstreap.min.css",
	// "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js": "/js/bootstreap.bundle.min.js"
	// });

	return {
		dir: {
			input: "src",
			output: "dist" // stands for distributable replaces _site folder
		}
	}
};

