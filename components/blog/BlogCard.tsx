import Link from "next/link";
import { BlogPost, AUTHORS } from "@/lib/blog-data";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";

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
        <div className="flex flex-col h-full relative group">
            <Link href={`/blog/${post.slug}`} className="block overflow-hidden relative aspect-video border border-border/40">
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                    <div className="bg-primary text-primary-foreground p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <ArrowUpRight className="size-6" />
                    </div>
                </div>
                {post.featuredImage ? (
                    <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 group-hover:scale-110"
                    />
                ) : (
                    <div className="w-full h-full bg-muted/50 flex items-center justify-center p-8 transition-transform duration-500 group-hover:scale-105">
                        <div className="text-primary/10 font-bold text-5xl select-none rotate-[-15deg] tracking-tighter">
                            {post.category.split(' ')[0]}
                        </div>
                    </div>
                )}

                {/* Technical Category Label */}
                <div className="absolute top-0 right-0 bg-background border-l border-b border-border/40 px-3 py-1.5 z-20">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-foreground">
                        {post.category}
                    </span>
                </div>
            </Link>

            <div className="pt-6 space-y-4 flex-1 flex flex-col">
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1.5">
                            <Calendar className="size-3 text-primary" />
                            {formattedDate}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Clock className="size-3 text-primary" />
                            {post.readingTime}
                        </span>
                    </div>
                    <span>/INSIGHT</span>
                </div>

                <Link href={`/blog/${post.slug}`} className="block group/title">
                    <h3 className="text-xl font-bold leading-tight group-hover/title:text-primary transition-colors line-clamp-2 uppercase tracking-tight">
                        {post.title}
                    </h3>
                </Link>

                <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed font-medium">
                    {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                    {post.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-[9px] uppercase tracking-widest font-bold text-foreground/40 border border-border/40 px-2 py-1">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="mt-auto pt-8 flex items-center justify-between border-t border-border/20">
                    <div className="flex items-center gap-3">
                        <div className="size-8 bg-muted border border-border/40 flex items-center justify-center text-foreground font-black text-xs">
                            {author.name.charAt(0)}
                        </div>
                        <div>
                            <p className="text-[10px] font-bold leading-none uppercase tracking-wider">{author.name}</p>
                            <p className="text-[9px] text-muted-foreground mt-1 uppercase tracking-widest">/AUTH_0{author.id === 'faisal-f' ? '1' : '2'}</p>
                        </div>
                    </div>
                    <Link href={`/blog/${post.slug}`} className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        READ_FULL_TX
                    </Link>
                </div>
            </div>

            <div className="grid-symbol -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
    );
}
