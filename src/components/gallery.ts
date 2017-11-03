import {inject, bindable, bindingMode} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class Gallery {
    @bindable list : Array<any>;
    @bindable tileWidth: number;
    @bindable tileHeight: number;
    private eventAggregator: EventAggregator;

    constructor(eventAggregator) {

    }

    attached() {

    }
}