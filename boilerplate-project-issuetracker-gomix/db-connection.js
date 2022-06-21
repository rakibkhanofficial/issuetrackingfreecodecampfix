const mongoose = require('mongoose');

const URI = 'mongodb+srv://BarabbaFDM:' + process.env.PW + '@cluster0.43tgt.mongodb.net/db1?retryWrites=true&w=majority';
const db = mongoose.connect(URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

module.exports = db;