

_A_.Settings = {

    appRoot: './',

    initialRoute: 'login',


    splash: {
        enabled: true,
        view: 'components/splash/splash.html',
        doesFadeOut: true,
        showForAtLeastMills: 2500,
        imageSuffixForDevicePixelRatio: {
            '1': '',
            '1.5': '@2x',
            '2': '@2x',
            '2.25': '@2x'
        }
    },


    historyEnabled: true,

    scriptManagementEnabled: false,


    components: {
        'Login': {
            view: 'components/login/login.html',
            controller: 'components/login/login.js',
            pageTitle: 'your app - Login',
            services: [
                'ApiManager'
            ]
        },

        'MainTemplate': {
            view: 'components/main-template/main-template.html',
            controller: 'components/main-template/main-template.js'
        },
        'Header': {
            view: 'components/main-template/header/header.html',
            controller: 'components/main-template/header/header.js'
        },
        'Drawer': {
            view: 'components/main-template/drawer/drawer.html',
            controller: 'components/main-template/drawer/drawer.js'
        },
        'MiniProfile': {
            view: 'components/main-template/drawer/mini-profile/mini-profile.html',
            controller: 'components/main-template/drawer/mini-profile/mini-profile.js'
        },

        'Dashboard': {
            view: 'components/dashboard/dashboard.html',
            controller: 'components/dashboard/dashboard.js',
            pageTitle: 'your app - Dashboard'
        },

        'Privacy': {
            view: 'components/privacy/privacy.html',
            controller: 'components/privacy/privacy.js',
            pageTitle: 'your app - Privacy'
        },
        'PrivacyContent': {
            view: 'components/privacy/privacy-content/privacy-content.html',
            controller: 'components/privacy/privacy-content/privacy-content.js'
        }
    },


    fallbackRoute: 'login',

    routes: {
        'login': [
            ['Login', 'app', 'fade']
        ],

        'main': [
            ['MainTemplate', 'app', 'fade']
        ],
        'dashboard': [
            ['Dashboard', 'mainContentContainer', 'fade']
        ],
        'privacy': [
            ['Privacy', 'mainContentContainer', 'fade']
        ]
    },

    routeRules: [
        {
            condition: 'UserManager.isLoggedIn()',
            fallback: 'login',
            routes: [
                'main',
                'dashboard',
                'privacy'
            ]
        },
        {
            condition: '!UserManager.isLoggedIn()',
            fallback: 'main/dashboard',
            routes: [
                'login'
            ]
        },
    ],


    services: {
        'ApiManager': 'services/apiManager.js'
    },

    singletons: {
        'UserManager': 'singletons/userManager.js'
    }
};
