import { posts, type Post } from "@/app/blog/_data/posts";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Markdown } from "@/components/blog/Markdown";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { menuGroups } from "@/app/dashboard/_data/menu";
import TocTrigger from "./TocTrigger";

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
    <>
      <main className="jun-content">
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

        <div className="container mx-auto max-w-6xl px-6 py-12 gap-4">
          <div className="flex-1">
            <article className="prose prose-neutral dark:prose-invert max-w-none">
              <Markdown content={post.content} />
            </article>
          </div>

          <div className="jun-insetSidebar jun-insetSidebar-w-[180px] md:jun-insetSidebar-w-[220px] hidden md:block">
            <div className="jun-insetContent">
              <div className="pt-9">
                <TableOfContents items={post.tableOfContents} />
              </div>
            </div>
          </div>
        </div>

        <TocTrigger />
      </main>
      <div className="jun-edgeSidebarR jun-edgeSidebarR-drawer">
        <div className="jun-edgeContent">
          {menuGroups.map((group) => (
            <div key={group.label} className="jun-sidebarGroup">
              <div className="jun-sidebarGroupLabel">{group.label}</div>
              <ul className="jun-sidebarMenu">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li className="jun-sidebarMenuItem">
                      <button className="jun-sidebarMenuButton">
                        <Icon className="jun-sidebarIcon w-4 h-4" />
                        {item.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
