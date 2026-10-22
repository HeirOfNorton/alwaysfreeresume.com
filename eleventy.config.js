/** @type {import('@11ty/eleventy').UserConfig} */

import path from "node:path"
import YAML from "yaml"
import * as esbuild from "esbuild"
import * as sass from "sass"

export const config = {
    //static config
    htmlTemplateEngine: "njk",
    //templateFormats: ["html","njk","js","scss"],
}

export default async function(eleventyConfig) {
    //config
    eleventyConfig.addDataExtension("yaml", (contents) => YAML.parse(contents))
    eleventyConfig.addTemplateFormats('js')
    eleventyConfig.addTemplateFormats('scss')

    eleventyConfig.addExtension('js', {
        outputFileExtension: 'js',
        compile: async (inputContent, inputPath) => {
            
            return async () => {
                let output = await esbuild.build({
                    target: 'es2020',
                    entryPoints: [inputPath],
                    minify: true,
                    bundle: true,
                    write: false,
                })

                return output.outputFiles[0].text
            }
        }
    })
    eleventyConfig.addExtension('scss', {
        outputFileExtension: 'css',
        compile: async function (inputContent, inputPath) {
            let parsed = path.parse(inputPath)

            if(parsed.name.startsWith("_")) {
                return;
            }

            let result = sass.compileString(inputContent, {
                loadPaths: [
                    parsed.dir || ".",
                    this.config.dir.includes,
                    this.config.dir.input + "/node_modules"
                ]
            })
            this.addDependencies(inputPath, result.loadedUrls)

            return async (data) => {
                return result.css
            }
        }
    })

}
