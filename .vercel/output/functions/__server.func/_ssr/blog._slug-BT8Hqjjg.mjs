import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as useLang } from "./i18n-CFwNplyK.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./blog._slug-C-vv9aEQ.mjs";
import { _ as CalendarDays, b as UserRound, i as Tag, v as ArrowRight, y as ArrowLeft } from "../_libs/lucide-react.mjs";
import { n as Header, t as Footer } from "./Footer-BN93anMo.mjs";
import { t as WhatsAppFloat } from "./WhatsAppFloat-CKf5aLqo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-BT8Hqjjg.js
var import_jsx_runtime = require_jsx_runtime();
function BlogPostPage() {
	const { post } = Route.useLoaderData();
	const { lang, t } = useLang();
	const Arrow = lang === "ar" ? ArrowRight : ArrowLeft;
	const dateFmt = new Intl.DateTimeFormat(lang === "ar" ? "ar" : "en", {
		day: "numeric",
		month: "long",
		year: "numeric"
	}).format(new Date(post.publishedAt));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, { solid: true }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
					className: "relative bg-navy pt-32 pb-12 md:pt-40 md:pb-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-3xl px-5 md:px-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/blog",
								className: "inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:text-primary-glow",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, { className: "h-4 w-4" }), t.blog.back]
							}),
							post.category && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 flex flex-wrap items-center gap-2 text-xs",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5 rounded-full bg-gradient-gold px-3 py-1 font-semibold text-navy",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { className: "h-3 w-3" }), post.category]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-5 text-balance text-3xl font-bold leading-tight text-white md:text-5xl",
								children: post.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70",
								children: [post.author && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { className: "h-4 w-4" }), post.author]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
										dateTime: post.publishedAt,
										children: dateFmt
									})]
								})]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto -mt-8 max-w-5xl px-5 md:px-8",
					children: post.thumbnailUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: post.thumbnailUrl,
						alt: post.title,
						className: "aspect-video w-full rounded-3xl object-cover shadow-elegant"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "aspect-video w-full rounded-3xl bg-secondary shadow-elegant" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "prose prose-lg dark:prose-invert prose-p:leading-[1.9] prose-p:text-foreground/90 max-w-none",
						dangerouslySetInnerHTML: { __html: post.content }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 border-t border-border pt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/blog",
							className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, { className: "h-4 w-4" }), t.blog.back]
						})
					})]
				})
			] }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFloat, {})
		]
	});
}
//#endregion
export { BlogPostPage as component };
