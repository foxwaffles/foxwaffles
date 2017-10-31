export class GalleryObject {
    private static _id = 0;
    public id: number;
    public src: string;
    public text: string;
    constructor(src, text) {
        this.id = GalleryObject._id++;
        this.src = src;
        this.text = text;
    }
}