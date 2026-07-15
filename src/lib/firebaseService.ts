import { collection, getDocs, query, orderBy, where, Timestamp } from "firebase/firestore";
import { db } from "./firebase";

export type LocalizedString = {
  en: string;
  ar: string;
};

export type Post = {
  id: string;
  slug: string;
  title: LocalizedString;
  content: LocalizedString;
  excerpt: LocalizedString;
  author: string;
  publishedAt: string; // ISO String
  thumbnailUrl: string;
  category: LocalizedString;
};

// Simple caching to avoid excessive reads during development/navigation
let cachedPosts: Post[] | null = null;
let lastFetchTime = 0;
const CACHE_DURATION_MS = 1000 * 60 * 5; // 5 minutes

function parseLocalized(data: any, field: string): LocalizedString {
  const value = data[field];
  if (typeof value === "string") return { en: value, ar: value }; // fallback
  return {
    en: value?.en || "",
    ar: value?.ar || ""
  };
}

export async function fetchAllPosts(): Promise<Post[]> {
  const now = Date.now();
  if (cachedPosts && (now - lastFetchTime < CACHE_DURATION_MS)) {
    return cachedPosts;
  }

  try {
    const postsRef = collection(db, "posts");
    const q = query(postsRef, orderBy("publishedAt", "desc"));
    const snapshot = await getDocs(q);
    
    const posts = snapshot.docs.map(doc => {
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
        thumbnailUrl: data.thumbnailUrl || "",
      } as Post;
    });

    cachedPosts = posts;
    lastFetchTime = now;
    
    return posts;
  } catch (error: any) {
    // FAIL-SAFE VERBOSE PRODUCTION LOGGING
    console.error("FIREBASE FATAL ERROR (fetchAllPosts):", {
      name: error?.name,
      code: error?.code,
      message: error?.message,
    });
    
    // Force a highly visible global alert if in the browser (bypasses Vite stripping)
    if (typeof window !== "undefined") {
      alert(`FIREBASE CRITICAL ERROR!\nName: ${error?.name}\nCode: ${error?.code}\nMessage: ${error?.message}`);
    }

    throw new Error("Failed to fetch posts from database");
  }
}

export async function fetchPostBySlug(slug: string): Promise<Post | null> {
  if (cachedPosts) {
    const cachedPost = cachedPosts.find(p => p.slug === slug);
    if (cachedPost) return cachedPost;
  }

  try {
    const postsRef = collection(db, "posts");
    const q = query(postsRef, where("slug", "==", slug));
    const snapshot = await getDocs(q);
    
    if (snapshot.empty) {
      return null;
    }
    
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
      thumbnailUrl: data.thumbnailUrl || "",
    } as Post;
  } catch (error: any) {
    // FAIL-SAFE VERBOSE PRODUCTION LOGGING
    console.error("FIREBASE FATAL ERROR (fetchPostBySlug):", {
      name: error?.name,
      code: error?.code,
      message: error?.message,
    });
    
    // Force a highly visible global alert if in the browser (bypasses Vite stripping)
    if (typeof window !== "undefined") {
      alert(`FIREBASE CRITICAL ERROR!\nName: ${error?.name}\nCode: ${error?.code}\nMessage: ${error?.message}`);
    }

    throw new Error("Failed to fetch post from database");
  }
}
