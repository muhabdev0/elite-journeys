import { o as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as useLang } from "./i18n-CFwNplyK.mjs";
import { a as ShieldCheck, b as UserRound, c as MapPin, f as Crown, g as Camera, h as Car, m as ChevronLeft, o as Phone, p as ChevronRight, r as Users, v as ArrowRight, y as ArrowLeft } from "../_libs/lucide-react.mjs";
import { n as Header, r as cn, t as Footer } from "./Footer-BN93anMo.mjs";
import { t as WhatsAppFloat } from "./WhatsAppFloat-CKf5aLqo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D_PtLPKg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_bg_default = "/assets/hero-bg-CM5xSglY.jpg";
var hero_slide_style_default = "/assets/hero-slide-style-a9JoDMf7.jpg";
var hero_slide_services_default = "/assets/hero-slide-services-D0gfjqeH.jpg";
var hero_slide_features_default = "/assets/hero-slide-features-CPWjpk2c.jpg";
var hero_slide_cta_mp4_asset_default = {
	version: 1,
	asset_id: "f010359e-6988-4d8c-a527-80daf76cd0a7",
	project_id: "4e0cc39b-dbe7-461c-908c-ba7f6339c914",
	url: "/__l5e/assets-v1/f010359e-6988-4d8c-a527-80daf76cd0a7/hero-slide-cta.mp4",
	original_filename: "hero-slide-cta.mp4",
	size: 10587710,
	created_at: "2026-07-11T17:36:31Z"
};
var SLIDE_DURATION = 2500;
function Hero() {
	const { t, lang } = useLang();
	const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;
	const features = [
		{
			icon: Users,
			label: t.hero.features.drivers
		},
		{
			icon: ShieldCheck,
			label: t.hero.features.safety
		},
		{
			icon: MapPin,
			label: t.hero.features.tours
		},
		{
			icon: Car,
			label: t.hero.features.fleet
		}
	];
	const slides = 5;
	const [index, setIndex] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => {
			setIndex((i) => (i + 1) % slides);
		}, SLIDE_DURATION);
		return () => window.clearInterval(id);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative isolate overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-24 md:pt-36 md:pb-40 min-h-[85svh] md:min-h-[100svh]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 -z-20",
				children: [
					{
						type: "img",
						src: hero_bg_default
					},
					{
						type: "img",
						src: hero_slide_style_default
					},
					{
						type: "img",
						src: hero_slide_services_default
					},
					{
						type: "img",
						src: hero_slide_features_default
					},
					{
						type: "video",
						src: hero_slide_cta_mp4_asset_default.url
					}
				].map((bg, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("absolute inset-0 transition-opacity duration-1000 ease-out", i === index ? "opacity-100" : "opacity-0"),
					children: bg.type === "img" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: bg.src,
						alt: "",
						"aria-hidden": true,
						className: "h-full w-full object-cover scale-105",
						style: { animation: i === index ? "heroZoom 6s ease-out forwards" : void 0 },
						fetchPriority: i === 0 ? "high" : "low"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
						src: bg.src,
						className: "h-full w-full object-cover",
						autoPlay: true,
						muted: true,
						loop: true,
						playsInline: true
					})
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-gradient-hero" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 mx-auto flex min-h-[55svh] max-w-6xl items-center justify-center px-5 md:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-primary sm:mb-6 sm:text-xs sm:tracking-[0.35em]",
							children: t.hero.eyebrow
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative min-h-[220px] sm:min-h-[280px] md:min-h-[340px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidePanel, {
									active: index === 0,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "text-balance text-4xl font-bold leading-[1.1] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)] sm:text-5xl md:text-7xl lg:text-8xl",
										children: t.hero.title1
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidePanel, {
									active: index === 1,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-balance bg-gradient-gold bg-clip-text text-4xl font-bold italic leading-[1.1] text-transparent drop-shadow-[0_4px_24px_rgba(0,0,0,0.4)] sm:text-5xl md:text-7xl lg:text-8xl",
										children: t.hero.title2
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidePanel, {
									active: index === 2,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mx-auto max-w-3xl text-lg font-medium leading-relaxed text-white/95 drop-shadow-[0_2px_16px_rgba(0,0,0,0.5)] sm:text-2xl md:text-3xl",
										children: t.hero.subtitle
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidePanel, {
									active: index === 3,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mx-auto grid max-w-2xl grid-cols-2 gap-3 sm:flex sm:max-w-4xl sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-6 sm:gap-y-4",
										children: features.map(({ icon: Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-2.5 rounded-full border border-primary/30 bg-white/10 px-3 py-2.5 backdrop-blur-md sm:gap-3 sm:px-5 sm:py-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/20 text-primary sm:h-10 sm:w-10",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 sm:h-5 sm:w-5" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "min-w-0 truncate text-sm font-semibold text-white sm:text-base md:text-lg",
												children: label
											})]
										}, label))
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidePanel, {
									active: index === 4,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col items-center gap-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "max-w-xl text-base font-medium text-white/90 sm:text-lg md:text-xl",
											children: t.hero.subtitle
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: "#contact",
												className: "group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-4 text-sm font-semibold text-navy shadow-gold transition hover:-translate-y-0.5 hover:shadow-elegant sm:px-8 sm:py-5 sm:text-base",
												children: [t.hero.ctaPrimary, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, { className: "h-4 w-4 transition group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 sm:h-5 sm:w-5" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: "#contact",
												className: "inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur transition hover:border-primary hover:text-primary sm:px-8 sm:py-5 sm:text-base",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 sm:h-5 sm:w-5" }), t.hero.ctaSecondary]
											})]
										})]
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex items-center justify-center gap-2 sm:mt-12",
							children: Array.from({ length: slides }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setIndex(i),
								"aria-label": `Slide ${i + 1}`,
								className: cn("h-1.5 rounded-full transition-all", i === index ? "w-8 bg-primary" : "w-4 bg-white/30 hover:bg-white/60")
							}, i))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes heroZoom {
          from { transform: scale(1.05); }
          to { transform: scale(1.15); }
        }
      ` })
		]
	});
}
function SlidePanel({ active, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out", active ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "w-full",
			children
		})
	});
}
function StatsStrip() {
	const { t } = useLang();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative z-20 mx-auto -mt-28 max-w-6xl px-5 md:-mt-32 md:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 gap-y-6 rounded-3xl bg-navy px-6 py-8 shadow-elegant md:grid-cols-4 md:gap-0 md:px-10 md:py-10",
			children: [
				t.stats.years,
				t.stats.trips,
				t.stats.satisfaction,
				t.stats.destinations
			].map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `flex flex-col items-center gap-1 text-center md:border-white/10 ${i > 0 ? "md:border-s" : ""}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display-en text-3xl font-bold text-primary md:text-4xl",
					children: it.value
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs text-white/75 md:text-sm",
					children: it.label
				})]
			}, i))
		})
	});
}
var service_transport_default = "/assets/service-transport-B53e-dUX.jpg";
var service_tours_default = "/assets/service-tours-BLfkH4pz.jpg";
var service_driver_default = "/assets/service-driver-BZz64pQ_.jpg";
var service_vip_default = "/assets/service-vip-v8T6uyfS.jpg";
var icons = [
	Car,
	Camera,
	UserRound,
	Crown
];
var images$1 = [
	service_transport_default,
	service_tours_default,
	service_driver_default,
	service_vip_default
];
function Services() {
	const { t } = useLang();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "relative bg-background py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-14 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-primary",
						children: t.services.eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-balance text-3xl font-bold text-foreground md:text-5xl",
						children: t.services.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mt-5 h-0.5 w-16 rounded-full bg-primary" })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4",
				children: t.services.items.map((item, i) => {
					const Icon = icons[i];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group relative flex flex-col rounded-3xl bg-card shadow-card-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-elegant",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative overflow-hidden rounded-t-3xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: images$1[i],
								alt: item.title,
								loading: "lazy",
								width: 800,
								height: 600,
								className: "h-52 w-full object-cover transition duration-700 group-hover:scale-105"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-x-0 -bottom-7 flex justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-14 w-14 place-items-center rounded-full bg-gradient-gold text-navy shadow-gold",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-6 w-6" })
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 flex-col px-6 pb-7 pt-12 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-bold text-foreground",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 flex-1 text-sm leading-relaxed text-muted-foreground",
									children: item.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#contact",
										className: "inline-flex items-center justify-center rounded-full bg-gradient-gold px-6 py-2 text-xs font-semibold text-navy shadow-gold/50 transition hover:shadow-gold",
										children: t.services.more
									})
								})
							]
						})]
					}, item.title);
				})
			})]
		})
	});
}
var images = [
	"/assets/dest-amsterdam-B0vvOhjH.jpg",
	"/assets/dest-paris-Bgk_w04I.jpg",
	"/assets/dest-brussels-GP-VdsxR.jpg",
	"/assets/dest-prague-B_XcDOgf.jpg",
	"/assets/dest-zurich-BOdoGR1D.jpg",
	"/assets/dest-interlaken-B_GRZcEl.jpg",
	"/assets/dest-vienna-CqYWYjHL.jpg"
];
function Destinations() {
	const { t, lang } = useLang();
	const trackRef = (0, import_react.useRef)(null);
	const scrollBy = (dir) => {
		const el = trackRef.current;
		if (!el) return;
		const amount = el.clientWidth * .7 * dir;
		el.scrollBy({
			left: lang === "ar" ? -amount : amount,
			behavior: "smooth"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "destinations",
		className: "bg-background pb-24 md:pb-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-10 flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-balance text-2xl font-bold text-foreground md:text-4xl",
					children: t.destinations.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden gap-2 md:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => scrollBy(-1),
						"aria-label": t.destinations.prev,
						className: "grid h-11 w-11 place-items-center rounded-full border border-primary/40 text-primary transition hover:bg-primary hover:text-navy",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-5 w-5 rtl:rotate-180" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => scrollBy(1),
						"aria-label": t.destinations.next,
						className: "grid h-11 w-11 place-items-center rounded-full bg-gradient-gold text-navy shadow-gold transition hover:shadow-elegant",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5 rtl:rotate-180" })
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: trackRef,
					className: "flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
					children: t.destinations.names.map((name, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group relative aspect-[4/5] w-[78%] shrink-0 snap-start overflow-hidden rounded-3xl shadow-card-soft sm:w-[44%] lg:w-[23%]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: images[i],
								alt: name,
								loading: "lazy",
								width: 800,
								height: 600,
								className: "h-full w-full object-cover transition duration-700 group-hover:scale-110"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-x-0 bottom-0 p-5 text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-bold text-white drop-shadow",
									children: name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mt-2 h-0.5 w-8 rounded-full bg-primary" })]
							})
						]
					}, name))
				})
			})]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsStrip, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Destinations, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFloat, {})
		]
	});
}
//#endregion
export { Index as component };
