define(["require", "exports"], function (require, exports) {
    "use strict";
    var GetSocialIconValueConverter = (function () {
        function GetSocialIconValueConverter() {
        }
        GetSocialIconValueConverter.prototype.toView = function (network) {
            switch (network) {
                case 'skype':
                    return 'skype';
                case 'twitter':
                    return 'twitter';
                case 'facebook':
                    return 'facebook';
                case 'instagram':
                    return 'instagram';
                case 'github':
                    return 'github';
                case 'linkedin':
                    return 'linkedin';
                case 'pocket':
                    return 'pocket';
                default:
                    return 'skype';
            }
        };
        return GetSocialIconValueConverter;
    }());
    exports.GetSocialIconValueConverter = GetSocialIconValueConverter;
});

//# sourceMappingURL=social-converters.js.map
