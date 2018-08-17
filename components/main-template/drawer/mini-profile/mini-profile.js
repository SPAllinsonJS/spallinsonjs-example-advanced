

_A_.Controllers.MiniProfile = function () {

    // instance variables

    var self = this;



    // lifecycle methods

    this.init = function () {
        self.model = UserManager.getUser();
    };
};
