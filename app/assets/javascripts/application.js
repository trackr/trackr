//
// rrequire jquery
// rrequire jquery_ujs
// rrequire_tree .
//
require.config({
  paths: {
    jquery: '/assets/jquery.min',
    underscore:  '/assets/underscore-min',
    backbone: '/assets/backbone-min',
    //handlebars: '/assets/handlebars',
    i18nprecompile: '/assets/hbs/i18nprecompile',
    json2: '/assets/hbs/json2',
    hbs: '/assets/hbs'
  },
  shim: {
    'Handlebars': {
      exports: 'Handlebars',
      path: '/assets/handlebars'
    }
  },
  // https://github.com/SlexAxton/require-handlebars-plugin
  hbs : {
    templateExtension: 'hbs',
    disableI18n: true
  }
});

require(['trackr'], function(Trackr) {
  Trackr.initialize();
});
