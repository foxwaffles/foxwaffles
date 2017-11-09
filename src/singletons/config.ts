import {GalleryObject} from '../entities/galleryObject';
import {GalleryGroup} from '../entities/galleryGroup';

export class Config {
    public tiles : Array<GalleryGroup>;
    public aboutText: string;
    public contactText: string;
    public resumeHtml: string;
    constructor() {
        const testSrc = "https://img00.deviantart.net/6de1/i/2015/347/7/d/immolation_by_aquashiram14-d9k0yod.jpg";
        this.tiles = [];
        for(let i = 0; i < 18; i++) {
            let group = new GalleryGroup(testSrc, "Immolation")
            this.tiles.push(group);
            for(let j = 0; j < 2; j++) {
                group.addGalleryObject(new GalleryObject(testSrc, "Immolation Object"));
            }
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
