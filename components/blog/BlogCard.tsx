import Link from "next/link";
import { BlogPost, AUTHORS } from "@/lib/blog-data";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogCardProps {
    post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
    const author = AUTHORS[post.authorId];
    const formattedDate = new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
    }).format(new Date(post.publishedDate));

    return (
        <Card className="flex flex-col h-full overflow-hidden group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm">
            <Link href={`/blog/${post.slug}`} className="block overflow-hidden relative aspect-video">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-primary text-primary-foreground px-4 py-2 text-sm font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        Read More <ArrowRight className="size-4" />
                    </span>
                </div>
                {post.featuredImage ? (
                    <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center p-8 transition-transform duration-500 group-hover:scale-105">
                        <div className="text-primary/20 font-bold text-4xl select-none rotate-[-15deg]">
                            {post.category.split(' ')[0]}
                        </div>
                    </div>
                )}
                <div className="absolute top-4 left-4 z-20">
                    <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm border-primary/20 text-primary rounded-none px-3">
                        {post.category}
                    </Badge>
                </div>
            </Link>

            <CardHeader className="space-y-2 pt-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                    <span className="flex items-center gap-1">
                        <Calendar className="size-3" />
                        {formattedDate}
                    </span>
                    <span className="flex items-center gap-1">
                        <Clock className="size-3" />
                        {post.readingTime}
                    </span>
                </div>
                <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                    </h3>
                </Link>
            </CardHeader>

            <CardContent className="flex-1 pt-0">
                <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                    {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground/80 bg-muted/50 px-2 py-0.5 rounded-none border border-border/50">
                            #{tag}
                        </span>
                    ))}
                </div>
            </CardContent>

            <CardFooter className="pt-4 border-t border-border/50">
                <div className="flex items-center gap-3">
                    <div className="size-8 rounded-none bg-primary/10 flex items-center justify-center text-primary font-bold text-xs ring-1 ring-primary/20">
                        {author.name.charAt(0)}
                    </div>
                    <div>
                        <p className="text-xs font-bold leading-none">{author.name}</p>
                        <p className="text-[10px] text-muted-foreground mt-0.5">{author.role.split(',')[0]}</p>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
}
