"use strict";
var observable_1 = require("data/observable");
// Event handler for Page "navigatingTo" event attached in main-page.xml
function navigatingTo(args) {
    // Get the event sender
    var observable = new observable_1.Observable();
    observable.set('message', 'test');
    var page = args.object;
    page.bindingContext = observable;
}
exports.navigatingTo = navigatingTo;
function onTap(args) {
    console.log("test");
}
exports.onTap = onTap;
//# sourceMappingURL=main-page.js.map