const TOTAL_DAYS_RETURNED = 10;
const HALF_DAYS = Math.floor(TOTAL_DAYS_RETURNED / 2);
const moment = require('moment');

const getDates = (date,direction = false) => {

  const daysToSubstract = !direction ? HALF_DAYS : direction === 'next' ? 0 : TOTAL_DAYS_RETURNED;
  const daysToAdd = !direction ? HALF_DAYS : direction === 'next' ? TOTAL_DAYS_RETURNED : 0;
  const requestedDate =  !direction? moment(date) : direction === 'next' ? moment(date).add(1, 'days') : moment(date).subtract(1, 'days');

  let startDate = moment(requestedDate).subtract(daysToSubstract, 'days').format('YYYY-MM-DD');
  let endDate = moment(requestedDate).add(daysToAdd, 'days').format('YYYY-MM-DD');
  const STARTED_DATE_TRACKING = '2021-10-03';
  const currentDate = moment().format('YYYY-MM-DD');

  startDate = moment(startDate).isBefore(STARTED_DATE_TRACKING) ? STARTED_DATE_TRACKING : startDate;
  endDate = moment(endDate).isAfter(currentDate) ? currentDate : endDate;
  return {
    startDate,
    endDate,
    previousDate: startDate !== STARTED_DATE_TRACKING? startDate : null,
    nextDate: endDate !== currentDate? endDate : null,
  }
}

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
    getDates,
    generateRandomNumber
}
