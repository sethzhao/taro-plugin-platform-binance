'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var service = require('@tarojs/service');
var resolve = require('resolve');
var path = require('path');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var resolve__default = /*#__PURE__*/_interopDefaultLegacy(resolve);
var path__default = /*#__PURE__*/_interopDefaultLegacy(path);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

const _true = 'true';
const _false = 'false';
const _empty = '';
const _zero = '0';
const components = {
    // ======== 调整属性 ========
    Progress: {
        'border-radius': _zero,
        'font-size': '16',
        duration: '30',
        bindActiveEnd: _empty
    },
    RichText: {
        space: _empty,
        'user-select': _false
    },
    Text: {
        'user-select': _false
    },
    Map: {
        polygons: '[]',
        subkey: _empty,
        rotate: _zero,
        skew: _zero,
        'max-scale': '20',
        'min-scale': '3',
        'enable-3D': _false,
        'show-compass': _false,
        'show-scale': _false,
        'enable-overlooking': _false,
        'enable-zoom': _true,
        'enable-scroll': _true,
        'enable-rotate': _false,
        'enable-satellite': _false,
        'enable-traffic': _false,
        'enable-poi': _true,
        'enable-building': _true,
        setting: '[]',
        bindLabelTap: _empty,
        bindRegionChange: _empty,
        bindPoiTap: _empty,
        bindAnchorPointTap: _empty
    },
    Button: {
        lang: 'en',
        'session-from': _empty,
        'send-message-title': _empty,
        'send-message-path': _empty,
        'send-message-img': _empty,
        'app-parameter': _empty,
        'show-message-card': _false,
        'business-id': _empty,
        bindGetUserInfo: _empty,
        bindContact: _empty,
        bindGetPhoneNumber: _empty,
        bindGetRealTimePhoneNumber: _empty,
        bindChooseAvatar: _empty,
        bindError: _empty,
        bindOpenSetting: _empty,
        bindLaunchApp: _empty,
        bindAgreePrivacyAuthorization: _empty
    },
    Form: {
        'report-submit-timeout': _zero
    },
    Input: {
        'always-embed': _false,
        'adjust-position': _true,
        'hold-keyboard': _false,
        'safe-password-cert-path': '',
        'safe-password-length': '',
        'safe-password-time-stamp': '',
        'safe-password-nonce': '',
        'safe-password-salt': '',
        'safe-password-custom-hash': '',
        'auto-fill': _empty,
        bindKeyboardHeightChange: _empty,
        bindNicknameReview: _empty
    },
    Picker: {
        'header-text': _empty,
        'level': 'region'
    },
    PickerView: {
        'immediate-change': _false,
        bindPickStart: _empty,
        bindPickEnd: _empty
    },
    Slider: {
        color: "'#e9e9e9'",
        'selected-color': "'#1aad19'"
    },
    Textarea: {
        'show-confirm-bar': _true,
        'adjust-position': _true,
        'hold-keyboard': _false,
        'disable-default-padding': _false,
        'confirm-type': "'return'",
        'confirm-hold': _false,
        bindKeyboardHeightChange: _empty
    },
    ScrollView: {
        'type': "'list'",
        'event-passive': _false,
        'enable-flex': _false,
        'scroll-anchoring': _false,
        'refresher-enabled': _false,
        'refresher-threshold': '45',
        'refresher-default-style': "'black'",
        'refresher-background': "'#FFF'",
        'refresher-triggered': _false,
        enhanced: _false,
        bounces: _true,
        'show-scrollbar': _true,
        'paging-enabled': _false,
        'fast-deceleration': _false,
        reverse: _false,
        'cache-extent': _zero,
        'scroll-into-view-within-extent': _false,
        'scroll-into-view-alignment': "'start'",
        bindDragStart: _empty,
        bindDragging: _empty,
        bindDragEnd: _empty,
        bindRefresherPulling: _empty,
        bindRefresherRefresh: _empty,
        bindRefresherRestore: _empty,
        bindRefresherAbort: _empty,
        bindScrollStart: _empty,
        bindScrollEnd: _empty,
        bindRefresherWillRefresh: _empty,
    },
    StickySection: {
        'push-pinned-header': _true,
    },
    GridView: {
        type: "'aligned'",
        'cross-axis-count': '2',
        'max-cross-axis-extent': _zero,
        'main-axis-gap': _zero,
        'cross-axis-gap': _zero,
    },
    ListView: {},
    StickyHeader: {},
    Swiper: {
        'snap-to-edge': _false,
        'easing-function': "'default'"
    },
    SwiperItem: {
        'skip-hidden-item-layout': _false
    },
    Navigator: {
        target: "'self'",
        'app-id': _empty,
        path: _empty,
        'extra-data': _empty,
        version: "'version'"
    },
    Camera: {
        mode: "'normal'",
        resolution: "'medium'",
        'frame-size': "'medium'",
        bindInitDone: _empty,
        bindScanCode: _empty
    },
    Image: {
        webp: _false,
        'show-menu-by-longpress': _false
    },
    LivePlayer: {
        mode: "'live'",
        'sound-mode': "'speaker'",
        'auto-pause-if-navigate': _true,
        'auto-pause-if-open-native': _true,
        'picture-in-picture-mode': '[]',
        bindstatechange: _empty,
        bindfullscreenchange: _empty,
        bindnetstatus: _empty,
        bindAudioVolumeNotify: _empty,
        bindEnterPictureInPicture: _empty,
        bindLeavePictureInPicture: _empty
    },
    Video: {
        title: _empty,
        'play-btn-position': "'bottom'",
        'enable-play-gesture': _false,
        'auto-pause-if-navigate': _true,
        'auto-pause-if-open-native': _true,
        'vslide-gesture': _false,
        'vslide-gesture-in-fullscreen': _true,
        'ad-unit-id': _empty,
        'poster-for-crawler': _empty,
        'show-casting-button': _false,
        'picture-in-picture-mode': '[]',
        // picture-in-picture-show-progress 属性先注释掉的原因如下：
        // 该属性超过了 wxml 属性的长度限制，实际无法使用且导致编译报错。可等微信官方修复后再放开。
        // 参考1：https://developers.weixin.qq.com/community/develop/doc/000a429beb87f0eac07acc0fc5b400
        // 参考2: https://developers.weixin.qq.com/community/develop/doc/0006883619c48054286a4308258c00?_at=vyxqpllafi
        // 'picture-in-picture-show-progress': 'false',
        'enable-auto-rotation': _false,
        'show-screen-lock-button': _false,
        'show-snapshot-button': _false,
        'show-background-playback-button': _false,
        'background-poster': _empty,
        bindProgress: _empty,
        bindLoadedMetadata: _empty,
        bindControlsToggle: _empty,
        bindEnterPictureInPicture: _empty,
        bindLeavePictureInPicture: _empty,
        bindSeekComplete: _empty,
        bindAdLoad: _empty,
        bindAdError: _empty,
        bindAdClose: _empty,
        bindAdPlay: _empty
    },
    Canvas: {
        type: _empty
    },
    Ad: {
        'ad-type': "'banner'",
        'ad-theme': "'white'"
    },
    CoverView: {
        'marker-id': _empty,
        slot: _empty
    },
    // ======== 额外组件 ========
    Editor: {
        'read-only': _false,
        placeholder: _empty,
        'show-img-size': _false,
        'show-img-toolbar': _false,
        'show-img-resize': _false,
        focus: _false,
        bindReady: _empty,
        bindFocus: _empty,
        bindBlur: _empty,
        bindInput: _empty,
        bindStatusChange: _empty,
        name: _empty
    },
    MatchMedia: {
        'min-width': _empty,
        'max-width': _empty,
        width: _empty,
        'min-height': _empty,
        'max-height': _empty,
        height: _empty,
        orientation: _empty
    },
    FunctionalPageNavigator: {
        version: "'release'",
        name: _empty,
        args: _empty,
        bindSuccess: _empty,
        bindFail: _empty,
        bindCancel: _empty
    },
    LivePusher: {
        url: _empty,
        mode: "'RTC'",
        autopush: _false,
        muted: _false,
        'enable-camera': _true,
        'auto-focus': _true,
        orientation: "'vertical'",
        beauty: _zero,
        whiteness: _zero,
        aspect: "'9:16'",
        'min-bitrate': '200',
        'max-bitrate': '1000',
        'audio-quality': "'high'",
        'waiting-image': _empty,
        'waiting-image-hash': _empty,
        zoom: _false,
        'device-position': "'front'",
        'background-mute': _false,
        mirror: _false,
        'remote-mirror': _false,
        'local-mirror': _false,
        'audio-reverb-type': _zero,
        'enable-mic': _true,
        'enable-agc': _false,
        'enable-ans': _false,
        'audio-volume-type': "'voicecall'",
        'video-width': '360',
        'video-height': '640',
        'beauty-style': "'smooth'",
        filter: "'standard'",
        'picture-in-picture-mode': '[]',
        animation: _empty,
        bindStateChange: _empty,
        bindNetStatus: _empty,
        bindBgmStart: _empty,
        bindBgmProgress: _empty,
        bindBgmComplete: _empty,
        bindAudioVolumeNotify: _empty
    },
    OfficialAccount: {
        bindLoad: _empty,
        bindError: _empty
    },
    OpenData: {
        type: _empty,
        'open-gid': _empty,
        lang: "'en'",
        'default-text': _empty,
        'default-avatar': _empty,
        bindError: _empty
    },
    NavigationBar: {
        title: _empty,
        loading: _false,
        'front-color': _empty,
        'background-color': _empty,
        'color-animation-duration': _zero,
        'color-animation-timing-func': "'linear'"
    },
    PageMeta: {
        'background-text-style': _empty,
        'background-color': _empty,
        'background-color-top': _empty,
        'background-color-bottom': _empty,
        'scroll-top': "''",
        'scroll-duration': '300',
        'page-style': "''",
        'root-font-size': "''",
        bindResize: _empty,
        bindScroll: _empty,
        bindScrollDone: _empty
    },
    VoipRoom: {
        openid: _empty,
        mode: "'camera'",
        'device-position': "'front'",
        bindError: _empty
    },
    AdCustom: {
        'unit-id': _empty,
        'ad-intervals': _empty,
        bindLoad: _empty,
        bindError: _empty
    },
    PageContainer: {
        show: _false,
        duration: '300',
        'z-index': '100',
        overlay: _true,
        position: "'bottom'",
        round: _false,
        'close-on-slide-down': _false,
        'overlay-style': _empty,
        'custom-style': _empty,
        bindBeforeEnter: _empty,
        bindEnter: _empty,
        bindAfterEnter: _empty,
        bindBeforeLeave: _empty,
        bindLeave: _empty,
        bindAfterLeave: _empty,
        bindClickOverlay: _empty
    },
    ShareElement: {
        mapkey: _empty,
        transform: _false,
        duration: '300',
        'easing-function': "'ease-out'"
    },
    KeyboardAccessory: {},
    RootPortal: {},
    ChannelLive: {
        feedId: _empty,
        finderUserName: _empty
    },
    ChannelVideo: {
        feedId: _empty,
        finderUserName: _empty,
        autoplay: _false,
        loop: _false,
        muted: _false,
        objectFit: "'contain'",
        bindError: _empty
    },
};

