import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { BlogCard } from "@/components/site/BlogCard";
import { posts } from "@/lib/blog-data";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog · ALASWANI Tourism & Transport" },
      {
        name: "description",
        content:
          "Travel guides, destination inspiration, and practical tips for exploring Europe with a private Arabic-speaking driver.",
      },
      { property: "og:title", content: "Blog · ALASWANI Tourism & Transport" },
      {
        property: "og:description",
        content:
          "Travel guides and destination inspiration from ALASWANI Tourism & Transport.",
      },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const { t } = useLang();
  return (
    <div className="min-h-screen bg-background">
      <Header solid />
      <main>
        <section className="relative bg-navy pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              {t.blog.eyebrow}
            </p>
            <h1 className="text-balance text-4xl font-bold text-white md:text-6xl">
              {t.blog.title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-white/75 md:text-lg">
              {t.blog.subtitle}
            </p>
            <div className="mx-auto mt-6 h-0.5 w-16 rounded-full bg-primary" />
          </div>
        </section>

        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
