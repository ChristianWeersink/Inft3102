// module.exports = function (eleventyConfig) {
	
// 	eleventyConfig.addPassthroughCopy({"./public/": "/"});

// };


module.exports = function(eleventyConfig) {
	// Return your Object options:
	eleventyConfig.addPassthroughCopy("./src/public");
	eleventyConfig.addWatchTarget("./public/");

	return {
	  dir: {
		input: "src",
		output: "dist" // stands for distributable replaces _site folder
	  }
	}
  };

