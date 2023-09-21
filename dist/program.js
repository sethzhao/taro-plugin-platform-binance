"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const webpack_1 = __importDefault(require("webpack"));
const template_1 = require("./template");
const components_1 = require("./components");
const taro_weapp_components_1 = __importDefault(require("./taro-weapp-components"));
const resolve_1 = __importDefault(require("resolve"));
const path_1 = __importDefault(require("path"));
let deps = [];
class PostProcessPlugin {
    apply(compiler) {
        var _a, _b, _c;
        if ((_c = (_b = (_a = compiler === null || compiler === void 0 ? void 0 : compiler.options) === null || _a === void 0 ? void 0 : _a.optimization) === null || _b === void 0 ? void 0 : _b.minimizer) === null || _c === void 0 ? void 0 : _c.length) {
            ;
            compiler.options.optimization.minimizer[0].options.test =
                /\.(b|m)?js(\?.*)?$/i;
        }
        compiler.hooks.emit.tap('post-process-plugin', (compilation) => {
            const _fileDependencies = Array.from(compilation.fileDependencies);
            deps = _fileDependencies.filter((d) => d.includes('node_modules'));
        });
        compiler.hooks.compilation.tap('post-process-plugin', (compilation) => {
            compilation.hooks.optimizeChunks.tap('modify-script-name', (chunks) => {
                const plugins = compilation.options.plugins.filter((p) => p.constructor.name === 'TaroMiniPlugin');
                if (plugins.length) {
                    const miniPlugin = plugins[0];
                    const pageNames = [
                        ...miniPlugin.pages,
                        ...miniPlugin.components,
                    ].map((p) => p.name);
                    chunks.forEach((chunk) => {
                        if (pageNames.indexOf(chunk.name) >= 0) {
                            chunk.filenameTemplate = '[name].js';
                        }
                    });
                }
            });
        });
    }
}
class Bmp extends require('@tarojs/service')
    .TaroPlatformBase {
    constructor(ctx, config) {
        super(ctx, config);
        this.platform = 'bmp';
        this.runtimePath = `${__dirname}/runtime`;
        this.reactComponents = `${__dirname}/components-react`;
        this.projectConfigJson = 'project.config.json';
        this.template = new template_1.BmpTemplate();
        this.setupTransaction.addWrapper({
            close: this.modifyTemplate,
        });
    }
    modifyTemplate() {
        this.template.mergeComponents(this.ctx, taro_weapp_components_1.default);
        this.template.mergeComponents(this.ctx, components_1.components);
    }
    async start() {
        ;
        this.setup();
        this.modifyWebpackChain();
        const runner = await this.getRunner();
        const sourceMapOption = this.ctx.runOpts.options.sourceMap
            ? { enableSourceMap: true, sourceMapType: 'source-map' }
            : {};
        const options = this.getOptions({
            ...sourceMapOption,
            globalObject: 'bn',
            runtimePath: this.runtimePath,
            fileType: {
                templ: '.bxml',
                style: '.bxss',
                config: '.json',
                script: '.js',
                xs: '.bxs',
            },
            imageUrlLoaderOption: {
                limit: false,
            },
        });
        runner(options);
        this.ctx.onBuildFinish(() => {
            this.modifyProjectJSON();
        });
    }
    modifyProjectJSON() {
        const { nodeModulesPath, outputPath } = this.ctx.paths;
        const { fs } = this.ctx.helper;
        const frameworkDeps = deps.filter((dep) => dep.indexOf(`${nodeModulesPath}/vue/`) >= 0 ||
            dep.indexOf(`${nodeModulesPath}/react/`) >= 0);
        const taroVersion = require(`@tarojs/taro/package.json`).version;
        const isReact = frameworkDeps.length && frameworkDeps[0].includes('/react/');
        let framework;
        try {
            framework = frameworkDeps.length
                ? {
                    name: isReact ? 'react' : 'vue',
                    version: fs.readJSONSync(`${nodeModulesPath}/${isReact ? 'react' : 'vue'}/package.json`).version,
                }
                : undefined;
        }
        catch (err) {
            console.error('[Get Framework Info]: ', err);
        }
        const platform = process.env.CI ? 'CICD' : 'LOCAL';
        const projectConfigPath = `${outputPath}/project.config.json`;
        const appJSON = fs.readJSONSync(`${outputPath}/app.json`);
        const projectConfigJson = fs.readJSONSync(projectConfigPath);
        function getExtendedLib(extendedLib) {
            const frameworkLibs = Object.keys(extendedLib)
                .filter((key) => ['react', 'vue'].includes(key) && extendedLib[key])
                .map((key) => ({
                name: key,
                version: typeof extendedLib[key] === 'string' ? extendedLib[key] : '',
            }));
            return frameworkLibs.length === 1
                ? frameworkLibs[0]
                : frameworkLibs || undefined;
        }
        projectConfigJson.bmp = {
            NODE_ENV: process.env.NODE_ENV,
            taroVersion,
            platform,
            version: fs.readJSONSync(path_1.default.resolve(__dirname, '../package.json'))
                .version,
            framework: appJSON.useExtendedLib
                ? getExtendedLib(appJSON.useExtendedLib)
                : framework,
        };
        this.ctx.writeFileToDist({
            filePath: 'project.config.json',
            content: JSON.stringify(projectConfigJson, null, 2),
        });
    }
    modifyWebpackChain() {
        this.ctx.modifyWebpackChain(({ chain }) => {
            chain.resolve.alias.set('@tarojs/taro', path_1.default.dirname(resolve_1.default.sync('@tarojs/taro', { basedir: __dirname })));
            chain.resolve.alias.set('@tarojs/api', path_1.default.dirname(resolve_1.default.sync('@tarojs/api', { basedir: __dirname })));
            chain.resolve.alias.set('@tarojs/components$', this.reactComponents);
            chain.output.publicPath('');
            chain.merge({
                plugin: {
                    postProcessPlugin: {
                        plugin: PostProcessPlugin,
                    },
                },
            });
            const { readConfig, fs } = this.ctx.helper;
            let appConfigPath = `${this.ctx.paths.sourcePath}/app.config.ts`;
            if (!fs.existsSync(appConfigPath)) {
                appConfigPath = `${this.ctx.paths.sourcePath}/app.config.js`;
            }
            const { useExtendedLib } = readConfig(appConfigPath);
            chain.externals(Object.entries(useExtendedLib || []).reduce((acc, [key, value]) => {
                if (value) {
                    acc[key] = `commonjs ${key}`;
                }
                return acc;
            }, {}));
            if (process.env.NODE_ENV === 'development') {
                chain.devtool('none');
                chain.merge({
                    plugin: {
                        sourceMapPlugin: {
                            plugin: webpack_1.default.SourceMapDevToolPlugin,
                            args: [
                                {
                                    test: /\.js$/i,
                                    filename: '[file].map',
                                },
                            ],
                        },
                        sourceMapPluginCSS: {
                            plugin: webpack_1.default.SourceMapDevToolPlugin,
                            args: [
                                {
                                    test: /\.bxss$/i,
                                    filename: '[file].map',
                                    append: '\n/*# sourceMappingURL=[url] */',
                                },
                            ],
                        },
                    },
                });
            }
        });
    }
}
exports.default = Bmp;