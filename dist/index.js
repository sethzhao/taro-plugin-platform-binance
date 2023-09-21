"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const program_1 = __importDefault(require("./program"));
exports.default = (ctx) => {
    ctx.registerPlatform({
        name: 'bmp',
        useConfigName: 'mini',
        async fn({ config }) {
            const program = new program_1.default(ctx, config);
            program.start();
        },
    });
};