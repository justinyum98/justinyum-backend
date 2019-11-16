const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    posts: [Media!]!
  }

  type Media {
    id: ID!,
    username: String!,
    mediaType: String!,
    mediaUrl: String!,
    likeCount: Int!,
    caption: String!,
    commentsCount: String!,
    permalink: String!,
    timestamp: String!,
  }
`;

module.exports = typeDefs;
