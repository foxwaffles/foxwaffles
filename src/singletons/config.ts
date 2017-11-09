import {GalleryObject} from '../entities/galleryObject';
import {GalleryGroup} from '../entities/galleryGroup';

export class Config {
    public tiles : Array<GalleryGroup>;
    public aboutText: string;
    public contactText: string;
    public resumeHtml: string;
    public headerImgSrc: string; 
    public siteHeader: string;
    constructor() {

        this.headerImgSrc = "https://orig00.deviantart.net/619c/f/2016/241/f/1/f1cc10d2ba5ce3b7af0c54b96f57e375-dafqme5.png";
        this.siteHeader = "Foxwaffles";
        const testSrc = "https://img00.deviantart.net/6de1/i/2015/347/7/d/immolation_by_aquashiram14-d9k0yod.jpg";
        this.tiles = [];
        for(let i = 0; i < 18; i++) {
            let group = new GalleryGroup(testSrc, "Immolation")
            this.tiles.push(group);
            for(let j = 0; j < 2; j++) {
                group.addGalleryObject(new GalleryObject(testSrc, "Immolation Object"));
            }
        }
    }
}

let config = new Config();
export class ConfigFactory {
    async getConfig() {
        return config;
    }
}
