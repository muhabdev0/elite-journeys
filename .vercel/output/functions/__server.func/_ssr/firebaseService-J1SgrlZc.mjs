import { o as initializeApp } from "../_libs/@firebase/app+[...].mjs";
import { a as Timestamp, i as where, n as orderBy, o as collection, r as query, s as getFirestore, t as getDocs } from "../_libs/@firebase/firestore+[...].mjs";
import "../_libs/firebase.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/firebaseService-J1SgrlZc.js
var db = getFirestore(initializeApp({
	apiKey: void 0,
	authDomain: void 0,
	projectId: void 0,
	storageBucket: void 0,
	messagingSenderId: void 0,
	appId: void 0
}));
var cachedPosts = null;
var lastFetchTime = 0;
var CACHE_DURATION_MS = 1e3 * 60 * 5;
async function fetchAllPosts() {
	const now = Date.now();
	if (cachedPosts && now - lastFetchTime < CACHE_DURATION_MS) return cachedPosts;
	try {
		const posts = (await getDocs(query(collection(db, "posts"), orderBy("publishedAt", "desc")))).docs.map((doc) => {
			const data = doc.data();
			return {
				id: doc.id,
				title: data.title || "",
				slug: data.slug || "",
				content: data.content || "",
				excerpt: data.excerpt || "",
				author: data.author || "",
				publishedAt: data.publishedAt instanceof Timestamp ? data.publishedAt.toDate().toISOString() : data.publishedAt,
				thumbnailUrl: data.thumbnailUrl || "",
				category: data.category || ""
			};
		});
		cachedPosts = posts;
		lastFetchTime = now;
		return posts;
	} catch (error) {
		console.error("Error fetching posts:", error);
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
			title: data.title || "",
			slug: data.slug || "",
			content: data.content || "",
			excerpt: data.excerpt || "",
			author: data.author || "",
			publishedAt: data.publishedAt instanceof Timestamp ? data.publishedAt.toDate().toISOString() : data.publishedAt,
			thumbnailUrl: data.thumbnailUrl || "",
			category: data.category || ""
		};
	} catch (error) {
		console.error("Error fetching post by slug:", error);
		throw new Error("Failed to fetch post from database");
	}
}
//#endregion
export { fetchPostBySlug as n, fetchAllPosts as t };
