export type Post = {
  id: number;
  body: string;
};

const POSTS_API_URL = "https://backendworkshop.app.dlsu-lscs.org/api/posts";

export async function getPosts(): Promise<Post[]> {
  const response = await fetch(POSTS_API_URL, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`Failed to fetch posts: ${response.status}`);
  }

  const data: unknown = await response.json();

  if (!Array.isArray(data)) {
    return [];
  }

  return data.filter(isPost);
}

function isPost(value: unknown): value is Post {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Record<string, unknown>;

  return (
    typeof candidate.id === "number" &&
    Number.isFinite(candidate.id) &&
    typeof candidate.body === "string"
  );
}
