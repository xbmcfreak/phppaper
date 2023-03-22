const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Article = require("./article");

const Feed = sequelize.define(
  "feeds",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    feedName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    feedDesc: Sequelize.TEXT,
    url: {
      type: Sequelize.STRING
    },
    rssUrl: {
      type: Sequelize.STRING,
      unique: true
    },
    favicon: Sequelize.STRING,
    errorCount: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    active: {
      type: Sequelize.BOOLEAN, 
      allowNull: false, 
      defaultValue: true 
    }
  },
  {
    charset: "utf8mb4",
    collate: "utf8mb4_unicode_ci"
  }
);

//add associations
Feed.hasMany(Article);
Article.belongsTo(Feed);

module.exports = Feed;