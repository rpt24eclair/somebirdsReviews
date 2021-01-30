require('dotenv').config();
const { DB_HOST, DB_USERNAME, DB_PASSWORD } = process.env;

module.exports = {
    "development": {
      "username": DB_USERNAME,
      "password": DB_PASSWORD ,
      "database": "sdc_sombirds_feedback",
      "host": DB_HOST,
      "dialect": "postgres"
    },
    "test": {
      "username": "student",
      "password": null,
      "database": "sdc_sombirds_feedback",
      "host": "localhost",
      "dialect": "postgres"
    },
    "production": {
      "username": "student",
      "password": null,
      "database": "sdc_sombirds_feedback",
      "host": "localhost",
      "dialect": "postgres"
    }
}