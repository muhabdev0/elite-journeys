import { r as require_jsx_runtime, t as useQuery } from "../_libs/react+tanstack__react-query.mjs";
import { n as useLang } from "./i18n-CFwNplyK.mjs";
import { t as fetchAllPosts } from "./firebaseService-J1SgrlZc.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as CalendarDays, b as UserRound, v as ArrowRight, y as ArrowLeft } from "../_libs/lucide-react.mjs";
import { n as Header, t as Footer } from "./Footer-BN93anMo.mjs";
import { t as WhatsAppFloat } from "./WhatsAppFloat-CKf5aLqo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog.index-CfY_Q0jr.js
var import_jsx_runtime = require_jsx_runtime();
function BlogCard({ post }) {
	const { lang, t } = useLang();
	const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;
	const dateFmt = new Intl.DateTimeFormat(lang === "ar" ? "ar" : "en", {
		day: "numeric",
		month: "long",
		year: "numeric"
	}).format(new Date(post.publishedAt));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group flex h-full flex-col overflow-hidden rounded-3xl bg-card shadow-card-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-elegant",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/blog/$slug",
			params: { slug: post.slug },
			className: "relative block aspect-video overflow-hidden",
			"aria-label": post.title,
			children: [post.thumbnailUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: post.thumbnailUrl,
				alt: post.title,
				loading: "lazy",
				className: "h-full w-full object-cover transition duration-700 group-hover:scale-105"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-full bg-secondary/50" }), post.category && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute top-4 start-4 rounded-full bg-gradient-gold px-3 py-1 text-[11px] font-semibold text-navy shadow-gold/40",
				children: post.category
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
							dateTime: post.publishedAt,
							children: dateFmt
						})]
					}), post.author && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { className: "h-3.5 w-3.5" }), post.author]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-bold leading-snug text-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/blog/$slug",
						params: { slug: post.slug },
						className: "transition hover:text-primary",
						children: post.title
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground",
					children: post.excerpt
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/blog/$slug",
						params: { slug: post.slug },
						className: "inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-2 text-xs font-semibold text-navy shadow-gold/50 transition hover:shadow-gold",
						children: [t.blog.readMore, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, { className: "h-3.5 w-3.5" })]
					})
				})
			]
		})]
	});
}
function BlogCardSkeleton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "flex h-full flex-col overflow-hidden rounded-3xl bg-card shadow-card-soft",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "aspect-video w-full animate-pulse bg-muted/50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-24 animate-pulse rounded-md bg-muted/50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-24 animate-pulse rounded-md bg-muted/50" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-6 w-3/4 animate-pulse rounded-md bg-muted/50" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-2 h-6 w-1/2 animate-pulse rounded-md bg-muted/50" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex-1 space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-full animate-pulse rounded-md bg-muted/50" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-full animate-pulse rounded-md bg-muted/50" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-2/3 animate-pulse rounded-md bg-muted/50" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 w-28 animate-pulse rounded-full bg-muted/50" })
				})
			]
		})]
	});
}
function BlogIndex() {
	const { t } = useLang();
	const { data: posts, isLoading, isError } = useQuery({
		queryKey: ["posts"],
		queryFn: fetchAllPosts
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, { solid: true }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative bg-navy pt-32 pb-16 md:pt-40 md:pb-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-4xl px-5 text-center md:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-primary",
							children: t.blog.eyebrow
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-balance text-4xl font-bold text-white md:text-6xl",
							children: t.blog.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-5 max-w-2xl text-base text-white/75 md:text-lg",
							children: t.blog.subtitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mt-6 h-0.5 w-16 rounded-full bg-primary" })
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-background py-16 md:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-5 md:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3",
						children: isLoading ? Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlogCardSkeleton, {}, i)) : isError ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "col-span-full rounded-2xl bg-destructive/10 p-8 text-center text-destructive",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: "Failed to load blog posts."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm",
								children: "Please try again later."
							})]
						}) : posts?.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "col-span-full py-12 text-center text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No posts found." })
						}) : posts?.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlogCard, { post }, post.slug))
					})
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFloat, {})
		]
	});
}
//#endregion
export { BlogIndex as component };
