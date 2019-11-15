const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    posts: [Media!]!
  }

  type Media {
    id: ID!,
    mediaType: String!,
    mediaUrl: String!,
    likeCount: Number!,
    caption: String!,
    permalink: String!
  }
`;

export default typeDefs;
