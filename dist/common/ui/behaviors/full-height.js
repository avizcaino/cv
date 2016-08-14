var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-templating", "aurelia-templating", "aurelia-dependency-injection"], function (require, exports, aurelia_templating_1, aurelia_templating_2, aurelia_dependency_injection_1) {
    "use strict";
    var FullHeight = (function () {
        function FullHeight(_element) {
            this._element = _element;
        }
        FullHeight.prototype.attached = function () {
            this.getHeight();
        };
        FullHeight.prototype.navigationChanged = function (newValue) {
            this.getHeight();
        };
        FullHeight.prototype.getHeight = function () {
        };
        __decorate([
            aurelia_templating_2.bindable, 
            __metadata('design:type', Object)
        ], FullHeight.prototype, "navigation", void 0);
        FullHeight = __decorate([
            aurelia_templating_1.customAttribute('full-height'),
            aurelia_dependency_injection_1.autoinject, 
            __metadata('design:paramtypes', [Element])
        ], FullHeight);
        return FullHeight;
    }());
    exports.FullHeight = FullHeight;
});

//# sourceMappingURL=full-height.js.map
