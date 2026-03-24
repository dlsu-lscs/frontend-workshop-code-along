import type { Post } from "@/lib/api";

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-6">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-muted">
        Post #{post.id}
      </p>
      <p className="text-base leading-7 text-foreground">{post.body}</p>
    </article>
  );
}
