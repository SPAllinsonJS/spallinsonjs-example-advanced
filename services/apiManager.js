

_A_.Services.ApiManager = function () {

    // public methods

    this.login = function (username, password, successCallback, errorCallback) {
        // // This is where you would make an API call
        // _A_.Ajax.request(
        //     'GET',
        //     'https://api.yourapp.com/login?username='+username+'&password='+password+'',
        //     null,
        //     null,
        //     function (response) {
        //         //
        //     },
        //     function (error) {
        //         //
        //     }
        // );

        // mock the response for example app purposes instead
        successCallback('ABCD-EFGH-IJKL-MNOP-QRST-UVWX-YZ');
    };

    this.getUser = function (authToken, successCallback, errorCallback) {
        // mock the response for example app purposes
        successCallback({
            username: 'chrisallinson',
            firstName: 'Chris',
            lastName: 'Allinson',
            age: '37'
        });
    };
};
