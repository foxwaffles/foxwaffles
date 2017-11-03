import {ConfigFactory} from '../singletons/config'
import {GalleryObject} from '../entities/galleryObject'
export class GalleryFocus {

    public galleryObject : GalleryObject;
    activate(params, routeConfig) {
        const configFactory = new ConfigFactory();
        configFactory.getConfig().then(config => {
            const galleryList = config.galleryList;
            const id : number= Number(params.id);
            this.galleryObject = galleryList.filter(x => x.id === id)[0];
            routeConfig.navModel.setTitle(this.galleryObject.text);
        });
    }
}