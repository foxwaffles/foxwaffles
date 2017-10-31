import {ConfigFactory} from '../singletons/config'
import {GalleryObject} from '../entities/galleryObject'
export class GalleryFocus {

    public galleryObject : GalleryObject;
    activate(data) {
        const configFactory = new ConfigFactory();
        const galleryList = configFactory.getConfig().galleryList;
        (window as any).galleryList = galleryList;
        const id : number= Number(data.id);
        (window as any)._id = id;
        console.log(id, galleryList);
        this.galleryObject = galleryList.filter(x => x.id === id)[0];
        console.log(id, galleryList.filter(x => x.id === id));
    }
}