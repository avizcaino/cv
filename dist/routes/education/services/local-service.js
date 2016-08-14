var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./education-service-base"], function (require, exports, education_service_base_1) {
    "use strict";
    var EducationService = (function (_super) {
        __extends(EducationService, _super);
        function EducationService() {
            _super.apply(this, arguments);
            this.educationUrl = 'test-data/education.json';
        }
        return EducationService;
    }(education_service_base_1.EducationServiceBase));
    exports.EducationService = EducationService;
});

//# sourceMappingURL=local-service.js.map
