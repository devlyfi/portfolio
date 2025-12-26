import { Author } from "@/lib/blog-data";
import { Twitter, Linkedin, Github } from "lucide-react";

interface AuthorCardProps {
    author: Author;
}

export function AuthorCard({ author }: AuthorCardProps) {
    return (
        <div className="flex flex-col md:flex-row gap-6 p-8 border border-border/50 bg-muted/20 rounded-none backdrop-blur-sm">
            <div className="size-20 md:size-24 bg-primary flex items-center justify-center text-primary-foreground text-3xl font-bold shrink-0">
                {author.name.charAt(0)}
            </div>
            <div className="space-y-4">
                <div>
                    <h3 className="text-xl font-bold">{author.name}</h3>
                    <p className="text-primary font-medium text-sm">{author.role}</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                    {author.bio}
                </p>
                <div className="flex gap-4">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Twitter className="size-5" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="size-5" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github className="size-5" />
                    </a>
                </div>
            </div>
        </div>
    );
}
