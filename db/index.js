const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('fec_somebirds_feedback', 'student', '',  {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  logging: false
});

// sequelize.authenticate()
// .then(() => {
//   console.log('Connection has been established successfully.');
// })
// .catch((error) => {
//   console.error('Unable to connect to the database:', error);
// });


const Shoe = sequelize.define('Shoe', {
  name: {
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
  review_count: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, { timestamps: false });

const Review = sequelize.define('Review', {
  name: {
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