var App = App || new Backbone.Marionette.Application();

App.addInitializer(function(options){
App.Dashboard.Controller.show();
Backbone.history.start();
});

// Start the app
$(document).ready(function(){
  App.start({});
});

// cFinally, we render views in our app


/*
App.mainRegion.on("close", function(view){
  // manipulate the `view` or do something extra
  // with the region via `this`
});
*/

// somewhere else in the code
//myLayout.myRegion.show(anotherView);
//myLayout.anotherRegion.show(moreView);