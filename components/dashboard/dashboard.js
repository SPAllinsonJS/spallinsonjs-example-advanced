

_A_.Controllers.Dashboard = function () {

    // instance variables

    var self = this;

    this.me;
    this.model;



    // lifecycle methods

    this.init = function (i, data) {
        self.me = i;
        self.model = data;
    };

    this.dealloc = function (callback) {
        return callback();
    };

    this.viewDidLoad = function () {
    };
};
