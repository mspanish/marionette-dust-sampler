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
		  		"fields": 
		  		[

					{"field" : "fullName"},
					{"field" : "email"},
					{"field" : "description"}
				]
			},
			{ 	"fields":	
				[
					{"field" : "joe"},
					{"field" : "joe@joe.com"},
					{"field" : "da man"}
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