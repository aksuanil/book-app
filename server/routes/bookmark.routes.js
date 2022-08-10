module.exports = app => {
    const bookmark = require("../controllers/bookmark.controller.js");
    var router = require("express").Router();
    router.post("/", bookmark.create);
    router.get("/", bookmark.findAll);
    router.get("/:id", bookmark.findOne);
    router.delete("/:id", bookmark.delete);
    router.delete("/", bookmark.deleteAll);

    app.use('/api/bookmarks', router);
};