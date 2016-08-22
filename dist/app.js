var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-dependency-injection", "aurelia-event-aggregator", "./common/global-events", "./routes/home/services/local-service"], function (require, exports, aurelia_dependency_injection_1, aurelia_event_aggregator_1, global_events_1, local_service_1) {
    "use strict";
    var HomeViewModel = (function () {
        function HomeViewModel(_service, _ea) {
            this._service = _service;
            this._ea = _ea;
        }
        HomeViewModel.prototype.configureRouter = function (config, router) {
            config.title = 'Alex Vizcaino';
            config.map([
                { route: ['', 'home'], name: 'home', moduleId: 'routes/home/views/main', nav: false, title: 'Personal Info' },
                { route: 'education', name: 'education', moduleId: 'routes/education/views/main', nav: true, title: 'Education' },
                { route: 'work', name: 'work', moduleId: 'routes/work/views/main', nav: true, title: 'Work Experience' },
                { route: 'publications', name: 'publications', moduleId: 'routes/publications/views/main', nav: true, title: 'Publications' }
            ]);
            this.router = router;
        };
        HomeViewModel.prototype.activate = function () {
            var _this = this;
            this._ea.subscribe(global_events_1.GlobalEvents.navigation, this.navigateTo.bind(this));
            return this._service.getUserInfo()
                .then(function (r) { return _this.userInfo = r; });
        };
        HomeViewModel.prototype.navigateTo = function (route) {
            this.router.navigate(route);
        };
        HomeViewModel = __decorate([
            aurelia_dependency_injection_1.autoinject, 
            __metadata('design:paramtypes', [local_service_1.HomeService, aurelia_event_aggregator_1.EventAggregator])
        ], HomeViewModel);
        return HomeViewModel;
    }());
    exports.HomeViewModel = HomeViewModel;
});

//# sourceMappingURL=app.js.map
