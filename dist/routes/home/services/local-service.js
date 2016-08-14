var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./home-service-base"], function (require, exports, home_service_base_1) {
    "use strict";
    var HomeService = (function (_super) {
        __extends(HomeService, _super);
        function HomeService() {
            _super.apply(this, arguments);
            this.userInfoUrl = 'test-data/user-info.json';
        }
        return HomeService;
    }(home_service_base_1.HomeServiceBase));
    exports.HomeService = HomeService;
});

//# sourceMappingURL=local-service.js.map
