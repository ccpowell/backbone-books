define(function (require, exports, module) {
    "use strict";

    // External dependencies.
    var _ = require("underscore");
    var $ = require("jquery");
    var Backbone = require("backbone");
    var data = require("modules/data");

    // Alias the module for easier identification.
    var app = module.exports;

    // The root path to run the application through.
    app.root = "/";

    console.log(data.library);
});
