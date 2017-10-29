import {inject, bindable, bindingMode} from 'aurelia-framework';

export class GalleryTile {
    @bindable imgSrc : string;
    @bindable width: number;
    @bindable height: number;
    @bindable isModal: boolean;
    constructor() {
        this.isModal = false;
    }
    clicked() {
        this.isModal = !this.isModal;
    }
}