var template = {};

Object.defineProperty(template, '__esModule', { value: true });

const DEFAULT_EMPTY_ARRAY = '[]';
const NO_DEFAULT_VALUE = '';
const DEFAULT_TRUE = '!0';
const DEFAULT_FALSE = '!1';
const touchEvents = {
    bindTouchStart: NO_DEFAULT_VALUE,
    bindTouchMove: NO_DEFAULT_VALUE,
    bindTouchEnd: NO_DEFAULT_VALUE,
    bindTouchCancel: NO_DEFAULT_VALUE,
    bindLongTap: NO_DEFAULT_VALUE
};
const animation = {
    animation: NO_DEFAULT_VALUE,
    bindAnimationStart: NO_DEFAULT_VALUE,
    bindAnimationIteration: NO_DEFAULT_VALUE,
    bindAnimationEnd: NO_DEFAULT_VALUE,
    bindTransitionEnd: NO_DEFAULT_VALUE
};
function singleQuote(s) {
    return `'${s}'`;
}
const View = Object.assign(Object.assign({ 'hover-class': singleQuote('none'), 'hover-stop-propagation': DEFAULT_FALSE, 'hover-start-time': '50', 'hover-stay-time': '400' }, touchEvents), animation);
const Icon = {
    type: NO_DEFAULT_VALUE,
    size: '23',
    color: NO_DEFAULT_VALUE
};
const MapComp = Object.assign({ longitude: NO_DEFAULT_VALUE, latitude: NO_DEFAULT_VALUE, scale: '16', markers: DEFAULT_EMPTY_ARRAY, covers: NO_DEFAULT_VALUE, polyline: DEFAULT_EMPTY_ARRAY, circles: DEFAULT_EMPTY_ARRAY, controls: DEFAULT_EMPTY_ARRAY, 'include-points': DEFAULT_EMPTY_ARRAY, 'show-location': NO_DEFAULT_VALUE, 'layer-style': '1', bindMarkerTap: NO_DEFAULT_VALUE, bindControlTap: NO_DEFAULT_VALUE, bindCalloutTap: NO_DEFAULT_VALUE, bindUpdated: NO_DEFAULT_VALUE }, touchEvents);
const Progress = {
    percent: NO_DEFAULT_VALUE,
    'stroke-width': '6',
    color: singleQuote('#09BB07'),
    activeColor: singleQuote('#09BB07'),
    backgroundColor: singleQuote('#EBEBEB'),
    active: DEFAULT_FALSE,
    'active-mode': singleQuote('backwards'),
    'show-info': DEFAULT_FALSE
};
const RichText = {
    nodes: DEFAULT_EMPTY_ARRAY
};
const Text = {
    selectable: DEFAULT_FALSE,
    space: NO_DEFAULT_VALUE,
    decode: DEFAULT_FALSE
};
const Button = Object.assign({ size: singleQuote('default'), type: NO_DEFAULT_VALUE, plain: DEFAULT_FALSE, disabled: NO_DEFAULT_VALUE, loading: DEFAULT_FALSE, 'form-type': NO_DEFAULT_VALUE, 'open-type': NO_DEFAULT_VALUE, 'hover-class': singleQuote('button-hover'), 'hover-stop-propagation': DEFAULT_FALSE, 'hover-start-time': '20', 'hover-stay-time': '70', name: NO_DEFAULT_VALUE, bindagreeprivacyauthorization: NO_DEFAULT_VALUE }, touchEvents);
const Checkbox = {
    value: NO_DEFAULT_VALUE,
    disabled: NO_DEFAULT_VALUE,
    checked: DEFAULT_FALSE,
    color: singleQuote('#09BB07'),
    name: NO_DEFAULT_VALUE
};
const CheckboxGroup = {
    bindChange: NO_DEFAULT_VALUE,
    name: NO_DEFAULT_VALUE
};
const Form = {
    'report-submit': DEFAULT_FALSE,
    bindSubmit: NO_DEFAULT_VALUE,
    bindReset: NO_DEFAULT_VALUE,
    name: NO_DEFAULT_VALUE
};
const Input = {
    value: NO_DEFAULT_VALUE,
    type: singleQuote(NO_DEFAULT_VALUE),
    password: DEFAULT_FALSE,
    placeholder: NO_DEFAULT_VALUE,
    'placeholder-style': NO_DEFAULT_VALUE,
    'placeholder-class': singleQuote('input-placeholder'),
    disabled: NO_DEFAULT_VALUE,
    maxlength: '140',
    'cursor-spacing': '0',
    focus: DEFAULT_FALSE,
    'confirm-type': singleQuote('done'),
    'confirm-hold': DEFAULT_FALSE,
    cursor: '-1',
    'selection-start': '-1',
    'selection-end': '-1',
    bindInput: NO_DEFAULT_VALUE,
    bindFocus: NO_DEFAULT_VALUE,
    bindBlur: NO_DEFAULT_VALUE,
    bindConfirm: NO_DEFAULT_VALUE,
    name: NO_DEFAULT_VALUE
};
const Label = {
    for: NO_DEFAULT_VALUE,
    name: NO_DEFAULT_VALUE
};
const Picker = {
    mode: singleQuote('selector'),
    disabled: NO_DEFAULT_VALUE,
    range: NO_DEFAULT_VALUE,
    'range-key': NO_DEFAULT_VALUE,
    value: NO_DEFAULT_VALUE,
    start: NO_DEFAULT_VALUE,
    end: NO_DEFAULT_VALUE,
    fields: singleQuote('day'),
    'custom-item': NO_DEFAULT_VALUE,
    name: NO_DEFAULT_VALUE,
    bindCancel: NO_DEFAULT_VALUE,
    bindChange: NO_DEFAULT_VALUE,
    bindColumnChange: NO_DEFAULT_VALUE
};
const PickerView = {
    value: NO_DEFAULT_VALUE,
    'indicator-style': NO_DEFAULT_VALUE,
    'indicator-class': NO_DEFAULT_VALUE,
    'mask-style': NO_DEFAULT_VALUE,
    'mask-class': NO_DEFAULT_VALUE,
    bindChange: NO_DEFAULT_VALUE,
    name: NO_DEFAULT_VALUE
};
const PickerViewColumn = {
    name: NO_DEFAULT_VALUE
};
const Radio = {
    value: NO_DEFAULT_VALUE,
    checked: DEFAULT_FALSE,
    disabled: NO_DEFAULT_VALUE,
    color: singleQuote('#09BB07'),
    name: NO_DEFAULT_VALUE
};
const RadioGroup = {
    bindChange: NO_DEFAULT_VALUE,
    name: NO_DEFAULT_VALUE
};
const Slider = {
    min: '0',
    max: '100',
    step: '1',
    disabled: NO_DEFAULT_VALUE,
    value: '0',
    activeColor: singleQuote('#1aad19'),
    backgroundColor: singleQuote('#e9e9e9'),
    'block-size': '28',
    'block-color': singleQuote('#ffffff'),
    'show-value': DEFAULT_FALSE,
    bindChange: NO_DEFAULT_VALUE,
    bindChanging: NO_DEFAULT_VALUE,
    name: NO_DEFAULT_VALUE
};
const Switch = {
    checked: DEFAULT_FALSE,
    disabled: NO_DEFAULT_VALUE,
    type: singleQuote('switch'),
    color: singleQuote('#04BE02'),
    bindChange: NO_DEFAULT_VALUE,
    name: NO_DEFAULT_VALUE
};
const Textarea = {
    value: NO_DEFAULT_VALUE,
    placeholder: NO_DEFAULT_VALUE,
    'placeholder-style': NO_DEFAULT_VALUE,
    'placeholder-class': singleQuote('textarea-placeholder'),
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
    name: NO_DEFAULT_VALUE
};
const CoverImage = {
    src: NO_DEFAULT_VALUE,
    bindLoad: 'eh',
    bindError: 'eh'
};
const CoverView = Object.assign({ 'scroll-top': DEFAULT_FALSE }, touchEvents);
const MovableArea = {
    'scale-area': DEFAULT_FALSE
};
const MovableView = Object.assign(Object.assign({ direction: 'none', inertia: DEFAULT_FALSE, 'out-of-bounds': DEFAULT_FALSE, x: NO_DEFAULT_VALUE, y: NO_DEFAULT_VALUE, damping: '20', friction: '2', disabled: NO_DEFAULT_VALUE, scale: DEFAULT_FALSE, 'scale-min': '0.5', 'scale-max': '10', 'scale-value': '1', bindChange: NO_DEFAULT_VALUE, bindScale: NO_DEFAULT_VALUE, bindHTouchMove: NO_DEFAULT_VALUE, bindVTouchMove: NO_DEFAULT_VALUE, width: singleQuote('10px'), height: singleQuote('10px') }, touchEvents), animation);
const ScrollView = Object.assign(Object.assign({ 'scroll-x': DEFAULT_FALSE, 'scroll-y': DEFAULT_FALSE, 'upper-threshold': '50', 'lower-threshold': '50', 'scroll-top': NO_DEFAULT_VALUE, 'scroll-left': NO_DEFAULT_VALUE, 'scroll-into-view': NO_DEFAULT_VALUE, 'scroll-with-animation': DEFAULT_FALSE, 'enable-back-to-top': DEFAULT_FALSE, bindScrollToUpper: NO_DEFAULT_VALUE, bindScrollToLower: NO_DEFAULT_VALUE, bindScroll: NO_DEFAULT_VALUE }, touchEvents), animation);
const Swiper = Object.assign({ 'indicator-dots': DEFAULT_FALSE, 'indicator-color': singleQuote('rgba(0, 0, 0, .3)'), 'indicator-active-color': singleQuote('#000000'), autoplay: DEFAULT_FALSE, current: '0', interval: '5000', duration: '500', circular: DEFAULT_FALSE, vertical: DEFAULT_FALSE, 'previous-margin': singleQuote('0px'), 'next-margin': singleQuote('0px'), 'display-multiple-items': '1', bindChange: NO_DEFAULT_VALUE, bindTransition: NO_DEFAULT_VALUE, bindAnimationFinish: NO_DEFAULT_VALUE }, touchEvents);
const SwiperItem = {
    'item-id': NO_DEFAULT_VALUE
};
const Navigator = {
    url: NO_DEFAULT_VALUE,
    'open-type': singleQuote('navigate'),
    delta: '1',
    'hover-class': singleQuote('navigator-hover'),
    'hover-stop-propagation': DEFAULT_FALSE,
    'hover-start-time': '50',
    'hover-stay-time': '600',
    bindSuccess: NO_DEFAULT_VALUE,
    bindFail: NO_DEFAULT_VALUE,
    bindComplete: NO_DEFAULT_VALUE
};
const Audio = {
    id: NO_DEFAULT_VALUE,
    src: NO_DEFAULT_VALUE,
    loop: DEFAULT_FALSE,
    controls: DEFAULT_FALSE,
    poster: NO_DEFAULT_VALUE,
    name: NO_DEFAULT_VALUE,
    author: NO_DEFAULT_VALUE,
    bindError: NO_DEFAULT_VALUE,
    bindPlay: NO_DEFAULT_VALUE,
    bindPause: NO_DEFAULT_VALUE,
    bindTimeUpdate: NO_DEFAULT_VALUE,
    bindEnded: NO_DEFAULT_VALUE
};
const Camera = {
    'device-position': singleQuote('back'),
    flash: singleQuote('auto'),
    bindStop: NO_DEFAULT_VALUE,
    bindError: NO_DEFAULT_VALUE
};
const Image = Object.assign({ src: NO_DEFAULT_VALUE, mode: singleQuote('scaleToFill'), 'lazy-load': DEFAULT_FALSE, bindError: NO_DEFAULT_VALUE, bindLoad: NO_DEFAULT_VALUE }, touchEvents);
const LivePlayer = Object.assign({ src: NO_DEFAULT_VALUE, autoplay: DEFAULT_FALSE, muted: DEFAULT_FALSE, orientation: singleQuote('vertical'), 'object-fit': singleQuote('contain'), 'background-mute': DEFAULT_FALSE, 'min-cache': '1', 'max-cache': '3', bindStateChange: NO_DEFAULT_VALUE, bindFullScreenChange: NO_DEFAULT_VALUE, bindNetStatus: NO_DEFAULT_VALUE }, animation);
const Video = Object.assign({ src: NO_DEFAULT_VALUE, duration: NO_DEFAULT_VALUE, controls: DEFAULT_TRUE, 'danmu-list': NO_DEFAULT_VALUE, 'danmu-btn': NO_DEFAULT_VALUE, 'enable-danmu': NO_DEFAULT_VALUE, autoplay: DEFAULT_FALSE, loop: DEFAULT_FALSE, muted: DEFAULT_FALSE, 'initial-time': '0', 'page-gesture': DEFAULT_FALSE, direction: NO_DEFAULT_VALUE, 'show-progress': DEFAULT_TRUE, 'show-fullscreen-btn': DEFAULT_TRUE, 'show-play-btn': DEFAULT_TRUE, 'show-center-play-btn': DEFAULT_TRUE, 'enable-progress-gesture': DEFAULT_TRUE, 'object-fit': singleQuote('contain'), poster: NO_DEFAULT_VALUE, 'show-mute-btn': DEFAULT_FALSE, bindPlay: NO_DEFAULT_VALUE, bindPause: NO_DEFAULT_VALUE, bindEnded: NO_DEFAULT_VALUE, bindTimeUpdate: NO_DEFAULT_VALUE, bindFullScreenChange: NO_DEFAULT_VALUE, bindWaiting: NO_DEFAULT_VALUE, bindError: NO_DEFAULT_VALUE }, animation);
const Canvas = Object.assign({ 'canvas-id': NO_DEFAULT_VALUE, 'disable-scroll': DEFAULT_FALSE, bindError: NO_DEFAULT_VALUE }, touchEvents);
const Ad = {
    'unit-id': NO_DEFAULT_VALUE,
    'ad-intervals': NO_DEFAULT_VALUE,
    bindLoad: NO_DEFAULT_VALUE,
    bindError: NO_DEFAULT_VALUE,
    bindClose: NO_DEFAULT_VALUE
};
const WebView = {
    src: NO_DEFAULT_VALUE,
    bindMessage: NO_DEFAULT_VALUE,
    bindLoad: NO_DEFAULT_VALUE,
    bindError: NO_DEFAULT_VALUE
};
const Block = {};
// For Vue，因为 slot 标签被 vue 占用了
const SlotView = {
    name: NO_DEFAULT_VALUE
};
// For React
// Slot 和 SlotView 最终都会编译成 <view slot={{ i.name }} />
// 因为 <slot name="{{ i.name }}" /> 适用性没有前者高（无法添加类和样式）
// 不给 View 直接加 slot 属性的原因是性能损耗
const Slot = {
    name: NO_DEFAULT_VALUE
};
const NativeSlot = {
    name: NO_DEFAULT_VALUE
};
const internalComponents = {
    View,
    Icon,
    Progress,
    RichText,
    Text,
    Button,
    Checkbox,
    CheckboxGroup,
    Form,
    Input,
    Label,
    Picker,
    PickerView,
    PickerViewColumn,
    Radio,
    RadioGroup,
    Slider,
    Switch,
    CoverImage,
    Textarea,
    CoverView,
    MovableArea,
    MovableView,
    ScrollView,
    Swiper,
    SwiperItem,
    Navigator,
    Audio,
    Camera,
    Image,
    LivePlayer,
    Video,
    Canvas,
    Ad,
    WebView,
    Block,
    Map: MapComp,
    Slot,
    SlotView,
    NativeSlot,
};
const focusComponents = new Set([
    'input',
    'textarea'
]);
const voidElements = new Set([
    'progress',
    'icon',
    'rich-text',
    'input',
    'textarea',
    'slider',
    'switch',
    'audio',
    'ad',
    'official-account',
    'open-data',
    'navigation-bar'
]);
const nestElements = new Map([
    ['view', -1],
    ['catch-view', -1],
    ['cover-view', -1],
    ['static-view', -1],
    ['pure-view', -1],
    ['block', -1],
    ['text', -1],
    ['static-text', 6],
    ['slot', 8],
    ['slot-view', 8],
    ['label', 6],
    ['form', 4],
    ['scroll-view', 4],
    ['swiper', 4],
    ['swiper-item', 4]
]);

