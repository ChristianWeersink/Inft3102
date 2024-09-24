// module.exports = function (eleventyConfig) {
	
// 	eleventyConfig.addPassthroughCopy({"./public/": "/"});

// };


module.exports = function(eleventyConfig) {
	// Return your Object options:
	eleventyConfig.addPassthroughCopy("./src/public");
	eleventyConfig.addWatchTarget("./public/");

	// Configure base url for development or production
	let env = process.env.ELEVENTY_ENV || 'development';
  	let baseUrl = env === 'development' ? "" : "/dist";
	// base url will be placed before each url so links work in both dev and production
 	eleventyConfig.addGlobalData("baseUrl", baseUrl);

	// eleventyConfig.addPassthroughCopy({"./node_modules/bootstrap/dist/css/bootstrap.mins.css": "/css/bootstreap.min.css",
	// "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js": "/js/bootstreap.bundle.min.js"
	// });

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

