import {GalleryObject} from '../entities/galleryObject';

export class GalleryGroup extends GalleryObject {
    public galleryView: Array<GalleryObject>;
    constructor(src, title, description = "temporary text") {
        super(src, title, description);
        this.galleryView = [];
    }

    addGalleryObject(obj : GalleryObject) {
        this.galleryView.push(obj);
    }
}