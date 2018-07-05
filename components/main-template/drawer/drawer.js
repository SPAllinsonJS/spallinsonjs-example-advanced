

_A_.Controllers.Drawer = function () {

    // instance variables

    var self = this;

    this.me;
    this.model;



    // lifecycle methods

    this.init = function (i, data) {
        self.me = i;
        self.model = data;

        self.model.drawerState = 'closed';

        _A_.Note.register('HAMBURGER_PRESSED', self.me, 'handleHamburgerPressed');
    };

    this.dealloc = function (callback) {
        _A_.Note.deregisterFromAll(self.me);
        return callback();
    };

    this.viewDidLoad = function () {
    };



    // UI Events

    this.logoutPressed = function () {
        var logoutConfirmText = _A_.Locale.get('logoutConfirm');
        var logout = confirm(logoutConfirmText);
        if (logout) {
            UserManager.logout();
            _A_.Go('main/login');
        }
    };



    // public methods

    this.closeDrawer = function () {
        self.model.drawerState = 'closing';
        _A_.Repaint(self.me);
        setTimeout(function () {
            self.model.drawerState = 'closed';
            _A_.Note.fire('DRAWER_CLOSED');
        }, 300);
    };



    // notification handlers

    this.handleHamburgerPressed = function () {
        if (self.model.drawerState == 'closed') {
            openDrawer()
        } else if (self.model.drawerState == 'open') {
            self.closeDrawer();
        }
    };



    // private methods

    var openDrawer = function () {
        self.model.drawerState = 'opening';
        _A_.Repaint(self.me);
        setTimeout(function () {
            self.model.drawerState = 'open';
        }, 300);
    };
};
