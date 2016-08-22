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
    var UcValueConverter = (function () {
        function UcValueConverter() {
        }
        UcValueConverter.prototype.toView = function (text) {
            return text.toLocaleUpperCase();
        };
        return UcValueConverter;
    }());
    exports.UcValueConverter = UcValueConverter;
    var LcValueConverter = (function () {
        function LcValueConverter() {
        }
        LcValueConverter.prototype.toView = function (text) {
            return text.toLocaleLowerCase();
        };
        return LcValueConverter;
    }());
    exports.LcValueConverter = LcValueConverter;
    var CcValueConverter = (function () {
        function CcValueConverter() {
        }
        CcValueConverter.prototype.toView = function (text) {
            return text.charAt(0).toLocaleUpperCase() + text.substr(1, text.length);
        };
        return CcValueConverter;
    }());
    exports.CcValueConverter = CcValueConverter;
});

//# sourceMappingURL=common.js.map
