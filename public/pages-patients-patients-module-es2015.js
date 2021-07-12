(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-patients-patients-module"],{

/***/ "./node_modules/@tinymce/tinymce-angular/__ivy_ngcc__/fesm2015/tinymce-tinymce-angular.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-angular/__ivy_ngcc__/fesm2015/tinymce-tinymce-angular.js ***!
  \************************************************************************************************/
/*! exports provided: EditorComponent, EditorModule, TINYMCE_SCRIPT_SRC, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorModule", function() { return EditorModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TINYMCE_SCRIPT_SRC", function() { return TINYMCE_SCRIPT_SRC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return Events; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


function EditorComponent_ng_template_0_Template(rf, ctx) { }
const getTinymce = () => {
    const w = typeof window !== 'undefined' ? window : undefined;
    return w && w.tinymce ? w.tinymce : null;
};
const ɵ0$2 = getTinymce;

class Events {
    constructor() {
        this.onBeforePaste = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onContextMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onCopy = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onCut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDblclick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDragDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDragGesture = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDragOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFocusIn = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFocusOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onKeyDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onKeyPress = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onKeyUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMouseEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMouseLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onPaste = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onActivate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onAddUndo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onBeforeAddUndo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onBeforeExecCommand = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onBeforeGetContent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onBeforeRenderUI = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onBeforeSetContent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClearUndos = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDeactivate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDirty = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onExecCommand = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onGetContent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onInit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onInitNgModel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onLoadContent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onNodeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onPostProcess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onPostRender = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onPreInit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onPreProcess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onProgressState = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onRedo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onReset = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onResizeEditor = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSaveContent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSetAttrib = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onObjectResizeStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onObjectResized = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onObjectSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSetContent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onUndo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onVisualAid = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}
Events.ɵfac = function Events_Factory(t) { return new (t || Events)(); };
Events.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: Events, outputs: { onBeforePaste: "onBeforePaste", onBlur: "onBlur", onClick: "onClick", onContextMenu: "onContextMenu", onCopy: "onCopy", onCut: "onCut", onDblclick: "onDblclick", onDrag: "onDrag", onDragDrop: "onDragDrop", onDragEnd: "onDragEnd", onDragGesture: "onDragGesture", onDragOver: "onDragOver", onDrop: "onDrop", onFocus: "onFocus", onFocusIn: "onFocusIn", onFocusOut: "onFocusOut", onKeyDown: "onKeyDown", onKeyPress: "onKeyPress", onKeyUp: "onKeyUp", onMouseDown: "onMouseDown", onMouseEnter: "onMouseEnter", onMouseLeave: "onMouseLeave", onMouseMove: "onMouseMove", onMouseOut: "onMouseOut", onMouseOver: "onMouseOver", onMouseUp: "onMouseUp", onPaste: "onPaste", onSelectionChange: "onSelectionChange", onActivate: "onActivate", onAddUndo: "onAddUndo", onBeforeAddUndo: "onBeforeAddUndo", onBeforeExecCommand: "onBeforeExecCommand", onBeforeGetContent: "onBeforeGetContent", onBeforeRenderUI: "onBeforeRenderUI", onBeforeSetContent: "onBeforeSetContent", onChange: "onChange", onClearUndos: "onClearUndos", onDeactivate: "onDeactivate", onDirty: "onDirty", onExecCommand: "onExecCommand", onGetContent: "onGetContent", onHide: "onHide", onInit: "onInit", onInitNgModel: "onInitNgModel", onLoadContent: "onLoadContent", onNodeChange: "onNodeChange", onPostProcess: "onPostProcess", onPostRender: "onPostRender", onPreInit: "onPreInit", onPreProcess: "onPreProcess", onProgressState: "onProgressState", onRedo: "onRedo", onRemove: "onRemove", onReset: "onReset", onResizeEditor: "onResizeEditor", onSaveContent: "onSaveContent", onSetAttrib: "onSetAttrib", onObjectResizeStart: "onObjectResizeStart", onObjectResized: "onObjectResized", onObjectSelected: "onObjectSelected", onSetContent: "onSetContent", onShow: "onShow", onSubmit: "onSubmit", onUndo: "onUndo", onVisualAid: "onVisualAid" } });
Events.propDecorators = {
    onBeforePaste: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onContextMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onCopy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onCut: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onDblclick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onDrag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onDragDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onDragEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onDragGesture: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onDragOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onFocusIn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onFocusOut: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onKeyDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onKeyPress: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onKeyUp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onMouseDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onMouseEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onMouseLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onMouseMove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onMouseOut: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onMouseOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onMouseUp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onPaste: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onSelectionChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onActivate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onAddUndo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onBeforeAddUndo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onBeforeExecCommand: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onBeforeGetContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onBeforeRenderUI: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onBeforeSetContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onClearUndos: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onDeactivate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onDirty: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onExecCommand: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onGetContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onHide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onInit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onInitNgModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onLoadContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onNodeChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onPostProcess: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onPostRender: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onPreInit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onPreProcess: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onProgressState: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onRedo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onRemove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onReset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onResizeEditor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onSaveContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onSetAttrib: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onObjectResizeStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onObjectResized: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onObjectSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onSetContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onShow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onSubmit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onUndo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onVisualAid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};

const validEvents = [
    'onActivate',
    'onAddUndo',
    'onBeforeAddUndo',
    'onBeforeExecCommand',
    'onBeforeGetContent',
    'onBeforeRenderUI',
    'onBeforeSetContent',
    'onBeforePaste',
    'onBlur',
    'onChange',
    'onClearUndos',
    'onClick',
    'onContextMenu',
    'onCopy',
    'onCut',
    'onDblclick',
    'onDeactivate',
    'onDirty',
    'onDrag',
    'onDragDrop',
    'onDragEnd',
    'onDragGesture',
    'onDragOver',
    'onDrop',
    'onExecCommand',
    'onFocus',
    'onFocusIn',
    'onFocusOut',
    'onGetContent',
    'onHide',
    'onInit',
    'onKeyDown',
    'onKeyPress',
    'onKeyUp',
    'onLoadContent',
    'onMouseDown',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onNodeChange',
    'onObjectResizeStart',
    'onObjectResized',
    'onObjectSelected',
    'onPaste',
    'onPostProcess',
    'onPostRender',
    'onPreProcess',
    'onProgressState',
    'onRedo',
    'onRemove',
    'onReset',
    'onResizeEditor',
    'onSaveContent',
    'onSelectionChange',
    'onSetAttrib',
    'onSetContent',
    'onShow',
    'onSubmit',
    'onUndo',
    'onVisualAid'
];

/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
const bindHandlers = (ctx, editor) => {
    const allowedEvents = getValidEvents(ctx);
    allowedEvents.forEach((eventName) => {
        const eventEmitter = ctx[eventName];
        editor.on(eventName.substring(2), (event) => ctx.ngZone.run(() => eventEmitter.emit({ event, editor })));
    });
};
const ɵ0$1 = bindHandlers;
const getValidEvents = (ctx) => {
    const ignoredEvents = parseStringProperty(ctx.ignoreEvents, []);
    const allowedEvents = parseStringProperty(ctx.allowedEvents, validEvents).filter((event) => validEvents.includes(event) && !ignoredEvents.includes(event));
    return allowedEvents;
};
const ɵ1$1 = getValidEvents;
const parseStringProperty = (property, defaultValue) => {
    if (typeof property === 'string') {
        return property.split(',').map((value) => value.trim());
    }
    if (Array.isArray(property)) {
        return property;
    }
    return defaultValue;
};
const ɵ2 = parseStringProperty;
let unique = 0;
const uuid = (prefix) => {
    const date = new Date();
    const time = date.getTime();
    const random = Math.floor(Math.random() * 1000000000);
    unique++;
    return prefix + '_' + random + unique + String(time);
};
const ɵ3 = uuid;
const isTextarea = (element) => typeof element !== 'undefined' && element.tagName.toLowerCase() === 'textarea';
const ɵ4 = isTextarea;
const normalizePluginArray = (plugins) => {
    if (typeof plugins === 'undefined' || plugins === '') {
        return [];
    }
    return Array.isArray(plugins) ? plugins : plugins.split(' ');
};
const ɵ5 = normalizePluginArray;
const mergePlugins = (initPlugins, inputPlugins) => normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins));
const ɵ6 = mergePlugins;
// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => { };
const ɵ7 = noop;
const isNullOrUndefined = (value) => value === null || value === undefined;
const ɵ8 = isNullOrUndefined;

/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
const createState = () => ({
    listeners: [],
    scriptId: uuid('tiny-script'),
    scriptLoaded: false
});
const ɵ0 = createState;
const CreateScriptLoader = () => {
    let state = createState();
    const injectScriptTag = (scriptId, doc, url, callback) => {
        const scriptTag = doc.createElement('script');
        scriptTag.referrerPolicy = 'origin';
        scriptTag.type = 'application/javascript';
        scriptTag.id = scriptId;
        scriptTag.src = url;
        const handler = () => {
            scriptTag.removeEventListener('load', handler);
            callback();
        };
        scriptTag.addEventListener('load', handler);
        if (doc.head) {
            doc.head.appendChild(scriptTag);
        }
    };
    const load = (doc, url, callback) => {
        if (state.scriptLoaded) {
            callback();
        }
        else {
            state.listeners.push(callback);
            if (!doc.getElementById(state.scriptId)) {
                injectScriptTag(state.scriptId, doc, url, () => {
                    state.listeners.forEach((fn) => fn());
                    state.scriptLoaded = true;
                });
            }
        }
    };
    // Only to be used by tests.
    const reinitialize = () => {
        state = createState();
    };
    return {
        load,
        reinitialize
    };
};
const ɵ1 = CreateScriptLoader;
const ScriptLoader = CreateScriptLoader();

/* eslint-disable @typescript-eslint/no-parameter-properties */
const TINYMCE_SCRIPT_SRC = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('TINYMCE_SCRIPT_SRC');
const EDITOR_COMPONENT_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => EditorComponent),
    multi: true
};
class EditorComponent extends Events {
    constructor(elementRef, ngZone, platformId, tinymceScriptSrc) {
        super();
        this.platformId = platformId;
        this.tinymceScriptSrc = tinymceScriptSrc;
        this.cloudChannel = '5';
        this.apiKey = 'no-api-key';
        this.id = '';
        this.modelEvents = 'change input undo redo';
        this.onTouchedCallback = noop;
        this._elementRef = elementRef;
        this.ngZone = ngZone;
        this.initialise = this.initialise.bind(this);
    }
    set disabled(val) {
        this._disabled = val;
        if (this._editor && this._editor.initialized) {
            this._editor.setMode(val ? 'readonly' : 'design');
        }
    }
    get disabled() {
        return this._disabled;
    }
    get editor() {
        return this._editor;
    }
    writeValue(value) {
        if (this._editor && this._editor.initialized) {
            this._editor.setContent(isNullOrUndefined(value) ? '' : value);
        }
        else {
            this.initialValue = value === null ? undefined : value;
        }
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    setDisabledState(isDisabled) {
        if (this._editor) {
            this._editor.setMode(isDisabled ? 'readonly' : 'design');
        }
        else if (isDisabled) {
            this.init = Object.assign(Object.assign({}, this.init), { readonly: true });
        }
    }
    ngAfterViewInit() {
        var _a;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            this.id = this.id || uuid('tiny-angular');
            this.inline = this.inline !== undefined ? this.inline !== false : !!((_a = this.init) === null || _a === void 0 ? void 0 : _a.inline);
            this.createElement();
            if (getTinymce() !== null) {
                this.initialise();
            }
            else if (this._element && this._element.ownerDocument) {
                ScriptLoader.load(this._element.ownerDocument, this.getScriptSrc(), this.initialise.bind(this));
            }
        }
    }
    ngOnDestroy() {
        if (getTinymce() !== null) {
            getTinymce().remove(this._editor);
        }
    }
    createElement() {
        const tagName = typeof this.tagName === 'string' ? this.tagName : 'div';
        this._element = document.createElement(this.inline ? tagName : 'textarea');
        if (this._element) {
            if (document.getElementById(this.id)) {
                /* eslint no-console: ["error", { allow: ["warn"] }] */
                console.warn(`TinyMCE-Angular: an element with id [${this.id}] already exists. Editors with duplicate Id will not be able to mount`);
            }
            this._element.id = this.id;
            if (isTextarea(this._element)) {
                this._element.style.visibility = 'hidden';
            }
            this._elementRef.nativeElement.appendChild(this._element);
        }
    }
    initialise() {
        const finalInit = Object.assign(Object.assign({}, this.init), { target: this._element, inline: this.inline, readonly: this.disabled, plugins: mergePlugins(this.init && this.init.plugins, this.plugins), toolbar: this.toolbar || (this.init && this.init.toolbar), setup: (editor) => {
                this._editor = editor;
                editor.on('init', (_e) => {
                    this.initEditor(editor);
                });
                bindHandlers(this, editor);
                if (this.init && typeof this.init.setup === 'function') {
                    this.init.setup(editor);
                }
            } });
        if (isTextarea(this._element)) {
            this._element.style.visibility = '';
        }
        this.ngZone.runOutsideAngular(() => {
            getTinymce().init(finalInit);
        });
    }
    getScriptSrc() {
        return isNullOrUndefined(this.tinymceScriptSrc) ?
            `https://cdn.tiny.cloud/1/${this.apiKey}/tinymce/${this.cloudChannel}/tinymce.min.js` :
            this.tinymceScriptSrc;
    }
    initEditor(editor) {
        editor.on('blur', () => this.ngZone.run(() => this.onTouchedCallback()));
        editor.on(this.modelEvents, () => this.ngZone.run(() => this.emitOnChange(editor)));
        if (typeof this.initialValue === 'string') {
            this.ngZone.run(() => {
                editor.setContent(this.initialValue);
                if (editor.getContent() !== this.initialValue) {
                    this.emitOnChange(editor);
                }
                if (this.onInitNgModel !== undefined) {
                    this.onInitNgModel.emit(editor);
                }
            });
        }
    }
    emitOnChange(editor) {
        if (this.onChangeCallback) {
            this.onChangeCallback(editor.getContent({ format: this.outputFormat }));
        }
    }
}
EditorComponent.ɵfac = function EditorComponent_Factory(t) { return new (t || EditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TINYMCE_SCRIPT_SRC, 8)); };
EditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditorComponent, selectors: [["editor"]], inputs: { cloudChannel: "cloudChannel", apiKey: "apiKey", id: "id", modelEvents: "modelEvents", disabled: "disabled", initialValue: "initialValue", init: "init", inline: "inline", outputFormat: "outputFormat", tagName: "tagName", plugins: "plugins", toolbar: "toolbar", allowedEvents: "allowedEvents", ignoreEvents: "ignoreEvents" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([EDITOR_COMPONENT_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, template: function EditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EditorComponent_ng_template_0_Template, 0, 0, "ng-template");
    } }, styles: ["[_nghost-%COMP%] { display: block; }"] });
EditorComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [TINYMCE_SCRIPT_SRC,] }] }
];
EditorComponent.propDecorators = {
    cloudChannel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    apiKey: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    init: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    initialValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    outputFormat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    tagName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    plugins: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    toolbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    modelEvents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    allowedEvents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    ignoreEvents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'editor',
                template: '<ng-template></ng-template>',
                providers: [EDITOR_COMPONENT_VALUE_ACCESSOR],
                styles: [':host { display: block; }']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [TINYMCE_SCRIPT_SRC]
            }] }]; }, { cloudChannel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], apiKey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], modelEvents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], initialValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], init: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], inline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], outputFormat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], tagName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], plugins: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], toolbar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], allowedEvents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ignoreEvents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class EditorModule {
}
EditorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EditorModule });
EditorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EditorModule_Factory(t) { return new (t || EditorModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EditorModule, { declarations: function () { return [EditorComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]; }, exports: function () { return [EditorComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
                declarations: [EditorComponent],
                exports: [EditorComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=tinymce-tinymce-angular.js.map

/***/ }),

/***/ "./src/app/protected/pages/patients/add-patient-record/add-patient-record.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/protected/pages/patients/add-patient-record/add-patient-record.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AddPatientRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPatientRecordComponent", function() { return AddPatientRecordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var app_protected_services_patients_requests_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/protected/services/patients-requests.service */ "./src/app/protected/services/patients-requests.service.ts");
/* harmony import */ var app_protected_routes_protected_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/protected/routes/protected.routes */ "./src/app/protected/routes/protected.routes.ts");
/* harmony import */ var app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/toastr.service */ "./src/app/shared/services/toastr.service.ts");
/* harmony import */ var app_protected_services_records_requests_services_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/protected/services/records-requests-services.service */ "./src/app/protected/services/records-requests-services.service.ts");
/* harmony import */ var _components_patient_info_card_patient_info_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/patient-info-card/patient-info-card.component */ "./src/app/protected/components/patient-info-card/patient-info-card.component.ts");
/* harmony import */ var _components_simple_date_picker_simple_date_picker_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/simple-date-picker/simple-date-picker.component */ "./src/app/protected/components/simple-date-picker/simple-date-picker.component.ts");
/* harmony import */ var _components_simple_text_area_simple_text_area_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/simple-text-area/simple-text-area.component */ "./src/app/protected/components/simple-text-area/simple-text-area.component.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
















