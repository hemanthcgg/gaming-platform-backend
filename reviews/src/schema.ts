import { gql } from "graphql-tag";

export const typeDefs = gql`
  extend type Game @key(fields: "id") {
    id: ID! @external
    reviews: [Review!]!
  }

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