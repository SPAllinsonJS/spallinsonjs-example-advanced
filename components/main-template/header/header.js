

_A_.Controllers.Header = function () {

    // instance variables

    var self = this;



    // lifecycle methods

    this.init = function () {
        self.model.hamburgerEnabled = true;
        _A_.Note.register('DRAWER_CLOSED', self, self.enableHamburger);
    };

    this.dealloc = function (callback) {
        _A_.Note.deregisterFromAll(self);
        return callback();
    };



    // UI Events

    this.hamburgerPressed = function () {
        self.model.hamburgerEnabled = false;
        _A_.Repaint(self);
        _A_.Note.fire('HAMBURGER_PRESSED');
    };



    // notification handlers

    this.enableHamburger = function () {
        self.model.hamburgerEnabled = true;
        _A_.Repaint(self);
    };
};
