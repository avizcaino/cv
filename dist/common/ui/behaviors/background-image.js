var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-dependency-injection", "aurelia-templating", "aurelia-templating"], function (require, exports, aurelia_dependency_injection_1, aurelia_templating_1, aurelia_templating_2) {
    "use strict";
    var BackgroundImage = (function () {
        function BackgroundImage(_element) {
            this._element = _element;
        }
        BackgroundImage.prototype.imageChanged = function (newImage) {
            this.setBackgroundImage();
        };
        BackgroundImage.prototype.setBackgroundImage = function () {
            if (this.image != '')
                this._element.style.backgroundImage = "url(" + this.image + ")";
        };
        __decorate([
            aurelia_templating_2.bindable, 
            __metadata('design:type', String)
        ], BackgroundImage.prototype, "image", void 0);
        BackgroundImage = __decorate([
            aurelia_templating_1.customAttribute('background-image'),
            aurelia_dependency_injection_1.autoinject, 
            __metadata('design:paramtypes', [Element])
        ], BackgroundImage);
        return BackgroundImage;
    }());
    exports.BackgroundImage = BackgroundImage;
});

//# sourceMappingURL=background-image.js.map
