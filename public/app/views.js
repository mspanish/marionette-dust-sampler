var App = App || new Backbone.Marionette.Application();

App.NoItemsView = Backbone.Marionette.ItemView.extend({
  template: "empty"
});

App.TabsView = Backbone.Marionette.ItemView.extend({
  template: 'tabs',
  onShow: function(){
    // called when the view has been shown
    console.log('hey we showed our tabs, from TabsView');
  },
  tagName: "div",
  modelEvents: {
        "change": "render"
  },
  className: "pcss3t fadeMe pcss3t-theme-1 pcss3t-height-auto" 
});

App.MyCardView = Backbone.Marionette.ItemView.extend({
  template: "card",
  tagName: "div",
  className: "cardstack",
  modelEvents: {
        "change": "render"
  },
  templateHelpers: function(){

        var modelIndex = this.model.collection.indexOf(this.model);
        return {
            index: modelIndex
        }
	} 
});

App.MyCardsView = Backbone.Marionette.CollectionView.extend({
  itemView: App.MyCardView,
  emptyView: App.NoItemsView,
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

App.SingleView = Marionette.ItemView.extend({
	template: 'single',
	// We bind the model event to re-render
	modelEvents: {
        "change": "render"
	},
	 onRender: function () {
      console.log('itemview rendered');
    //$('#mainTabs a:first').tab('show');
    }
});

App.TableView = Marionette.ItemView.extend({
	template: 'table',
  id: 'table_main',																			
	modelEvents: {
        "change": "render"
	},
	  onRender: function () {
      console.log('table view rendered');
      $('#table_main').css('display', 'none');
      $('#table_main').fadeIn(300);
    }
});