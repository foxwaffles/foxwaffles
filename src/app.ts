export class App {
  private router : any;
  configureRouter(config, router) {
    this.router = router;
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'home'],       name: 'home',       moduleId: 'modules/index' }
    ]);
  }
  
}
