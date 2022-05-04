const path = require('path');

/// Goal 3:- generate a blog page for each post
module.exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	// 1. Get path to template
	const blogTemplate = path.resolve('./src/templates/blog.js');

	const res = await graphql(`
		query {
			allContentfulGatsbyBlog {
				edges {
					node {
						slug
					}
				}
			}
		}
	`);

	res.data.allContentfulGatsbyBlog.edges.forEach((edge) => {
		createPage({
			component: blogTemplate,
			path: `/blog/${edge.node.slug}`,
			context: {
				slug: edge.node.slug,
			},
		});
	});
};
