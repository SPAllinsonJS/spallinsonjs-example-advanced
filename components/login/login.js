

_A_.Controllers.Login = function (ApiManager) {

    // instance variables

    var self = this;



    // lifecycle methods

    this.init = function () {
        self.model = {
            username: '',
            password: ''
        };
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
