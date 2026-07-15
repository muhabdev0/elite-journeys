import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CalendarDays, UserRound, Tag } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { fetchPostBySlug } from "@/lib/firebaseService";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const post = await fetchPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Article not found · ALASWANI" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { post } = loaderData;
    const lang = (typeof window !== "undefined" && localStorage.getItem("alaswani_lang")) || "ar";
    
    return {
      meta: [
        { title: `${post.title[lang as "ar"|"en"] || post.title.en} · ALASWANI Blog` },
        { name: "description", content: post.excerpt[lang as "ar"|"en"] || post.excerpt.en },
        { property: "og:title", content: post.title[lang as "ar"|"en"] || post.title.en },
        { property: "og:description", content: post.excerpt[lang as "ar"|"en"] || post.excerpt.en },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
        { property: "article:published_time", content: post.publishedAt },
        { property: "article:author", content: post.author },
        { property: "article:section", content: post.category[lang as "ar"|"en"] || post.category.en },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title[lang as "ar"|"en"] || post.title.en,
            description: post.excerpt[lang as "ar"|"en"] || post.excerpt.en,
            datePublished: post.publishedAt,
            author: { "@type": "Person", name: post.author },
            articleSection: post.category[lang as "ar"|"en"] || post.category.en,
          }),
        },
      ],
    };
  },
  component: BlogPostPage,
  notFoundComponent: NotFound,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const { lang, t } = useLang();
  const Arrow = lang === "ar" ? ArrowRight : ArrowLeft;
  const dateFmt = new Intl.DateTimeFormat(lang === "ar" ? "ar" : "en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(post.publishedAt));

  return (
    <div className="min-h-screen bg-background">
      <Header solid />
      <main>
        <article>
          <header className="relative bg-navy pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="mx-auto max-w-3xl px-5 md:px-8">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:text-primary-glow"
              >
                <Arrow className="h-4 w-4" />
                {t.blog.back}
              </Link>
              {post.category?.[lang] && (
                <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-gold px-3 py-1 font-semibold text-navy">
                    <Tag className="h-3 w-3" />
                    {post.category[lang]}
                  </span>
                </div>
              )}
              <h1 className="mt-5 text-balance text-3xl font-bold leading-tight text-white md:text-5xl">
                {post.title[lang]}
              </h1>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70">
                {post.author && (
                  <span className="inline-flex items-center gap-2">
                    <UserRound className="h-4 w-4" />
                    {post.author}
                  </span>
                )}
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  <time dateTime={post.publishedAt}>{dateFmt}</time>
                </span>
              </div>
            </div>
          </header>

          <div className="mx-auto -mt-8 max-w-5xl px-5 md:px-8">
            {post.thumbnailUrl ? (
              <img
                src={post.thumbnailUrl}
                alt={post.title[lang]}
                className="aspect-video w-full rounded-3xl object-cover shadow-elegant"
              />
            ) : (
              <div className="aspect-video w-full rounded-3xl bg-secondary shadow-elegant" />
            )}
          </div>

          <section className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-20">
            <div 
              className="prose prose-lg dark:prose-invert prose-p:leading-[1.9] prose-p:text-foreground/90 max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content[lang] }} 
            />

            <div className="mt-14 border-t border-border pt-8">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
              >
                <Arrow className="h-4 w-4" />
                {t.blog.back}
              </Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Header solid />
      <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-5 text-center">
        <h1 className="text-4xl font-bold text-foreground">404</h1>
        <p className="mt-3 text-muted-foreground">Article not found.</p>
        <Link
          to="/blog"
          className="mt-6 inline-flex items-center rounded-full bg-gradient-gold px-5 py-2 text-sm font-semibold text-navy"
        >
          Back to Blog
        </Link>
      </main>
      <Footer />
    </div>
  );
}
