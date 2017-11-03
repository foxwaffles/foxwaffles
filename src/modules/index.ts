import {ConfigFactory} from '../singletons/config'

export class Index {
    list : Array<any>;
    galleryTitle : string = 'Site Under Construction';
    
    constructor() {
        const configFactory = new ConfigFactory();
        configFactory.getConfig().then(config => {
            this.list = config.galleryList;
        });
    }
    
}