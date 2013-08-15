(function(Backbone, _, $){

var MainApp = Backbone.Model.extend({
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


var MPeople = Backbone.Collection.extend({
	model: MPerson
});


var MainView = Marionette.ItemView.extend({
	// We declare the template to be used by the view
	template: 'main',
//	tagName: 'div',
//	className: 'table-striped',
	// We bind the model event to re-render
	modelEvents: {
        "change": "render"
	},
	 onRender: function () {
	  //	$("body").css('backgroundColor', 'yellow');
      console.log('itemview rendered');
    $('#mainTabs a:first').tab('show');
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
var mPerson = new MPerson();
var mPeople = new MPeople();
var mView = new MainApp();

// Now, we combine our models with the views
var mainView    = new MainView   ({ model: mView   });
// Then, we instanciate a new view with the model
var vInfo     = new VInfo    ({ model: mPerson    });
var myView = new VCollection ({ collection: mPeople  });

// Then, we grab additional model data
mPeople.fetch({ url: 'person.json' });

// Finally, we render views in our app

    $('#composite').append(myView.render().$el);
    $('#item').append(mainView.render().$el);



})(Backbone, _, $);