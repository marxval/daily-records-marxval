const DailyRecord = require('../models/DailyRecord');
const Food = require('../models/Food');
const { getDates } = require('../utils');

module.exports = {
    Query: {
        async foods() {
            return await Food.find();
        },
        async dailyRecords(_, { date, direction }) {
            const { startDate, endDate, previousDate, nextDate } = getDates(date,direction);
            // TODO: Make date filter
            // const records = await DailyRecord.find({ date: { $gte: startDate, $lte: endDate } });
            const records = await DailyRecord.find();
            return {
                records,
                previousDate: previousDate,
                nextDate: nextDate
            };
        }
    },
    Mutation: {
        addDailyRecord: async (_, { record }) => {
            const newRecord = new DailyRecord(record);
            return await newRecord.save();
        },
        deleteDailyRecord: async (_, { ID }) => {
            return await DailyRecord.findByIdAndDelete(ID);
        },
        editDailyRecord: async (_, { ID, record }) => {
            return await DailyRecord.findByIdAndUpdate(ID, record, { new: true });
        }
    }
};