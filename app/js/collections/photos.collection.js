;(function () {

  'use strict';

  app.Collections.Photos = Backbone.Collection.extend({
    model: app.Models.Photo,
    comparator: 'title',
    url: app.rootURL
  });

}());
