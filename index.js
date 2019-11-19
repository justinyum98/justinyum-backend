const { ApolloServer } = require('apollo-server');
const typeDefs = require('./src/typeDefs/index');
const resolvers = require('./src/resolvers/index');

const InstagramAPI = require('./src/dataSources/instagram');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources:() => ({
    instagramAPI: new InstagramAPI,
  }),
  introspection: true,
  playground: true,
});

server.listen({ port: process.env.PORT || 4000 })
  .then(({ url }) => {
    console.log(`Server ready at ${url}`);
  });
