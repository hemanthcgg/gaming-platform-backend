import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Review {
    id: ID!
    rating: Int!
    comment: String!
    userId: ID!
    gameId: ID!
  }

  type Query {
    reviews: [Review!]!
    review(id: ID!): Review
  }
`;