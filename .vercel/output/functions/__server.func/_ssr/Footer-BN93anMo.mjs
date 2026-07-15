import { o as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as useLang } from "./i18n-CFwNplyK.mjs";
import { g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as Facebook, l as Instagram, n as X, o as Phone, s as Menu, t as Youtube, u as Globe } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Footer-BN93anMo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var logo_en_default = "/assets/logo-en-DwaJnJdm.png";
function Logo({ compact = false }) {
	const { lang } = useLang();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: logo_en_default,
		alt: lang === "ar" ? "الأسواني للسياحة والنقل" : "ALASWANI Tourism & Transport",
		className: compact ? "h-9 w-auto object-contain" : "h-10 w-auto max-w-[200px] object-contain sm:h-11 sm:max-w-[240px]"
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var sections = [
	"home",
	"services",
	"tours",
	"blog",
	"about",
	"contact"
];
var sectionHrefs = {
	home: "/#top",
	services: "/#services",
	tours: "/#destinations",
	about: "/#about",
	contact: "/#contact"
};
function Header({ solid = false }) {
	const { t, lang, toggle } = useLang();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const forceSolid = solid || pathname !== "/";
	const blogActive = pathname.startsWith("/blog");
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled || forceSolid ? "bg-navy/90 backdrop-blur-md shadow-elegant" : "bg-gradient-to-b from-black/40 to-transparent"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: toggle,
						"aria-label": "Switch language",
						className: "hidden md:inline-flex shrink-0 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur transition hover:border-primary/60 hover:text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "h-4 w-4" }), t.langSwitch]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden md:flex items-center gap-8 text-sm",
						children: sections.map((key) => {
							const isBlog = key === "blog";
							const isActive = isBlog ? blogActive : false;
							const className = cn("relative py-1 font-medium text-white/85 transition hover:text-primary", isActive && "text-primary");
							return isBlog ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/blog",
								className,
								children: [t.nav.blog, isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-1 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-primary" })]
							}, key) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: sectionHrefs[key],
								className,
								children: t.nav[key]
							}, key);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							"aria-label": "ALASWANI Home",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setOpen((o) => !o),
						"aria-label": "Open menu",
						"aria-expanded": open,
						className: "md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out bg-navy/95 backdrop-blur-md", open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex flex-col gap-1 px-6 py-4",
					children: [sections.map((key) => {
						const isBlog = key === "blog";
						const className = "rounded-lg px-3 py-3 text-base font-medium text-white/90 transition hover:bg-white/5 hover:text-primary";
						return isBlog ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/blog",
							onClick: () => setOpen(false),
							className,
							children: t.nav.blog
						}, key) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: sectionHrefs[key],
							onClick: () => setOpen(false),
							className,
							children: t.nav[key]
						}, key);
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => {
							toggle();
							setOpen(false);
						},
						className: "mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-primary/60 px-4 py-3 text-sm font-medium text-primary",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "h-4 w-4" }),
							" ",
							t.langSwitch
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: lang
			})
		]
	});
}
var phone = "+31 6 44444226";
var waLink = "https://wa.me/31644444226";
function TikTok({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		className,
		fill: "currentColor",
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19.6 6.7a5.6 5.6 0 0 1-3.4-1.2 5.6 5.6 0 0 1-2-3.5h-3v13a2.6 2.6 0 1 1-1.9-2.5V9.4a5.7 5.7 0 1 0 4.9 5.6V9.7a8.7 8.7 0 0 0 5.4 1.8z" })
	});
}
function Footer() {
	const { t } = useLang();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		id: "contact",
		className: "bg-navy text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 py-10 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 items-center gap-8 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-center gap-4 md:justify-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: waLink,
							"aria-label": "WhatsApp",
							className: "grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#25D366] text-white shadow-elegant transition hover:scale-105",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `tel:${phone.replace(/\s/g, "")}`,
								className: "block text-lg font-bold tracking-wide text-primary",
								children: phone
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-white/70",
								children: t.footer.support
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-center gap-3 md:justify-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-white/70",
							children: t.footer.follow
						}), [
							Instagram,
							Facebook,
							TikTok,
							Youtube
						].map((Icon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							"aria-label": "Social link",
							className: "grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition hover:border-primary hover:text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
						}, i))]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 border-t border-white/10 pt-5 text-center text-xs text-white/50",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ALASWANI Tourism & Transport · ",
					t.footer.rights
				]
			})]
		})
	});
}
//#endregion
export { Header as n, cn as r, Footer as t };
