;(function () {

  'use strict';
  var allPhotos = new app.Collections.Photos();

  allPhotos.fetch().done(function(){

    new app.Routers.MainRouter({
      collection: allPhotos
    });
    Backbone.history.start();

  });

}());
