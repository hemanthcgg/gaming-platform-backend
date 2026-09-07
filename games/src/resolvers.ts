import { games } from "./data.js";

export const resolvers = {
  Query: {
    games: () => games,

    game: (_parent: unknown, args: { id: string }) => {
      return games.find((game) => game.id === args.id);
    }
  }
};