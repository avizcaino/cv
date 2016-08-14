define(["require", "exports"], function (require, exports) {
    "use strict";
    var ArrayToStringValueConverter = (function () {
        function ArrayToStringValueConverter() {
        }
        ArrayToStringValueConverter.prototype.toView = function (data) {
            var text = '';
            for (var i = 0; i < data.length; i++) {
                text = text + data[i] + ', ';
            }
            return text.substr(0, text.length - 2);
        };
        return ArrayToStringValueConverter;
    }());
    exports.ArrayToStringValueConverter = ArrayToStringValueConverter;
});

//# sourceMappingURL=common.js.map
