"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatchTouch = exports.WebViewComponent = exports.Chart = exports.Editor = exports.RootPortal = exports.DeprecatedCanvas = exports.DeprecatedTextarea = exports.DeprecatedInput = void 0;
__exportStar(require("@tarojs/components/mini"), exports);
exports.DeprecatedInput = 'deprecated-input';
exports.DeprecatedTextarea = 'deprecated-textarea';
exports.DeprecatedCanvas = 'deprecated-canvas';
exports.RootPortal = 'root-portal';
exports.Editor = 'editor';
exports.Chart = 'chart';
exports.WebViewComponent = 'web-view-component';
exports.CatchTouch = 'catch-touch';