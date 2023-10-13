import passport from "passport";
import User from "./models/User.js";
import { Strategy } from "passport-local";

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
	const user = await User.findOne({ id });

	if (!user) {
		done(null, false);
		return;
	}
	done(null, user);
});

passport.use(
	new Strategy(
		{ usernameField: "email", passwordField: "pwd" },
		async (email, pwd, done) => {
			const user = await User.findOne({ email, pwd });

			if (!user) return done(null, false);

			return done(null, user);
		}
	)
);
