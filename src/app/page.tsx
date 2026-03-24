import { CreatePostForm } from "@/components/CreatePostForm";
import { Hero } from "@/components/Hero";
import { PostsSection } from "@/components/PostsSection";

export default async function Home() {
    return (
        <div className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
            <main className="space-y-10 sm:space-y-12">
                <Hero
                    name="Alec Nono"
                    role="Software Engineer"
                    bio="Associate Vice President in La Salle Computer Society, Frontend Engineer for Research and Development committee"
                />
                <CreatePostForm />
                <PostsSection />
            </main>
        </div>
    );
}
