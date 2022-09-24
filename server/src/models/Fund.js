const mongoose = require("mongoose");

const fundSchema = new mongoose.Schema({
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    industry: { type: String, required: true },
    description:  { type: String, required: true },
    totalAmount: { type: Number, required: true },
    givenAmount: { type: Number, default: 0 },
    rating: { type: Number },
    recievers: [ { type: mongoose.Schema.Types.ObjectId, ref: 'user' } ],
    _user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    startDate: Date,
    endDate: Date,
});

const FundModel = mongoose.model("fund", fundSchema)

exports.FundModel = FundModel;