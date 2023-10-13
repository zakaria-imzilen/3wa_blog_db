import { Schema, model } from "mongoose";

const articleSchema = new Schema({
	id: { type: Number, required: true },
	title: { type: String, required: true },
	text: { type: String, required: true, min: 5 },
});

const Article = model("Article", articleSchema);

export default Article;
