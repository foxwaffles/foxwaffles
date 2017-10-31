import {ConfigFactory} from '../singletons/config'

export class Index {
    list : Array<any>;
    galleryTitle : string = 'Site Under Construction';
    
    constructor() {
        const configFactory = new ConfigFactory();
        const config = configFactory.getConfig();
        this.list = config.galleryList;
    }
    
}