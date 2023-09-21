"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shared_1 = require("@tarojs/shared");
const apis_1 = require("./apis");
const components_react_1 = require("./components-react");
const hostConfig = {
    initNativeApi: apis_1.initNativeApi,
};
(0, shared_1.mergeInternalComponents)({ DeprecatedInput: components_react_1.DeprecatedInput, DeprecatedTextarea: components_react_1.DeprecatedTextarea, RootPortal: components_react_1.RootPortal });
(0, shared_1.mergeReconciler)(hostConfig);