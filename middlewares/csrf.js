export const generateCSRF = (req, res, next) => {
	const token = req.csrfToken();

	req.session.csrfToken = token;
	next();
};
