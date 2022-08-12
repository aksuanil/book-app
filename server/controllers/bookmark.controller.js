const db = require("../models/");
const Bookmark = db.bookmarks;

exports.create = (req, res) => {
    if (!req.body.id) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const bookmark = {
        book_id: req.body.id,
        title: req.body.title,
        author: req.body.author,
        thumbnail: req.body.thumbnail,
        publishedDate: req.body.publishDate,
    };
    Bookmark.create(bookmark)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the bookmarks."
            });
        });
};
exports.findAll = (req, res) => {
    Bookmark.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving bookmarks."
            });
        });
};
exports.delete = (req, res) => {
    const id = req.params.id;
    Bookmark.destroy({
        where: { book_id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Bookmark was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete bookmark with id=${id}. Maybe bookmark was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete bookmark with id=" + id
            });
        });
};
exports.deleteAll = (req, res) => {
    Bookmark.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Bookmark were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all bookmarks."
            });
        });
};