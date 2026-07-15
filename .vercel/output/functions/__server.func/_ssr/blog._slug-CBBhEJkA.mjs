import { A as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as fetchPostBySlug } from "./firebaseService-DPE6eFgB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-CBBhEJkA.js
var $$splitNotFoundComponentImporter = () => import("./blog._slug-Cj08Bj7o.mjs");
var $$splitComponentImporter = () => import("./blog._slug-DO0qhGNU.mjs");
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
		const lang = typeof window !== "undefined" && localStorage.getItem("alaswani_lang") || "ar";
		return {
			meta: [
				{ title: `${post.title[lang] || post.title.en} · ALASWANI Blog` },
				{
					name: "description",
					content: post.excerpt[lang] || post.excerpt.en
				},
				{
					property: "og:title",
					content: post.title[lang] || post.title.en
				},
				{
					property: "og:description",
					content: post.excerpt[lang] || post.excerpt.en
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
					content: post.category[lang] || post.category.en
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
					headline: post.title[lang] || post.title.en,
					description: post.excerpt[lang] || post.excerpt.en,
					datePublished: post.publishedAt,
					author: {
						"@type": "Person",
						name: post.author
					},
					articleSection: post.category[lang] || post.category.en
				})
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
//#endregion
export { Route as t };
