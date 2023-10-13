import { model, Schema } from "mongoose";

const userSchema = new Schema({
	id: {
		type: Number,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	pwd: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
});

const User = model("User", userSchema);
export default User;
