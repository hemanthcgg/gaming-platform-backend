import { users } from "./data.js";

export const resolvers = {
  Query: {
    users: () => users,

    user: (_parent: unknown, args: { id: string }) => {
      return users.find((user) => user.id === args.id);
    }
  },
  User: {
  __resolveReference: (reference: { id: string }) => {
    return users.find((user) => user.id === reference.id);
  }
}
};