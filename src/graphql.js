const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const InstagramAPI = require('./dataSources/instagram');

const initializeApolloServer = () => new ApolloServer({
  typeDefs,
  resolvers,
  dataSources:() => ({
    instagramAPI: new InstagramAPI,
  }),
  introspection: true,
  playground: true,
});

module.exports = {
  initializeApolloServer
};
