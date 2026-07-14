import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CalendarDays, UserRound, Tag } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { getPost, posts, type BlogPost } from "@/lib/blog-data";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
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
    return {
      meta: [
        { title: `${post.title.en} · ALASWANI Blog` },
        { name: "description", content: post.excerpt.en },
        { property: "og:title", content: post.title.en },
        { property: "og:description", content: post.excerpt.en },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
        { property: "article:published_time", content: post.date },
        { property: "article:author", content: post.author.en },
        { property: "article:section", content: post.category.en },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title.en,
            description: post.excerpt.en,
            datePublished: post.date,
            author: { "@type": "Person", name: post.author.en },
            articleSection: post.category.en,
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
  }).format(new Date(post.date));

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

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
              <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-gold px-3 py-1 font-semibold text-navy">
                  <Tag className="h-3 w-3" />
                  {post.category[lang]}
                </span>
              </div>
              <h1 className="mt-5 text-balance text-3xl font-bold leading-tight text-white md:text-5xl">
                {post.title[lang]}
              </h1>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70">
                <span className="inline-flex items-center gap-2">
                  <UserRound className="h-4 w-4" />
                  {post.author[lang]}
                </span>
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  <time dateTime={post.date}>{dateFmt}</time>
                </span>
              </div>
            </div>
          </header>

          <div className="mx-auto -mt-8 max-w-5xl px-5 md:px-8">
            <img
              src={post.image}
              alt={post.title[lang]}
              className="aspect-video w-full rounded-3xl object-cover shadow-elegant"
            />
          </div>

          <section className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-20">
            <div className="space-y-6 text-base leading-[1.9] text-foreground/90 md:text-lg">
              {post.content.map((block: BlogPost["content"][number], i: number) => {
                if (block.type === "p") {
                  return <p key={i}>{block[lang]}</p>;
                }
                if (block.type === "h2") {
                  return (
                    <h2 key={i} className="pt-4 text-2xl font-bold text-foreground md:text-3xl">
                      {block[lang]}
                    </h2>
                  );
                }
                if (block.type === "h3") {
                  return (
                    <h3 key={i} className="pt-2 text-xl font-semibold text-foreground md:text-2xl">
                      {block[lang]}
                    </h3>
                  );
                }
                if (block.type === "ul") {
                  return (
                    <ul key={i} className="list-disc space-y-2 ps-6 marker:text-primary">
                      {block[lang].map((item: string, j: number) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  );
                }
                if (block.type === "quote") {
                  return (
                    <blockquote
                      key={i}
                      className="border-s-4 border-primary bg-secondary/60 px-6 py-4 text-lg font-medium italic text-foreground"
                    >
                      {block[lang]}
                    </blockquote>
                  );
                }
                return null;
              })}
            </div>

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

        {related.length > 0 && (
          <section aria-labelledby="related-heading" className="bg-secondary/40 py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-5 md:px-8">
              <h2 id="related-heading" className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
                {t.blog.related}
              </h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {related.map((p) => (
                  <RelatedCard key={p.slug} post={p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

function RelatedCard({ post }: { post: (typeof posts)[number] }) {
  const { lang } = useLang();
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      className="group block overflow-hidden rounded-2xl bg-card shadow-card-soft transition hover:-translate-y-1 hover:shadow-elegant"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={post.image}
          alt={post.title[lang]}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">
          {post.category[lang]}
        </p>
        <h3 className="mt-2 text-base font-bold text-foreground transition group-hover:text-primary">
          {post.title[lang]}
        </h3>
      </div>
    </Link>
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
