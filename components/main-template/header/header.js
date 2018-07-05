

_A_.Controllers.Header = function () {

    // instance variables

    var self = this;

    this.me;
    this.model;



    // lifecycle methods

    this.init = function (i, data) {
        self.me = i;
        self.model = data;

        self.model.hamburgerEnabled = true;

        _A_.Note.register('DRAWER_CLOSED', self.me, 'enableHamburger');
    };

    this.dealloc = function (callback) {
        _A_.Note.deregisterFromAll(self.me);
        return callback();
    };

    this.viewDidLoad = function () {
    };



    // UI Events

    this.hamburgerPressed = function () {
        self.model.hamburgerEnabled = false;
        _A_.Repaint(self.me);
        _A_.Note.fire('HAMBURGER_PRESSED');
    };



    // notification handlers

    this.enableHamburger = function () {
        self.model.hamburgerEnabled = true;
        _A_.Repaint(self.me);
    };
};
