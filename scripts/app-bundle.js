define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.message = 'Site Under Construction';
            this.list = [
                { src: "https://static.pexels.com/photos/34950/pexels-photo.jpg" },
                { src: "https://static.pexels.com/photos/34950/pexels-photo.jpg" },
                { src: "https://static.pexels.com/photos/34950/pexels-photo.jpg" },
                { src: "https://static.pexels.com/photos/34950/pexels-photo.jpg" },
                { src: "https://static.pexels.com/photos/34950/pexels-photo.jpg" },
                { src: "https://static.pexels.com/photos/34950/pexels-photo.jpg" },
                { src: "https://static.pexels.com/photos/34950/pexels-photo.jpg" },
                { src: "https://static.pexels.com/photos/34950/pexels-photo.jpg" },
                { src: "https://static.pexels.com/photos/34950/pexels-photo.jpg" }
            ];
        }
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
define('components/gallery',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Gallery = (function () {
        function Gallery() {
        }
        Gallery.prototype.attached = function () {
            if (this.columns <= 0) {
                this.columns = 3;
            }
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Array)
        ], Gallery.prototype, "list", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Number)
        ], Gallery.prototype, "columns", void 0);
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
define('components/galleryTile',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GalleryTile = (function () {
        function GalleryTile() {
            this.isModal = false;
        }
        GalleryTile.prototype.clicked = function () {
            this.isModal = !this.isModal;
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], GalleryTile.prototype, "imgSrc", void 0);
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
            __metadata("design:type", Boolean)
        ], GalleryTile.prototype, "isModal", void 0);
        return GalleryTile;
    }());
    exports.GalleryTile = GalleryTile;
});



define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});



define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"components/gallery\"></require>\n\n  <h1>${message}</h1>\n\n  <gallery list.bind=\"list\"></gallery>\n  \n</template>\n"; });
define('text!components/gallery.html', ['module'], function(module) { module.exports = "<template>\n    <require from=\"components/galleryTile\"></require>\n    <require from=\"components/gallery.css\"></require>\n    \n    <gallery-tile repeat.for=\"item of list\" width=400 height=400 img-src.bind=\"item.src\"></gallery-tile>\n</template>\n"; });
define('text!components/gallery.css', ['module'], function(module) { module.exports = "gallery {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  max-width: 1200px;\n  margin: auto; }\n"; });
define('text!components/galleryTile.html', ['module'], function(module) { module.exports = "<template css=\"width:${width}px; height:${height}px;\">\n    <require from=\"./galleryTile.css\"></require>\n    <a class=\"overlay\" click.delegate=\"clicked()\"><div>text here</div></a>\n    <div click.delegate=\"clicked()\" class=\"image-container ${isModal ? 'modal' : ''}\">\n        <img src.bind=\"imgSrc\" width.bind=\"width\" height.bind=\"height\"/>\n    </div>\n</template>\n"; });
define('text!components/galleryTile.css', ['module'], function(module) { module.exports = "gallery-tile {\n  flex: 1;\n  flex-grow: 0;\n  position: relative; }\n\n.overlay {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  position: absolute; }\n  .overlay div {\n    flex: 1;\n    display: flex;\n    flex-direction: row;\n    align-items: center; }\n\n.overlay {\n  background-color: transparent;\n  color: transparent;\n  transition: .8s; }\n\n.overlay:hover {\n  background-color: rgba(255, 255, 255, 0.8);\n  color: black;\n  transition: .8s; }\n\n.image-container {\n  position: static; }\n  .image-container.modal {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    width: auto;\n    height: auto;\n    align-content: center;\n    background-color: rgba(0, 0, 0, 0.8);\n    z-index: 1000; }\n"; });
//# sourceMappingURL=app-bundle.js.map