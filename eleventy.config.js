import path from "node:path"
import crypto from 'node:crypto'
import YAML from "yaml"
import * as esbuild from "esbuild"
import * as sass from "sass"
import { RenderPlugin } from "@11ty/eleventy"

export const config = {
    //static config
    dir: {
        input: "src",
    },
    htmlTemplateEngine: "njk",
    templateFormats: ["html","njk","js","scss"],
}

/* for hashing
const hashFormats = ['js', 'scss']
*/

/** @param {import('@11ty/eleventy/UserConfig').default} eleventyConfig */
export default async function(eleventyConfig) {
    //config
    eleventyConfig.addPlugin(RenderPlugin)
    eleventyConfig.addDataExtension("yaml", (contents) => YAML.parse(contents))
    eleventyConfig.addTemplateFormats('js')
    eleventyConfig.addTemplateFormats('scss')

/* for hashing, later
    eleventyConfig.addGlobalData("eleventyComputed.page.hash", () => {
        return (data) => {
            if (hashFormats.includes(data.page.templateSyntax)) {
                const hasher = crypto.createHash("sha1")
                hasher.update(data.page.rawInput)
                return hasher.digest("hex")
            }
        }
    })
*/

    eleventyConfig.addGlobalData("eleventyComputed.page.lang", () => {
        return (data) => {
            return data.lang
        }
    })
    eleventyConfig.addFilter("langlink", function(link, overrideLang) {
        const prefix = "/pages/"
        const lang = overrideLang || this.page.lang || "en"
        const midfix = "/"
        const postfix = ".njk"

        return prefix + lang + midfix + link + postfix
    })

    eleventyConfig.addExtension('js', {
        outputFileExtension: 'js',
        compile: async (inputContent, inputPath) => {
            let parsed = path.parse(inputPath)

            if(parsed.name.startsWith("_")) {
                return;
            }
            
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
