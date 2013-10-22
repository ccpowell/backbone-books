define(['backbone'], function (Backbone) {
    var Book = Backbone.Model.extend({
        defaults: {
            coverImage: 'app/img/placeholder.png',
            title: 'No title',
            author: 'Unknown',
            releaseDate: 'Unknown',
            keywords: 'None'
        }
    });

    var Library = Backbone.Collection.extend({
        model: Book
    });

    var BookView = Backbone.View.extend({
        tagName: 'div',
        className: 'bookContainer',
        template: _.template($('#bookTemplate').html()),

        render: function () {
            //this.el is what we defined in tagName. use $el to get access to jQuery html() function
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        }
    });

    var LibraryView = Backbone.View.extend({
        el: '#books',

        initialize: function (initialBooks) {
            this.collection = new Library(initialBooks);
            this.render();
        },

        // render library by rendering each book in its collection
        render: function () {
            this.collection.each(function (item) {
                this.renderBook(item);
            }, this);
        },

        // render a book by creating a BookView and appending the
        // element it renders to the library's element
        renderBook: function (item) {
            var bookView = new BookView({
                model: item
            });
            this.$el.append(bookView.render().el);
        }
    });

    return { Book: Book, Library: Library, BookView: BookView, LibraryView: LibraryView };
});