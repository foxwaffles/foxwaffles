import {ConfigFactory} from '../singletons/config';
import {GalleryGroup} from '../entities/galleryGroup';
export class Index {
    list : Array<GalleryGroup>;
    galleryTitle : string = 'Site Under Construction';
    
    constructor() {
        const configFactory = new ConfigFactory();
        configFactory.getConfig().then(config => {
            this.list = config.tiles;
        });
    }
    
}