import { posts } from "@/app/blog/_data/posts";
import { author } from "@/app/blog/_data/author";
import { PostCard } from "@/components/blog/PostCard";
import { AuthorProfile } from "@/components/blog/AuthorProfile";

export default function BlogPage() {
  return (
    <main className="jun-content">
      <div className="container mx-auto max-w-6xl space-y-12 px-4 py-12">
        {/* Author Profile Section */}
        <section className="max-w-3xl mx-auto">
          <AuthorProfile author={author} />
        </section>

        {/* Blog Posts Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Latest Posts</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
