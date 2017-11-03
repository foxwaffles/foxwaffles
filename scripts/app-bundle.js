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
            config.title = 'Foxwaffles';
            config.map([
                { route: ['', 'home'], name: 'home', moduleId: 'modules/index', title: "Home", nav: true },
                { route: '/:id', name: 'piece', moduleId: 'modules/galleryFocus', title: "Piece" }
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
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Number)
        ], Gallery.prototype, "tileWidth", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Number)
        ], Gallery.prototype, "tileHeight", void 0);
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



define('entities/galleryObject',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GalleryObject = (function () {
        function GalleryObject(src, title, description) {
            if (description === void 0) { description = "temporary text"; }
            this.id = GalleryObject._id++;
            this.src = src;
            this.title = title;
            this.description = description;
        }
        GalleryObject._id = 0;
        return GalleryObject;
    }());
    exports.GalleryObject = GalleryObject;
});



define('modules/galleryFocus',["require", "exports", "../singletons/config"], function (require, exports, config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GalleryFocus = (function () {
        function GalleryFocus() {
        }
        GalleryFocus.prototype.activate = function (params, routeConfig) {
            var _this = this;
            var configFactory = new config_1.ConfigFactory();
            configFactory.getConfig().then(function (config) {
                var galleryList = config.galleryList;
                var id = Number(params.id);
                _this.galleryObject = galleryList.filter(function (x) { return x.id === id; })[0];
                routeConfig.navModel.setTitle(_this.galleryObject.title);
            });
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
            var _this = this;
            this.galleryTitle = 'Site Under Construction';
            var configFactory = new config_1.ConfigFactory();
            configFactory.getConfig().then(function (config) {
                _this.list = config.galleryList;
            });
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



var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define('singletons/config',["require", "exports", "../entities/galleryObject"], function (require, exports, galleryObject_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Config = (function () {
        function Config() {
            this.galleryList = [
                new galleryObject_1.GalleryObject("https://img00.deviantart.net/6de1/i/2015/347/7/d/immolation_by_aquashiram14-d9k0yod.jpg", "Immolation"),
                new galleryObject_1.GalleryObject("https://img00.deviantart.net/6de1/i/2015/347/7/d/immolation_by_aquashiram14-d9k0yod.jpg", "Immolation"),
                new galleryObject_1.GalleryObject("https://img00.deviantart.net/6de1/i/2015/347/7/d/immolation_by_aquashiram14-d9k0yod.jpg", "Immolation"),
                new galleryObject_1.GalleryObject("https://img00.deviantart.net/6de1/i/2015/347/7/d/immolation_by_aquashiram14-d9k0yod.jpg", "Immolation"),
                new galleryObject_1.GalleryObject("https://img00.deviantart.net/6de1/i/2015/347/7/d/immolation_by_aquashiram14-d9k0yod.jpg", "Immolation"),
                new galleryObject_1.GalleryObject("https://img00.deviantart.net/6de1/i/2015/347/7/d/immolation_by_aquashiram14-d9k0yod.jpg", "Immolation"),
                new galleryObject_1.GalleryObject("https://img00.deviantart.net/6de1/i/2015/347/7/d/immolation_by_aquashiram14-d9k0yod.jpg", "Immolation"),
                new galleryObject_1.GalleryObject("https://img00.deviantart.net/6de1/i/2015/347/7/d/immolation_by_aquashiram14-d9k0yod.jpg", "Immolation"),
                new galleryObject_1.GalleryObject("https://img00.deviantart.net/6de1/i/2015/347/7/d/immolation_by_aquashiram14-d9k0yod.jpg", "Immolation"),
            ];
        }
        return Config;
    }());
    var config = new Config();
    var ConfigFactory = (function () {
        function ConfigFactory() {
        }
        ConfigFactory.prototype.getConfig = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2, config];
                });
            });
        };
        return ConfigFactory;
    }());
    exports.ConfigFactory = ConfigFactory;
});



define('text!app.html', ['module'], function(module) { module.exports = "<template>\n    <nav class=\"navbar navbar-dark bg-dark\">\n        <a class=\"${nav.isActive ? 'active' : ''}\" repeat.for=\"nav of router.navigation\" href.bind=\"nav.href\">${nav.title}</a>\n    </nav>\n    <router-view swap-order=\"before\"></router-view>  \n</template>\n"; });
define('text!components/gallery.html', ['module'], function(module) { module.exports = "<template>\n    <require from=\"components/galleryTile\"></require>\n    <require from=\"components/gallery.css\"></require>\n    \n    <gallery-tile repeat.for=\"item of list\" width.bind=\"tileWidth\" height.bind=\"tileHeight\" gallery-object.bind=\"item\"></gallery-tile>\n</template>\n"; });
define('text!components/gallery.css', ['module'], function(module) { module.exports = "gallery {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: auto; }\n"; });
define('text!components/galleryTile.css', ['module'], function(module) { module.exports = "gallery-tile {\n  flex: 1;\n  flex-grow: 0;\n  position: relative; }\n  gallery-tile .overlay {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background-color: transparent !important;\n    color: transparent !important;\n    transition: .8s; }\n    gallery-tile .overlay:hover {\n      background-color: rgba(255, 255, 255, 0.9) !important;\n      color: black !important;\n      transition: .5s; }\n    gallery-tile .overlay div {\n      flex: 1;\n      display: flex;\n      flex-direction: row;\n      align-items: center; }\n"; });
define('text!components/galleryTile.html', ['module'], function(module) { module.exports = "<template css=\"width:${width}px; height:${height}px;\">\n    <require from=\"./galleryTile.css\"></require>\n    <div css=\"width:${width}px; height:${height}px;background-image:url('${galleryObject.src}'); background-size: cover; background-position: 50% 50%; background-repeat: no-repeat;\"></div>\n    <a class=\"overlay\" click.delegate=\"clicked()\"><div class=\"tile-text\">${galleryObject.title}</div></a>\n</template>\n"; });
define('text!modules/galleryFocus.html', ['module'], function(module) { module.exports = "<template>\r\n<div class=\"container\">\r\n    <div class=\"card\">\r\n        <img class=\"card-img-top\" src=\"${galleryObject.src}\" alt=\"${gallerytObject.text}\">\r\n        <div class=\"card-body\">\r\n            <h4 class=\"card-title\">${galleryObject.title}</h4>\r\n            <p class=\"card-text\">${galleryObject.description}</p>\r\n        </div>\r\n    </div>\r\n</div>\r\n</template>"; });
define('text!modules/index.html', ['module'], function(module) { module.exports = "<template>\r\n    <require from=\"components/gallery\"></require>\r\n    <h1>${galleryTitle}</h1>\r\n    <gallery list.bind=\"list\" tile-width=\"500\" tile-height=\"300\"></gallery>\r\n</template>"; });
//# sourceMappingURL=app-bundle.js.map