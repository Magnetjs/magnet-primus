"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const module_1 = require("magnet-core/module");
const Primus = require("primus");
class MagnetPrimus extends module_1.Module {
    get moduleName() { return 'primus'; }
    get defaultConfig() { return __dirname; }
    setup() {
        return __awaiter(this, void 0, void 0, function* () {
            let server;
            if (this.config.magnet) {
                server = this.app[this.config.magnet];
            }
            this.insert(new Primus(server, this.config));
            this.config.library && this.app.primus.library();
            this.config.save && this.app.primus.save(this.config.save);
        });
    }
}
exports.default = MagnetPrimus;
//# sourceMappingURL=index.js.map