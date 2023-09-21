import Bmp from './program'

import type { IPluginContext } from '@tarojs/service'

export interface IOptions {
  enablekeyboardAccessory?: boolean
}

export default (ctx: IPluginContext, options: IOptions) => {
  ctx.registerPlatform({
    name: 'bmp',
    useConfigName: 'mini',
    async fn ({ config }) {
      const program = new Bmp(ctx, config, options || {})
      await program.start()
    }
  })
}
