var App = App || new Backbone.Marionette.Application();

App.module("Dashboard", function(){

 this.ControllerClass = Marionette.Controller.extend({
   initialize: function(options){

  },

 loadData: function(){

    cards.fetch({ url: 'card.json' });
    fetchItems();
  }

});


// Here, we grab additional model data



function fetchItems() {
	console.log('our old table model is ' + JSON.stringify(table))
   $.get('items.json', function(data) {
// now, if we want computed values, we need to know which rows we want computed, and instead of running a simple 'each' on them, we can compute the rows we want, create a new object with all "field" entries, and submit that instead. The rows and fields in the Table model must still be the SAME number and match up!!

/* this is without any computed values 
$(data).each(function() {
console.log('our array data is ' + $(this)[0] )
table.add('items',$(this)[0]);
});
*/

/* this is WITH computed values */
$(data).each(function() {
console.log('our array data is ' + $(this)[0] )
var fullName = $(this)[0].fields[0].field + ' '+ $(this)[0].fields[1].field;
var email = $(this)[0].fields[2].field ;
var description = $(this)[0].fields[3].field ;

var computedObject = {fields:[
{"field": fullName},
{"field": email},
{"field": description}
	]
}
console.log('computedObject is ' + JSON.stringify(computedObject))
table.add('items', computedObject);
});

 console.log('updated table model ' + JSON.stringify(table))
    });
}

 App.addInitializer(function(options) {
    App.Dashboard.Controller = new App.Dashboard.ControllerClass();
    //Some.Dashboard.Router = new Some.Dashboard.RouterClass({controller: Some.Dashboard.Controller});
  });

});