import { n as fetchPostBySlug } from "./firebaseService-J1SgrlZc.mjs";
import { A as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-C-vv9aEQ.js
var $$splitNotFoundComponentImporter = () => import("./blog._slug-Cj08Bj7o.mjs");
var $$splitComponentImporter = () => import("./blog._slug-BT8Hqjjg.mjs");
var Route = createFileRoute("/blog/$slug")({
	loader: async ({ params }) => {
		const post = await fetchPostBySlug(params.slug);
		if (!post) throw notFound();
		return { post };
	},
	head: ({ loaderData, params }) => {
		if (!loaderData) return { meta: [{ title: "Article not found · ALASWANI" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { post } = loaderData;
		return {
			meta: [
				{ title: `${post.title} · ALASWANI Blog` },
				{
					name: "description",
					content: post.excerpt
				},
				{
					property: "og:title",
					content: post.title
				},
				{
					property: "og:description",
					content: post.excerpt
				},
				{
					property: "og:type",
					content: "article"
				},
				{
					property: "og:url",
					content: `/blog/${params.slug}`
				},
				{
					property: "article:published_time",
					content: post.publishedAt
				},
				{
					property: "article:author",
					content: post.author
				},
				{
					property: "article:section",
					content: post.category
				}
			],
			links: [{
				rel: "canonical",
				href: `/blog/${params.slug}`
			}],
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Article",
					headline: post.title,
					description: post.excerpt,
					datePublished: post.publishedAt,
					author: {
						"@type": "Person",
						name: post.author
					},
					articleSection: post.category
				})
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
//#endregion
export { Route as t };
