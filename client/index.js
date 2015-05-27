// Dependencies
var Piklor = require("./piklor");

/*!
 * init
 *
 * @name init
 * @function
 */
exports.init = function () {
    var self = this;
    var conf = self._config;
    self._ = new Piklor(conf.selector, conf.colors, conf.options);
    self._.colorChosen(function (col) {
        self.color = col;
        self.emit("colorChosen", null, { color: col });
    });
};

/**
 * render
 *
 * @name render
 * @function
 */
exports.render = function () {
    this._.render();
};

/**
 * close
 *
 * @name close
 * @function
 */
exports.close = function () {
    this._.close();
};

/**
 * open
 *
 * @name open
 * @function
 */
exports.open = function () {
    this._.open();
};

/**
 * set
 *
 * @name set
 * @function
 * @param {Event} ev The event object.
 * @param {Object} data An object containing:
 *
 *  - `col` (String): The color to set.
 *  - `p` (Boolean): If `false`, the color change will not be triggered.
 */
exports.set = function (ev, data) {
    this._.set(data.col, data.p);
};
