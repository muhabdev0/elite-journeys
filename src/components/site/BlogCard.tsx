import { Link } from "@tanstack/react-router";
import { CalendarDays, UserRound, ArrowRight, ArrowLeft } from "lucide-react";
import type { Post } from "@/lib/firebaseService";
import { useLang } from "@/lib/i18n";

export function BlogCard({ post }: { post: Post }) {
  const { lang, t } = useLang();
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;
  const dateFmt = new Intl.DateTimeFormat(lang === "ar" ? "ar" : "en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(post.publishedAt));

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-card shadow-card-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-elegant">
      <Link
        to="/blog/$slug"
        params={{ slug: post.slug }}
        className="relative block aspect-video overflow-hidden"
        aria-label={post.title[lang]}
      >
        {post.thumbnailUrl ? (
          <img
            src={post.thumbnailUrl}
            alt={post.title[lang]}
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-secondary/50" />
        )}
        {post.category?.[lang] && (
          <span className="absolute top-4 start-4 rounded-full bg-gradient-gold px-3 py-1 text-[11px] font-semibold text-navy shadow-gold/40">
            {post.category[lang]}
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" />
            <time dateTime={post.publishedAt}>{dateFmt}</time>
          </span>
          {post.author && (
            <span className="inline-flex items-center gap-1.5">
              <UserRound className="h-3.5 w-3.5" />
              {post.author}
            </span>
          )}
        </div>

        <h2 className="text-xl font-bold leading-snug text-foreground">
          <Link
            to="/blog/$slug"
            params={{ slug: post.slug }}
            className="transition hover:text-primary"
          >
            {post.title[lang]}
          </Link>
        </h2>

        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt[lang]}
        </p>

        <div className="mt-6">
          <Link
            to="/blog/$slug"
            params={{ slug: post.slug }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-2 text-xs font-semibold text-navy shadow-gold/50 transition hover:shadow-gold"
          >
            {t.blog.readMore}
            <Arrow className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export function BlogCardSkeleton() {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-card shadow-card-soft">
      <div className="aspect-video w-full animate-pulse bg-muted/50" />
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-4">
          <div className="h-4 w-24 animate-pulse rounded-md bg-muted/50" />
          <div className="h-4 w-24 animate-pulse rounded-md bg-muted/50" />
        </div>
        <div className="h-6 w-3/4 animate-pulse rounded-md bg-muted/50" />
        <div className="mt-2 h-6 w-1/2 animate-pulse rounded-md bg-muted/50" />
        <div className="mt-4 flex-1 space-y-2">
          <div className="h-4 w-full animate-pulse rounded-md bg-muted/50" />
          <div className="h-4 w-full animate-pulse rounded-md bg-muted/50" />
          <div className="h-4 w-2/3 animate-pulse rounded-md bg-muted/50" />
        </div>
        <div className="mt-6">
          <div className="h-8 w-28 animate-pulse rounded-full bg-muted/50" />
        </div>
      </div>
    </article>
  );
}
