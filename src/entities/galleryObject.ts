export class GalleryObject {
    private static _id = 0;
    public id: number;
    public src: string;
    public title: string;
    public description: string;
    constructor(src, title, description = "temporary text") {
        this.id = GalleryObject._id++;
        this.src = src;
        this.title = title;
        this.description = description;
    }
}