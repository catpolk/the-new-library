const { AuthentificationError } = require('apollo-server-express');
const { User } = require('./models');
const { sighToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id.context.user._id }).select('-__v -password');
        return userData;
      }
      throw new AuthentificationError('You are not logged in!');
    },
  },
}