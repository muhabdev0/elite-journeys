import { a as getApp, o as getApps, s as initializeApp } from "../_libs/@firebase/app+[...].mjs";
import { a as Timestamp, c as initializeFirestore, i as where, n as orderBy, o as collection, r as query, s as getFirestore, t as getDocs } from "../_libs/@firebase/firestore+[...].mjs";
import "../_libs/firebase.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/firebaseService-DPE6eFgB.js
var firebaseConfig = Object.freeze({
	apiKey: "AIzaSyD_KhwpVn0eoTyHIRUl5pV4MTJV2pxQglA",
	authDomain: "aswani-data.firebaseapp.com",
	projectId: "aswani-data",
	storageBucket: "aswani-data.firebasestorage.app",
	messagingSenderId: "813389915406",
	appId: "1:813389915406:web:fa724999c1b12eb866635f"
});
var app;
var db;
if (!getApps().length) {
	app = initializeApp(firebaseConfig);
	db = initializeFirestore(app, { experimentalForceLongPolling: true });
} else {
	app = getApp();
	db = getFirestore(app);
}
var cachedPosts = null;
var lastFetchTime = 0;
var CACHE_DURATION_MS = 1e3 * 60 * 5;
function parseLocalized(data, field) {
	const value = data[field];
	if (typeof value === "string") return {
		en: value,
		ar: value
	};
	return {
		en: value?.en || "",
		ar: value?.ar || ""
	};
}
async function fetchAllPosts() {
	const now = Date.now();
	if (cachedPosts && now - lastFetchTime < CACHE_DURATION_MS) return cachedPosts;
	try {
		const posts = (await getDocs(query(collection(db, "posts"), orderBy("publishedAt", "desc")))).docs.map((doc) => {
			const data = doc.data();
			return {
				id: doc.id,
				slug: data.slug || "",
				title: parseLocalized(data, "title"),
				content: parseLocalized(data, "content"),
				excerpt: parseLocalized(data, "excerpt"),
				category: parseLocalized(data, "category"),
				author: data.author || "",
				publishedAt: data.publishedAt instanceof Timestamp ? data.publishedAt.toDate().toISOString() : data.publishedAt,
				thumbnailUrl: data.thumbnailUrl || ""
			};
		});
		cachedPosts = posts;
		lastFetchTime = now;
		return posts;
	} catch (error) {
		console.error("FIREBASE FATAL ERROR (fetchAllPosts):", {
			name: error?.name,
			code: error?.code,
			message: error?.message
		});
		if (typeof window !== "undefined") alert(`FIREBASE CRITICAL ERROR!\nName: ${error?.name}\nCode: ${error?.code}\nMessage: ${error?.message}`);
		throw new Error("Failed to fetch posts from database");
	}
}
async function fetchPostBySlug(slug) {
	if (cachedPosts) {
		const cachedPost = cachedPosts.find((p) => p.slug === slug);
		if (cachedPost) return cachedPost;
	}
	try {
		const snapshot = await getDocs(query(collection(db, "posts"), where("slug", "==", slug)));
		if (snapshot.empty) return null;
		const doc = snapshot.docs[0];
		const data = doc.data();
		return {
			id: doc.id,
			slug: data.slug || "",
			title: parseLocalized(data, "title"),
			content: parseLocalized(data, "content"),
			excerpt: parseLocalized(data, "excerpt"),
			category: parseLocalized(data, "category"),
			author: data.author || "",
			publishedAt: data.publishedAt instanceof Timestamp ? data.publishedAt.toDate().toISOString() : data.publishedAt,
			thumbnailUrl: data.thumbnailUrl || ""
		};
	} catch (error) {
		console.error("FIREBASE FATAL ERROR (fetchPostBySlug):", {
			name: error?.name,
			code: error?.code,
			message: error?.message
		});
		if (typeof window !== "undefined") alert(`FIREBASE CRITICAL ERROR!\nName: ${error?.name}\nCode: ${error?.code}\nMessage: ${error?.message}`);
		throw new Error("Failed to fetch post from database");
	}
}
//#endregion
export { fetchPostBySlug as n, fetchAllPosts as t };
