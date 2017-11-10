import {Config, ConfigFactory} from '../singletons/config';
import {IconRow} from '../components/iconRow';
export class Contact {
    public text : string;
    public config: Config;
    public iconList: Array<any>
    activate(params, routeConfig) {
        (new ConfigFactory()).getConfig().then(config => {
            this.text = config.contactText;
            this.iconList = config.iconList;
        });
    }
}