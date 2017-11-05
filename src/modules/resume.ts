import {Config, ConfigFactory} from '../singletons/config'
export class Resume {
    public resumeHtml : string;
    public config: Config;
    activate(params, routeConfig) {
        (new ConfigFactory()).getConfig().then(config => {
            this.resumeHtml = config.resumeHtml;
        });
    }
}