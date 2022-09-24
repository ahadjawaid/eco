const mongoose = require('mongoose');

const Project = mongoose.model("project")

module.exports = {
  CreateUser: async ({
          email,
          phoneNumber,
          industry,
          description,
          requestedAmount,
          user
      }) => {
      return Project.create({
          email,
          phoneNumber,
          industry,
          description,
          requestedAmount,
          _user: user,
          startDate: Date.now(),
      }).then((data) => data)
      .catch((error) => {
          throw error;
      });
  },

  GetUser: async (id) => {
      const user =  await Project.findById(id).exec();
      
      return user;
  },

  UpdateUser: async (id, update) => {
      const user = await Project.findByIdAndUpdate(id, { ...update }).exec();

      return user;
  },

  DeleteUser: async (id) => {
      await Project.findByIdAndDelete(id).exec();
  },
};

