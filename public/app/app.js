var App = App || new Backbone.Marionette.Application();

App.addInitializer(function(options){

App.Dashboard.Controller.loadData();
Backbone.history.start();
});

// Start the app
$(document).ready(function(){
  App.start({});
});

App.MainLayout = Backbone.Marionette.Layout.extend({
  template: "main"
});

// first: we instantiate our models...
var tabs = new App.Tabs();
var table = new App.Table();
var view = new App.SingleThing();
var cards = new App.Cards();
var main = new App.Main();

// now, we combine our models with the views
var tabsView    = new App.TabsView   ({ model: tabs   });
var tableView    = new App.TableView   ({ model: table });
var singleView    = new App.SingleView   ({ model: view   });
var myCards = new App.MyCardsView ({ collection: cards  });

// we give our app a main body container template
myLayout = new App.MainLayout({ model: main   });

// we specify our App Regions
App.addRegions({
    mainRegion: '#main',
  	tabsRegion: '#tabs'
});

// tell the App which regions to activate
App.mainRegion.show(myLayout);
App.tabsRegion.show(tabsView);

// finally, we render views in our tabsRegion
$('#table').append(tableView.render().$el);
$('#item').append(singleView.render().$el);
$('#collection').append(myCards.render().$el);	

/*
App.mainRegion.on("close", function(view){
  // manipulate the `view` or do something extra
  // with the region via `this`
});
*/

//App.tabsRegion.show(singleView)
 
// somewhere else in the code
//myLayout.myRegion.show(anotherView);
//myLayout.anotherRegion.show(moreView);