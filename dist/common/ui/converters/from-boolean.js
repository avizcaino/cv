define(["require", "exports"], function (require, exports) {
    "use strict";
    var fbValueConverter = (function () {
        function fbValueConverter() {
        }
        fbValueConverter.prototype.toView = function (item, args) {
            var res = null;
            var index = 0;
            while (index < fbValueConverter._converters.length && res == null) {
                res = fbValueConverter._converters[index](item);
                index++;
            }
            if (res == null)
                res = true;
            return fbValueConverter.applyArguments(res, args);
        };
        fbValueConverter.applyArguments = function (value, args) {
            if (args) {
                var argsArray = args.split(",");
                var invert = argsArray.find(function (x) { return x == 'i'; });
                if (invert)
                    value = !value;
            }
            return value;
        };
        fbValueConverter.fromNullOrUndefined = function (value) {
            if (value == null || typeof value == 'undefined')
                return false;
            return null;
        };
        fbValueConverter.fromBoolean = function (value) {
            if (value instanceof Boolean || typeof value == 'boolean')
                return value;
            return null;
        };
        fbValueConverter.fromString = function (value) {
            if (value instanceof String || typeof value == 'string') {
                var str = value;
                return str.trim().length > 0;
            }
            return null;
        };
        fbValueConverter.fromNumber = function (value) {
            if (value instanceof Number || typeof value == 'number') {
                return value > 0;
            }
            return null;
        };
        fbValueConverter.fromArray = function (value) {
            if (value.constructor === Array) {
                return value.length > 0;
            }
            return null;
        };
        fbValueConverter._converters = [fbValueConverter.fromNullOrUndefined, fbValueConverter.fromBoolean,
            fbValueConverter.fromString, fbValueConverter.fromNumber, fbValueConverter.fromArray];
        fbValueConverter.singleton = new fbValueConverter;
        return fbValueConverter;
    }());
    exports.fbValueConverter = fbValueConverter;
});

//# sourceMappingURL=from-boolean.js.map
