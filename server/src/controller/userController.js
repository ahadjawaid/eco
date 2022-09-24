const mongoose = require('mongoose');

const User = mongoose.model("user")

module.exports = {
  CreateUser: async ({
          email, 
          firstName, 
          lastName,
          country,
          phoneNumber
      }) => {
      return User.create({
          email,
          firstName,
          lastName,
          country,
          phoneNumber
      }).then((data) => data)
      .catch((error) => {
          throw error;
      });
  },

  GetUser: async (id) => {
      const user =  await User.findById(id).exec();
      
      return user;
  },

  UpdateUser: async (id, update) => {
      const user = await User.findByIdAndUpdate(id, { ...update }).exec();

      return user;
  },

  DeleteUser: async (id) => {
      await User.findByIdAndDelete(id).exec();
  },
};

