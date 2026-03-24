"use client";

import { type FormEvent, useState } from "react";

import { submitPost } from "@/lib/services";

export function CreatePostForm() {
    const [text, setText] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setError(null);
        setIsSubmitting(true);

        try {
            await submitPost(text);
            setText("");
            window.location.reload();
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError("We could not create your post right now. Please try again.");
            }
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section className="space-y-3 rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
            <div className="space-y-1">
                <h2 className="text-xl font-semibold tracking-tight text-foreground">Create post</h2>
                <p className="text-sm text-muted">Share a quick update from the workshop.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
                <textarea
                    name="body"
                    required
                    minLength={1}
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                    placeholder="Write your post here..."
                    className="min-h-28 w-full resize-y rounded-xl border border-border bg-background px-4 py-3 text-sm leading-6 text-foreground outline-none transition placeholder:text-muted focus:ring-2 focus:ring-accent/20"
                />

                {error ? <p className="text-sm text-red-700">{error}</p> : null}

                <div className="flex items-center justify-between gap-3">
                    <p className="text-xs text-muted">Write a short post update</p>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {isSubmitting ? "Posting..." : "Post"}
                    </button>
                </div>
            </form>
        </section>
    );
}
