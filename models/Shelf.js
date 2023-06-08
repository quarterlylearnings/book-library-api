const bookshelf = require("../bookshelf");
const Library = require("./Library");

const Shelf = bookshelf.model("Shelf", {
    tableName: "shelves",
    idAttribute: "id",
    library: function () {
        return this.belongsTo(Library, "libraryId");
    },
    books: function() {
        return this.hasMany(Book, "shelfId")
    }
});

module.exports = Shelf;