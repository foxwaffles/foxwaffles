import {inject, bindable, bindingMode} from 'aurelia-framework';

export class Gallery {
    @bindable list : Array<any>;
    @bindable columns : number;

    constructor() {

    }

    attached() {
        if(this.columns <= 0) {
            this.columns = 3;
        }
    }
}