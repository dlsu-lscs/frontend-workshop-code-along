import { getPosts, type Post } from "@/lib/api";
import { PostCard } from "@/components/PostCard";

export async function PostsSection() {
  let posts: Post[] = [];
  let error: string | null = null;

  try {
    posts = await getPosts();
  } catch {
    error = "Failed to fetch posts";
  }

  return (
    <section id="posts" className="space-y-5">
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">Posts</h2>
        <p className="text-sm text-muted">Fetched from the workshop API endpoint.</p>
      </div>

      {error ? (
        <div className="rounded-2xl border border-border bg-card p-6 text-sm text-muted shadow-sm">
          We could not load posts right now. Please try again later.
        </div>
      ) : null}

      {!error && posts.length === 0 ? (
        <div className="rounded-2xl border border-border bg-card p-6 text-sm text-muted shadow-sm">
          No posts yet. Check back soon.
        </div>
      ) : null}

      {!error && posts.length > 0 ? (
        <div className="grid gap-4 sm:gap-5">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : null}
    </section>
  );
}
