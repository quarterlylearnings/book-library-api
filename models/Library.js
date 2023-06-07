const bookshelf = require("../bookshelf");
const Shelf = require("./Shelf");

const Library = bookshelf.model("Library", {
    tableName: "libraries",
    idAttribute: "id",
    shelves: function() {
        return this.hasMany(Shelf, "libraryId")
    }
});

module.exports = Library;
