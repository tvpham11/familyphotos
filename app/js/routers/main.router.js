;(function (){

  'use strict';

  app.Routers.MainRouter = Backbone.Router.extend({

    initialize: function (options) {

      var args = options || {};
      this.collection = args.collection;

    },

    routes: {
      '' : 'homePage',
      'photo/:id' : 'singlePhoto'
    },

    homePage: function () {
      new app.Views.Main({
        collection: this.collection
      });
    },

    singlePhoto: function (id) {
      new app.Views.SingleView({
        photoId: id,
        collection: this.collection
      });
    }

  });

}());
