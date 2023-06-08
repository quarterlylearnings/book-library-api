var express = require("express");
var router = express.Router();

const Library = require("../models/Library");
const Shelf = require("../models/Shelf");
const Book = require("../models/Book");

// GET all shelves
router.get("/", async function (req, res, next) {
    try {
        const shelves = await Shelf.fetchAll();
        res.json(shelves);
    } catch (err) {
        next(err);
    }
});

// GET all books for a specific shelf by ID
router.get("/:id/books", async function (req, res, next) {
    const { id } = req.params;

    try {
        const shelf = await new Shelf({ id }).fetch({
            withRelated: ["books"],
            require: false,
        });
        if (shelf == null)
            res.json({ error: { message: "No shelf found" } });
        res.json(shelf.related("books"));
    } catch (err) {
        next(err);
    }
});

// GET a specific shelf by ID
router.get("/:id", async function (req, res, next) {
    const { id } = req.params;

    try {
        const shelf = await new Shelf({ id }).fetch();
        res.json(shelf);
    } catch (err) {
        next(err);
    }
});

// POST a new shelf
router.post("/", function (req, res, next) {
    const { libraryId, genre } = req.body;

    knex("shelves")
        .insert({ libraryId, genre })
        .returning("*")
        .then((shelf) => res.json(shelf))
        .catch((err) => next(err));
});

// PUT (update) a specific shelf by ID
router.put("/:id", function (req, res, next) {
    const { id } = req.params;
    const { libraryId, genre } = req.body;

    knex("shelves")
        .update({ libraryId, genre })
        .where({ id })
        .returning("*")
        .then((shelf) => res.json(shelf))
        .catch((err) => next(err));
});

// DELETE a specific shelf by ID
router.delete("/:id", function (req, res, next) {
    const { id } = req.params;

    knex("shelves")
        .del()
        .where({ id })
        .returning("*")
        .then((shelf) => res.json(shelf))
        .catch((err) => next(err));
});

module.exports = router;
