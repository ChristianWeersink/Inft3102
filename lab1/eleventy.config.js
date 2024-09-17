// module.exports = function (eleventyConfig) {
	
// 	eleventyConfig.addPassthroughCopy({"./public/": "/"});

// };


module.exports = function(eleventyConfig) {
	// Return your Object options:
	eleventyConfig.addPassthroughCopy("./src/public");
	eleventyConfig.addWatchTarget("./public/");
	eleventyConfig.on('beforeBuild', () => {
		console.log('Building the site...');
	  });

	return {
	  dir: {
		input: "src",
		output: "dist" // stands for distributable replaces _site folder
	  }
	}
  };

