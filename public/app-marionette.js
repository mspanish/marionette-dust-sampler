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

var Main = Backbone.Model.extend({
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

var Table = Backbone.NestedModel.extend({
initialize: function () {

},

	defaults: { 
		"rows": 
		[
			{"name" : "Name"},
			{"name" : "Email"},
			{"name" : "Description"}
		],
		"items": 
		[ 
			{
		  		"fields": [

					{"field" : "fullName"},
					{"field" : "email"},
					{"field" : "description"}
				]
			}
		]
	}
})


var Card = Backbone.Model.extend({
	defaults: {
		'english'  : 'hola',
		'spanish'   : 'hello'
	}
});

var Cards = Backbone.Collection.extend({
	model: Card
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

console.log('updated table model ' + JSON.stringify(table))


// Then, we grab additional model data
//newItems = fetch({ url: 'person.json' });
cards.fetch({ url: 'card.json' })

function fetchItems() {
	console.log('our old table model is ' + JSON.stringify(table))
   $.get('items.json', function(data) {
var fieldsArray =  [];
var fieldsObject = {
	'fields' : fieldsArray
};

$(data).each(function() {
var personArray;

fieldsArray = [];
// var field1 = {'field': $(this)[0].firstname + ' ' + $this)[0].lastname}
// var field2 = {'field': $(this)[0].email}
// var field3 = {'field': $(this)[0].description}
fieldsArray.push({'field': 'yo'})
fieldsArray.push({'field': 'yo2'})		
fieldsArray.push({'field': 'yo3'})

table.add('items.fields',[{'field':'yo'}]);
});
 console.log('updated table model ' + JSON.stringify(table))
    });
}

//fetchItems();

// cFinally, we render views in our app

myLayout = new MainLayout({ model: main   });

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