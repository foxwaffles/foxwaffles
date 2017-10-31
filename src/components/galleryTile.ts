import {inject, bindable, bindingMode} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {GalleryObject} from '../entities/galleryObject'

@inject(EventAggregator)
export class GalleryTile {
    @bindable width: number;
    @bindable height: number;
    @bindable galleryObject: GalleryObject;

    private eventAggregator : EventAggregator;
    constructor(eventAggregator) {
        this.eventAggregator = eventAggregator;
    }
    clicked() {
        this.eventAggregator.publish("tileClicked", {id: this.galleryObject.id});
    }
}