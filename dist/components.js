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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.components = void 0;
const shared_1 = require("@tarojs/shared");
const internalComponents = __importStar(require("./internal-components"));
const taro_weapp_components_1 = __importDefault(require("./taro-weapp-components"));
exports.components = {
    Input: {
        type: (0, shared_1.singleQuote)('text'),
        'auto-focus': 'false',
        'auto-fill': '',
    },
    Navigator: {
        type: (0, shared_1.singleQuote)('app'),
        rev: '',
        version: '',
    },
    DeprecatedInput: {
        ...internalComponents.Input,
        value: '',
        placeholder: '',
        password: 'false',
        disabled: 'false',
        autoFocus: 'false',
        focus: 'false',
        maxlength: '140',
        type: (0, shared_1.singleQuote)('text'),
        autocomplete: '',
        enterkeyhint: '',
        manual: 'false'
    },
    DeprecatedTextarea: {
        ...internalComponents.Textarea,
        value: '',
        placeholder: '',
        disabled: 'false',
        autoFocus: 'false',
        focus: 'false',
        maxlength: '140',
    },
    DeprecatedCanvas: {
        ...taro_weapp_components_1.default.Canvas,
    },
    Chart: {
        chartId: '',
    },
    WebView: {
        injected: '',
        loadingBar: 'true',
        bounce: 'true',
    },
    WebViewComponent: {
        ...taro_weapp_components_1.default.WebViewComponent,
    },
    RootPortal: {
        enable: 'true',
    },
    CatchTouch: {
        catchtouchend: 'eh',
    },
};