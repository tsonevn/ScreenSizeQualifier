import { EventData, Observable } from "data/observable";
import { Page } from "ui/page";
import { HelloWorldModel } from "./main-view-model";

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    // Get the event sender
    var page = <Page>args.object;
    var observable =  new Observable();
    observable.set("message", "sample text");
    page.bindingContext = observable;
}
export function onTap(args:EventData){
    console.log("tapp");
}