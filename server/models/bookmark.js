module.exports = (sequelize, Sequelize) => {
    const Bookmark = sequelize.define("bookmark", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      book_id: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      author: {
        type: Sequelize.STRING
      },
      thumbnail: {
        type: Sequelize.STRING
      },
      publishedDate: {
        type: Sequelize.STRING
      }
    }, {
      timestamps: true,
    });
    return Bookmark;
  };




// const sql = require("./db.js");
// // constructor
// const Bookmark = function (bookmark) {
//     this.book_id = bookmark.book_id;
// };
// Bookmark.create = (newBookmark, result) => {
//     sql.query("INSERT INTO bookmarks SET book_id = ?", newBookmark, (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(err, null);
//             return;
//         }
//         console.log("created bookmarks: ", { id: res.insertId, ...newBookmark });
//         result(null, { id: res.insertId, ...newBookmark });
//     });
// };
// Bookmark.findById = (id, result) => {
//     sql.query(`SELECT * FROM bookmarks WHERE id = ${id}`, (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(err, null);
//             return;
//         }
//         if (res.length) {
//             console.log("found bookmarks: ", res[0]);
//             result(null, res[0]);
//             return;
//         }

//         result({ kind: "not_found" }, null);
//     });
// };
// Bookmark.getAll = (title, result) => {
//     let query = "SELECT * FROM bookmarks";
//     if (title) {
//         query += ` WHERE title LIKE '%${title}%'`;
//     }
//     sql.query(query, (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(null, err);
//             return;
//         }
//         console.log("bookmarks: ", res);
//         result(null, res);
//     });
// };
// Bookmark.getAllPublished = result => {
//     sql.query("SELECT * FROM bookmarks WHERE published=true", (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(null, err);
//             return;
//         }
//         console.log("bookmarks: ", res);
//         result(null, res);
//     });
// };
// Bookmark.updateById = (id, bookmark, result) => {
//     sql.query(
//         "UPDATE bookmarks SET title = ?, description = ?, published = ? WHERE id = ?",
//         [bookmark.title],
//         (err, res) => {
//             if (err) {
//                 console.log("error: ", err);
//                 result(null, err);
//                 return;
//             }
//             if (res.affectedRows == 0) {
//                 result({ kind: "not_found" }, null);
//                 return;
//             }
//             console.log("updated bookmarks: ", { id: id, ...bookmark });
//             result(null, { id: id, ...bookmark });
//         }
//     );
// };
// Bookmark.remove = (id, result) => {
//     sql.query("DELETE FROM bookmarks WHERE id = ?", id, (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(null, err);
//             return;
//         }
//         if (res.affectedRows == 0) {
//             result({ kind: "not_found" }, null);
//             return;
//         }
//         console.log("deleted bookmarks with id: ", id);
//         result(null, res);
//     });
// };
// Bookmark.removeAll = result => {
//     sql.query("DELETE FROM bookmarks", (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(null, err);
//             return;
//         }
//         console.log(`deleted ${res.affectedRows} bookmarks`);
//         result(null, res);
//     });
// };

// module.exports = Bookmark;



// /////////////////////////////////////

