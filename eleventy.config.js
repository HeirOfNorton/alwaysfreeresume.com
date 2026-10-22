/** @type {import('@11ty/eleventy').UserConfig} */

import YAML from "yaml"
import * as esbuild from "esbuild"

export const config = {
    //static config
    htmlTemplateEngine: "njk",
    //templateFormats: ["html","njk","js","scss"],
}

export default async function(eleventyConfig) {
    //config
    eleventyConfig.addDataExtension("yaml", (contents) => YAML.parse(contents))
    eleventyConfig.addTemplateFormats('js')
    eleventyConfig.addExtension('js', {
        outputFileExtension: 'js',
        compile: async (content, path) => {
            
            return async () => {
                let output = await esbuild.build({
                    target: 'es2020',
                    entryPoints: [path],
                    minify: true,
                    bundle: true,
                    write: false,
                })

                return output.outputFiles[0].text
            }
        }
    })

}
