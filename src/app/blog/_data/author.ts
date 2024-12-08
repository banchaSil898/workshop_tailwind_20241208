export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Author {
  name: string;
  avatar: string;
  role: string;
  bio: string;
  location: string;
  company: string;
  socialLinks: SocialLink[];
  skills: string[];
}

export const author: Author = {
  name: "John Doe",
  avatar:
    "https://ui-avatars.com/api/?name=John+Doe&background=random&size=200",
  role: "Senior Software Engineer",
  bio: "Passionate about web development, open source, and teaching others. I write about JavaScript, TypeScript, React, and modern web development practices.",
  location: "San Francisco, CA",
  company: "TechCorp Inc.",
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/johndoe",
      icon: "github",
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/johndoe",
      icon: "twitter",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/johndoe",
      icon: "linkedin",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "GraphQL",
    "AWS",
    "Docker",
  ],
};
