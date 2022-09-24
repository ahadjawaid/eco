const mongoose = require('mongoose');

const Fund = mongoose.model("fund")

module.exports = {
  CreateUser: async ({
        email,
        phoneNumber,
        industry,
        description,
        totalAmount,
        user,
      }) => {
      return Fund.create({
          email,
          phoneNumber,
          industry,
          description,
          totalAmount,
          _user: user,
          startDate: Date.now()
      }).then((data) => data)
      .catch((error) => {
          throw error;
      });
  },

  GetUser: async (id) => {
      const user =  await Fund.findById(id).exec();
      
      return user;
  },

  UpdateUser: async (id, update) => {
      const user = await Fund.findByIdAndUpdate(id, { ...update }).exec();

      return user;
  },

  DeleteUser: async (id) => {
      await Fund.findByIdAndDelete(id).exec();
  },
};

