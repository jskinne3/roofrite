module.exports = function(eleventyConfig) {

  /* image file formats */
  eleventyConfig.addPassthroughCopy("assets/img/*.png");
  eleventyConfig.addPassthroughCopy("assets/img/*.jpg");
  eleventyConfig.addPassthroughCopy("assets/img/*.jpeg");

  /* other asset types */
  eleventyConfig.addPassthroughCopy("assets/css/*.css");
  eleventyConfig.addPassthroughCopy("assets/vid/*.webm");
  return {};
};
