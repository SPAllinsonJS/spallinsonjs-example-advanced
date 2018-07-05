

_A_.Controllers.MiniProfile = function () {

    // instance variables

    var self = this;

    this.me;
    this.model;



    // lifecycle methods

    this.init = function (i, data) {
        self.me = i;
        self.model = data;

        self.model = UserManager.getUser();
    };

    this.dealloc = function (callback) {
        return callback();
    };

    this.viewDidLoad = function () {
    };
};
