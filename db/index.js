require('dotenv').config();
const creds = require('../utils/creds.js')

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sdc_somebirds_feedback', 'student', '',  {
  host: creds.host,
  port: creds.port,
  dialect: 'postgres',
  logging: false
});

console.log(creds.port)

// use to check database connection
// sequelize.authenticate()
// .then(() => {
//   console.log('Connection has been established successfully.');
// })
// .catch((error) => {
//   console.error('Unable to connect to the database:', error);
// });

const Shoe = sequelize.define('shoe', {
  shoe_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  model: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  rating_average: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fit_feedback_average: {
    type: DataTypes.STRING,
    allowNull: false
  },
  // review_count: {
  //   type: DataTypes.INTEGER,t
  //   allowNull: false
  // }
}, { timestamps: false });

const Review = sequelize.define('review', {
  author_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  headline: {
    type: DataTypes.STRING,
    allowNull: false
  },
  review: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fit_feedback: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  shoe_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Shoe,
      key: 'id'
    }
  },
}, { timestamps: false });

module.exports = {
  Shoe: Shoe,
  Review: Review,
  Connection: sequelize
};