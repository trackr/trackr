Backbone.View.prototype.leave = function() {
  this.remove();
  this.off();
  if (this.childViews){
    this.childViews.forEach(function(v) {
      v.leave();
    });
  }
}