function isString(o) {
    return typeof o === 'string';
}
function isFunction(o) {
    return typeof o === 'function';
}
function isNumber(o) {
    return typeof o === 'number';
}
function isBooleanStringLiteral(o) {
    return o === 'true' || o === 'false';
}

var PLATFORM_TYPE;
(function (PLATFORM_TYPE) {
    PLATFORM_TYPE["MINI"] = "mini";
    PLATFORM_TYPE["WEB"] = "web";
    PLATFORM_TYPE["RN"] = "rn";
    PLATFORM_TYPE["HARMONY"] = "harmony";
    PLATFORM_TYPE["QUICK"] = "quickapp";
})(PLATFORM_TYPE || (PLATFORM_TYPE = {}));
({
    h5: {
        type: PLATFORM_TYPE.WEB
    },
    harmony: {
        type: PLATFORM_TYPE.HARMONY
    },
    mini: {
        type: PLATFORM_TYPE.MINI
    },
    rn: {
        type: PLATFORM_TYPE.RN
    },
    quickapp: {
        type: PLATFORM_TYPE.QUICK
    }
});

class Events {
    constructor(opts) {
        var _a;
        this.callbacks = (_a = opts === null || opts === void 0 ? void 0 : opts.callbacks) !== null && _a !== void 0 ? _a : {};
    }
    on(eventName, callback, context) {
        let event, tail, _eventName;
        if (!callback) {
            return this;
        }
        if (typeof eventName === 'symbol') {
            _eventName = [eventName];
        }
        else {
            _eventName = eventName.split(Events.eventSplitter);
        }
        this.callbacks || (this.callbacks = {});
        const calls = this.callbacks;
        while ((event = _eventName.shift())) {
            const list = calls[event];
            const node = list ? list.tail : {};
            node.next = tail = {};
            node.context = context;
            node.callback = callback;
            calls[event] = {
                tail,
                next: list ? list.next : node
            };
        }
        return this;
    }
    once(events, callback, context) {
        const wrapper = (...args) => {
            callback.apply(this, args);
            this.off(events, wrapper, context);
        };
        this.on(events, wrapper, context);
        return this;
    }
    off(events, callback, context) {
        let event, calls, _events;
        if (!(calls = this.callbacks)) {
            return this;
        }
        if (!(events || callback || context)) {
            delete this.callbacks;
            return this;
        }
        if (typeof events === 'symbol') {
            _events = [events];
        }
        else {
            _events = events ? events.split(Events.eventSplitter) : Object.keys(calls);
        }
        while ((event = _events.shift())) {
            let node = calls[event];
            delete calls[event];
            if (!node || !(callback || context)) {
                continue;
            }
            const tail = node.tail;
            while ((node = node.next) !== tail) {
                const cb = node.callback;
                const ctx = node.context;
                if ((callback && cb !== callback) || (context && ctx !== context)) {
                    this.on(event, cb, ctx);
                }
            }
        }
        return this;
    }
    trigger(events, ...args) {
        let event, node, calls, _events;
        if (!(calls = this.callbacks)) {
            return this;
        }
        if (typeof events === 'symbol') {
            _events = [events];
        }
        else {
            _events = events.split(Events.eventSplitter);
        }
        while ((event = _events.shift())) {
            if ((node = calls[event])) {
                const tail = node.tail;
                while ((node = node.next) !== tail) {
                    node.callback.apply(node.context || this, args);
                }
            }
        }
        return this;
    }
}
Events.eventSplitter = ','; // Note: Harmony ACE API 8 开发板不支持使用正则 split 字符串 /\s+/

