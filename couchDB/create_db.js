const async = require('async');
const couch = require('./couchdb');

const databases = ['sdc_somebirds_shoes', 'sdc_somebirds_reviews'];

function initCouch(cb) {
  createDatabases(cb);
}

function createDatabases(cb) {
  async.each(databases, createDatabase, cb);
}

function createDatabase(db, cb) {
  couch.db.create(db, function(err) {
    if (err && err.statusCode == 412) {
      err = null;
    }
    cb(err);
  });
}

initCouch((err) => {
  if (err) {
    throw err
  }
  else {
    console.log('couchdb initialized');
  }
});