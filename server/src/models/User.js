const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    oauthID: {
        type: String,
        required: false,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
});

const UserModel = mongoose.model("user", UserSchema)

exports.UserModel = UserModel;