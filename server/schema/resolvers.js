const { Profile, Album, Artist } = require('../models');
const { signToken } = require('../utils/auth.js');
const seed = require('../seedData')

const resolvers = {
  Query: {
    users: async () => {
      return await Profile.find()
    },
    login: async (_, { username, password }) => {
      const profile = await Profile.findOne({ username });

      if (!profile) {
        throw new Error('No profile with this username found!');
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new Error('Incorrect password!');
      }

      const token = signToken(profile);
      return { token };
    },

    getAlbums: async () => {
      const albums = await Album.find();
      return albums;
    },

    getArtists: async () => {
      const artists = await Artist.find();
      return artists;
    }

  },

  Mutation: {
    addUser: async (_, { username, email, password }) => {
      const user = await Profile.create({
        username, email, password
      })
      const token = signToken(user);
      return { token }
    },
    seed: async () => {
      await seed()
    }
  },
};

module.exports = resolvers;