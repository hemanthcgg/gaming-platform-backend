import { gql } from "graphql-tag";

export const typeDefs = gql`
  type User @key(fields: "id") {
    id: ID!
    username: String!
    email: String!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
  }
`;