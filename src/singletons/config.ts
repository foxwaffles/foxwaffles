import {GalleryObject} from '../entities/galleryObject';

class Config {
    public galleryList : Array<GalleryObject>;

    constructor() {
        this.galleryList = [ 
            new GalleryObject("https://img00.deviantart.net/6de1/i/2015/347/7/d/immolation_by_aquashiram14-d9k0yod.jpg", "Immolation"),
            new GalleryObject("https://static.pexels.com/photos/34950/pexels-photo.jpg", "text"),
            new GalleryObject("https://static.pexels.com/photos/34950/pexels-photo.jpg", "text"),
            new GalleryObject("https://static.pexels.com/photos/34950/pexels-photo.jpg", "text"),
            new GalleryObject("https://static.pexels.com/photos/34950/pexels-photo.jpg", "text"),
            new GalleryObject("https://static.pexels.com/photos/34950/pexels-photo.jpg", "text"),
            new GalleryObject("https://static.pexels.com/photos/34950/pexels-photo.jpg", "text"),
            new GalleryObject("https://static.pexels.com/photos/34950/pexels-photo.jpg", "text"),
            new GalleryObject("https://static.pexels.com/photos/34950/pexels-photo.jpg", "text")
        ]
    }
}

let config = new Config();
export class ConfigFactory {
    async getConfig() {
        return config;
    }
}
