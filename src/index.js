const { ApolloServer } = require("@apollo/server");
const mongoose = require("mongoose");
const typeDefs = require("./schema");
const { addMocksToSchema } = require("@graphql-tools/mock");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { startStandaloneServer } = require("@apollo/server/standalone");

// Apollo server  
const resolvers = require("./graphql/resolvers");

async function startApolloServer() {
  const server = new ApolloServer({
    schema: addMocksToSchema({
      schema: makeExecutableSchema({ typeDefs }),
      resolvers: resolvers
    }),
  });
  await mongoose.connect(process.env.MONGODB_URI);
  const { url } = await startStandaloneServer(server);
  console.log(`🚀 Server ready at ${url}`);
}

startApolloServer();
