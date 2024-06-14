const {model,Schema} = require('mongoose');

const foodSchema = new Schema({
  name: String,
  unitMeasurement: String,
});

module.exports = model('Food',foodSchema);
