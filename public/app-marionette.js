(function(Backbone, _, $){
MyApp = new Backbone.Marionette.Application;

MainLayout = Backbone.Marionette.Layout.extend({
  template: "main",
 
  regions: {
  	mainRegion: "#main",
 //   navRegion: "#nav",
    tabsRegion: "#tabs"
  }
});

var Tabs = Backbone.Model.extend({
	defaults: {
		'sections':
      [
		{'name':'composite'},
		{'name':'item'},
		{'name':'collection'},
		{'name':'other'}
      ],
        'numberItems': 4
    }

});	

var SingleThing = Backbone.Model.extend({
	defaults: {
		'title'  : 'Our Awesome Dust.js Tester',
		'content': 'This shows a simple Marionette.ItemView, rendered by a Dust.js template' 
	}
});	

var MPerson = Backbone.Model.extend({
	defaults: {
		'firstname'  : 'joe',
		'lastname'   : 'miller',
		'email'      : null,
		'description': null
	}
});

var MCard = Backbone.Model.extend({
	defaults: {
		'english'  : 'hola',
		'spanish'   : 'hello'
	}
});


var MPeople = Backbone.Collection.extend({
	model: MPerson
});

var MCards = Backbone.Collection.extend({
	model: MCard
});

var NoItemsView = Backbone.Marionette.ItemView.extend({
  template: "empty"
});

var TabsView = Backbone.Marionette.ItemView.extend({
  template: 'tabs',
  onShow: function(){
    // called when the view has been shown
    console.log('hey we showed our tabs, from TabsView');
    addTabs()
  },
   tagName: "div", 
  className: "pcss3t pcss3t-effect-fade pcss3t-theme-1 pcss3t-height-auto" 
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

var VCollection = Marionette.CompositeView.extend({
	// we're using this type of view so that we can combine a 
	// table with repeating rows of data. 
	template: 'people',
	tagName: 'table',
	className: 'table-bordered table-striped',
	itemView: VInfo,
	// We bind the model event to re-render
	modelEvents: {
        "change": "render"
	},
	  onRender: function () {
	  //	$("body").css('backgroundColor', 'yellow');
      console.log('composite view rendered');
    }


});


// First: we instantiate our models...
var mTabs = new Tabs();
var mPerson = new MPerson();
var mPeople = new MPeople();
var mView = new SingleThing();
var mCards = new MCards();

// Now, we combine our models with the views
var tabsView    = new TabsView   ({ model: mTabs   });
var singleView    = new SingleView   ({ model: mView   });
// Then, we instanciate a new view with the model
var vInfo     = new VInfo    ({ model: mPerson    });
var myView = new VCollection ({ collection: mPeople  });
var myCards = new MyCardsView ({ collection: mCards  });



// Then, we grab additional model data
mPeople.fetch({ url: 'person.json' });
mCards.fetch({ url: 'card.json' });

// cFinally, we render views in our app


myLayout = new MainLayout();

MyApp.addRegions({
    mainRegion: '#main',
  tabsRegion: '#tabs'
});

MyApp.mainRegion.show(myLayout);

MyApp.tabsRegion.show(tabsView);

	$('#composite').append(myView.render().$el);
	$('#item').append(singleView.render().$el);
	$('#collection').append(myCards.render().$el);	
 
  //   $('body').append(tabsView.render().$el);

  //    $('#composite').append(myView.render().$el);

function addTabs() {
console.log('i am adding tab content now...')
    //    $('#compositeView').append(myView.render().$el);
    // $('#itemView').append(singleView.render().$el);
    //  $('#collectionView').append(myCards.render().$el);	
}
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