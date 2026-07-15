import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Header, t as Footer } from "./Footer-BN93anMo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-Cj08Bj7o.js
var import_jsx_runtime = require_jsx_runtime();
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, { solid: true }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-5 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-4xl font-bold text-foreground",
						children: "404"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground",
						children: "Article not found."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/blog",
						className: "mt-6 inline-flex items-center rounded-full bg-gradient-gold px-5 py-2 text-sm font-semibold text-navy",
						children: "Back to Blog"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { NotFound as notFoundComponent };
