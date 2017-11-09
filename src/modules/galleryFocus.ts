import {ConfigFactory} from '../singletons/config'
import {GalleryObject} from '../entities/galleryObject'
export class GalleryFocus {

    public galleryObjects : Array<GalleryObject>;
    activate(params, routeConfig) {
        const configFactory = new ConfigFactory();
        configFactory.getConfig().then(config => {
            const tiles = config.tiles;
            const id : number= Number(params.id);
            const tile = tiles.filter(x => x.id === id)[0];
            this.galleryObjects = tile.galleryView;
            routeConfig.navModel.setTitle(tile.title);
        });
    }
}