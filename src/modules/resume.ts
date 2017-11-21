import {Config, ConfigFactory} from '../singletons/config'
export class Resume {
    public resumeSrc : string;
    public resumeDownload : string;
    public config: Config;
    activate(params, routeConfig) {
        (new ConfigFactory()).getConfig().then(config => {
            this.resumeSrc = config.resumeSrc;
            this.resumeDownload = config.resumeDownload;
        });
    }
}