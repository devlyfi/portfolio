import Link from "next/link";
import { BlogPost, AUTHORS } from "@/lib/blog-data";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

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
        <section className="relative overflow-hidden group border-x border-border/40">
            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-border/40">
                {/* Visual Side */}
                <div className="relative aspect-video lg:aspect-auto overflow-hidden bg-muted/10">
                    {post.featuredImage ? (
                        <img
                            src={post.featuredImage}
                            alt={post.title}
                            className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 group-hover:scale-105"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center p-12">
                            <div className="text-primary/5 font-black text-9xl select-none rotate-[-10deg] tracking-tighter">
                                ARCHIVE
                            </div>
                        </div>
                    )}

                    {/* Technical Overlay */}
                    <div className="absolute top-0 left-0 p-8 z-20">
                        <div className="flex flex-col gap-2">
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">/FEATURED_STRATEGY</span>
                            <div className="h-[2px] w-8 bg-primary" />
                        </div>
                    </div>

                    <div className="absolute bottom-0 right-0 p-8 z-20">
                        <div className="sidebar-meta text-white/20">/INSIGHT_001</div>
                    </div>
                </div>

                {/* Narrative Side */}
                <div className="p-8 md:p-12 lg:p-20 flex flex-col justify-center bg-background relative">
                    <div className="space-y-8">
                        <div className="flex flex-wrap items-center gap-6">
                            <div className="px-4 py-1.5 border border-primary/40 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.3em]">
                                High Priority
                            </div>
                            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.3em]">
                                // {post.category}
                            </span>
                        </div>

                        <h2 className="display-bold text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight group-hover:text-primary transition-colors">
                            <Link href={`/blog/${post.slug}`}>
                                {post.title}
                            </Link>
                        </h2>

                        <p className="text-xl text-muted-foreground leading-relaxed italic border-l-2 border-primary/20 pl-8 max-w-xl">
                            {post.excerpt}
                        </p>

                        <div className="grid grid-cols-2 gap-8 py-8 border-y border-border/40">
                            <div className="space-y-2">
                                <p className="text-[9px] font-bold text-muted-foreground tracking-widest uppercase">/TRANSMITTED_BY</p>
                                <div className="flex items-center gap-3">
                                    <div className="size-8 bg-muted border border-border/40 flex items-center justify-center text-foreground font-black text-xs">
                                        {author.name.charAt(0)}
                                    </div>
                                    <p className="text-xs font-bold uppercase tracking-widest">{author.name}</p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <p className="text-[9px] font-bold text-muted-foreground tracking-widest uppercase">/METRICS</p>
                                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-foreground/80">
                                    <span className="flex items-center gap-1.5">
                                        <Calendar className="size-3 text-primary" />
                                        {formattedDate}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Clock className="size-3 text-primary" />
                                        {post.readingTime}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <Button size="lg" className="rounded-none h-16 px-10 text-xs font-bold uppercase tracking-[0.2em] shadow-2xl shadow-primary/10 transition-all hover:scale-105" asChild>
                                <Link href={`/blog/${post.slug}`}>
                                    DECRYPT_FULL_INSIGHT <ArrowRight className="ml-3 size-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div className="grid-symbol -top-2.5 -right-2.5" />
                    <div className="grid-symbol -bottom-2.5 -left-2.5" />
                </div>
            </div>
        </section>
    );
}
