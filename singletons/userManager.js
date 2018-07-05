

_A_.Singletons.UserManager = function () {

    // public methods

    // auth

    this.isLoggedIn = function () {
        return !!_A_.Storage.Persistent.get('AUTH_TOKEN');
    };

    this.getAuthToken = function () {
        return _A_.Storage.Persistent.get('AUTH_TOKEN');
    };

    this.saveAuthToken = function (newAuthToken) {
        _A_.Storage.Persistent.save('AUTH_TOKEN', newAuthToken);
    };

    this.logout = function () {
        _A_.Storage.Persistent.remove('AUTH_TOKEN');
    };

    // user

    this.getUser = function () {
        var tempUserJson = _A_.Storage.Persistent.get('USER');
        // guard
        if (!tempUserJson) {
            return null;
        }

        var tempUser = JSON.parse(tempUserJson);
        return tempUser;
    };

    this.saveUser = function (newUser) {
        // guard
        if (!newUser.username) {
            _A_.Alert.show('server error');
            return;
        }

        var userJson = JSON.stringify(newUser);
        _A_.Storage.Persistent.save('USER', userJson);
    };

    this.deleteUser = function () {
        _A_.Storage.Persistent.remove('USER');
    };
};
