const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('fec_somebirds_feedback', 'student', '',  {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  logging: false
});

sequelize.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch((error) => {
  console.error('Unable to connect to the database:', error);
});


const Shoe = sequelize.define('Shoe', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  model: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, { timestamps: false });

const Review = sequelize.define('Review', {
  name: {
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
}, { timestamps: true });

module.exports = {
  Shoe: Shoe,
  Review: Review
};