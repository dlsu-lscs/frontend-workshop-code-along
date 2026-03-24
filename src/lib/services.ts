const POSTS_API_URL = "https://backendworkshop.app.dlsu-lscs.org/api/posts";

export async function submitPost(text: string): Promise<void> {
  const body = text.trim();

  if (!body) {
    throw new Error("Post content is required.");
  }

  const response = await fetch(POSTS_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ body }),
  });

  if (!response.ok) {
    throw new Error(
      "We could not create your post right now. Please try again.",
    );
  }
}
