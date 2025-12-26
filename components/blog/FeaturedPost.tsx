import Link from "next/link";
import { BlogPost, AUTHORS } from "@/lib/blog-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

interface FeaturedPostProps {
    post: BlogPost;
}

export function FeaturedPost({ post }: FeaturedPostProps) {
    const author = AUTHORS[post.authorId];
    const formattedDate = new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    }).format(new Date(post.publishedDate));

    return (
        <section className="relative overflow-hidden group">
            <div className="container px-4 mx-auto">
                <div className="relative rounded-none border border-border/50 bg-card/30 backdrop-blur-xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Image side */}
                        <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                            {post.featuredImage ? (
                                <img
                                    src={post.featuredImage}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            ) : (
                                <div className="w-full h-full bg-muted/50 flex items-center justify-center p-12">
                                    <div className="text-primary/10 font-bold text-8xl select-none rotate-[-10deg] tracking-tighter">
                                        FEATURED
                                    </div>
                                </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-transparent hidden lg:block" />
                        </div>

                        {/* Content side */}
                        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                            <div className="flex flex-wrap items-center gap-4 mb-6">
                                <Badge className="rounded-none px-4 py-1 bg-primary text-primary-foreground font-bold">
                                    FEATURED STORY
                                </Badge>
                                <span className="text-primary font-semibold text-sm tracking-wide uppercase">
                                    {post.category}
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight group-hover:text-primary transition-colors">
                                <Link href={`/blog/${post.slug}`}>
                                    {post.title}
                                </Link>
                            </h2>

                            <p className="text-muted-foreground text-lg mb-8 line-clamp-3 leading-relaxed max-w-xl">
                                {post.excerpt}
                            </p>

                            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-10 pb-10 border-b border-border/50">
                                <div className="flex items-center gap-2">
                                    <div className="size-10 rounded-none bg-primary flex items-center justify-center text-primary-foreground font-bold">
                                        {author.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-foreground font-bold leading-none">{author.name}</p>
                                        <p className="text-xs mt-1">{author.role}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="flex items-center gap-1.5">
                                        <Calendar className="size-4 text-primary" />
                                        {formattedDate}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Clock className="size-4 text-primary" />
                                        {post.readingTime}
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <Button size="lg" className="rounded-none h-14 px-8 text-base shadow-xl shadow-primary/20" asChild>
                                    <Link href={`/blog/${post.slug}`}>
                                        Read Full Article <ArrowRight className="ml-2 size-5" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