const _c0 = function (a0) { return [a0]; };
class AddPatientRecordComponent {
    constructor(activatedRoute, patientsRequestService, recordRequestsService, router, toastrService) {
        this.activatedRoute = activatedRoute;
        this.patientsRequestService = patientsRequestService;
        this.recordRequestsService = recordRequestsService;
        this.router = router;
        this.toastrService = toastrService;
        this.redirectOnCancelRoute = app_protected_routes_protected_routes__WEBPACK_IMPORTED_MODULE_4__["patientsRoutes"].addRecords;
    }
    ngOnInit() {
        this.activatedRoute.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(({ id }) => this.patientsRequestService.getPatientById(id)))
            .subscribe((response) => {
            this.patient = response.body;
        }, (error) => {
            this.router.navigateByUrl(app_protected_routes_protected_routes__WEBPACK_IMPORTED_MODULE_4__["patientsRoutes"].viewAll);
        });
    }
    onTextAreaEventEmission(textAreaValue) {
        this.recordMedicalCondition = textAreaValue;
    }
    onDatePickerEventEmission(datePickerValue) {
        this.recordDateTime = datePickerValue;
    }
    addRecord() {
        this.recordRequestsService
            .createRecord(this.patient.id, this.recordDateTime, this.recordMedicalCondition)
            .subscribe(({ body }) => {
            this.toastrService.successToastr('Registro creado', 'Registro creado correctamente');
            this.router.navigate([app_protected_routes_protected_routes__WEBPACK_IMPORTED_MODULE_4__["patientsRoutes"].addRecords]);
        }, (error) => {
            this.toastrService.errorToastr(error.error.error);
        });
    }
}
AddPatientRecordComponent.ɵfac = function AddPatientRecordComponent_Factory(t) { return new (t || AddPatientRecordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_protected_services_patients_requests_service__WEBPACK_IMPORTED_MODULE_3__["PatientsRequestsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_protected_services_records_requests_services_service__WEBPACK_IMPORTED_MODULE_6__["RecordsRequestsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_5__["ToastrService"])); };
AddPatientRecordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddPatientRecordComponent, selectors: [["ngx-add-patient-record"]], decls: 11, vars: 4, consts: [[1, "row"], [1, "col-md-6", "col-xl-5"], [3, "patient"], [1, "col-md-6", "col-xl-7"], [3, "datePickerDate"], [3, "textAreaValue"], [1, "col-12", "submit-record"], ["nbButton", "", "status", "primary", 3, "click"], ["nbButton", "", "status", "danger", 3, "routerLink"]], template: function AddPatientRecordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-patient-info-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngx-simple-date-picker", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("datePickerDate", function AddPatientRecordComponent_Template_ngx_simple_date_picker_datePickerDate_4_listener($event) { return ctx.onDatePickerEventEmission($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ngx-simple-text-area", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("textAreaValue", function AddPatientRecordComponent_Template_ngx_simple_text_area_textAreaValue_5_listener($event) { return ctx.onTextAreaEventEmission($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddPatientRecordComponent_Template_button_click_7_listener() { return ctx.addRecord(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Cancelar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("patient", ctx.patient);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.redirectOnCancelRoute));
    } }, directives: [_components_patient_info_card_patient_info_card_component__WEBPACK_IMPORTED_MODULE_7__["PatientInfoCardComponent"], _components_simple_date_picker_simple_date_picker_component__WEBPACK_IMPORTED_MODULE_8__["SimpleDatePickerComponent"], _components_simple_text_area_simple_text_area_component__WEBPACK_IMPORTED_MODULE_9__["SimpleTextAreaComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["button[_ngcontent-%COMP%] {\n  margin-bottom: 2.3rem;\n  margin-right: 1rem;\n  margin-left: 1rem;\n}\n\n.submit-record[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdGVjdGVkL3BhZ2VzL3BhdGllbnRzL2FkZC1wYXRpZW50LXJlY29yZC9hZGQtcGF0aWVudC1yZWNvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcHJvdGVjdGVkL3BhZ2VzL3BhdGllbnRzL2FkZC1wYXRpZW50LXJlY29yZC9hZGQtcGF0aWVudC1yZWNvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDIuM3JlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbn1cclxuXHJcbi5zdWJtaXQtcmVjb3JkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddPatientRecordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-add-patient-record',
                templateUrl: './add-patient-record.component.html',
                styleUrls: ['./add-patient-record.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: app_protected_services_patients_requests_service__WEBPACK_IMPORTED_MODULE_3__["PatientsRequestsService"] }, { type: app_protected_services_records_requests_services_service__WEBPACK_IMPORTED_MODULE_6__["RecordsRequestsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/protected/pages/patients/add-patients-records-list/add-patients-records-list.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/protected/pages/patients/add-patients-records-list/add-patients-records-list.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: AddPatientsRecordsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPatientsRecordsListComponent", function() { return AddPatientsRecordsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var app_protected_services_patients_requests_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/protected/services/patients-requests.service */ "./src/app/protected/services/patients-requests.service.ts");
/* harmony import */ var app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/toastr.service */ "./src/app/shared/services/toastr.service.ts");
/* harmony import */ var _components_filter_bar_filter_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/filter-bar/filter-bar.component */ "./src/app/protected/components/filter-bar/filter-bar.component.ts");
/* harmony import */ var _components_records_cards_records_cards_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/records-cards/records-cards.component */ "./src/app/protected/components/records-cards/records-cards.component.ts");








class AddPatientsRecordsListComponent {
    constructor(toasterService, patientsRequests) {
        this.toasterService = toasterService;
        this.patientsRequests = patientsRequests;
    }
    ngOnInit() {
        this.patientsRequests.listPatients().subscribe((response) => {
            this.patientsList = response.body;
        }, (error) => {
            this.toasterService.errorToastr(error.error.error);
        });
    }
    onNameSearch(queryParam) {
        this.patientsRequests.listPatients(queryParam).subscribe((response) => {
            this.patientsList = response.body;
        }, (error) => {
            this.toasterService.errorToastr('Búsqueda inválida');
        });
    }
}
AddPatientsRecordsListComponent.ɵfac = function AddPatientsRecordsListComponent_Factory(t) { return new (t || AddPatientsRecordsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_protected_services_patients_requests_service__WEBPACK_IMPORTED_MODULE_1__["PatientsRequestsService"])); };
AddPatientsRecordsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddPatientsRecordsListComponent, selectors: [["ngx-add-patients-records-list"]], decls: 2, vars: 1, consts: [[3, "queryParam"], [3, "users"]], template: function AddPatientsRecordsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-filter-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("queryParam", function AddPatientsRecordsListComponent_Template_ngx_filter_bar_queryParam_0_listener($event) { return ctx.onNameSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-records-cards", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("users", ctx.patientsList);
    } }, directives: [_components_filter_bar_filter_bar_component__WEBPACK_IMPORTED_MODULE_3__["FilterBarComponent"], _components_records_cards_records_cards_component__WEBPACK_IMPORTED_MODULE_4__["RecordsCardsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3RlY3RlZC9wYWdlcy9wYXRpZW50cy9hZGQtcGF0aWVudHMtcmVjb3Jkcy1saXN0L2FkZC1wYXRpZW50cy1yZWNvcmRzLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddPatientsRecordsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-add-patients-records-list',
                templateUrl: './add-patients-records-list.component.html',
                styleUrls: ['./add-patients-records-list.component.scss'],
            }]
    }], function () { return [{ type: app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }, { type: app_protected_services_patients_requests_service__WEBPACK_IMPORTED_MODULE_1__["PatientsRequestsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/protected/pages/patients/edit-patient-record/edit-patient-record.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/protected/pages/patients/edit-patient-record/edit-patient-record.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: EditPatientRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPatientRecordComponent", function() { return EditPatientRecordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var app_protected_services_patients_requests_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/protected/services/patients-requests.service */ "./src/app/protected/services/patients-requests.service.ts");
/* harmony import */ var app_protected_services_records_requests_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/protected/services/records-requests-services.service */ "./src/app/protected/services/records-requests-services.service.ts");
/* harmony import */ var app_protected_routes_protected_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/protected/routes/protected.routes */ "./src/app/protected/routes/protected.routes.ts");
/* harmony import */ var app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/toastr.service */ "./src/app/shared/services/toastr.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _components_patient_info_card_patient_info_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/patient-info-card/patient-info-card.component */ "./src/app/protected/components/patient-info-card/patient-info-card.component.ts");
/* harmony import */ var _components_simple_date_picker_simple_date_picker_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/simple-date-picker/simple-date-picker.component */ "./src/app/protected/components/simple-date-picker/simple-date-picker.component.ts");
/* harmony import */ var _components_simple_text_area_simple_text_area_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/simple-text-area/simple-text-area.component */ "./src/app/protected/components/simple-text-area/simple-text-area.component.ts");

















