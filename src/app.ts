import {ConfigFactory} from './singletons/config';
import {inject} from 'aurelia-framework';

import {EventAggregator} from 'aurelia-event-aggregator';
import {Router} from 'aurelia-router';
@inject(EventAggregator)
export class App {
    private router : Router;
    private eventAggregator: EventAggregator;
    private configFactory : ConfigFactory;
    constructor(eventAggregator) {
        this.eventAggregator = eventAggregator;
        this.configFactory = new ConfigFactory();
        this.eventAggregator.subscribe('tileClicked', data => {
            const galleryId = data.id;
            this.router.navigate('/'+galleryId);
        })
    }

    configureRouter(config, router) {
        this.router = router;
        config.title = 'Aurelia';
        config.map([
            { route: ['', 'home'], name: 'home', moduleId: 'modules/index' },
            { route: '/:id', name: 'piece', moduleId: 'modules/galleryFocus'}
        ]);
    }
}
