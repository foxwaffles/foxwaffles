import {inject, bindable, bindingMode} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {GalleryGroup} from '../entities/galleryGroup'

@inject(EventAggregator)
export class GalleryTile {
    @bindable width: number;
    @bindable height: number;
    @bindable galleryObject: GalleryGroup;

    private eventAggregator : EventAggregator;
    constructor(eventAggregator) {
        this.eventAggregator = eventAggregator;
    }
    clicked() {
        this.eventAggregator.publish("tileClicked", {id: this.galleryObject.id});
    }
}