var HOOK_TYPE;
(function (HOOK_TYPE) {
    HOOK_TYPE[HOOK_TYPE["SINGLE"] = 0] = "SINGLE";
    HOOK_TYPE[HOOK_TYPE["MULTI"] = 1] = "MULTI";
    HOOK_TYPE[HOOK_TYPE["WATERFALL"] = 2] = "WATERFALL";
})(HOOK_TYPE || (HOOK_TYPE = {}));
const defaultMiniLifecycle = {
    app: [
        'onLaunch',
        'onShow',
        'onHide'
    ],
    page: [
        'onLoad',
        'onUnload',
        'onReady',
        'onShow',
        'onHide',
        [
            'onPullDownRefresh',
            'onReachBottom',
            'onPageScroll',
            'onResize',
            'defer:onTabItemTap',
            'onTitleClick',
            'onOptionMenuClick',
            'onPopMenuClick',
            'onPullIntercept',
            'onAddToFavorites'
        ],
        [
            'onShareAppMessage',
            'onShareTimeline'
        ]
    ],
    component: [
        'attached',
        'detached'
    ]
};
function TaroHook(type, initial) {
    return {
        type,
        initial: initial || null
    };
}
class TaroHooks extends Events {
    constructor(hooks, opts) {
        super(opts);
        this.hooks = hooks;
        for (const hookName in hooks) {
            const { initial } = hooks[hookName];
            if (isFunction(initial)) {
                this.on(hookName, initial);
            }
        }
    }
    tapOneOrMany(hookName, callback) {
        const list = isFunction(callback) ? [callback] : callback;
        list.forEach(cb => this.on(hookName, cb));
    }
    tap(hookName, callback) {
        const hooks = this.hooks;
        const { type, initial } = hooks[hookName];
        if (type === HOOK_TYPE.SINGLE) {
            this.off(hookName);
            this.on(hookName, isFunction(callback) ? callback : callback[callback.length - 1]);
        }
        else {
            initial && this.off(hookName, initial);
            this.tapOneOrMany(hookName, callback);
        }
    }
    call(hookName, ...rest) {
        var _a;
        const hook = this.hooks[hookName];
        if (!hook)
            return;
        const { type } = hook;
        const calls = this.callbacks;
        if (!calls)
            return;
        const list = calls[hookName];
        if (list) {
            const tail = list.tail;
            let node = list.next;
            let args = rest;
            let res;
            while (node !== tail) {
                res = (_a = node.callback) === null || _a === void 0 ? void 0 : _a.apply(node.context || this, args);
                if (type === HOOK_TYPE.WATERFALL) {
                    const params = [res];
                    args = params;
                }
                node = node.next;
            }
            return res;
        }
    }
    isExist(hookName) {
        var _a;
        return Boolean((_a = this.callbacks) === null || _a === void 0 ? void 0 : _a[hookName]);
    }
}
new TaroHooks({
    getMiniLifecycle: TaroHook(HOOK_TYPE.SINGLE, defaultConfig => defaultConfig),
    getMiniLifecycleImpl: TaroHook(HOOK_TYPE.SINGLE, function () {
        return this.call('getMiniLifecycle', defaultMiniLifecycle);
    }),
    getLifecycle: TaroHook(HOOK_TYPE.SINGLE, (instance, lifecycle) => instance[lifecycle]),
    getPathIndex: TaroHook(HOOK_TYPE.SINGLE, indexOfNode => `[${indexOfNode}]`),
    getEventCenter: TaroHook(HOOK_TYPE.SINGLE, Events => new Events()),
    isBubbleEvents: TaroHook(HOOK_TYPE.SINGLE, eventName => {
        /**
         * 支持冒泡的事件, 除 支付宝小程序外，其余的可冒泡事件都和微信保持一致
         * 详见 见 https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html
         */
        const BUBBLE_EVENTS = new Set([
            'touchstart',
            'touchmove',
            'touchcancel',
            'touchend',
            'touchforcechange',
            'tap',
            'longpress',
            'longtap',
            'transitionend',
            'animationstart',
            'animationiteration',
            'animationend'
        ]);
        return BUBBLE_EVENTS.has(eventName);
    }),
    getSpecialNodes: TaroHook(HOOK_TYPE.SINGLE, () => ['view', 'text', 'image']),
    onRemoveAttribute: TaroHook(HOOK_TYPE.SINGLE),
    batchedEventUpdates: TaroHook(HOOK_TYPE.SINGLE),
    mergePageInstance: TaroHook(HOOK_TYPE.SINGLE),
    modifyPageObject: TaroHook(HOOK_TYPE.SINGLE),
    createPullDownComponent: TaroHook(HOOK_TYPE.SINGLE),
    getDOMNode: TaroHook(HOOK_TYPE.SINGLE),
    modifyHydrateData: TaroHook(HOOK_TYPE.SINGLE),
    modifySetAttrPayload: TaroHook(HOOK_TYPE.SINGLE),
    modifyRmAttrPayload: TaroHook(HOOK_TYPE.SINGLE),
    onAddEvent: TaroHook(HOOK_TYPE.SINGLE),
    proxyToRaw: TaroHook(HOOK_TYPE.SINGLE, function (proxyObj) {
        return proxyObj;
    }),
    modifyMpEvent: TaroHook(HOOK_TYPE.MULTI),
    modifyMpEventImpl: TaroHook(HOOK_TYPE.SINGLE, function (e) {
        try {
            // 有些小程序的事件对象的某些属性只读
            this.call('modifyMpEvent', e);
        }
        catch (error) {
            console.warn('[Taro modifyMpEvent hook Error]: ' + (error === null || error === void 0 ? void 0 : error.message));
        }
    }),
    injectNewStyleProperties: TaroHook(HOOK_TYPE.SINGLE),
    modifyTaroEvent: TaroHook(HOOK_TYPE.MULTI),
    dispatchTaroEvent: TaroHook(HOOK_TYPE.SINGLE, (e, node) => {
        node.dispatchEvent(e);
    }),
    dispatchTaroEventFinish: TaroHook(HOOK_TYPE.MULTI),
    modifyDispatchEvent: TaroHook(HOOK_TYPE.MULTI),
    initNativeApi: TaroHook(HOOK_TYPE.MULTI),
    patchElement: TaroHook(HOOK_TYPE.MULTI)
});

