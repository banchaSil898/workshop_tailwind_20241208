import { Author, SocialLink } from "@/app/blog/_data/author";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin, MapPin, Building2 } from "lucide-react";

const iconMap = {
  github: Github,
  twitter: Twitter,
  linkedin: Linkedin,
};

interface AuthorProfileProps {
  author: Author;
}

export function AuthorProfile({ author }: AuthorProfileProps) {
  return (
    <div className="text-center space-y-6">
      <Avatar className="h-32 w-32 mx-auto">
        <AvatarImage src={author.avatar} alt={author.name} />
        <AvatarFallback>{author.name.slice(0, 2)}</AvatarFallback>
      </Avatar>

      <div className="space-y-2">
        <h2 className="text-3xl font-bold">{author.name}</h2>
        <p className="text-xl text-muted-foreground">{author.role}</p>
      </div>

      <div className="flex items-center justify-center gap-4 text-muted-foreground">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          <span>{author.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Building2 className="h-4 w-4" />
          <span>{author.company}</span>
        </div>
      </div>

      <p className="max-w-2xl mx-auto text-lg">{author.bio}</p>

      <div className="flex justify-center gap-2">
        {author.socialLinks.map((link: SocialLink) => {
          const Icon = iconMap[link.icon as keyof typeof iconMap];
          return (
            <Button key={link.platform} variant="ghost" size="icon" asChild>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <Icon className="h-5 w-5" />
                <span className="sr-only">{link.platform}</span>
              </a>
            </Button>
          );
        })}
      </div>

      <div className="flex gap-2 flex-wrap justify-center">
        {author.skills.map((skill: string) => (
          <Badge key={skill} variant="secondary">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
