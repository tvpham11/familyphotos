;(function () {

  'use strict';
  app.Views.Main = Backbone.View.extend({

    className: 'main',

    events: {
      'submit #addPhoto': 'addPhoto'
    },

    template: hbs.main,

    initialize: function(options) {
      var args = options || {};
      this.collection = args.collection;

      this.render();
      $('#content').html(this.el);
    },

    render: function() {
      this.$el.html(this.template({photo: this.collection.toJSON()}));
    },

    addPhoto: function(event) {
      event.preventDefault();

      // Get form and form values
      var that = this,
          form = $(event.target),
          url = form.find('#photoURL').val(),
          title = form.find('#photoTitle').val(),
          description = form.find('#photoDesc').val();

      // Create photo instance
      var pic = new app.Models.Photo({
        url: url,
        title: title,
        description: description
      });

      // Add instance to collection and save to database
      this.collection.add(pic).save().success(function() {
        that.render();
      })
    }

  });

}());
