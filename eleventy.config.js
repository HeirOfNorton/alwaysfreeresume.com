
import YAML from "yaml";

export const config = {
    //static config
    htmlTemplateEngine: "njk",
    //templateFormats: ["html","njk","js","sass"],
}

export default async function(eleventyConfig) {
    //config
    eleventyConfig.addDataExtension("yaml", (contents) => YAML.parse(content));
};
