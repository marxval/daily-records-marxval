const {model,Schema} = require('mongoose');

const foodRecordSchema = new Schema({
  id: String,
  name: String,
  unitMeasurement: String,
  measure: Number
});


const dailyRecordSchema = new Schema({
    date: Date,
    foods: [foodRecordSchema],
    pai: Number,
    weight: Number
});

module.exports = model('DailyRecord',dailyRecordSchema);