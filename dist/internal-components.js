"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Textarea = exports.Input = void 0;
const shared_1 = require("@tarojs/shared");
const NO_DEFAULT_VALUE = '';
const DEFAULT_FALSE = 'false';
exports.Input = {
    value: NO_DEFAULT_VALUE,
    type: (0, shared_1.singleQuote)(NO_DEFAULT_VALUE),
    password: DEFAULT_FALSE,
    placeholder: NO_DEFAULT_VALUE,
    'placeholder-style': NO_DEFAULT_VALUE,
    'placeholder-class': (0, shared_1.singleQuote)('input-placeholder'),
    disabled: NO_DEFAULT_VALUE,
    maxlength: '140',
    'cursor-spacing': '0',
    focus: DEFAULT_FALSE,
    'confirm-type': (0, shared_1.singleQuote)('done'),
    'confirm-hold': DEFAULT_FALSE,
    cursor: 'i.value.length',
    'selection-start': '-1',
    'selection-end': '-1',
    bindInput: NO_DEFAULT_VALUE,
    bindFocus: NO_DEFAULT_VALUE,
    bindBlur: NO_DEFAULT_VALUE,
    bindConfirm: NO_DEFAULT_VALUE,
    name: NO_DEFAULT_VALUE,
};
exports.Textarea = {
    value: NO_DEFAULT_VALUE,
    placeholder: NO_DEFAULT_VALUE,
    'placeholder-style': NO_DEFAULT_VALUE,
    'placeholder-class': (0, shared_1.singleQuote)('textarea-placeholder'),
    disabled: NO_DEFAULT_VALUE,
    maxlength: '140',
    'auto-focus': DEFAULT_FALSE,
    focus: DEFAULT_FALSE,
    'auto-height': DEFAULT_FALSE,
    fixed: DEFAULT_FALSE,
    'cursor-spacing': '0',
    cursor: '-1',
    'selection-start': '-1',
    'selection-end': '-1',
    bindFocus: NO_DEFAULT_VALUE,
    bindBlur: NO_DEFAULT_VALUE,
    bindLineChange: NO_DEFAULT_VALUE,
    bindInput: NO_DEFAULT_VALUE,
    bindConfirm: NO_DEFAULT_VALUE,
    name: NO_DEFAULT_VALUE,
};