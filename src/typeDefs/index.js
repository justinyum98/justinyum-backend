const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    user: User!,
    posts: [Media!]!,
    projects: [Project!]!,
    experience: [Experience!]!,
  }

  type User {
    id: ID!,
    profilePictureUrl: String!,
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

  type Project {
    name: String!,
    role: String!,
    imageUrl: String!,
    date: String!,
    description: String!,
    repoUrl: String!,
  }

  type Experience {
    companyName: String!,
    role: String!,
    imageUrl: String!,
    date: String!,
    description: String!,
    companyUrl: String!,
  }
`;

module.exports = typeDefs;
