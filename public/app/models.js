var App = App || new Backbone.Marionette.Application();

App.Main = Backbone.Model.extend({
	defaults: {
		'title': 'Main Dust.js Template'
    }

});	

App.Tabs = Backbone.Model.extend({
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

App.SingleThing = Backbone.Model.extend({
	defaults: {
		'title'  : 'Our Awesome Dust.js itemView Template',
		'content': 'This shows a simple Marionette.ItemView, rendered by a Dust.js template' 
	}
});	

App.Table = Backbone.NestedModel.extend({
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

App.Card = Backbone.Model.extend({
	defaults: {
		'english'  : 'hola',
		'spanish'   : 'hello'
	}
});

App.Cards = Backbone.Collection.extend({
	model: App.Card
});