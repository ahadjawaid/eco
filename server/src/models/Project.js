const { Schema } = require("mongoose");

const projectSchema = new Schema({
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    industry: { type: String, required: true },
    description:  { type: String, required: true },
    requestedAmount: { type: Number, required: true },
    recievedAmount: { type: Number, default: 0 },
    rating: { type: Number },
    funders: [ { type: Schema.Types.ObjectId, ref: 'user' } ],
    _user: { type: Schema.Types.ObjectId, ref: 'user' },
    startDate: Date,
    endDate: Date,
});

const ProjectModel = mongoose.model("project", projectSchema)

exports.ProjectModel = ProjectModel;