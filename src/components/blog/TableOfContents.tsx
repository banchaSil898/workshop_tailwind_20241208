import { TableOfContents as TOCItem } from "@/app/blog/_data/posts";
import { cn } from "@/lib/utils";

interface TableOfContentsProps {
  items: TOCItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold">Table of Contents</h2>
      <div className="space-y-2">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={cn(
              "block text-sm text-muted-foreground hover:text-foreground transition-colors",
              "hover:underline",
              item.level === 2 ? "pl-0" : "pl-4"
            )}
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
}
