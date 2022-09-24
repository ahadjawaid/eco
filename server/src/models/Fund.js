const { Schema } = require("mongoose");

const fundSchema = new Schema({
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    industry: { type: String, required: true },
    description:  { type: String, required: true },
    totalAmount: { type: Number, required: true },
    givenAmount: { type: Number, default: 0 },
    rating: { type: Number },
    recievers: [ { type: Schema.Types.ObjectId, ref: 'user' } ],
    _user: { type: Schema.Types.ObjectId, ref: 'user' },
    startDate: Date,
    endDate: Date,
});

const FundModel = mongoose.model("fund", fundSchema)

exports.FundModel = FundModel;