function EditPatientRecordComponent_ngx_patient_info_card_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-patient-info-card", 10);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("patient", ctx_r0.patient);
} }
function EditPatientRecordComponent_ngx_simple_date_picker_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-simple-date-picker", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("datePickerDate", function EditPatientRecordComponent_ngx_simple_date_picker_4_Template_ngx_simple_date_picker_datePickerDate_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onDatePickerEventEmission($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputDate", ctx_r1.record.dateTime);
} }
function EditPatientRecordComponent_ngx_simple_text_area_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-simple-text-area", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("textAreaValue", function EditPatientRecordComponent_ngx_simple_text_area_5_Template_ngx_simple_text_area_textAreaValue_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onTextAreaEventEmission($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputText", ctx_r2.record.medicalCondition);
} }
function EditPatientRecordComponent_div_11_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Cargando ... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditPatientRecordComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditPatientRecordComponent_div_11_ng_template_2_Template, 3, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return [a0, a1]; };
class EditPatientRecordComponent {
    constructor(activatedRoute, patientsRequestService, recordRequestsService, router, toastrService) {
        this.activatedRoute = activatedRoute;
        this.patientsRequestService = patientsRequestService;
        this.recordRequestsService = recordRequestsService;
        this.router = router;
        this.toastrService = toastrService;
        this.redirectOnCancelRoute = app_protected_routes_protected_routes__WEBPACK_IMPORTED_MODULE_5__["patientsRoutes"].viewPatientHistoryBase;
    }
    ngOnInit() {
        this.activatedRoute.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(({ id }) => (this.recordId = id)))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(({ id }) => this.recordRequestsService.getClinicalRecordById(id)))
            .subscribe((response) => {
            this.record = response.body;
            this.patientId = response.body.patient.id;
            this.patientsRequestService.getPatientById(this.patientId).subscribe((patientRes) => {
                this.patient = patientRes.body;
            }, (patientError) => {
                this.router.navigateByUrl(app_protected_routes_protected_routes__WEBPACK_IMPORTED_MODULE_5__["patientsRoutes"].viewAll);
            });
        }, (error) => {
            this.router.navigateByUrl(app_protected_routes_protected_routes__WEBPACK_IMPORTED_MODULE_5__["patientsRoutes"].viewAll);
        });
    }
    onTextAreaEventEmission(textAreaValue) {
        this.recordMedicalCondition = textAreaValue;
    }
    onDatePickerEventEmission(datePickerValue) {
        this.recordDateTime = datePickerValue;
    }
    editRecord() {
        this.recordRequestsService
            .modifyRecord(this.recordId, this.recordDateTime, this.recordMedicalCondition)
            .subscribe((response) => {
            this.toastrService.successToastr('Registro modificado', 'Registro modificado');
            this.router.navigate([app_protected_routes_protected_routes__WEBPACK_IMPORTED_MODULE_5__["patientsRoutes"].addRecords]);
        }, (error) => {
            this.toastrService.errorToastr(error.error.error);
        });
    }
}
EditPatientRecordComponent.ɵfac = function EditPatientRecordComponent_Factory(t) { return new (t || EditPatientRecordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_protected_services_patients_requests_service__WEBPACK_IMPORTED_MODULE_3__["PatientsRequestsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_protected_services_records_requests_services_service__WEBPACK_IMPORTED_MODULE_4__["RecordsRequestsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__["ToastrService"])); };
EditPatientRecordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditPatientRecordComponent, selectors: [["ngx-edit-patient-record"]], decls: 12, vars: 8, consts: [[1, "row"], [1, "col-md-6", "col-xl-5"], [3, "patient", 4, "ngIf"], [1, "col-md-6", "col-xl-7"], [3, "inputDate", "datePickerDate", 4, "ngIf"], ["textAreaTitle", "Registro cl\u00EDnico del paciente", 3, "inputText", "textAreaValue", 4, "ngIf"], [1, "col-12", "submit-record"], ["nbButton", "", "status", "primary", 3, "click"], ["nbButton", "", "status", "danger", 3, "routerLink"], ["class", "row", 4, "ngIf"], [3, "patient"], [3, "inputDate", "datePickerDate"], ["textAreaTitle", "Registro cl\u00EDnico del paciente", 3, "inputText", "textAreaValue"], [1, "col"], ["loaderDiv", ""], ["nbSpinner", "true", "nbSpinnerSize", "large", "nbSpinnerStatus", "primary"]], template: function EditPatientRecordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditPatientRecordComponent_ngx_patient_info_card_2_Template, 1, 1, "ngx-patient-info-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditPatientRecordComponent_ngx_simple_date_picker_4_Template, 1, 1, "ngx-simple-date-picker", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EditPatientRecordComponent_ngx_simple_text_area_5_Template, 1, 1, "ngx-simple-text-area", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditPatientRecordComponent_Template_button_click_7_listener() { return ctx.editRecord(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Cancelar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EditPatientRecordComponent_div_11_Template, 4, 0, "div", 9);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.patient);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.record);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.record);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, ctx.redirectOnCancelRoute, ctx.patientId));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.patient && !ctx.record);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _components_patient_info_card_patient_info_card_component__WEBPACK_IMPORTED_MODULE_9__["PatientInfoCardComponent"], _components_simple_date_picker_simple_date_picker_component__WEBPACK_IMPORTED_MODULE_10__["SimpleDatePickerComponent"], _components_simple_text_area_simple_text_area_component__WEBPACK_IMPORTED_MODULE_11__["SimpleTextAreaComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbSpinnerDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"]], styles: ["button[_ngcontent-%COMP%] {\n  margin-bottom: 2.3rem;\n  margin-right: 1rem;\n  margin-left: 1rem;\n}\n\n.submit-record[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdGVjdGVkL3BhZ2VzL3BhdGllbnRzL2VkaXQtcGF0aWVudC1yZWNvcmQvZWRpdC1wYXRpZW50LXJlY29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm90ZWN0ZWQvcGFnZXMvcGF0aWVudHMvZWRpdC1wYXRpZW50LXJlY29yZC9lZGl0LXBhdGllbnQtcmVjb3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAyLjNyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcblxyXG4uc3VibWl0LXJlY29yZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditPatientRecordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-edit-patient-record',
                templateUrl: './edit-patient-record.component.html',
                styleUrls: ['./edit-patient-record.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: app_protected_services_patients_requests_service__WEBPACK_IMPORTED_MODULE_3__["PatientsRequestsService"] }, { type: app_protected_services_records_requests_services_service__WEBPACK_IMPORTED_MODULE_4__["RecordsRequestsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/protected/pages/patients/patient-creation/patient-creation.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/protected/pages/patients/patient-creation/patient-creation.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PatientCreationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientCreationComponent", function() { return PatientCreationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var app_protected_services_patients_requests_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/protected/services/patients-requests.service */ "./src/app/protected/services/patients-requests.service.ts");
/* harmony import */ var app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/toastr.service */ "./src/app/shared/services/toastr.service.ts");
/* harmony import */ var app_protected_routes_protected_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/protected/routes/protected.routes */ "./src/app/protected/routes/protected.routes.ts");
/* harmony import */ var _components_patient_form_patient_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/patient-form/patient-form.component */ "./src/app/protected/components/patient-form/patient-form.component.ts");










