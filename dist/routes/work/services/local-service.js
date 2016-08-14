var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./work-service-base"], function (require, exports, work_service_base_1) {
    "use strict";
    var WorkService = (function (_super) {
        __extends(WorkService, _super);
        function WorkService() {
            _super.apply(this, arguments);
            this.workUrl = 'test-data/work-experience.json';
        }
        return WorkService;
    }(work_service_base_1.WorkServiceBase));
    exports.WorkService = WorkService;
});

//# sourceMappingURL=local-service.js.map
