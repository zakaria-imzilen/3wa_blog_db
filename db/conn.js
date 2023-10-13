import mongoose from "mongoose";

const MONGO_URI = "mongodb://127.0.0.1:27017/";

// Connecting to DB through mongoose
export default () => {
	mongoose
		.connect(MONGO_URI, { dbName: "3WA_Blog" })
		.then(() => {
			console.log("DB Connected !");
		})
		.catch((err) => {
			console.log("Couldn't connect to DB", err);
		});
};
