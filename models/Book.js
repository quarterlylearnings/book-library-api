const bookshelf = require("../bookshelf");
const Shelf = require("./Shelf");

const Book = bookshelf.model("Book", {
    tableName: "books",
    idAttribute: "id",
    shelf: function () {
        return this.belongsTo(Shelf, "shelfId");
    },
});

module.exports = Book;
