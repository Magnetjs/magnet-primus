import { Module } from 'magnet-core/module'
import * as Primus from 'primus'

export default class MagnetPrimus extends Module {
  get moduleName () { return 'primus' }
  get defaultConfig () { return __dirname }

  async setup () {
    let server
    if (this.config.magnet) {
      server = this.app[this.config.magnet]
    }

    this.insert(new Primus(server, this.config))

    this.config.library && this.app.primus.library()
    this.config.save && this.app.primus.save(this.config.save)
  }
}
