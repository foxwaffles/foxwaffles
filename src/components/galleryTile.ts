import {inject, bindable, bindingMode} from 'aurelia-framework';

export class GalleryTile {
    @bindable imgSrc : string;
    @bindable width: number;
    @bindable height: number;
    constructor() {
    }
    clicked() {
        
    }
}