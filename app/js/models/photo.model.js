;(function () {

  'use strict';
  app.Models.Photo = Backbone.Model.extend({
    idAttribute: '_id',

    defaults: {
      url: '',
      title: '',
      description: '',
      visited: false
    }

  });

}());
