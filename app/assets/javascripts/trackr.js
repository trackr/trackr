define(['jquery','underscore','backbone'], function(
         $, _, Backbone) {
  var initialize = function() {
    $('#main-container').append('<div>hey require js</div>');
    alert('Hey there from require js');
  }
  return {
    initialize: initialize
  };
});
