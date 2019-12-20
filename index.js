const { initializeApolloServer } = require('./src/graphql');

const apolloServer = initializeApolloServer();

apolloServer.listen({ port: process.env.PORT || 4000 })
  .then(({ url }) => {
    console.log(`Server ready at ${url}`);
  });
