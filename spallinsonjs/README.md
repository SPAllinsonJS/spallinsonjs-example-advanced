# SPAllinsonJS

v1.4.0



## Description

MVC JS framework for building SPAs



## Features

#### Routing

Easily manage the loading of content into divs


#### History

SPAllinsonJS tracks history allowing for functional prev/next browser buttons, and page reloading


#### Deeplinking

Deeplink into any part of your application (e.g. from an email to your download page)


#### Bookmarking

Allow users to bookmark the page (route) they are on


#### Services & Singletons

Create reusable services and singletons


#### Note

Pass messages (w/ optional data) around between controllers within your application


#### Data Binding (One-Way)

Bind data from your components' models to their views


#### Data Rebinding

Manually rebind bound data (whenever you know the model has changed)


#### Repaint

Manually update a component's view (whenever you know the model has changed)


#### Component

Inject an entire component into a view


#### Repeat

Repeat a component over an array of data


#### Eval

Perform eval() within your View


#### AJAX

Easily perform, handle and cancel HTTP Requests (with optional caching)


#### Locale

Specify language specific content using key/values


#### Splash Screen

Initial loading page presented to the user upon launch


#### Preloading

While the splash screen is being displayed, have SPAllinsonJS preload specific components (i.e. their associated html, css, images and controller)


#### Offline

Your app can work offline forever after just one initial splash screen load


#### Debug Console

Debugging made a lot easier


#### Garbage Collection

SPAllinsonJS is very memory oriented, keeping only what it needs in at any one time!


#### Browser Support

Vast!


#### Bundling

Support for JS and CSS bundles to help reduce server calls, and segment your app as you choose



## Plugins

#### Alert

Display page level messages to the user


#### Lightbox

Load any content into this full page fading div with transparent background


#### Storage

Temporarily and Permanently store and retrieve data (key/values)



## Revision History

#### v1.4.0

- BREAKING: RouteRules condition now takes a function that return a bool

- BREAKING: _A_.Ajax now has methods: request, get, post, put, delete and patch

- BREAKING: _A_.Repaint, _A_.Repeat, _A_.Append, _A_.Rebind and _A_.Component all now take a component instance (i.e. self instead of self.me)

- BREAKING: _A_.Note now takes a component instance and a function (i.e. self instead of self.me, and self.methodName instead of 'methodName')

- BREAKING: _A_.MemoryManagement interface change

- BREAKING: Components are automatically init'd with `me` and `model` properties

- BREAKING: Component lifecycle methods are now `init`, `viewDidAppear` and `dealloc`

- Major performance enhancements

- Component lifecycle methods are now optional

- _A_.Settings.components['ComponentName'].view can now take a function that returns a string

- Many _A_.Settings keys are now optional

- Debug Console Ui and performance enhancements

#### v1.3.4

- _A_.Ajax now errors out upon a 500

- Repeat over empty array now clears container

- Complex Go/Repaint cycles (MVVM) bugfixes

- _A_Content reverted back to `position: absolute` which fixes `'fade'` for `'app'`

#### v1.3.3

- Repaint bugfixes

#### v1.3.2

- Preload bugfix

#### v1.3.1

#### v1.3.0

- BREAKING: _A_.loadScript() removed, use _A_.MemoryManagement.loadScript()

- BREAKING: _A_.currentRoute removed, use _A_.Routing.currentRoute

- Support for Query String

- _A_.Router.currentQueryString

- Revised core CSS to be less restrictive

- Bugfix for displaying 0 using [B: ]


#### v1.2.5

- Added _A_.Repaint allowing full view updating

- Added _A_.Settings.fallbackRoute to handle "route not found"

- [L: ] no longer wraps value in <locale> tag

- _A_.Append bugfix (child Components are no longer destroyed)

- _A_.loadScript() deprecated (use _A_.MemoryManagement.loadScript() instead)

- _A_.currentRoute deprecated (to be replaced with _A_.Routing.currentRoute in v1.3.0)

- Performance enhancements


#### v1.2.4

- Memory Management and Script Management updated to allow for JS Bundles!

- _A_.Settings.splash now optional


#### v1.2.3

- _A_.Settings.routeRules added

- Debug Console added to --debug release

- Logging removed

- Enhanced error handling


#### v1.2.2

- Added back [E: ] which was removed just before v1.0.0


#### v1.2.1

- Bugfixes around null/dne data being passed into [B: ], [R: ] & [C: ]

- Callbacks of Repeat, Append & Component fixed to be optional


#### v1.2.0

- BREAKING: Moved and changed _A_.Settings.appDoesFadeIn to _A_.Settings.splash.doesFadeOut

- Completion handling added to _A_.Go(), _A_.Repeat() & _A_.Append()

- Debug build "SPAllinsonJS-v1.2.0--debug.min.js" (which enables logging) included in release

- _A_.AJAX caching bugfixes

- Added _A_.unloadScript(url) util

- Enhanced error handling

- Enhanced performance

- Enhanced logging


#### v1.1.0

- [C:] "Component" ... allows injecting of an entire Component into a container in a view

- Locale now a SPAllinsonJS core feature

- Enhancement to _A_.Ajax ... it now returns the requestObject allowing cancelling of requests

- Enhancement to _A_.Ajax ... revisions to what success and error returns

- Enhancement to _A_.Ajax ... revisions to what error codes return success and error

- Fixed memory leak during dealloc'ing [C: ] & [R: ] created components

- Fixed history issue related to [C: ] & [R: ] created components



## SPAllinsonJS Documentation

#### Example Apps

- [Beginner App](https://github.com/SPAllinsonJS/spallinsonjs-example-beginner)
- [Intermediate App](https://github.com/SPAllinsonJS/spallinsonjs-example-intermediate)
- [Advanced App](https://github.com/SPAllinsonJS/spallinsonjs-example-advanced)

#### Docs

All documentation can be found on the official site: [www.spallinsonjs.com](http://www.spallinsonjs.com)



## Copyright

All content &copy; [Chris J. Allinson](http://www.allinson.ca) 1996 - Present. All rights reserved.