class PatientCreationComponent {
    constructor(patientsRequestsService, toastrService, router) {
        this.patientsRequestsService = patientsRequestsService;
        this.toastrService = toastrService;
        this.router = router;
    }
    ngOnInit() { }
    onFormSubmission(patient) {
        this.patientsRequestsService.createPatient(patient).subscribe(({ body }) => {
            this.toastrService.successToastr('Paciente creado', `Paciente ${body.firstName} ${body.lastName} ha sido creado exitosamente`);
            this.router.navigate([app_protected_routes_protected_routes__WEBPACK_IMPORTED_MODULE_4__["patientsRoutes"].viewAll]);
        }, (error) => {
            this.toastrService.errorToastr(error.error.error);
        });
    }
}
PatientCreationComponent.ɵfac = function PatientCreationComponent_Factory(t) { return new (t || PatientCreationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_protected_services_patients_requests_service__WEBPACK_IMPORTED_MODULE_2__["PatientsRequestsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
PatientCreationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PatientCreationComponent, selectors: [["ngx-patient-creation"]], decls: 1, vars: 0, consts: [[3, "patientCreation"]], template: function PatientCreationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-patient-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("patientCreation", function PatientCreationComponent_Template_ngx_patient_form_patientCreation_0_listener($event) { return ctx.onFormSubmission($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_patient_form_patient_form_component__WEBPACK_IMPORTED_MODULE_5__["PatientFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3RlY3RlZC9wYWdlcy9wYXRpZW50cy9wYXRpZW50LWNyZWF0aW9uL3BhdGllbnQtY3JlYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientCreationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-patient-creation',
                templateUrl: './patient-creation.component.html',
                styleUrls: ['./patient-creation.component.scss'],
            }]
    }], function () { return [{ type: app_protected_services_patients_requests_service__WEBPACK_IMPORTED_MODULE_2__["PatientsRequestsService"] }, { type: app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/protected/pages/patients/patient-inspection/patient-inspection.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/protected/pages/patients/patient-inspection/patient-inspection.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: PatientInspectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientInspectionComponent", function() { return PatientInspectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var app_protected_services_patients_requests_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/protected/services/patients-requests.service */ "./src/app/protected/services/patients-requests.service.ts");
/* harmony import */ var app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/toastr.service */ "./src/app/shared/services/toastr.service.ts");
/* harmony import */ var app_protected_routes_protected_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/protected/routes/protected.routes */ "./src/app/protected/routes/protected.routes.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_patient_form_patient_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/patient-form/patient-form.component */ "./src/app/protected/components/patient-form/patient-form.component.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");













function PatientInspectionComponent_ngx_patient_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-patient-form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("patientCreation", function PatientInspectionComponent_ngx_patient_form_0_Template_ngx_patient_form_patientCreation_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onFormSubmission($event); })("patientDeletion", function PatientInspectionComponent_ngx_patient_form_0_Template_ngx_patient_form_patientDeletion_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onPatientDeletion($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("patient", ctx_r0.patient);
} }
function PatientInspectionComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Cargando paciente... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PatientInspectionComponent {
    constructor(activatedRoute, router, patientsRequestsService, toastrService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.patientsRequestsService = patientsRequestsService;
        this.toastrService = toastrService;
    }
    ngOnInit() {
        this.activatedRoute.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(({ id }) => this.patientsRequestsService.getPatientById(id)))
            .subscribe((response) => {
            this.patient = response.body;
            this.patient.dateOfBirth = new Date(response.body.dateOfBirth);
        }, (error) => {
            this.router.navigate([app_protected_routes_protected_routes__WEBPACK_IMPORTED_MODULE_5__["patientsRoutes"].viewAll]);
        });
    }
    onFormSubmission(patientToUpdate) {
        this.patientsRequestsService.modifyPatient(patientToUpdate).subscribe((response) => {
            this.toastrService.successToastr('Paciente modificado', `Paciente modificado exitosamente`);
            this.router.navigate([app_protected_routes_protected_routes__WEBPACK_IMPORTED_MODULE_5__["patientsRoutes"].viewAll]);
        }, (error) => {
            this.toastrService.errorToastr(error.error.error);
        });
    }
    onPatientDeletion(id) {
        this.patientsRequestsService.deletePatient(id).subscribe((response) => {
            this.toastrService.successToastr('Paciente eliminado', `Paciente eliminado exitosamente`);
            this.router.navigate([app_protected_routes_protected_routes__WEBPACK_IMPORTED_MODULE_5__["patientsRoutes"].viewAll]);
        }, (error) => {
            this.toastrService.errorToastr(error.error.error);
        });
    }
}
PatientInspectionComponent.ɵfac = function PatientInspectionComponent_Factory(t) { return new (t || PatientInspectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_protected_services_patients_requests_service__WEBPACK_IMPORTED_MODULE_3__["PatientsRequestsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
PatientInspectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PatientInspectionComponent, selectors: [["ngx-patient-inspection"]], decls: 3, vars: 2, consts: [["formTitle", "Editar paciente", "confirmationButtonMessage", "Editar", 3, "patient", "patientCreation", "patientDeletion", 4, "ngIf", "ngIfElse"], ["loaderDiv", ""], ["formTitle", "Editar paciente", "confirmationButtonMessage", "Editar", 3, "patient", "patientCreation", "patientDeletion"], ["nbSpinner", "true", "nbSpinnerSize", "large", "nbSpinnerStatus", "primary"]], template: function PatientInspectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PatientInspectionComponent_ngx_patient_form_0_Template, 1, 1, "ngx-patient-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PatientInspectionComponent_ng_template_1_Template, 3, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.patient)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _components_patient_form_patient_form_component__WEBPACK_IMPORTED_MODULE_7__["PatientFormComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbSpinnerDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3RlY3RlZC9wYWdlcy9wYXRpZW50cy9wYXRpZW50LWluc3BlY3Rpb24vcGF0aWVudC1pbnNwZWN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientInspectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-patient-inspection',
                templateUrl: './patient-inspection.component.html',
                styleUrls: ['./patient-inspection.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: app_protected_services_patients_requests_service__WEBPACK_IMPORTED_MODULE_3__["PatientsRequestsService"] }, { type: app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/protected/pages/patients/patients-list/patients-list.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/protected/pages/patients/patients-list/patients-list.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PatientsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsListComponent", function() { return PatientsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var app_protected_services_patients_requests_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/protected/services/patients-requests.service */ "./src/app/protected/services/patients-requests.service.ts");
/* harmony import */ var app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/toastr.service */ "./src/app/shared/services/toastr.service.ts");
/* harmony import */ var app_protected_routes_protected_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/protected/routes/protected.routes */ "./src/app/protected/routes/protected.routes.ts");
/* harmony import */ var _components_filter_bar_filter_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/filter-bar/filter-bar.component */ "./src/app/protected/components/filter-bar/filter-bar.component.ts");
/* harmony import */ var _components_users_cards_users_cards_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/users-cards/users-cards.component */ "./src/app/protected/components/users-cards/users-cards.component.ts");









class PatientsListComponent {
    constructor(toasterService, patientsRequests) {
        this.toasterService = toasterService;
        this.patientsRequests = patientsRequests;
        this.patientEditionRoute = app_protected_routes_protected_routes__WEBPACK_IMPORTED_MODULE_3__["patientsRoutes"].editPatientBase;
    }
    ngOnInit() {
        this.patientsRequests.listPatients().subscribe((response) => {
            this.patientsList = response.body;
        }, (error) => {
            this.toasterService.errorToastr(error.error.error);
        });
    }
    onNameSearch(queryParam) {
        this.patientsRequests.listPatients(queryParam).subscribe((response) => {
            this.patientsList = response.body;
        }, (error) => {
            this.toasterService.errorToastr('Búsqueda inválida');
        });
    }
}
PatientsListComponent.ɵfac = function PatientsListComponent_Factory(t) { return new (t || PatientsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_protected_services_patients_requests_service__WEBPACK_IMPORTED_MODULE_1__["PatientsRequestsService"])); };
PatientsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PatientsListComponent, selectors: [["ngx-patients-list"]], decls: 6, vars: 2, consts: [[1, "row"], [1, "offset-lg-1", "col-lg-10"], [3, "queryParam"], ["cardTitle", "Lista de pacientes", 3, "users", "baseRoute"]], template: function PatientsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ngx-filter-bar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("queryParam", function PatientsListComponent_Template_ngx_filter_bar_queryParam_2_listener($event) { return ctx.onNameSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ngx-users-cards", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("users", ctx.patientsList)("baseRoute", ctx.patientEditionRoute);
    } }, directives: [_components_filter_bar_filter_bar_component__WEBPACK_IMPORTED_MODULE_4__["FilterBarComponent"], _components_users_cards_users_cards_component__WEBPACK_IMPORTED_MODULE_5__["UsersCardsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3RlY3RlZC9wYWdlcy9wYXRpZW50cy9wYXRpZW50cy1saXN0L3BhdGllbnRzLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-patients-list',
                templateUrl: './patients-list.component.html',
                styleUrls: ['./patients-list.component.scss'],
            }]
    }], function () { return [{ type: app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }, { type: app_protected_services_patients_requests_service__WEBPACK_IMPORTED_MODULE_1__["PatientsRequestsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/protected/pages/patients/patients-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/protected/pages/patients/patients-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: PatientsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsRoutingModule", function() { return PatientsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_patient_record_add_patient_record_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-patient-record/add-patient-record.component */ "./src/app/protected/pages/patients/add-patient-record/add-patient-record.component.ts");
/* harmony import */ var _add_patients_records_list_add_patients_records_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-patients-records-list/add-patients-records-list.component */ "./src/app/protected/pages/patients/add-patients-records-list/add-patients-records-list.component.ts");
/* harmony import */ var _edit_patient_record_edit_patient_record_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-patient-record/edit-patient-record.component */ "./src/app/protected/pages/patients/edit-patient-record/edit-patient-record.component.ts");
/* harmony import */ var _patient_creation_patient_creation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./patient-creation/patient-creation.component */ "./src/app/protected/pages/patients/patient-creation/patient-creation.component.ts");
/* harmony import */ var _patient_inspection_patient_inspection_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patient-inspection/patient-inspection.component */ "./src/app/protected/pages/patients/patient-inspection/patient-inspection.component.ts");
/* harmony import */ var _patients_list_patients_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./patients-list/patients-list.component */ "./src/app/protected/pages/patients/patients-list/patients-list.component.ts");
/* harmony import */ var _view_patient_clinical_history_view_patient_clinical_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view-patient-clinical-history/view-patient-clinical-history.component */ "./src/app/protected/pages/patients/view-patient-clinical-history/view-patient-clinical-history.component.ts");











