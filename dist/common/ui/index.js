define(["require", "exports"], function (require, exports) {
    "use strict";
    function configure(fc) {
        fc.globalResources([
            './converters/common',
            './converters/from-boolean',
            './converters/date-converters',
            './converters/social-converters',
            './behaviors/background-image',
            './behaviors/full-height'
        ]);
    }
    exports.configure = configure;
});

//# sourceMappingURL=index.js.map
