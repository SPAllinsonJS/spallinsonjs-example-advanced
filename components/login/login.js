

_A_.Controllers.Login = function (ApiManager) {

    // instance variables

    var self = this;

    this.me;
    this.model;



    // lifecycle methods

    this.init = function (i, data) {
        self.me = i;
        self.model = data;

        self.model = {
            username: '',
            password: ''
        };
    };

    this.dealloc = function (callback) {
        return callback();
    };

    this.viewDidLoad = function () {
    };



    // UI Events

    this.usernameChanged = function (input) {
        self.model.username = input.value;
    };

    this.passwordChanged = function (input) {
        self.model.password = input.value;
    };

    this.loginPressed = function () {
        // guard
        if (self.model.username == '') {
            _A_.Alert.show(_A_.Locale.get('usernameError'));
            return;
        }
        if (self.model.password == '') {
            _A_.Alert.show(_A_.Locale.get('passwordError'));
            return;
        }

        ApiManager.login(
            self.model.username,
            self.model.password,
            function (responseAuthToken) {

                UserManager.saveAuthToken(responseAuthToken);
                ApiManager.getUser(
                    UserManager.getAuthToken(),
                    function (responseUser) {
                        UserManager.saveUser(responseUser);
                        _A_.Go('main/dashboard');
                    },
                    function (error) {
                        _A_.Alert.show(error);
                    }
                );

            },
            function (error) {
                _A_.Alert.show(error);
            }
        );
    };
};