const routes = [
    {
        path: '',
        children: [
            {
                path: 'register',
                component: _patient_creation_patient_creation_component__WEBPACK_IMPORTED_MODULE_5__["PatientCreationComponent"],
            },
            {
                path: 'view-all-patients',
                component: _patients_list_patients_list_component__WEBPACK_IMPORTED_MODULE_7__["PatientsListComponent"],
            },
            {
                path: 'edit/:id',
                component: _patient_inspection_patient_inspection_component__WEBPACK_IMPORTED_MODULE_6__["PatientInspectionComponent"],
            },
            {
                path: 'add-patients-records',
                component: _add_patients_records_list_add_patients_records_list_component__WEBPACK_IMPORTED_MODULE_3__["AddPatientsRecordsListComponent"],
            },
            {
                path: 'add-patient-record/:id',
                component: _add_patient_record_add_patient_record_component__WEBPACK_IMPORTED_MODULE_2__["AddPatientRecordComponent"],
            },
            {
                path: 'patient-history/:id',
                component: _view_patient_clinical_history_view_patient_clinical_history_component__WEBPACK_IMPORTED_MODULE_8__["ViewPatientClinicalHistoryComponent"],
            },
            {
                path: 'edit-patient-record/:id',
                component: _edit_patient_record_edit_patient_record_component__WEBPACK_IMPORTED_MODULE_4__["EditPatientRecordComponent"],
            },
            {
                path: '**',
                redirectTo: 'view-all-patients',
            },
        ],
    },
];
class PatientsRoutingModule {
}
PatientsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PatientsRoutingModule });
PatientsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PatientsRoutingModule_Factory(t) { return new (t || PatientsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PatientsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/protected/pages/patients/patients.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/protected/pages/patients/patients.module.ts ***!
  \*************************************************************/
/*! exports provided: PatientsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsModule", function() { return PatientsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tinymce/tinymce-angular */ "./node_modules/@tinymce/tinymce-angular/__ivy_ngcc__/fesm2015/tinymce-tinymce-angular.js");
/* harmony import */ var _patients_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patients-routing.module */ "./src/app/protected/pages/patients/patients-routing.module.ts");
/* harmony import */ var app_protected_protected_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/protected/protected.module */ "./src/app/protected/protected.module.ts");
/* harmony import */ var _patient_creation_patient_creation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./patient-creation/patient-creation.component */ "./src/app/protected/pages/patients/patient-creation/patient-creation.component.ts");
/* harmony import */ var _patient_inspection_patient_inspection_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patient-inspection/patient-inspection.component */ "./src/app/protected/pages/patients/patient-inspection/patient-inspection.component.ts");
/* harmony import */ var _patients_list_patients_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./patients-list/patients-list.component */ "./src/app/protected/pages/patients/patients-list/patients-list.component.ts");
/* harmony import */ var _add_patients_records_list_add_patients_records_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-patients-records-list/add-patients-records-list.component */ "./src/app/protected/pages/patients/add-patients-records-list/add-patients-records-list.component.ts");
/* harmony import */ var _add_patient_record_add_patient_record_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-patient-record/add-patient-record.component */ "./src/app/protected/pages/patients/add-patient-record/add-patient-record.component.ts");
/* harmony import */ var app_shared_nebular_nebular_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/shared/nebular/nebular.module */ "./src/app/shared/nebular/nebular.module.ts");
/* harmony import */ var _view_patient_clinical_history_view_patient_clinical_history_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view-patient-clinical-history/view-patient-clinical-history.component */ "./src/app/protected/pages/patients/view-patient-clinical-history/view-patient-clinical-history.component.ts");
/* harmony import */ var _edit_patient_record_edit_patient_record_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./edit-patient-record/edit-patient-record.component */ "./src/app/protected/pages/patients/edit-patient-record/edit-patient-record.component.ts");














