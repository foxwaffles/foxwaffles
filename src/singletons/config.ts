import {GalleryObject} from '../entities/galleryObject';

export class Config {
    public galleryList : Array<GalleryObject>;
    public aboutText: string;
    public contactText: string;
    public resumeHtml: string;
    constructor() {
        this.galleryList = [ ];
        for(let i = 0; i < 18; i++) {
            this.galleryList.push(  new GalleryObject("https://img00.deviantart.net/6de1/i/2015/347/7/d/immolation_by_aquashiram14-d9k0yod.jpg", "Immolation"));
        }
        this.aboutText = "about";
        this.contactText = "contact";
    }
}

let config = new Config();
export class ConfigFactory {
    async getConfig() {
        return config;
    }
}
