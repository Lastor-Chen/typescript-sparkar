"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _context;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
const Patches = require("Patches");
class Text {
    constructor(inputName) {
        _context.set(this, '');
        this.inputName = inputName;
    }
    get context() {
        return __classPrivateFieldGet(this, _context);
    }
    setContext(text) {
        __classPrivateFieldSet(this, _context, text);
        Patches.inputs.setString(this.inputName, __classPrivateFieldGet(this, _context));
    }
}
exports.Text = Text;
_context = new WeakMap();
