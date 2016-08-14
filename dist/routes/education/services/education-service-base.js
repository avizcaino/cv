var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-dependency-injection", "aurelia-fetch-client"], function (require, exports, aurelia_dependency_injection_1, aurelia_fetch_client_1) {
    "use strict";
    var EducationServiceBase = (function () {
        function EducationServiceBase(_httpClient) {
            this._httpClient = _httpClient;
        }
        EducationServiceBase.prototype.getEducation = function () {
            var _this = this;
            return this._httpClient.fetch(this.getRequest())
                .then(function (r) { return r.json(); })
                .then(function (r) { return _this.adaptResources(r); })
                .then(function (r) { return _this._cachedEducation = r; });
        };
        EducationServiceBase.prototype.getRequest = function () {
            return this.educationUrl;
        };
        EducationServiceBase.prototype.adaptResources = function (r) {
            return r;
        };
        EducationServiceBase = __decorate([
            aurelia_dependency_injection_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_fetch_client_1.HttpClient])
        ], EducationServiceBase);
        return EducationServiceBase;
    }());
    exports.EducationServiceBase = EducationServiceBase;
});

//# sourceMappingURL=education-service-base.js.map