function toDashed(s) {
    return s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}
function toCamelCase(s) {
    let camel = '';
    let nextCap = false;
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '-') {
            camel += nextCap ? s[i].toUpperCase() : s[i];
            nextCap = false;
        }
        else {
            nextCap = true;
        }
    }
    return camel;
}
const toKebabCase = function (string) {
    return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
(new Date()).getTime().toString();
function getComponentsAlias(origin) {
    const mapping = {};
    const viewAttrs = origin.View;
    const extraList = {
        '#text': {},
        StaticView: viewAttrs,
        StaticImage: origin.Image,
        StaticText: origin.Text,
        PureView: viewAttrs,
        CatchView: viewAttrs
    };
    origin = Object.assign(Object.assign({}, origin), extraList);
    Object.keys(origin)
        .sort((a, b) => {
        const reg = /^(Static|Pure|Catch)*(View|Image|Text)$/;
        const isACommonly = reg.test(a);
        const isBCommonly = reg.test(b);
        if (isACommonly && isBCommonly) {
            return a > b ? 1 : -1;
        }
        else if (isACommonly) {
            return -1;
        }
        else if (isBCommonly) {
            return 1;
        }
        else {
            return a >= b ? 1 : -1;
        }
    })
        .forEach((key, num) => {
        const obj = {
            _num: String(num)
        };
        Object.keys(origin[key])
            .filter(attr => !(/^bind/.test(attr)) && !['focus', 'blur'].includes(attr))
            .sort()
            .forEach((attr, index) => {
            obj[toCamelCase(attr)] = 'p' + index;
        });
        mapping[toDashed(key)] = obj;
    });
    return mapping;
}
function indent(str, size) {
    return str.split('\n')
        .map((line, index) => {
        const indent = index === 0 ? '' : Array(size).fill(' ').join('');
        return indent + line;
    })
        .join('\n');
}

/**
 * 这里我们需要关心的小程序种类有两类：
 * 1. 模板递归：
 *  - 支持：tmpl0 套 tmpl0
 *  - 不支持：这就使得我们必须生成多级的模板，tmpl0 套 tmpl1，tmpl1 套 tmpl2……
 *           直到超过阈值 N (N = config.miniapp.baseLevel) tmplN 会套组件 comp，组件 comp 重新再套 tmpl0。
 * 2. 小程序脚本语言（wxs, sjs, etc...）：
 *  - 支持：可以在模板使用函数缩减模板大小或提高性能（存疑），例如判断一个值是不是假值（falsy value）。
 *         将来或许会把数据序列化^1 的操作也放到小程序脚本语言里。
 *  - 不支持：使用纯 *xml 语法
 *
 * ^1: packages/taro-runtime/src/hydrate.ts
*/
const styles = {
    style: `i.${"st" /* Shortcuts.Style */}`,
    class: `i.${"cl" /* Shortcuts.Class */}`
};
const events = {
    bindtap: 'eh'
};
const weixinAdapter = {
    if: 'wx:if',
    else: 'wx:else',
    elseif: 'wx:elif',
    for: 'wx:for',
    forItem: 'wx:for-item',
    forIndex: 'wx:for-index',
    key: 'wx:key',
    xs: 'wxs',
    type: 'weapp'
};
class BaseTemplate {
    constructor() {
        this._baseLevel = 0;
        this.exportExpr = 'module.exports =';
        this.thirdPartyPatcher = {};
        this.supportXS = false;
        this.Adapter = weixinAdapter;
        /** 组件列表 */
        this.internalComponents = internalComponents;
        /** 可以 focus 聚焦的组件 */
        this.focusComponents = focusComponents;
        /** 不需要渲染子节点的元素 */
        this.voidElements = voidElements;
        /** 可以递归调用自身的组件 */
        this.nestElements = nestElements;
        this.buildPageTemplate = (baseTempPath) => {
            const template = `<import src="${baseTempPath}"/>
<template is="taro_tmpl" data="{{${this.dataKeymap('root:root')}}}" />`;
            return template;
        };
        this.buildBaseComponentTemplate = (ext) => {
            const data = !this.isSupportRecursive && this.supportXS
                ? this.dataKeymap('i:i,c:1,l:l')
                : this.isSupportRecursive
                    ? this.dataKeymap('i:i')
                    : this.dataKeymap('i:i,c:1');
            return `<import src="./base${ext}" />
<template is="{{'tmpl_0_' + i.nn}}" data="{{${data}}}" />`;
        };
        this.buildCustomComponentTemplate = (ext) => {
            const Adapter = this.Adapter;
            const data = !this.isSupportRecursive && this.supportXS
                ? `${this.dataKeymap('i:item,c:1,l:\'\'')}`
                : this.isSupportRecursive
                    ? this.dataKeymap('i:item')
                    : this.dataKeymap('i:item,c:1');
            return `<import src="./base${ext}" />
  <block ${Adapter.for}="{{i.${"cn" /* Shortcuts.Childnodes */}}}" ${Adapter.key}="sid">
    <template is="{{'tmpl_0_' + item.nn}}" data="{{${data}}}" />
  </block>`;
        };
        this.buildXScript = () => {
            return `${this.exportExpr} {
  a: ${this.buildXSTmplName()},
  b: function (a, b) {
    return a === undefined ? b : a
  },
  c: ${this.buildXSTepFocus("nn" /* Shortcuts.NodeName */)},
  e: function (n) {
    return 'tmpl_' + n + '_${"container" /* Shortcuts.Container */}'
  },
  ${this.buildXSTmpExtra()}
}`;
        };
    }
    set baseLevel(lv) {
        this._baseLevel = lv;
    }
    get baseLevel() {
        return this._baseLevel;
    }
    buildAttribute(attrs, nodeName) {
        return Object.keys(attrs)
            .map(k => `${k}="${k.startsWith('bind') || k.startsWith('on') || k.startsWith('catch') ? attrs[k] : `{${this.getAttrValue(attrs[k], k, nodeName)}}`}" `)
            .join('');
    }
    replacePropName(name, value, _componentName, _componentAlias) {
        if (value === 'eh')
            return name.toLowerCase();
        return name;
    }
    createMiniComponents(components) {
        const result = Object.create(null);
        for (const key in components) {
            if (hasOwn(components, key)) {
                let component = components[key];
                const compName = toDashed(key);
                const newComp = Object.create(null);
                const componentAlias = this.componentsAlias[compName];
                if (isFunction(this.modifyCompProps)) {
                    component = this.modifyCompProps(compName, component);
                }
                for (let prop in component) {
                    if (hasOwn(component, prop)) {
                        let propValue = component[prop];
                        if (prop.startsWith('bind') || propValue === 'eh') {
                            propValue = 'eh';
                        }
                        else if (propValue === '') {
                            const propInCamelCase = toCamelCase(prop);
                            const propAlias = componentAlias[propInCamelCase] || propInCamelCase;
                            propValue = `i.${propAlias}`;
                        }
                        else if (isBooleanStringLiteral(propValue) || isNumber(+propValue)) {
                            const propInCamelCase = toCamelCase(prop);
                            const propAlias = componentAlias[propInCamelCase] || propInCamelCase;
                            // cursor 默认取最后输入框最后一位 fix #13809
                            if (prop === 'cursor') {
                                propValue = `i.${componentAlias.value}?i.${componentAlias.value}.length:-1`;
                            }
                            propValue = this.supportXS
                                ? `xs.b(i.${propAlias},${propValue})`
                                : `i.${propAlias}===undefined?${propValue}:i.${propAlias}`;
                        }
                        else {
                            const propInCamelCase = toCamelCase(prop);
                            const propAlias = componentAlias[propInCamelCase] || propInCamelCase;
                            propValue = `i.${propAlias}||${propValue || singleQuote('')}`;
                        }
                        prop = this.replacePropName(prop, propValue, compName, componentAlias);
                        newComp[prop] = propValue;
                    }
                }
                if (compName !== 'block') {
                    Object.assign(newComp, styles, this.getEvents());
                }
                if (compName === 'swiper-item') {
                    delete newComp.style;
                }
                if (compName === 'view') {
                    const reg = /^(bind|on)(touchmove|TouchMove)$/;
                    const comp = Object.assign({}, newComp);
                    Object.keys(comp).forEach(originKey => {
                        if (!reg.test(originKey))
                            return;
                        const key = originKey.replace(reg, 'catch$2');
                        comp[key] = comp[originKey];
                        delete comp[originKey];
                    });
                    result['catch-view'] = comp;
                }
                if (compName === 'view' || compName === 'text' || compName === 'image') {
                    const comp = {};
                    Object.keys(newComp).forEach(key => {
                        const value = newComp[key];
                        if (value !== 'eh')
                            comp[key] = value;
                    });
                    result[`static-${compName}`] = comp;
                    if (compName === 'view') {
                        result['pure-view'] = {
                            style: comp.style,
                            class: comp.class
                        };
                    }
                }
                if (compName === 'slot' || compName === 'slot-view') {
                    result[compName] = Object.assign({ slot: newComp === null || newComp === void 0 ? void 0 : newComp.name }, styles);
                }
                else if (compName === 'native-slot') {
                    result[compName] = {
                        name: newComp === null || newComp === void 0 ? void 0 : newComp.name,
                    };
                }
                else {
                    result[compName] = newComp;
                }
            }
        }
        return result;
    }
    buildBaseTemplate() {
        const Adapter = this.Adapter;
        const data = !this.isSupportRecursive && this.supportXS
            ? `${this.dataKeymap('i:item,c:1,l:\'\'')}`
            : this.isSupportRecursive
                ? this.dataKeymap('i:item')
                : this.dataKeymap('i:item,c:1');
        const xs = this.supportXS
            ? (this.isSupportRecursive
                ? `xs.a(0, item.${"nn" /* Shortcuts.NodeName */})`
                : `xs.a(0, item.${"nn" /* Shortcuts.NodeName */}, '')`)
            : "'tmpl_0_' + item.nn";
        return `${this.buildXsTemplate()}
<template name="taro_tmpl">
  <block ${Adapter.for}="{{root.cn}}" ${Adapter.key}="sid">
    <template is="{{${xs}}}" data="{{${data}}}" />
  </block>
</template>
`;
    }
    buildThirdPartyAttr(attrs, patcher = {}) {
        return Array.from(attrs).reduce((str, attr) => {
            if (attr.startsWith('@')) {
                // vue2
                let value = attr.slice(1);
                if (value.indexOf('-') > -1) {
                    value = `:${value}`;
                }
                return str + `bind${value}="eh" `;
            }
            else if (attr.startsWith('bind')) {
                return str + `${attr}="eh" `;
            }
            else if (attr.startsWith('on')) {
                // react, vue3
                let value = toKebabCase(attr.slice(2));
                if (value.indexOf('-') > -1) {
                    // 兼容如 vant 某些组件的 bind:a-b 这类属性
                    value = `:${value}`;
                }
                return str + `bind${value}="eh" `;
            }
            else if (attr === 'class') {
                return str + `class="{{i.${"cl" /* Shortcuts.Class */}}}" `;
            }
            else if (attr === 'style') {
                return str + `style="{{i.${"st" /* Shortcuts.Style */}}}" `;
            }
            const patchValue = patcher[attr];
            if (isBooleanStringLiteral(patchValue) || isNumber(patchValue) || isString(patchValue)) {
                const propValue = this.supportXS
                    ? `xs.b(i.${toCamelCase(attr)},${patchValue})`
                    : `i.${toCamelCase(attr)}===undefined?${patchValue}:i.${toCamelCase(attr)}`;
                return str + `${attr}="{{${propValue}}}" `;
            }
            return str + `${attr}="{{i.${toCamelCase(attr)}}}" `;
        }, '');
    }
    buildComponentTemplate(comp, level) {
        return this.focusComponents.has(comp.nodeName)
            ? this.buildFocusComponentTemplate(comp, level)
            : this.buildStandardComponentTemplate(comp, level);
    }
    getChildrenTemplate(level) {
        const { isSupportRecursive, supportXS } = this;
        const isLastRecursiveComp = !isSupportRecursive && level + 1 === this.baseLevel;
        const isUseXs = !this.isSupportRecursive && this.supportXS;
        if (isLastRecursiveComp) {
            const data = isUseXs
                ? `${this.dataKeymap('i:item,c:c,l:l')}`
                : this.isSupportRecursive
                    ? this.dataKeymap('i:item')
                    : this.dataKeymap('i:item,c:c');
            return supportXS
                ? `<template is="{{xs.e(${level})}}" data="{{${data}}}" />`
                : `<template is="tmpl_${level}_${"container" /* Shortcuts.Container */}" data="{{${data}}}" />`;
        }
        else {
            const data = isUseXs
                ? `${this.dataKeymap(`i:item,c:c+1,l:xs.f(l,item.${"nn" /* Shortcuts.NodeName */})`)}`
                : this.isSupportRecursive
                    ? `${this.dataKeymap('i:item')}`
                    : `${this.dataKeymap('i:item,c:c+1')}`;
            const xs = !this.isSupportRecursive
                ? `xs.a(c, item.${"nn" /* Shortcuts.NodeName */}, l)`
                : `xs.a(0, item.${"nn" /* Shortcuts.NodeName */})`;
            return supportXS
                ? `<template is="{{${xs}}}" data="{{${data}}}" />`
                : isSupportRecursive
                    ? `<template is="{{'tmpl_0_' + item.nn}}" data="{{${data}}}" />`
                    : `<template is="{{'tmpl_' + c + '_' + item.nn}}" data="{{${data}}}" />`;
        }
    }
    getChildren(comp, level) {
        const { isSupportRecursive, Adapter } = this;
        const nextLevel = isSupportRecursive ? 0 : level + 1;
        let child = this.getChildrenTemplate(nextLevel);
        if (isFunction(this.modifyLoopBody)) {
            child = this.modifyLoopBody(child, comp.nodeName);
        }
        let children = this.voidElements.has(comp.nodeName)
            ? ''
            : `
    <block ${Adapter.for}="{{i.${"cn" /* Shortcuts.Childnodes */}}}" ${Adapter.key}="sid">
      ${indent(child, 6)}
    </block>
  `;
        if (isFunction(this.modifyLoopContainer)) {
            children = this.modifyLoopContainer(children, comp.nodeName);
        }
        return children;
    }
    buildFocusComponentTemplate(comp, level) {
        const children = this.getChildren(comp, level);
        const nodeName = comp.nodeName;
        const nodeAlias = comp.nodeAlias;
        const attrs = Object.assign({}, comp.attributes);
        const templateName = this.supportXS
            ? `xs.c(i, 'tmpl_${level}_')`
            : `i.focus ? 'tmpl_${level}_${nodeAlias}_focus' : 'tmpl_${level}_${nodeAlias}_blur'`;
        delete attrs.focus;
        let res = `
<template name="tmpl_${level}_${nodeAlias}">
  <template is="{{${templateName}}}" data="{{${this.isSupportRecursive ? this.dataKeymap('i:i') : this.dataKeymap('i:i,c:c')}}}" />
</template>

<template name="tmpl_${level}_${nodeAlias}_focus">
  <${nodeName} ${this.buildAttribute(comp.attributes, nodeName)} id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">${children}</${nodeName}>
</template>

<template name="tmpl_${level}_${nodeAlias}_blur">
  <${nodeName} ${this.buildAttribute(attrs, nodeName)} id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">${children}</${nodeName}>
</template>
`;
        if (isFunction(this.modifyTemplateResult)) {
            res = this.modifyTemplateResult(res, nodeName, level, children);
        }
        return res;
    }
    buildStandardComponentTemplate(comp, level) {
        const children = this.getChildren(comp, level);
        const nodeAlias = comp.nodeAlias;
        let nodeName = '';
        switch (comp.nodeName) {
            case 'slot':
            case 'slot-view':
            case 'catch-view':
            case 'static-view':
            case 'pure-view':
                nodeName = 'view';
                break;
            case 'static-text':
                nodeName = 'text';
                break;
            case 'static-image':
                nodeName = 'image';
                break;
            case 'native-slot':
                nodeName = 'slot';
                break;
            default:
                nodeName = comp.nodeName;
                break;
        }
        let res = `
<template name="tmpl_${level}_${nodeAlias}">
  <${nodeName} ${this.buildAttribute(comp.attributes, comp.nodeName)} id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">${children}</${nodeName}>
</template>
`;
        if (isFunction(this.modifyTemplateResult)) {
            res = this.modifyTemplateResult(res, comp.nodeName, level, children);
        }
        return res;
    }
    buildPlainTextTemplate(level) {
        return `
<template name="tmpl_${level}_${this.componentsAlias['#text']._num}">
  <block>{{i.${"v" /* Shortcuts.Text */}}}</block>
</template>
`;
    }
    buildThirdPartyTemplate(level, componentConfig) {
        const { Adapter, isSupportRecursive, supportXS, nestElements } = this;
        const nextLevel = isSupportRecursive ? 0 : level + 1;
        let template = '';
        componentConfig.thirdPartyComponents.forEach((attrs, compName) => {
            if (compName === 'custom-wrapper') {
                template += `
<template name="tmpl_${level}_${compName}">
  <${compName} i="{{i}}" l="{{l}}" id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
  </${compName}>
</template>
  `;
            }
            else {
                if (!isSupportRecursive && supportXS && nestElements.has(compName) && level + 1 > nestElements.get(compName))
                    return;
                let child = this.getChildrenTemplate(nextLevel);
                if (isFunction(this.modifyThirdPartyLoopBody)) {
                    child = this.modifyThirdPartyLoopBody(child, compName);
                }
                template += `
<template name="tmpl_${level}_${compName}">
  <${compName} ${this.buildThirdPartyAttr(attrs, this.thirdPartyPatcher[compName] || {})} id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block ${Adapter.for}="{{i.${"cn" /* Shortcuts.Childnodes */}}}" ${Adapter.key}="sid">
      ${child}
    </block>
  </${compName}>
</template>
  `;
            }
        });
        return template;
    }
    // 最后一层的 comp 需要引用 container 进行重新的模版循环，其他情况不需要 container
    buildContainerTemplate(level) {
        const tmpl = `<block ${this.Adapter.if}="{{i.nn === '${this.componentsAlias['#text']._num}'}}">
    <template is="tmpl_0_${this.componentsAlias['#text']._num}" data="{{${this.dataKeymap('i:i')}}}" />
  </block>
  <block ${this.Adapter.else}>
    ${!this.isSupportRecursive && this.supportXS ? '<comp i="{{i}}" l="{{l}}" />' : '<comp i="{{i}}" />'}
  </block>`;
        return `
<template name="tmpl_${level}_${"container" /* Shortcuts.Container */}">
  ${tmpl}
</template>
`;
    }
    dataKeymap(keymap) {
        return keymap;
    }
    getEvents() {
        return events;
    }
    getAttrValue(value, _key, _nodeName) {
        return `{${value}}`;
    }
    buildXsTemplate() {
        return '';
    }
    mergeComponents(ctx, patch) {
        ctx.helper.recursiveMerge(this.internalComponents, patch);
    }
    mergeThirdPartyComponents(patch) {
        this.thirdPartyPatcher = patch;
    }
    buildXSTmplName() {
        return `function (l, n) {
    return 'tmpl_' + l + '_' + n
  }`;
    }
    buildXSTepFocus(nn) {
        return `function(i, prefix) {
    var s = i.focus !== undefined ? 'focus' : 'blur'
    return prefix + i.${nn} + '_' + s
  }`;
    }
    buildXSTmpExtra() {
        return '';
    }
}
class RecursiveTemplate extends BaseTemplate {
    constructor() {
        super(...arguments);
        this.isSupportRecursive = true;
        this.buildTemplate = (componentConfig) => {
            let template = this.buildBaseTemplate();
            if (!this.miniComponents) {
                this.componentsAlias = getComponentsAlias(this.internalComponents);
                this.miniComponents = this.createMiniComponents(this.internalComponents);
            }
            const ZERO_FLOOR = 0;
            const components = Object.keys(this.miniComponents)
                .filter(c => componentConfig.includes.size && !componentConfig.includeAll ? componentConfig.includes.has(c) : true);
            template = components.reduce((current, nodeName) => {
                const attributes = this.miniComponents[nodeName];
                const nodeAlias = this.componentsAlias[nodeName]._num;
                return current + this.buildComponentTemplate({ nodeName, nodeAlias, attributes }, ZERO_FLOOR);
            }, template);
            template += this.buildPlainTextTemplate(ZERO_FLOOR);
            template += this.buildThirdPartyTemplate(ZERO_FLOOR, componentConfig);
            return template;
        };
    }
}
class UnRecursiveTemplate extends BaseTemplate {
    constructor() {
        super(...arguments);
        this.isSupportRecursive = false;
        this._baseLevel = 16;
        this.buildTemplate = (componentConfig) => {
            this.componentConfig = componentConfig;
            if (!this.miniComponents) {
                this.componentsAlias = getComponentsAlias(this.internalComponents);
                this.miniComponents = this.createMiniComponents(this.internalComponents);
            }
            const components = Object.keys(this.miniComponents)
                .filter(c => componentConfig.includes.size && !componentConfig.includeAll ? componentConfig.includes.has(c) : true);
            let template = this.buildBaseTemplate();
            for (let i = 0; i < this.baseLevel; i++) {
                template += this.supportXS
                    ? this.buildOptimizeFloor(i, components, this.baseLevel === i + 1)
                    : this.buildFloor(i, components, this.baseLevel === i + 1);
            }
            return template;
        };
    }
    buildFloor(level, components, restart = false) {
        if (restart)
            return this.buildContainerTemplate(level);
        let template = components.reduce((current, nodeName) => {
            const attributes = this.miniComponents[nodeName];
            const nodeAlias = this.componentsAlias[nodeName]._num;
            return current + this.buildComponentTemplate({ nodeName, nodeAlias, attributes }, level);
        }, '');
        template += this.buildPlainTextTemplate(level);
        template += this.buildThirdPartyTemplate(level, this.componentConfig);
        return template;
    }
    buildOptimizeFloor(level, components, restart = false) {
        if (restart)
            return this.buildContainerTemplate(level);
        let template = components.reduce((current, nodeName) => {
            if (level !== 0) {
                if (!this.nestElements.has(nodeName)) {
                    // 不可嵌套自身的组件只需输出一层模板
                    return current;
                }
                else {
                    // 部分可嵌套自身的组件实际上不会嵌套过深，这里按阈值限制层数
                    const max = this.nestElements.get(nodeName);
                    if (max > 0 && level >= max) {
                        return current;
                    }
                }
            }
            const attributes = this.miniComponents[nodeName];
            const nodeAlias = this.componentsAlias[nodeName]._num;
            return current + this.buildComponentTemplate({ nodeName, nodeAlias, attributes }, level);
        }, '');
        if (level === 0)
            template += this.buildPlainTextTemplate(level);
        template += this.buildThirdPartyTemplate(level, this.componentConfig);
        return template;
    }
    buildXSTmplName() {
        const isLoopComps = [
            ...Array.from(this.nestElements.keys()),
            ...Array.from(this.componentConfig.thirdPartyComponents.keys())
        ];
        const isLoopCompsSet = new Set(isLoopComps);
        const hasMaxComps = [];
        this.nestElements.forEach((max, comp) => {
            if (max > 1) {
                hasMaxComps.push(comp);
            }
            else if (max === 1 && isLoopCompsSet.has(comp)) {
                isLoopCompsSet.delete(comp);
            }
        });
        const componentsAlias = this.componentsAlias;
        const listA = Array.from(isLoopCompsSet).map(item => { var _a; return ((_a = componentsAlias[item]) === null || _a === void 0 ? void 0 : _a._num) || item; });
        const listB = hasMaxComps.map(item => { var _a; return ((_a = componentsAlias[item]) === null || _a === void 0 ? void 0 : _a._num) || item; });
        const containerLevel = this.baseLevel - 1;
        return `function (l, n, s) {
    var a = ${JSON.stringify(listA)}
    var b = ${JSON.stringify(listB)}
    if (a.indexOf(n) === -1) {
      l = 0
    }
    if (b.indexOf(n) > -1) {
      var u = s.split(',')
      var depth = 0
      for (var i = 0; i < u.length; i++) {
        if (u[i] === n) depth++
      }
      l = depth
    }
    if (l === ${containerLevel}) {
      return 'tmpl_${containerLevel}_${"container" /* Shortcuts.Container */}'
    }
    return 'tmpl_' + l + '_' + n
  }`;
    }
    buildXSTmpExtra() {
        const hasMaxComps = [];
        this.nestElements.forEach((max, comp) => {
            if (max > 1)
                hasMaxComps.push(comp);
        });
        const componentsAlias = this.componentsAlias;
        const listA = hasMaxComps.map(item => { var _a; return ((_a = componentsAlias[item]) === null || _a === void 0 ? void 0 : _a._num) || item; });
        return `f: function (l, n) {
    var b = ${JSON.stringify(listA)}
    if (b.indexOf(n) > -1) {
      if (l) l += ','
      l += n
    }
    return l
  }`;
    }
}

template.BaseTemplate = BaseTemplate;
template.RecursiveTemplate = RecursiveTemplate;
var UnRecursiveTemplate_1 = template.UnRecursiveTemplate = UnRecursiveTemplate;
template.capitalize = capitalize;
template.events = events;
template.internalComponents = internalComponents;
template.styles = styles;
template.toCamelCase = toCamelCase;

class Template extends UnRecursiveTemplate_1 {
    constructor(pluginOptions) {
        super();
        this.supportXS = true;
        this.Adapter = {
            if: 'wx:if',
            else: 'wx:else',
            elseif: 'wx:elif',
            for: 'wx:for',
            forItem: 'wx:for-item',
            forIndex: 'wx:for-index',
            key: 'wx:key',
            xs: 'wxs',
            type: 'weapp'
        };
        this.modifyTemplateResult = (res, nodeName, _, children) => {
            if (nodeName === 'keyboard-accessory')
                return '';
            if ((nodeName === 'textarea' || nodeName === 'input') && this.pluginOptions.enablekeyboardAccessory) {
                const list = res.split('</template>');
                const componentAlias = this.componentsAlias[nodeName];
                const nodeNameAlias = componentAlias._num;
                const xs = `xs.a(c, item.${"nn" /* Shortcuts.NodeName */}, l)`;
                const target = `
    <keyboard-accessory style="{{i.cn[0].st}}" class="{{i.cn[0].cl}}" bindtap="eh"  id="{{i.cn[0].uid||i.cn[0].sid}}" data-sid="{{i.cn[0].sid}}">
      <block wx:for="{{i.cn[0].cn}}" wx:key="sid">
        <template is="{{${xs}}}" data="{{i:item,c:c+1,l:xs.f(l,item.${"nn" /* Shortcuts.NodeName */})}}" />
      </block>
    </keyboard-accessory>
  `;
                const templateFocus = list[1]
                    .replace(children, target)
                    .replace(`_${nodeNameAlias}_focus`, `_${nodeNameAlias}_focus_ka`);
                const templateBlur = list[2]
                    .replace(children, target)
                    .replace(`_${nodeNameAlias}_blur`, `_${nodeNameAlias}_blur_ka`);
                list.splice(3, 0, templateFocus, templateBlur);
                return list.join('</template>');
            }
            return res;
        };
        this.pluginOptions = pluginOptions || {};
    }
    buildXsTemplate() {
        return '<wxs module="xs" src="./utils.wxs" />';
    }
    replacePropName(name, value, componentName, componentAlias) {
        if (value === 'eh') {
            const nameLowerCase = name.toLowerCase();
            if (nameLowerCase === 'bindlongtap' && componentName !== 'canvas')
                return 'bindlongpress';
            return nameLowerCase;
        }
        if (componentName === 'share-element') {
            const mapKeyAlias = componentAlias.mapkey;
            if (value === `i.${mapKeyAlias}`)
                return 'key';
        }
        return name;
    }
    buildXSTepFocus(nn) {
        if (this.pluginOptions.enablekeyboardAccessory) {
            const textarea = this.componentsAlias.textarea._num;
            const input = this.componentsAlias.input._num;
            const ka = this.componentsAlias['keyboard-accessory']._num;
            return `function(i, prefix) {
      var s = i.focus !== undefined ? 'focus' : 'blur'
      var r = prefix + i.${nn} + '_' + s
      if ((i.nn === '${textarea}' || i.nn === '${input}') && i.cn[0] && i.cn[0].nn === '${ka}') {
        r = r + '_ka'
      }
      return r
    }`;
        }
        else {
            return super.buildXSTepFocus(nn);
        }
    }
}

class PostProcessPlugin {
    apply(compiler) {
        if (compiler.options.optimization.minimizer.length) {
            compiler.options.optimization.minimizer[0].options.test =
                /\.(b|m)?js(\?.*)?$/i;
        }
        compiler.hooks.compilation.tap('post-process-plugin', (compilation) => {
            compilation.hooks.optimizeChunks.tap('modify-script-name', (chunks) => {
                const plugins = compilation.options.plugins.filter((p) => p.constructor.name === 'TaroMiniPlugin');
                if (plugins.length) {
                    const miniPlugin = plugins[0];
                    const pageNames = [
                        ...miniPlugin.pages,
                        ...miniPlugin.components,
                    ].map((p) => p.name);
                    chunks.forEach((chunk) => {
                        if (pageNames.indexOf(chunk.name) >= 0) {
                            chunk.filenameTemplate = '[name].js';
                        }
                    });
                }
            });
        });
    }
}
class Weapp extends service.TaroPlatformBase {
    /**
     * 1. setupTransaction - init
     * 2. setup
     * 3. setupTransaction - close
     * 4. buildTransaction - init
     * 5. build
     * 6. buildTransaction - close
     */
    constructor(ctx, config, pluginOptions) {
        super(ctx, config);
        this.platform = 'bmp';
        this.globalObject = 'globalThis';
        this.projectConfigJson = this.config.projectConfigName || 'project.config.json';
        this.runtimePath = `${__dirname}/runtime`;
        this.taroComponentsPath = `${__dirname}/components-react`;
        this.fileType = {
            templ: '.bxml',
            style: '.bxss',
            config: '.json',
            script: '.js',
            xs: '.bxs',
        };
        this.template = new Template(pluginOptions);
        this.setupTransaction.addWrapper({
            close() {
                this.modifyTemplate(pluginOptions);
                this.modifyWebpackConfig();
            }
        });
    }
    /**
     * 增加组件或修改组件属性
     */
    modifyTemplate(pluginOptions) {
        const template = this.template;
        template.mergeComponents(this.ctx, components);
        template.voidElements.add('voip-room');
        template.focusComponents.add('editor');
        if (pluginOptions === null || pluginOptions === void 0 ? void 0 : pluginOptions.enablekeyboardAccessory) {
            template.voidElements.delete('input');
            template.voidElements.delete('textarea');
        }
    }
    /**
     * 修改 Webpack 配置
     */
    modifyWebpackConfig() {
        this.ctx.modifyWebpackChain(({ chain }) => {
            // 解决微信小程序 sourcemap 映射失败的问题，#9412
            chain.output.devtoolModuleFilenameTemplate((info) => {
                const resourcePath = info.resourcePath.replace(/[/\\]/g, '_');
                return `webpack://${info.namespace}/${resourcePath}`;
            });
            chain.resolve.alias.set('@tarojs/taro', path__default["default"].dirname(resolve__default["default"].sync('@tarojs/taro', { basedir: __dirname })));
            chain.resolve.alias.set('@tarojs/api', path__default["default"].dirname(resolve__default["default"].sync('@tarojs/api', { basedir: __dirname })));
            chain.resolve.alias.set('@tarojs/components$', this.taroComponentsPath);
            chain.output.publicPath('');
            chain.merge({
                plugin: {
                    postProcessPlugin: {
                        plugin: PostProcessPlugin,
                    },
                },
            });
        });
    }
}

var index = (ctx, options) => {
    ctx.registerPlatform({
        name: 'bmp',
        useConfigName: 'mini',
        fn({ config }) {
            return __awaiter(this, void 0, void 0, function* () {
                const program = new Weapp(ctx, config, options || {});
                yield program.start();
            });
        }
    });
};

exports["default"] = index;
//# sourceMappingURL=index.js.map
