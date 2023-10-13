import Article from "../models/Article.js";

export const getArticles = (req, res, next) => {
	Article.find()
		.then((articles) => {
			res.render("home", { articles });
		})
		.catch((err) => res.render("home", { articles: [] }));
};
