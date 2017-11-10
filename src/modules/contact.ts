import {Config, ConfigFactory} from '../singletons/config';
import {IconRow} from '../components/iconRow';
export class Contact {
    public text : string;
    public config: Config;
    public iconList: Array<any>
    activate(params, routeConfig) {
        (new ConfigFactory()).getConfig().then(config => {
            this.text = config.contactText;
        });
        this.iconList = [
            new IconRow("#", "deviantart", "Aquashiram"),
            new IconRow("#", "twitch", "Foxwaffles"),
            new IconRow("#", "youtube", "Foxwaffles"),
            new IconRow("#", "wordpress", "Foxwaffles' Kitchen Sink"),
            new IconRow("#", "tumblr", "Foxwaffles"),
            new IconRow("#", "twitter", "Foxwaffles")
        ];
        console.log(this.iconList);
    }
}