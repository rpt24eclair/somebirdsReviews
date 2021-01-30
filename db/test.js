const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('fec_somebirds_feedback', 'student', '', {
  host: 'localhost',
  dialect: 'postgres',
});

// try {
//   await sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }




sequelize.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch((error) => {
  console.error('Unable to connect to the database:', error);
});