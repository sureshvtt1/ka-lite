window.AudioPlayerView = Backbone.View.extend({

    template: HB.template("audio/audio-player"),

    initialize: function() {

        _.bindAll(this);

        // load the info about the exercise itself
        this.data_model = new ContentDataModel({content_id: this.options.content_id});
        if (this.data_model.get("content_id")) {
            this.data_model.fetch().then(this.render);
        }

    },

    render: function() {

        this.$el.html(this.template(this.data_model.attributes));

        audiojs.create(this.$("audio"));

        this.initialize_listeners();

    },

    initialize_listeners: function() {

        // Dummy for now.

    },


    close: function() {
        this.remove();
    }

});