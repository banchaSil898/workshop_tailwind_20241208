import { posts, type Post } from "@/app/blog/_data/posts";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Markdown } from "@/components/blog/Markdown";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { BlogFooter } from "@/components/blog/BlogFooter";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = posts.find((p: Post) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <div className="relative h-[50vh] bg-muted">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 z-10" />

          <img
            src={post.banner}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto max-w-6xl px-6">
              <div className="max-w-3xl space-y-4">
                <div className="flex gap-2 flex-wrap">
                  {post.tags.map((tag: string) => (
                    <Badge
                      key={tag}
                      className="bg-white/10 text-white/90 hover:bg-white/20 border-none"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  {post.title}
                </h1>
                <p className="text-xl text-white/80">{post.description}</p>
                <time className="text-sm text-white/60 block">
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-6xl px-6 py-12">
          <div className="flex gap-12">
            {/* Main Content */}
            <div className="flex-1">
              <article className="prose prose-neutral dark:prose-invert max-w-none">
                <Markdown content={post.content} />
              </article>
            </div>

            {/* Table of Contents Sidebar */}
            <div className="hidden lg:block w-64">
              <div className="sticky top-8">
                <TableOfContents items={post.tableOfContents} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <BlogFooter />
    </div>
  );
}
