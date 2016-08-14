var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./publications-service-base"], function (require, exports, publications_service_base_1) {
    "use strict";
    var PublicationsService = (function (_super) {
        __extends(PublicationsService, _super);
        function PublicationsService() {
            _super.apply(this, arguments);
            this.publicationsUrl = 'test-data/publications.json';
        }
        return PublicationsService;
    }(publications_service_base_1.PublicationsServiceBase));
    exports.PublicationsService = PublicationsService;
});

//# sourceMappingURL=local-service.js.map
