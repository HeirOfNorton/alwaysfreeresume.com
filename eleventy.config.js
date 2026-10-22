/** @type {import('@11ty/eleventy').UserConfig} */

import YAML from "yaml";

export const config = {
    //static config
    htmlTemplateEngine: "njk",
    //templateFormats: ["html","njk","js","scss"],
}

export default async function(eleventyConfig) {
    //config
    eleventyConfig.addDataExtension("yaml", (contents) => YAML.parse(contents));
};
