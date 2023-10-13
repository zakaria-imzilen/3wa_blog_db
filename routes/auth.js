import { Router } from "express";
import { generateCSRF } from "../middlewares/csrf.js";
import { getAuthSignin } from "../controllers/auth.js";
import { body, validationResult } from "express-validator";
import passport from "passport";

const authRouter = Router();

authRouter.get("/signin", generateCSRF, getAuthSignin); // ejs
authRouter.post(
	"/signin",
	body("email").isEmail().normalizeEmail(),
	(req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.redirect("/auth/signin");
		}
		next();
		// req.session.messages;
	},
	passport.authenticate("local", {
		failureRedirect: "/auth/signin",
		successRedirect: "/articles",
	})
); // Authentication + Access to the Home page

export default authRouter;
