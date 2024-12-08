import { Github, Twitter, Linkedin, Mail, Rss } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { NewsletterForm } from "./NewsletterForm";

const footerLinks = {
  resources: [
    { label: "Documentation", href: "#" },
    { label: "Blog Posts", href: "/blog" },
    { label: "Tutorials", href: "#" },
    { label: "Code Examples", href: "#" },
    { label: "GitHub Repos", href: "#" },
  ],
  community: [
    { label: "Discord Server", href: "#" },
    { label: "Twitter Community", href: "#" },
    { label: "GitHub Discussions", href: "#" },
    { label: "Stack Overflow", href: "#" },
    { label: "Contributing Guide", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "License", href: "#" },
  ],
  topics: [
    { label: "Web Development", href: "#" },
    { label: "JavaScript", href: "#" },
    { label: "TypeScript", href: "#" },
    { label: "React", href: "#" },
    { label: "Next.js", href: "#" },
    { label: "Node.js", href: "#" },
  ],
};

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "#", label: "Email" },
  { icon: Rss, href: "#", label: "RSS" },
];

export function BlogFooter() {
  return (
    <div className="bg-muted/40">
      <div className="container mx-auto max-w-6xl px-6 py-12">
        {/* Newsletter Section */}
        <div className="mb-12">
          <div className="rounded-lg bg-primary/5 p-6 md:p-8">
            <div className="max-w-2xl">
              <h3 className="text-xl font-semibold mb-2">
                Subscribe to the newsletter
              </h3>
              <p className="text-muted-foreground mb-4">
                Get notifications about new blog posts, tutorials, and updates
                directly to your inbox.
              </p>
              <NewsletterForm />
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-semibold mb-3">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Community</h3>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Topics</h3>
            <ul className="space-y-2">
              {footerLinks.topics.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold">Layout Workshop</h2>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div className="flex gap-2">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Button key={link.label} variant="ghost" size="icon" asChild>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{link.label}</span>
                  </a>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
