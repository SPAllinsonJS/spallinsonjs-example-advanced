
# SPAllinsonJS - Advanced App

v1.3.4



## Description

A fully functioning web application.

Topics include: Services, Singletons, Localization (Locale), Plugins, Notifications (Note), AJAX, Bundling



## App Architecture

The app is made up of the following files:
- `index.html`
- `app/*`
- `assets/*`
- `components/*`
- `singletons/*`
- `spallinsonjs/*`
- `spallinsonjs-alert/*`
- `spallinsonjs-lightbox/*`
- `spallinsonjs-storage/*`

#### index.html

The `index.html` file is again very simple.

It sets some meta tags and imports:
- SPAllinsonJS
- SPAllinsonJS-Alert (Plugin)
- SPAllinsonJS-Lightbox (Plugin)
- SPAllinsonJS-Storage (Plugin)
- the app's `settings.js` file
- the app's `locale.js` file
- the `common.css` styles file
- the `fonts.css` file
- the components' `.css` files

#### app/common.css

Common css styles shared across the application.

#### app/fonts.css

Fonts imported into the application.

#### app/locale.js

This file contains what SPAllinsonJS needs to support multiple languages.

You define key/value pairs for each language, and then use `[L:]` (in the view) and `_A_.Locale` (in the controller) to localize the app.

The `Login` component's view (`components/login/login.html`) has examples of using `[L:]`.

The `Drawer` component's controller (`components/main-template/drawer/drawer.js`) has an example of using `_A_.Locale` in it's `logoutPressed()` method.

#### app/settings.js

###### _A_.Settings.routeRules

You can apply specific access rules to groups of routes using `routeRules`.

`settings.js` holds a good example of restricting access to any route that the user needs to be logged in to access.

Note: the condition is a String! It will be evaluated, and there is excellent error handling via the debug console!

###### _A_.Settings.services

Services are "injected" into components (i.e. a component gets it's own instance of a service).

You register services as shown in `settings.js`.

You'll also need to "inject" the service into the component.

An example of this is the `Login` component:

1. Notice in `settings.js` where the `Login` component is registered. There is a key called `services`.

2. Notice at the very to of the `'Login` components controller (`components/login/login.js`) where it says `ApiManager`. Services will be passed into the component via this parameter!

Notice the usage of `ApiManager` in the `loginPressed` method of the `Login` component.

###### _A_.Settings.singletons

Singletons are instantiated at launch, live throughout the entire app lifecycle, and are accessible by name, from anywhere!

You register singletons as shown in `settings.js`.

Notice the usage of `UserManager` in the `loginPressed` method of the `Login` component.

#### assets/*

###### assets/fonts/*

The `Open Sans` font's files.

`app/fonts.css` has code allowing font use.

In `app/common.css`, the default font has been set to `Open Sans` for `div, span, a, button`.

#### services/*

The `ApiManager` service.

#### singletons/*

The `UserManager` singleton.

#### spallinsonjs/*

This is the v1.3.4 release of SPAllinsonJS. Nothing to see here.

#### spallinsonjs-alert/*

This is the v1.2.0 release of SPAllinsonJS-Alert. Nothing to see here.

#### spallinsonjs-lightbox/*

This is the v1.2.7 release of SPAllinsonJS-Lightbox. Nothing to see here.

#### spallinsonjs-storage/*

This is the v1.2.0 release of SPAllinsonJS-Storage. Nothing to see here.



## Notifications (Note)

SPAllinsonJS allows your components to communicate with each other via "notifications". You can even pass data through a notification!

The `Header` component's `hamburgerPressed()` method "fires" a notification with name `'HAMBURGER_PRESSED'`.

The `Drawer` component "registers" to listen for a notification with name `'HAMBURGER_PRESSED'` and fires it's `handleHamburgerPressed` method in response.

Note: `_A_.Note.register()` currently takes a String as it's 3rd argument. Simply use the method's name, and don't follow it with a `()`. SPAllinsonJS will inject any data passed via a single parameter.

The `Drawer` component "deregisters" from all notifications in it's `dealloc()` method. The `Header` component does not need to deregister as it only fires notifications.



## Ajax

The `ApiManager` service has a commented out example of using `_A_.Ajax()` to make an HTTP Request.

`_A_.Ajax()` takes a few parameters:
- method
- url
- headers array
- body
- success callback
- error callback



## Bundling

The app currently does not preload any of the components.

This means that SPAllinsonJS will download the `.js` files on the fly (during routing). It will then cache them, so as to not continually requesting the same resource.

If you were to compile all of your components into one javascript file (`bundle.min.js` or whatnot), you can use that as the value for `controller` when you register each of your components in `settings.js`.

SPAllinsonJS skips scripts it has in memory, so it would only ever load said bundle once.

You can thus separate or segment your app into pieces!

An example usage would to bundle all of the most used components into one bundle you preload, then keep other less used stuff like privacy, terms and conditions, etc. in another bundle(s) and only if the user ever visited them would they be downloaded :)



## SPAllinsonJS Documentation

#### Example Apps

- [Beginner App](https://github.com/SPAllinsonJS/spallinsonjs-example-beginner)
- [Intermediate App](https://github.com/SPAllinsonJS/spallinsonjs-example-intermediate)
- Advanced App

#### Docs

All documentation can be found on the official site: [www.spallinsonjs.com](http://www.spallinsonjs.com)



## Copyright

All content &copy; [Chris J. Allinson](http://www.allinson.ca) 1996 - Present. All rights reserved.
