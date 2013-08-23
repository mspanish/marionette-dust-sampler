
var App = App || new Backbone.Marionette.Application();

App.addInitializer(function(options){
App.Dashboard.Controller.loadData();
Backbone.history.start();
});

// Start the app
$(document).ready(function(){
  App.start({});
});


MainLayout = Backbone.Marionette.Layout.extend({
  template: "main",
  
  regions: {
  	mainRegion: "#main",
 //   navRegion: "#nav",
    tabsRegion: "#tabs"
  }
});

// First: we instantiate our models...
var tabs = new Tabs();
var table = new Table();
var view = new SingleThing();
var cards = new Cards();
var main = new Main();


// Now, we combine our models with the views
var tabsView    = new TabsView   ({ model: tabs   });
var tableView    = new TableView   ({ model: table });
var singleView    = new SingleView   ({ model: view   });
var myCards = new MyCardsView ({ collection: cards  });

// cFinally, we render views in our app

myLayout = new MainLayout({ model: main   });

App.addRegions({
    mainRegion: '#main',
  	tabsRegion: '#tabs'

});

App.mainRegion.show(myLayout);
App.tabsRegion.show(tabsView);

	$('#table').append(tableView.render().$el);
	$('#item').append(singleView.render().$el);
	$('#collection').append(myCards.render().$el);	

/*
App.mainRegion.on("close", function(view){
  // manipulate the `view` or do something extra
  // with the region via `this`
});
*/


// somewhere else in the code
//myLayout.myRegion.show(anotherView);
//myLayout.anotherRegion.show(moreView);