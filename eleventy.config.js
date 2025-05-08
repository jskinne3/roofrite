module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("assets/img/*.png");
  eleventyConfig.addPassthroughCopy("assets/css/*.css");

  return {};
};
