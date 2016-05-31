"use strict";
var observable_1 = require("data/observable");
// Event handler for Page "navigatingTo" event attached in main-page.xml
function navigatingTo(args) {
    // Get the event sender
    var page = args.object;
    var observable = new observable_1.Observable();
    observable.set("message", "sample text");
    page.bindingContext = observable;
}
exports.navigatingTo = navigatingTo;
function onTap(args) {
    console.log("tapp");
}
exports.onTap = onTap;
//# sourceMappingURL=main-page.js.map