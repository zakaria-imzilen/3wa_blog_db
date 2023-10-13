import express from "express";
import session from "express-session";
import csrf from "csurf";
import bodyParser from "body-parser";
import passport from "passport";
import connecting from "./db/conn.js";
import authRouter from "./routes/auth.js";
import cookieParser from "cookie-parser";

const app = express();
const PORT = 3002;

app.use(session({ secret: "sdiuni1389n" }));
app.use(cookieParser());
app.use(express.static("public"));
app.set("view engine", "ejs");

// For Data coming from HTML form
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // For Data coming in JSON format

app.use(passport.initialize());
app.use(passport.session());

import "./pass.js";
import articleRouter from "./routes/articles.js";

connecting();

app.use(
	csrf({
		cookie: true,
	})
);

// Routers
app.use("/auth", authRouter);
app.use("/articles", articleRouter);

app.listen(PORT, () => console.log("LISTENING on: ", PORT));
