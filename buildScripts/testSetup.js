//this file is not transpiled so must use CommonJS/ES5
//Register babel to transpile before our tests run
require('babel-register')();
//Disable webpack features that Mocha not understand!
require.extensions['.css'] = function() {};
