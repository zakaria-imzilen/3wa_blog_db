export const checkAuth = (req, res, next) => {
	if (!req.isAuthenticated()) {
		return res.redirect("/auth/signin");
	}
	next();
};
