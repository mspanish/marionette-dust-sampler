
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