class PatientsModule {
}
PatientsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PatientsModule });
PatientsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PatientsModule_Factory(t) { return new (t || PatientsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_2__["EditorModule"],
            _patients_routing_module__WEBPACK_IMPORTED_MODULE_3__["PatientsRoutingModule"],
            app_protected_protected_module__WEBPACK_IMPORTED_MODULE_4__["ProtectedModule"],
            app_shared_nebular_nebular_module__WEBPACK_IMPORTED_MODULE_10__["NebularModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PatientsModule, { declarations: [_patient_creation_patient_creation_component__WEBPACK_IMPORTED_MODULE_5__["PatientCreationComponent"],
        _patient_inspection_patient_inspection_component__WEBPACK_IMPORTED_MODULE_6__["PatientInspectionComponent"],
        _patients_list_patients_list_component__WEBPACK_IMPORTED_MODULE_7__["PatientsListComponent"],
        _add_patients_records_list_add_patients_records_list_component__WEBPACK_IMPORTED_MODULE_8__["AddPatientsRecordsListComponent"],
        _add_patient_record_add_patient_record_component__WEBPACK_IMPORTED_MODULE_9__["AddPatientRecordComponent"],
        _view_patient_clinical_history_view_patient_clinical_history_component__WEBPACK_IMPORTED_MODULE_11__["ViewPatientClinicalHistoryComponent"],
        _edit_patient_record_edit_patient_record_component__WEBPACK_IMPORTED_MODULE_12__["EditPatientRecordComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_2__["EditorModule"],
        _patients_routing_module__WEBPACK_IMPORTED_MODULE_3__["PatientsRoutingModule"],
        app_protected_protected_module__WEBPACK_IMPORTED_MODULE_4__["ProtectedModule"],
        app_shared_nebular_nebular_module__WEBPACK_IMPORTED_MODULE_10__["NebularModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _patient_creation_patient_creation_component__WEBPACK_IMPORTED_MODULE_5__["PatientCreationComponent"],
                    _patient_inspection_patient_inspection_component__WEBPACK_IMPORTED_MODULE_6__["PatientInspectionComponent"],
                    _patients_list_patients_list_component__WEBPACK_IMPORTED_MODULE_7__["PatientsListComponent"],
                    _add_patients_records_list_add_patients_records_list_component__WEBPACK_IMPORTED_MODULE_8__["AddPatientsRecordsListComponent"],
                    _add_patient_record_add_patient_record_component__WEBPACK_IMPORTED_MODULE_9__["AddPatientRecordComponent"],
                    _view_patient_clinical_history_view_patient_clinical_history_component__WEBPACK_IMPORTED_MODULE_11__["ViewPatientClinicalHistoryComponent"],
                    _edit_patient_record_edit_patient_record_component__WEBPACK_IMPORTED_MODULE_12__["EditPatientRecordComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_2__["EditorModule"],
                    _patients_routing_module__WEBPACK_IMPORTED_MODULE_3__["PatientsRoutingModule"],
                    app_protected_protected_module__WEBPACK_IMPORTED_MODULE_4__["ProtectedModule"],
                    app_shared_nebular_nebular_module__WEBPACK_IMPORTED_MODULE_10__["NebularModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/protected/pages/patients/view-patient-clinical-history/view-patient-clinical-history.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/protected/pages/patients/view-patient-clinical-history/view-patient-clinical-history.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: ViewPatientClinicalHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPatientClinicalHistoryComponent", function() { return ViewPatientClinicalHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var app_protected_services_patients_requests_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/protected/services/patients-requests.service */ "./src/app/protected/services/patients-requests.service.ts");
/* harmony import */ var app_protected_services_records_requests_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/protected/services/records-requests-services.service */ "./src/app/protected/services/records-requests-services.service.ts");
/* harmony import */ var app_protected_routes_protected_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/protected/routes/protected.routes */ "./src/app/protected/routes/protected.routes.ts");
/* harmony import */ var _components_patient_info_card_patient_info_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/patient-info-card/patient-info-card.component */ "./src/app/protected/components/patient-info-card/patient-info-card.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_simple_record_simple_record_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/simple-record/simple-record.component */ "./src/app/protected/components/simple-record/simple-record.component.ts");













function ViewPatientClinicalHistoryComponent_section_4_article_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-simple-record", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const record_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("record", record_r4);
} }
function ViewPatientClinicalHistoryComponent_section_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Historia cl\u00EDnica del paciente");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ViewPatientClinicalHistoryComponent_section_4_article_3_Template, 2, 1, "article", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.records);
} }
function ViewPatientClinicalHistoryComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Paciente sin historia cl\u00EDnica");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ViewPatientClinicalHistoryComponent {
    constructor(activatedRoute, patientsRequestService, recordsRequestService, router) {
        this.activatedRoute = activatedRoute;
        this.patientsRequestService = patientsRequestService;
        this.recordsRequestService = recordsRequestService;
        this.router = router;
        this.redirectOnCancelRoute = app_protected_routes_protected_routes__WEBPACK_IMPORTED_MODULE_5__["patientsRoutes"].viewAll;
    }
    ngOnInit() {
        // Obtaining patient info
        this.activatedRoute.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(({ id }) => this.patientsRequestService.getPatientById(id)))
            .subscribe((response) => {
            this.patient = response.body;
        }, (error) => {
            this.router.navigateByUrl(app_protected_routes_protected_routes__WEBPACK_IMPORTED_MODULE_5__["patientsRoutes"].viewAll);
        });
        // Obtaining records
        this.activatedRoute.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(({ id }) => this.recordsRequestService.listPatientClinicalHistory(id)))
            .subscribe((response) => {
            this.records = response.body.records;
        }, (error) => {
            this.router.navigateByUrl(app_protected_routes_protected_routes__WEBPACK_IMPORTED_MODULE_5__["patientsRoutes"].viewAll);
        });
    }
}
ViewPatientClinicalHistoryComponent.ɵfac = function ViewPatientClinicalHistoryComponent_Factory(t) { return new (t || ViewPatientClinicalHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_protected_services_patients_requests_service__WEBPACK_IMPORTED_MODULE_3__["PatientsRequestsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_protected_services_records_requests_services_service__WEBPACK_IMPORTED_MODULE_4__["RecordsRequestsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ViewPatientClinicalHistoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewPatientClinicalHistoryComponent, selectors: [["ngx-view-patient-clinical-history"]], decls: 7, vars: 3, consts: [[1, "row"], [1, "col-md-6", "col-xl-5"], [3, "patient"], [1, "col-md-6", "col-xl-7"], [4, "ngIf", "ngIfElse"], ["noRecordsToShow", ""], [1, "text-center", "mb-4"], [4, "ngFor", "ngForOf"], [3, "record"]], template: function ViewPatientClinicalHistoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-patient-info-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ViewPatientClinicalHistoryComponent_section_4_Template, 4, 1, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ViewPatientClinicalHistoryComponent_ng_template_5_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("patient", ctx.patient);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.records == null ? null : ctx.records.length) >= 1)("ngIfElse", _r1);
    } }, directives: [_components_patient_info_card_patient_info_card_component__WEBPACK_IMPORTED_MODULE_6__["PatientInfoCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _components_simple_record_simple_record_component__WEBPACK_IMPORTED_MODULE_8__["SimpleRecordComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3RlY3RlZC9wYWdlcy9wYXRpZW50cy92aWV3LXBhdGllbnQtY2xpbmljYWwtaGlzdG9yeS92aWV3LXBhdGllbnQtY2xpbmljYWwtaGlzdG9yeS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewPatientClinicalHistoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-view-patient-clinical-history',
                templateUrl: './view-patient-clinical-history.component.html',
                styleUrls: ['./view-patient-clinical-history.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: app_protected_services_patients_requests_service__WEBPACK_IMPORTED_MODULE_3__["PatientsRequestsService"] }, { type: app_protected_services_records_requests_services_service__WEBPACK_IMPORTED_MODULE_4__["RecordsRequestsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/protected/services/patients-requests.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/protected/services/patients-requests.service.ts ***!
  \*****************************************************************/
/*! exports provided: PatientsRequestsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsRequestsService", function() { return PatientsRequestsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _token_header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token-header.service */ "./src/app/protected/services/token-header.service.ts");







class PatientsRequestsService {
    constructor(http, tokenService) {
        this.http = http;
        this.tokenService = tokenService;
        this.baseUrl = environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
    }
    listPatients(filter) {
        let url = this.baseUrl + '/patients';
        if (filter)
            url += `?filter=${filter}`;
        return this.http.get(url, {
            headers: this.tokenService.xTokenHeader,
        });
    }
    getPatientById(patientId) {
        const url = this.baseUrl + `/patients/${patientId}`;
        return this.http.get(url, {
            headers: this.tokenService.xTokenHeader,
        });
    }
    createPatient(newPatient) {
        const url = this.baseUrl + '/patients';
        const newPatientData = Object.assign({ firstName: newPatient.firstName, lastName: newPatient.lastName, dateOfBirth: newPatient.dateOfBirth, gender: newPatient.gender, mobileNumber: newPatient.mobileNumber }, (newPatient.imageURI && { imageURI: newPatient.imageURI }));
        return this.http.post(url, newPatientData, {
            headers: this.tokenService.xTokenHeader,
        });
    }
    modifyPatient(patientToModify) {
        const url = this.baseUrl + `/patients/${patientToModify.id}`;
        const newPatientData = Object.assign({ firstName: patientToModify.firstName, lastName: patientToModify.lastName, dateOfBirth: patientToModify.dateOfBirth, gender: patientToModify.gender, mobileNumber: patientToModify.mobileNumber }, (patientToModify.imageURI && { imageURI: patientToModify.imageURI }));
        return this.http.put(url, newPatientData, {
            headers: this.tokenService.xTokenHeader,
        });
    }
    deletePatient(patientId) {
        const url = this.baseUrl + `/patients/${patientId}`;
        return this.http.delete(url, {
            headers: this.tokenService.xTokenHeader,
        });
    }
}
PatientsRequestsService.ɵfac = function PatientsRequestsService_Factory(t) { return new (t || PatientsRequestsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_token_header_service__WEBPACK_IMPORTED_MODULE_3__["TokenHeaderService"])); };
PatientsRequestsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PatientsRequestsService, factory: PatientsRequestsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PatientsRequestsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _token_header_service__WEBPACK_IMPORTED_MODULE_3__["TokenHeaderService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/protected/services/records-requests-services.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/protected/services/records-requests-services.service.ts ***!
  \*************************************************************************/
/*! exports provided: RecordsRequestsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordsRequestsService", function() { return RecordsRequestsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _token_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token-header.service */ "./src/app/protected/services/token-header.service.ts");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");







class RecordsRequestsService {
    constructor(http, tokenService) {
        this.http = http;
        this.tokenService = tokenService;
        this.baseUrl = environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    createRecord(patientId, dateTime, medicalCondition) {
        const url = this.baseUrl + '/records';
        const newRecordData = {
            patient: patientId,
            dateTime,
            medicalCondition,
        };
        return this.http.post(url, newRecordData, {
            headers: this.tokenService.xTokenHeader,
        });
    }
    modifyRecord(patientId, dateTime, medicalCondition) {
        const url = this.baseUrl + `/records/${patientId}`;
        const newRecordData = {
            dateTime,
            medicalCondition,
        };
        return this.http.put(url, newRecordData, {
            headers: this.tokenService.xTokenHeader,
        });
    }
    listPatientClinicalHistory(patientId) {
        const url = this.baseUrl + `/records/patient/${patientId}`;
        return this.http.get(url, {
            headers: this.tokenService.xTokenHeader,
        });
    }
    getClinicalRecordById(recordId) {
        const url = this.baseUrl + `/records/${recordId}`;
        return this.http.get(url, {
            headers: this.tokenService.xTokenHeader,
        });
    }
}
RecordsRequestsService.ɵfac = function RecordsRequestsService_Factory(t) { return new (t || RecordsRequestsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_token_header_service__WEBPACK_IMPORTED_MODULE_2__["TokenHeaderService"])); };
RecordsRequestsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RecordsRequestsService, factory: RecordsRequestsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RecordsRequestsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _token_header_service__WEBPACK_IMPORTED_MODULE_2__["TokenHeaderService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-patients-patients-module-es2015.js.map