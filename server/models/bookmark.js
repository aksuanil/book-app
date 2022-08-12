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