import { TaroPlatformBase } from '@tarojs/service'

import { components } from './components'
import { Template } from './template'

import type { IOptions } from './index'
import resolve from 'resolve'
import path from 'path'


class PostProcessPlugin {
  apply(compiler: any) {
    if (compiler.options.optimization.minimizer.length) {
      compiler.options.optimization.minimizer[0].options.test =
        /\.(b|m)?js(\?.*)?$/i
    }

    compiler.hooks.compilation.tap(
      'post-process-plugin',
      (compilation: any) => {
        compilation.hooks.optimizeChunks.tap(
          'modify-script-name',
          (chunks: any) => {
            const plugins = compilation.options.plugins.filter(
              (p: any) => p.constructor.name === 'TaroMiniPlugin'
            )
            if (plugins.length) {
              const miniPlugin = plugins[0]

              const pageNames = [
                ...miniPlugin.pages,
                ...miniPlugin.components,
              ].map((p) => p.name)
              chunks.forEach((chunk: any) => {
                if (pageNames.indexOf(chunk.name) >= 0) {
                  chunk.filenameTemplate = '[name].js'
                }
              })
            }
          }
        )
      }
    )
  }
}

export default class Weapp extends TaroPlatformBase {
  template: Template
  platform = 'bmp'
  globalObject = 'globalThis'
  projectConfigJson: string = this.config.projectConfigName || 'project.config.json'
  runtimePath = `${__dirname}/runtime`
  taroComponentsPath = `${__dirname}/components-react`
  fileType = {
    templ: '.bxml',
    style: '.bxss',
    config: '.json',
    script: '.js',
    xs: '.bxs',
  }

  /**
   * 1. setupTransaction - init
   * 2. setup
   * 3. setupTransaction - close
   * 4. buildTransaction - init
   * 5. build
   * 6. buildTransaction - close
   */
  constructor (ctx, config, pluginOptions?: IOptions) {
    super(ctx, config)
    this.template = new Template(pluginOptions)
    this.setupTransaction.addWrapper({
      close () {
        this.modifyTemplate(pluginOptions)
        this.modifyWebpackConfig()
      }
    })
  }

  /**
   * 增加组件或修改组件属性
   */
  modifyTemplate (pluginOptions?: IOptions) {
    const template = this.template
    template.mergeComponents(this.ctx, components)
    template.voidElements.add('voip-room')
    template.focusComponents.add('editor')
    if (pluginOptions?.enablekeyboardAccessory) {
      template.voidElements.delete('input')
      template.voidElements.delete('textarea')
    }
  }

  /**
   * 修改 Webpack 配置
   */
  modifyWebpackConfig () {
    this.ctx.modifyWebpackChain(({ chain }) => {
      // 解决微信小程序 sourcemap 映射失败的问题，#9412
      chain.output.devtoolModuleFilenameTemplate((info) => {
        const resourcePath = info.resourcePath.replace(/[/\\]/g, '_')
        return `webpack://${info.namespace}/${resourcePath}`
      })


      chain.resolve.alias.set(
        '@tarojs/taro',
        path.dirname(resolve.sync('@tarojs/taro', { basedir: __dirname }))
      )
      chain.resolve.alias.set(
        '@tarojs/api',
        path.dirname(resolve.sync('@tarojs/api', { basedir: __dirname }))
      )

      chain.resolve.alias.set('@tarojs/components$', this.taroComponentsPath)
      chain.output.publicPath('')
      chain.merge({
        plugin: {
          postProcessPlugin: {
            plugin: PostProcessPlugin,
          },
        },
      })
    })
  }
}