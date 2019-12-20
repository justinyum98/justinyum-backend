const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    posts: [Media!]!,
    projects: [Project!]!,
    experience: [Experience!]!,
  }

  type Mutation {
    sendContactInfo(fullName: String!, emailAddress: String!, message: String!): ContactInfo!,
  }

  type Media {
    id: ID!,
    username: String!,
    profilePictureUrl: String!,
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

  type ContactInfo {
    fullName: String!,
    emailAddress: String!,
    message: String!,
  }
`;

module.exports = typeDefs;
