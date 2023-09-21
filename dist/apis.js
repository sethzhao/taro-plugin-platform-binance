"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initNativeApi = void 0;
function initNativeApi(taro) {
    const apis = Object.keys(bn);
    apis.forEach((key) => {
        Object.defineProperty(taro, key, {
            enumerable: true,
            configurable: true,
            get() {
                return bn[key];
            },
            set(val) {
                return (bn[key] = val);
            },
        });
    });
    taro.getApp = getApp;
    taro.getCurrentPages = (callFnName) => getCurrentPages(`taroGetCurrentPages-${callFnName}`);
    taro.getTabBar = function (pageCtx) {
        var _a;
        if (typeof (pageCtx === null || pageCtx === void 0 ? void 0 : pageCtx.getTabBar) === 'function') {
            return (_a = pageCtx.getTabBar()) === null || _a === void 0 ? void 0 : _a.$taroInstances;
        }
    };
}
exports.initNativeApi = initNativeApi;