var couch = require('./couchdb');

couch.db.create('sdc_somebirds_feedback', (err) => {
  if (err) {
    if (err.statusCode != 412) {
      console.error(err);
    } else {
    console.log('database already exists');
    }
  } else {
    console.log('created new database')
  }
});