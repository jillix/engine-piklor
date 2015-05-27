var Piklor = require("./piklor");

exports.init = function () {
    var self = this;
    var conf = self._config;
    self._ = new Piklor(conf.selector, conf.colors, conf.options);
    self._.colorChosen(function (col) {
        self.color = col;
        self.emit("colorChosen", null, { color: col });
    });
};

exports.render = function () {
    this._.render();
};

exports.close = function () {
    this._.close();
};

exports.open = function () {
    this._.open();
};

exports.set = function (ev, data) {
    this._.set(data.col, data.p);
};
