import { gql } from "graphql-tag";

export const typeDefs = gql`
  extend type Game @key(fields: "id") {
    id: ID! @external
    reviews: [Review!]!
  }

  extend type User @key(fields: "id") {
    id: ID! @external
  }

  type Review {
    id: ID!
    rating: Int!
    comment: String!
    userId: ID!
    gameId: ID!
    user: User!
  }

  type Query {
    reviews: [Review!]!
    review(id: ID!): Review
  }
`;