define(["require", "exports", 'moment'], function (require, exports, moment) {
    "use strict";
    var DateFormatterValueConverter = (function () {
        function DateFormatterValueConverter() {
        }
        DateFormatterValueConverter.prototype.toView = function (date, format) {
            return moment(date).format(format);
        };
        return DateFormatterValueConverter;
    }());
    exports.DateFormatterValueConverter = DateFormatterValueConverter;
});

//# sourceMappingURL=date-converters.js.map
