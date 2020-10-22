"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Scene = require("Scene");
const TouchGestures = require("TouchGestures");
const Diagnostics = require("Diagnostics");
const Text_1 = require("./Text");
const text = new Text_1.Text('text');
async function init() {
    try {
        const assets = await Promise.all([
            Scene.root.findFirst('plane0'),
        ]);
        const plane = assets[0];
        text.setContext('Tap the plane');
        // onTap returns a type "any" in SparkAR v99, we need to assert it is a EventSource
        const onTap = TouchGestures.onTap(plane);
        onTap.subscribe(() => {
            Diagnostics.log(plane.name);
            text.setContext('Hello World');
        });
        Diagnostics.log('App is running');
    }
    catch (e) {
        Diagnostics.log(e.stack || e);
    }
}
init();
