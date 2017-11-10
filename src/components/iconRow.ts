import {inject, bindable, bindingMode} from 'aurelia-framework';

export class IconRow {
    @bindable iconLink: string;
    @bindable iconType: string;
    @bindable iconText: string;
    
    constructor(link, type, text) {
        this.iconLink = link;
        this.iconText = text;
        this.iconType = type;
    }
}