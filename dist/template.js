"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BmpTemplate = void 0;
const template_1 = require("@tarojs/shared/dist/template");
class BmpTemplate extends template_1.RecursiveTemplate {
    constructor() {
        super();
        this.supportXS = false;
        this.Adapter = {
            if: 'bn:if',
            else: 'bn:else',
            elseif: 'bn:elif',
            for: 'bn:for',
            forItem: 'bn:for-item',
            forIndex: 'bn:for-index',
            key: 'bn:key',
            xs: 'bxs',
            type: 'bmp',
        };
        this.superBuildTemplate = this.buildTemplate;
        this.buildTemplate = (componentConfig) => {
            componentConfig.includeAll = true;
            const tmpl = this.superBuildTemplate(componentConfig);
            return tmpl.replace(/catchMove="([^"]*)"/g, (_, $1) => `catchMove="{{${$1}}}"`);
        };
        this.filterIdAttribute();
    }
    buildXsTemplate() {
        return '<bxs module="xs" src="./utils.bxs" />';
    }
    replacePropName(name, value) {
        if (value === 'eh') {
            const nameLowerCase = name.toLowerCase();
            if (nameLowerCase === 'bindlongtap') {
                console.warn('⚠️ \`longtap\` is deprecated, please use \`longpress` instead');
                return 'bindlongpress';
            }
            return nameLowerCase;
        }
        return name;
    }
    filterIdAttribute() {
        Object.keys(this.internalComponents).forEach((key) => {
            delete this.internalComponents[key]['id'];
        });
    }
}
exports.BmpTemplate = BmpTemplate;