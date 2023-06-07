const bookshelf = require("../bookshelf");

const Library = bookshelf.model("Library", {
    tableName: "libraries",
    idAttribute: "id",
});

module.exports = Library;
