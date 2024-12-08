export interface TableOfContents {
  id: string;
  title: string;
  level: number;
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  banner: string;
  publishedAt: string;
  tags: string[];
  tableOfContents: TableOfContents[];
}

export const posts: Post[] = [
  {
    id: "1",
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js: A Comprehensive Guide",
    description:
      "Learn how to build modern web applications with Next.js, from setup to deployment.",
    content: `
# Getting Started with Next.js

Next.js is a powerful React framework that makes building web applications a breeze. In this guide, we'll explore the fundamentals and best practices.

## Why Next.js?

Next.js provides several key features out of the box:
- Server-side rendering
- Static site generation
- API routes
- File-based routing
- Built-in CSS support

## Setting Up Your First Project

To create a new Next.js project, run:

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

## Project Structure

A typical Next.js project includes:
- \`pages/\`: Your application's pages
- \`public/\`: Static assets
- \`styles/\`: CSS files
- \`components/\`: Reusable React components

## Best Practices

1. Use Static Generation when possible
2. Implement dynamic imports for better performance
3. Optimize images with next/image
4. Leverage API routes for backend functionality
    `,
    banner:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2000&q=80",
    publishedAt: "2024-02-15",
    tags: ["Next.js", "React", "Web Development", "JavaScript"],
    tableOfContents: [
      { id: "why-nextjs", title: "Why Next.js?", level: 2 },
      { id: "setting-up", title: "Setting Up Your First Project", level: 2 },
      { id: "project-structure", title: "Project Structure", level: 2 },
      { id: "best-practices", title: "Best Practices", level: 2 },
    ],
  },
  {
    id: "2",
    slug: "mastering-typescript",
    title: "Mastering TypeScript: Types, Interfaces, and Best Practices",
    description:
      "A deep dive into TypeScript's type system and how to use it effectively in your projects.",
    content: `
# Mastering TypeScript

TypeScript adds static typing to JavaScript, making your code more reliable and maintainable. Let's explore its key features.

## Type System Basics

TypeScript's type system includes:
- Basic types (string, number, boolean)
- Arrays and tuples
- Objects and interfaces
- Unions and intersections

## Advanced Types

Learn about advanced type features:
- Generics
- Utility types
- Mapped types
- Conditional types

## Best Practices

1. Enable strict mode
2. Use interfaces for object shapes
3. Leverage type inference
4. Document with JSDoc comments

## Real-World Examples

Here's a practical example:

\`\`\`typescript
interface User {
  id: string;
  name: string;
  email: string;
}

function getUserById(id: string): Promise<User> {
  return fetch(\`/api/users/\${id}\`).then(res => res.json());
}
\`\`\`
    `,
    banner:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=2000&q=80",
    publishedAt: "2024-02-10",
    tags: ["TypeScript", "JavaScript", "Programming", "Web Development"],
    tableOfContents: [
      { id: "type-system", title: "Type System Basics", level: 2 },
      { id: "advanced-types", title: "Advanced Types", level: 2 },
      { id: "best-practices", title: "Best Practices", level: 2 },
      { id: "examples", title: "Real-World Examples", level: 2 },
    ],
  },
];
