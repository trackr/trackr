//
// rrequire jquery
// rrequire jquery_ujs
// rrequire_tree .
//
require.config({
  paths: {
    jquery: '/assets/jquery.min',
    underscore:  '/assets/underscore-min',
    backbone: '/assets/backbone-min'
  }
});

require(['trackr'], function(Trackr) {
  Trackr.initialize();
});
