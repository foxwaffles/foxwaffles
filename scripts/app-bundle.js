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
            this.configFactory.getConfig().then(function (config) {
                _this.headerImgSrc = config.headerImgSrc;
                _this.siteHeader = config.siteHeader;
            });
        }
        App.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.title = 'Foxwaffles';
            config.map([
                { route: ['', 'home'], name: 'home', moduleId: 'modules/index', title: "Home", nav: true },
                { route: 'about', name: 'about', moduleId: 'modules/about', title: 'About', nav: true },
                { route: 'contact', name: 'findMe', moduleId: 'modules/contact', title: 'Find Me', nav: true },
                { route: 'resume', name: 'resume', moduleId: 'modules/resume', title: "Resume", nav: true },
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
define('components/galleryTile',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "../entities/galleryGroup"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, galleryGroup_1) {
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
            __metadata("design:type", galleryGroup_1.GalleryGroup)
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
                var tiles = config.tiles;
                var id = Number(params.id);
                var tile = tiles.filter(function (x) { return x.id === id; })[0];
                _this.galleryObjects = tile.galleryView;
                routeConfig.navModel.setTitle(tile.title);
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
                _this.list = config.tiles;
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
define('singletons/config',["require", "exports", "../entities/galleryObject", "../entities/galleryGroup"], function (require, exports, galleryObject_1, galleryGroup_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Config = (function () {
        function Config() {
            this.headerImgSrc = "https://orig00.deviantart.net/619c/f/2016/241/f/1/f1cc10d2ba5ce3b7af0c54b96f57e375-dafqme5.png";
            this.siteHeader = "Foxwaffles";
            var testSrc = "https://img00.deviantart.net/6de1/i/2015/347/7/d/immolation_by_aquashiram14-d9k0yod.jpg";
            this.tiles = [];
            for (var i = 0; i < 18; i++) {
                var group = new galleryGroup_1.GalleryGroup(testSrc, "Immolation");
                this.tiles.push(group);
                for (var j = 0; j < 2; j++) {
                    group.addGalleryObject(new galleryObject_1.GalleryObject(testSrc, "Immolation Object"));
                }
            }
        }
        return Config;
    }());
    exports.Config = Config;
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



define('modules/about',["require", "exports", "../singletons/config"], function (require, exports, config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var About = (function () {
        function About() {
        }
        About.prototype.activate = function (params, routeConfig) {
            var _this = this;
            (new config_1.ConfigFactory()).getConfig().then(function (config) {
                _this.text = config.aboutText;
            });
        };
        return About;
    }());
    exports.About = About;
});



define('modules/contact',["require", "exports", "../singletons/config"], function (require, exports, config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Contact = (function () {
        function Contact() {
        }
        Contact.prototype.activate = function (params, routeConfig) {
            var _this = this;
            (new config_1.ConfigFactory()).getConfig().then(function (config) {
                _this.text = config.contactText;
            });
        };
        return Contact;
    }());
    exports.Contact = Contact;
});



define('modules/resume',["require", "exports", "../singletons/config"], function (require, exports, config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Resume = (function () {
        function Resume() {
        }
        Resume.prototype.activate = function (params, routeConfig) {
            var _this = this;
            (new config_1.ConfigFactory()).getConfig().then(function (config) {
                _this.resumeHtml = config.resumeHtml;
            });
        };
        return Resume;
    }());
    exports.Resume = Resume;
});



var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('entities/galleryGroup',["require", "exports", "../entities/galleryObject"], function (require, exports, galleryObject_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GalleryGroup = (function (_super) {
        __extends(GalleryGroup, _super);
        function GalleryGroup(src, title, description) {
            if (description === void 0) { description = "temporary text"; }
            var _this = _super.call(this, src, title, description) || this;
            _this.galleryView = [];
            return _this;
        }
        GalleryGroup.prototype.addGalleryObject = function (obj) {
            this.galleryView.push(obj);
        };
        return GalleryGroup;
    }(galleryObject_1.GalleryObject));
    exports.GalleryGroup = GalleryGroup;
});



define('text!app.html', ['module'], function(module) { module.exports = "<template>\n    <require from=\"app.css\"></require>\n    <div class=\"layout-column\">\n        <div class=\"flex-no-grow bg-light d-none d-md-flex flex-column align-items-center justify-content-center\">\n                <img height=\"100px\" src=\"${headerImgSrc}\"> <h1>${siteHeader}</h1>\n        </div>\n        <nav class=\"flex-no-grow navbar sticky-top navbar-expand-md navbar-light bg-light mb-2\">\n            <div class=\"container\">\n                <a class=\"navbar-brand d-md-none d-flex align-items-center\" href=\"/#/\"><img class=\"\" height=\"32px\" src=\"${headerImgSrc}\"><div>${siteHeader}</div></a>\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                    <span class=\"navbar-toggler-icon\"></span>\n                </button>\n                <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n                    <ul class=\"navbar-nav m-auto\">\n                        <li class=\"nav-item\" repeat.for=\"nav of router.navigation\">\n                            <a class=\"nav-link\" href.bind=\"nav.href\">${nav.title}</a>                                                                \n                        </li>\n                    </ul>\n                </div>\n            </div>\n\n\n        </nav>\n        <router-view class=\"flex-item layout-column\" swap-order=\"before\"></router-view>              \n    </div>\n\n</template>\n"; });
define('text!components/gallery.html', ['module'], function(module) { module.exports = "<template>\n    <require from=\"components/galleryTile\"></require>\n    <require from=\"components/gallery.css\"></require>\n    \n    <gallery-tile repeat.for=\"item of list\" width.bind=\"tileWidth\" height.bind=\"tileHeight\" gallery-object.bind=\"item\"></gallery-tile>\n</template>\n"; });
define('text!components/gallery.css', ['module'], function(module) { module.exports = "gallery {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: auto; }\n"; });
define('text!components/galleryTile.html', ['module'], function(module) { module.exports = "<template css=\"width:${width}px; height:${height}px;\">\r\n    <require from=\"./galleryTile.css\"></require>\r\n    <div css=\"width:${width}px; height:${height}px;background-image:url('${galleryObject.src}'); background-size: cover; background-position: 50% 50%; background-repeat: no-repeat;\"></div>\r\n    <a class=\"overlay\" click.delegate=\"clicked()\"><div class=\"tile-text\">${galleryObject.title}</div></a>\r\n</template>\r\n"; });
define('text!modules/galleryFocus.html', ['module'], function(module) { module.exports = "<template>\r\n<div class=\"layout-column vertical-scroll\">\r\n    <div class=\"container flex-no-grow\" repeat.for=\"obj of galleryObjects\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <img style=\"max-width:100%;\" src=\"${obj.src}\" alt=\"${obj.text}\">\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <h4 class=\"pl-2 pr-2\">${obj.title}</h4>\r\n                <p class=\"pl-2 pr-2\">${obj.description}</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n</template>"; });
define('text!components/galleryTile.css', ['module'], function(module) { module.exports = "gallery-tile {\n  flex: 1;\n  flex-grow: 0;\n  position: relative; }\n  gallery-tile .overlay {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background-color: transparent !important;\n    color: transparent !important;\n    transition: .8s; }\n    gallery-tile .overlay:hover {\n      background-color: rgba(255, 255, 255, 0.9) !important;\n      color: black !important;\n      transition: .5s; }\n    gallery-tile .overlay div {\n      flex: 1;\n      display: flex;\n      flex-direction: row;\n      align-items: center; }\n"; });
define('text!modules/index.html', ['module'], function(module) { module.exports = "<template>\r\n    <require from=\"components/gallery\"></require>\r\n    <div class=\"flex-item container-fluid vertical-scroll\">\r\n        <div class=\"row container\" style=\"margin: auto\">\r\n            <div class=\"col text-center\">\r\n                <h1 class=\"m-md-4\">${galleryTitle}</h1>\r\n                <gallery list.bind=\"list\" tile-width=\"300\" tile-height=\"200\"></gallery></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</template>"; });
define('text!modules/about.html', ['module'], function(module) { module.exports = "<template>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <p>${text}</p>                \r\n        </div>\r\n    </div>\r\n</template>"; });
define('text!app.css', ['module'], function(module) { module.exports = "nav a {\n  background-color: transparent !important;\n  transition: .5s;\n  color: black !important; }\n  nav a:hover {\n    background-color: rgba(0, 0, 0, 0.5) !important;\n    transition: .5s;\n    color: white !important; }\n\n/*html, body {\r\n    height: 100%;\r\n    overflow-y: hidden;\r\n}*/\n.layout-column {\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\n\n.flex-item {\n  flex: 1; }\n\n.flex-no-grow {\n  flex: 0 0 auto; }\n"; });
define('text!modules/contact.html', ['module'], function(module) { module.exports = "<template>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <p>${text}</p>\r\n        </div>\r\n    </div>\r\n</template>"; });
define('text!modules/resume.html', ['module'], function(module) { module.exports = "<template>\r\n    <require from=\"./resume.css\"></require>\r\n    <div class=\"container\" style=\"width:100%; height:100%\">\r\n        <iframe width=\"100%\" height=\"100%\" src=\"/resume.html\"></iframe>\r\n    </div>\r\n</template>"; });
define('text!snippets/resume.html', ['module'], function(module) { module.exports = "<template>\r\n<table>\r\n        <tr>\r\n            <td>item</td><td>hello world</td>\r\n        </tr>\r\n</table>\r\n</template>\r\n"; });
define('text!modules/resume.css', ['module'], function(module) { module.exports = "iframe {\n  border: none; }\n"; });
//# sourceMappingURL=app-bundle.js.map