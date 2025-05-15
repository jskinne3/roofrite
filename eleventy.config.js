module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("assets/img/*.png");
  eleventyConfig.addPassthroughCopy("assets/css/*.css");
  eleventyConfig.addPassthroughCopy("assets/vid/*.webm")

  return {};
};
