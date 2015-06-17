;(function () {

  'use strict';
  app.Views.SingleView = Backbone.View.extend({

    className: 'single',

    template: hbs.single,

    events: {
      'click #delete': 'deletePhoto'
    },

    initialize: function(options) {
      var args = options || {};
      this.photoId = args.photoId;
      this.collection = args.collection;

      this.render();
      $('#content').html(this.el);
    },

    render: function() {
      var singlePhoto = this.collection.get(this.photoId);
      this.$el.html(this.template(singlePhoto.toJSON()));
    },

    deletePhoto: function(event) {
      var button = event.target;
      var modelID = $(button).data('id');
      var thisPic = this.collection.get(modelID);

      thisPic.destroy().success(function(){
        console.log('Photo deleted!');
      });
    }
  });

}());
