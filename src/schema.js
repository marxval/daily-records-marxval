const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
    foods: [Food!]!
    "Get food array for submit daily intake page"
    dailyRecords(date: String!,direction: String): DailyRecords!
  }
  "Food that can be tracked in the daily log"
  type Food {
    name: String!
    unitMeasurement: String! 
  }

  type FoodRecord {
    name: String!
    unitMeasurement: String!
    measure: Int
  }

  input FoodInput {
    id: ID!
    measure: Int
  }

  "Daily record of food intake"
  type DailyRecord {
    date: String!
    foods: [FoodRecord!]!
    pai: Int!
    weight: Int!
  }

  type DailyRecords {
    records: [DailyRecord!]!
    previousDate: String
    nextDate: String
  }

  input DailyRecordInput {
    date: String!
    foods: [FoodInput!]!
    pai: Int!
    weight: Int!
  }

  type Mutation {
    "Add food to the daily record"
    addDailyRecord(record: DailyRecordInput!): DailyRecord!
    deleteDailyRecord(ID: ID!): DailyRecord!
    editDailyRecord(ID: ID!, record: DailyRecordInput!): DailyRecord!
  }

`;

module.exports = typeDefs;
