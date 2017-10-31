var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('app',["require", "exports", "./singletons/config", "aurelia-framework", "aurelia-event-aggregator"], function (require, exports, config_1, aurelia_framework_1, aurelia_event_aggregator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App(eventAggregator) {
            var _this = this;
            this.eventAggregator = eventAggregator;
            this.configFactory = new config_1.ConfigFactory();
            this.eventAggregator.subscribe('tileClicked', function (data) {
                var galleryId = data.id;
                _this.router.navigate('/' + galleryId);
            });
        }
        App.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.title = 'Aurelia';
            config.map([
                { route: ['', 'home'], name: 'home', moduleId: 'modules/index' },
                { route: '/:id', name: 'piece', moduleId: 'modules/galleryFocus' }
            ]);
        };
        App = __decorate([
            aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator),
            __metadata("design:paramtypes", [Object])
        ], App);
        return App;
    }());
    exports.App = App;
});



define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});



define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});



var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('components/gallery',["require", "exports", "aurelia-framework", "aurelia-event-aggregator"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Gallery = (function () {
        function Gallery(eventAggregator) {
        }
        Gallery.prototype.attached = function () {
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Array)
        ], Gallery.prototype, "list", void 0);
        Gallery = __decorate([
            aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator),
            __metadata("design:paramtypes", [Object])
        ], Gallery);
        return Gallery;
    }());
    exports.Gallery = Gallery;
});



var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('components/galleryTile',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "../entities/galleryObject"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, galleryObject_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GalleryTile = (function () {
        function GalleryTile(eventAggregator) {
            this.eventAggregator = eventAggregator;
        }
        GalleryTile.prototype.clicked = function () {
            this.eventAggregator.publish("tileClicked", { id: this.galleryObject.id });
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Number)
        ], GalleryTile.prototype, "width", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Number)
        ], GalleryTile.prototype, "height", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", galleryObject_1.GalleryObject)
        ], GalleryTile.prototype, "galleryObject", void 0);
        GalleryTile = __decorate([
            aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator),
            __metadata("design:paramtypes", [Object])
        ], GalleryTile);
        return GalleryTile;
    }());
    exports.GalleryTile = GalleryTile;
});



define('modules/galleryFocus',["require", "exports", "../singletons/config"], function (require, exports, config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GalleryFocus = (function () {
        function GalleryFocus() {
        }
        GalleryFocus.prototype.activate = function (data) {
            var configFactory = new config_1.ConfigFactory();
            var galleryList = configFactory.getConfig().galleryList;
            window.galleryList = galleryList;
            var id = Number(data.id);
            window._id = id;
            console.log(id, galleryList);
            this.galleryObject = galleryList.filter(function (x) { return x.id === id; })[0];
            console.log(id, galleryList.filter(function (x) { return x.id === id; }));
        };
        return GalleryFocus;
    }());
    exports.GalleryFocus = GalleryFocus;
});



define('modules/index',["require", "exports", "../singletons/config"], function (require, exports, config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Index = (function () {
        function Index() {
            this.galleryTitle = 'Site Under Construction';
            var configFactory = new config_1.ConfigFactory();
            var config = configFactory.getConfig();
            this.list = config.galleryList;
        }
        return Index;
    }());
    exports.Index = Index;
});



define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});



define('singletons/config',["require", "exports", "../entities/galleryObject"], function (require, exports, galleryObject_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Config = (function () {
        function Config() {
            this.galleryList = [
                new galleryObject_1.GalleryObject("https://img00.deviantart.net/6de1/i/2015/347/7/d/immolation_by_aquashiram14-d9k0yod.jpg", "Immolation"),
                new galleryObject_1.GalleryObject("https://static.pexels.com/photos/34950/pexels-photo.jpg", "text"),
                new galleryObject_1.GalleryObject("https://static.pexels.com/photos/34950/pexels-photo.jpg", "text"),
                new galleryObject_1.GalleryObject("https://static.pexels.com/photos/34950/pexels-photo.jpg", "text"),
                new galleryObject_1.GalleryObject("https://static.pexels.com/photos/34950/pexels-photo.jpg", "text"),
                new galleryObject_1.GalleryObject("https://static.pexels.com/photos/34950/pexels-photo.jpg", "text"),
                new galleryObject_1.GalleryObject("https://static.pexels.com/photos/34950/pexels-photo.jpg", "text"),
                new galleryObject_1.GalleryObject("https://static.pexels.com/photos/34950/pexels-photo.jpg", "text"),
                new galleryObject_1.GalleryObject("https://static.pexels.com/photos/34950/pexels-photo.jpg", "text")
            ];
        }
        return Config;
    }());
    var config = new Config();
    var ConfigFactory = (function () {
        function ConfigFactory() {
        }
        ConfigFactory.prototype.getConfig = function () {
            return config;
        };
        return ConfigFactory;
    }());
    exports.ConfigFactory = ConfigFactory;
});



define('entities/galleryObject',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GalleryObject = (function () {
        function GalleryObject(src, text) {
            this.id = GalleryObject._id++;
            this.src = src;
            this.text = text;
        }
        GalleryObject._id = 0;
        return GalleryObject;
    }());
    exports.GalleryObject = GalleryObject;
});



define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <router-view swap-order=\"with\"></router-view>\n</template>\n"; });
define('text!components/gallery.html', ['module'], function(module) { module.exports = "<template>\n    <require from=\"components/galleryTile\"></require>\n    <require from=\"components/gallery.css\"></require>\n    \n    <gallery-tile repeat.for=\"item of list\" width=400 height=400 gallery-object.bind=\"item\"></gallery-tile>\n</template>\n"; });
define('text!components/gallery.css', ['module'], function(module) { module.exports = "gallery {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  max-width: 1200px;\n  margin: auto; }\n"; });
define('text!components/galleryTile.html', ['module'], function(module) { module.exports = "<template css=\"width:${width}px; height:${height}px;\">\n    <require from=\"./galleryTile.css\"></require>\n    <div css=\"width:${width}px; height:${height}px;background-image:url('${galleryObject.src}'); background-size: cover; background-position: 50% 50%; background-repeat: no-repeat;\"></div>\n    <a class=\"overlay\" click.delegate=\"clicked()\"><div class=\"tile-text\">${galleryObject.text}</div></a>\n</template>\n"; });
define('text!modules/galleryFocus.html', ['module'], function(module) { module.exports = "<template>\r\n    <h1>${galleryObject.text}</h1>\r\n    <img src=\"${galleryObject.src}\"/>\r\n</template>"; });
define('text!components/galleryTile.css', ['module'], function(module) { module.exports = "gallery-tile {\n  flex: 1;\n  flex-grow: 0;\n  position: relative; }\n  gallery-tile .overlay {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background-color: transparent;\n    color: transparent;\n    transition: .8s; }\n    gallery-tile .overlay:hover {\n      background-color: rgba(255, 255, 255, 0.9);\n      color: black;\n      transition: .5s; }\n    gallery-tile .overlay div {\n      flex: 1;\n      display: flex;\n      flex-direction: row;\n      align-items: center; }\n"; });
define('text!modules/index.html', ['module'], function(module) { module.exports = "<template>\r\n    <require from=\"components/gallery\"></require>\r\n    <h1>${galleryTitle}</h1>\r\n    <gallery list.bind=\"list\"></gallery>\r\n</template>"; });
//# sourceMappingURL=app-bundle.js.map