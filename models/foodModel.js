import mongoose, { Schema } from "mongoose";

const ObjectId = Schema.Types.ObjectId

const foodSchema = new Schema({
    foodName: { type: String, required: true, text: true, trim: true },
    description: { type: String, required: true, text: true, trim: true },
    price: { type: String, required: true, text: true, trim: true },
    cover: { type: String, default: "" },
    pictures: [String],
    mainCategory: { type: String, required: true, text: true, trim: true },
    subCategory: { type: String, required: true, text: true, trim: true },
    score: [{ score: { type: Number }, user: { type: ObjectId, ref: "User" } }],
    comments: [{ comment: [String], user: { type: ObjectId, ref: "User" } }]
});


export default mongoose.model("Food", foodSchema)