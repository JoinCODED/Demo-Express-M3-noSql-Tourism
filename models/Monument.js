const { model, Schema } = require('mongoose');

const MonumentSchema = new Schema({
  name: String,
  country: String,
  city: String,
});

module.exports = model('Monument', MonumentSchema);
