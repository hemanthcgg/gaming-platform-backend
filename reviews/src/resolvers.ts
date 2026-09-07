import { reviews } from "./data.js";

export const resolvers = {
  Query: {
    reviews: () => reviews,

    review: (_parent: unknown, args: { id: string }) => {
      return reviews.find((review) => review.id === args.id);
    }
  },

  Game: {
    reviews: (game: { id: string }) => {
      return reviews.filter((review) => review.gameId === game.id);
    }
  }
};