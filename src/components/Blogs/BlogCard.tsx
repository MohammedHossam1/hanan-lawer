'use client';
import { TArticle } from '@/types/Index';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function BlogCard({
  post,
  lang = 'ar',
}: {
  post: TArticle;
  lang?: string;
}) {
  const { t } = useTranslation();
  return (
    <article className="group h-full rounded-2xl border border-accent/30 bg-accent/5 p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-3 flex items-center gap-2">
        {post.article_type && (
          <span className="rounded-full border border-accent/40 px-3 py-1 text-xs text-accent">
            {post.article_type.name}
          </span>
        )}
        {post.published_at && (
          <time className="text-xs opacity-70">{post.published_at}</time>
        )}
      </div>

      <h3 className="mb-2 text-xl font-semibold text-accent group-hover:underline">
        {post.title}
      </h3>

      <p className="mb-4 line-clamp-3 leading-relaxed opacity-90">
        {post.description}
      </p>

      <Link
        to={`/blogs/${post.id}?lang=${lang}`}
        className="inline-block rounded-xl bg-accent px-4 py-2 text-sm text-white hover:opacity-90 transition"
      >
        {t('read_more')}
      </Link>
    </article>
  );
}
