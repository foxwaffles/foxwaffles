import {ConfigFactory} from './singletons/config';
import {inject} from 'aurelia-framework';

import {EventAggregator} from 'aurelia-event-aggregator';
import {Router} from 'aurelia-router';
@inject(EventAggregator)
export class App {

    public headerImgSrc : string;
    public siteHeader: string;

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
        this.configFactory.getConfig().then(config => {
            this.headerImgSrc = config.headerImgSrc;
            this.siteHeader = config.siteHeader;
            
        })
    }

    configureRouter(config, router) {
        this.router = router;
        config.title = 'Foxwaffles';
        config.map([
            { route: ['', 'home'], name: 'home', moduleId: 'modules/index', title: "Home", nav: true },
            { route: 'about', name: 'about', moduleId: 'modules/about', title: 'About', nav: true},
            { route: 'contact', name: 'findMe', moduleId: 'modules/contact', title: 'Find Me', nav:true},
            { route: 'resume', name: 'resume', moduleId: 'modules/resume', title: "Resume", nav: true},
            { route: '/:id', name: 'piece', moduleId: 'modules/galleryFocus', title: "Piece"}
        ]);
    }
}
