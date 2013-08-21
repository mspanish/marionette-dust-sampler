(function(Backbone, _, $){
MyApp = new Backbone.Marionette.Application;

MyApp.addInitializer(function(options){

    });

MainLayout = Backbone.Marionette.Layout.extend({
  template: "main",
  
  regions: {
  	mainRegion: "#main",
 //   navRegion: "#nav",
    tabsRegion: "#tabs"
  }
});

var MMain = Backbone.Model.extend({
	defaults: {
		'title': 'Main Dust.js Template'
    }

});	

var Tabs = Backbone.Model.extend({
	defaults: {
		'sections':
      [
		{'name':'table'},
		{'name':'item'},
		{'name':'collection'},
		{'name':'other'}
      ],
        'numberItems': 4
    }

});	

var SingleThing = Backbone.Model.extend({
	defaults: {
		'title'  : 'Our Awesome Dust.js itemView Template',
		'content': 'This shows a simple Marionette.ItemView, rendered by a Dust.js template' 
	}
});	

var MTable = Backbone.Model.extend({

	defaults: { 
		'rows': 
		[
			{'name' : 'Name'},
			{'name' : 'Email'},
			{'name' : 'Description'}
		],
		'items':
		[
		{
			"firstname": "John",
			"lastname": "Bar",
			"email": "john.bar@example.com",
			"description": "I'm awesome, just hire me."
		},
		{
			"firstname": "Dave",
			"lastname": "Smith",
			"email": "dave.bar@example.com",
			"description": "I'm brilliant, just hire me."
		}
		]
	}

})

var MItems = Backbone.Model.extend({
});

var MCard = Backbone.Model.extend({
	defaults: {
		'english'  : 'hola',
		'spanish'   : 'hello'
	}
});

var MCards = Backbone.Collection.extend({
	model: MCard
});

var TableView = Backbone.Marionette.ItemView.extend({
  template: "tableheaders",
});


var NoItemsView = Backbone.Marionette.ItemView.extend({
  template: "empty"
});

var TabsView = Backbone.Marionette.ItemView.extend({
  template: 'tabs',
  onShow: function(){
    // called when the view has been shown
    console.log('hey we showed our tabs, from TabsView');
  },
   tagName: "div", 
  className: "pcss3t fadeMe pcss3t-theme-1 pcss3t-height-auto" 
});

var MyCardView = Backbone.Marionette.ItemView.extend({
  template: "card",
  tagName: "div",
  className: "cardstack",
  templateHelpers: function(){

        var modelIndex = this.model.collection.indexOf(this.model);
        return {
            index: modelIndex
        }

	} 
});

var MyCardsView = Backbone.Marionette.CollectionView.extend({
  itemView: MyCardView,
  emptyView: NoItemsView,
  tagName: "div",
  className: "container col-lg-6",
  modelEvents: {
        "change": "render"
	},
	 onRender: function () {
	  //	$("body").css('backgroundColor', 'yellow');
      console.log('cards collectionview rendered');
    }

});


var SingleView = Marionette.ItemView.extend({
	// We declare the template to be used by the view
	template: 'single',
//	tagName: 'div',
//	className: 'table-striped',
	// We bind the model event to re-render
	modelEvents: {
        "change": "render"
	},
	 onRender: function () {
      console.log('itemview rendered');
    //$('#mainTabs a:first').tab('show');
    }
});

var VInfo = Marionette.ItemView.extend({
	// We declare the template to be used by the view
	template: 'person',
	tagName: 'tr',
//	className: 'table-striped',
	// We bind the model event to re-render
	modelEvents: {
        "change": "render"
	}
});

var TableView = Marionette.ItemView.extend({

	// we're using this type of view so that we can combine a 
	// table with repeating rows of data. 
	template: 'table',																					
	// We bind the model event to re-render
	modelEvents: {
        "change": "render"
	},
	  onRender: function () {
      console.log('table view rendered');
    }
});


// First: we instantiate our models...
var mTabs = new Tabs();
var mTable = new MTable();
var mView = new SingleThing();
var mCards = new MCards();
var mMain = new MMain();

// Now, we combine our models with the views
var tabsView    = new TabsView   ({ model: mTabs   });
var tableView    = new TableView   ({ model: mTable });
var singleView    = new SingleView   ({ model: mView   });
var myCards = new MyCardsView ({ collection: mCards  });

// Then, we grab additional model data
//newItems = fetch({ url: 'person.json' });
mCards.fetch({ url: 'card.json' });

function fetchItems() {
   $.get('items.json', function(data) {
    theItems = new MItems(data);
    console.log ('here is my response ' + JSON.stringify(data))
    });
}

function appendItems() {
set.MTable.items(theItems)
}

fetchItems();
//appendItems();
//replaceItems();


// cFinally, we render views in our app

myLayout = new MainLayout({ model: mMain   });

MyApp.addRegions({
    mainRegion: '#main',
  	tabsRegion: '#tabs'

});

MyApp.mainRegion.show(myLayout);

MyApp.tabsRegion.show(tabsView);

	$('#table').append(tableView.render().$el);
	$('#item').append(singleView.render().$el);
	$('#collection').append(myCards.render().$el);	

/*
MyApp.mainRegion.on("close", function(view){
  // manipulate the `view` or do something extra
  // with the region via `this`
});
*/

//MyApp.tabsRegion.show(singleView)
 
// somewhere else in the code
//myLayout.myRegion.show(anotherView);
//myLayout.anotherRegion.show(moreView);


})(Backbone, _, $);