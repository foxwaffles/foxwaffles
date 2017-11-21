import {Config, ConfigFactory} from '../singletons/config'
export class About {
    public text : string;
    public src : string;
    public artistStatement: string;
    activate(params, routeConfig) {
        (new ConfigFactory()).getConfig().then(config => {
            this.text = config.aboutText;
            this.src = config.aboutSrc;
            this.artistStatement = config.artistStatement;
        });
    }
}