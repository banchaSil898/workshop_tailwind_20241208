import { Post } from "@/app/blog/_data/posts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="overflow-hidden group">
      <Link href={`/blog/${post.slug}`}>
        <div className="relative h-48 overflow-hidden">
          <img
            src={post.banner}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardHeader>
          <div className="space-y-2">
            <div className="flex gap-2 flex-wrap">
              {post.tags.map((tag: string) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
              {post.title}
            </h2>
            <p className="text-sm text-muted-foreground">{post.description}</p>
          </div>
        </CardHeader>
        <CardContent>
          <time className="text-sm text-muted-foreground">
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </CardContent>
      </Link>
    </Card>
  );
}
