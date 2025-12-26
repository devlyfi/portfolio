import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS, AUTHORS } from "@/lib/blog-data";
import { KeyTakeaways } from "@/components/blog/KeyTakeaways";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { AuthorCard } from "@/components/blog/AuthorCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Share2, Facebook, Twitter, Linkedin, Link as LinkIcon } from "lucide-react";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = BLOG_POSTS.find((p) => p.slug === slug);

    if (!post) return { title: "Post Not Found" };

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.publishedDate,
            authors: [AUTHORS[post.authorId].name],
            tags: post.tags,
        }
    };
}

export async function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = BLOG_POSTS.find((p) => p.slug === slug);

    if (!post) notFound();

    const author = AUTHORS[post.authorId];
    const formattedDate = new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    }).format(new Date(post.publishedDate));

    return (
        <article className="bg-background min-h-screen pb-20">
            {/* Post Header */}
            <header className="pt-24 pb-16 border-b border-border/50 bg-muted/20 relative overflow-hidden">
                <div className="container px-4 mx-auto max-w-4xl relative z-10">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-sm font-bold text-muted-foreground hover:text-primary transition-colors mb-12 group"
                    >
                        <ArrowLeft className="mr-2 size-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Insights
                    </Link>

                    <div className="space-y-6">
                        <div className="flex flex-wrap items-center gap-4">
                            <Badge className="rounded-none px-4 py-1 bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/10">
                                {post.category.toUpperCase()}
                            </Badge>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground font-medium">
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

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight text-foreground">
                            {post.title}
                        </h1>

                        <p className="text-xl text-muted-foreground leading-relaxed italic border-l-4 border-primary/20 pl-6 py-2">
                            {post.excerpt}
                        </p>

                        <div className="flex items-center gap-4 pt-6">
                            <div className="size-12 rounded-none bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                                {author.name.charAt(0)}
                            </div>
                            <div>
                                <p className="text-foreground font-bold leading-none">{author.name}</p>
                                <p className="text-sm text-muted-foreground mt-1">{author.role}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Post Content Container */}
            <div className="container px-4 mx-auto max-w-4xl py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Share sidebar - Desktop */}
                    <aside className="hidden lg:block lg:col-span-1 sticky top-32 h-fit">
                        <div className="flex flex-col gap-6 text-muted-foreground">
                            <p className="text-[10px] uppercase tracking-widest font-black text-center -rotate-90 origin-center whitespace-nowrap mb-8">
                                SHARE STORY
                            </p>
                            <button className="p-3 border border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                                <Facebook className="size-5" />
                            </button>
                            <button className="p-3 border border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                                <Twitter className="size-5" />
                            </button>
                            <button className="p-3 border border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                                <Linkedin className="size-5" />
                            </button>
                            <button className="p-3 border border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                                <LinkIcon className="size-5" />
                            </button>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-11 prose prose-lg dark:prose-invert max-w-none">
                        <div className="blog-content text-muted-foreground leading-relaxed text-lg">
                            <div
                                className="space-y-6"
                                dangerouslySetInnerHTML={{
                                    __html: post.content.trim()
                                        .split('\n\n')
                                        .map(block => {
                                            // Helper to process inline formatting (e.g. bold)
                                            const processInline = (text: string) =>
                                                text.replace(/\*\*([^*]+)\*\*/g, '<strong class="text-foreground font-bold">$1</strong>');

                                            if (block.startsWith('## ')) {
                                                return `<h2 class="text-3xl font-bold text-foreground mt-12 mb-6">${processInline(block.replace('## ', ''))}</h2>`;
                                            }
                                            if (block.startsWith('### ')) {
                                                return `<h3 class="text-2xl font-bold text-foreground mt-8 mb-4">${processInline(block.replace('### ', ''))}</h3>`;
                                            }
                                            if (block.includes('1. ') || block.includes('- ')) {
                                                const items = block.split('\n').map(item => {
                                                    const content = item.replace(/^\d+\.\s+/, '').replace(/^-\s+/, '');
                                                    return `<li class="ml-6 mb-2">${processInline(content)}</li>`;
                                                }).join('');
                                                const listTag = block.includes('1. ') ? 'ol' : 'ul';
                                                const listClass = block.includes('1. ') ? 'list-decimal' : 'list-disc';
                                                return `<${listTag} class="${listClass} space-y-1 mb-6">${items}</${listTag}>`;
                                            }

                                            return `<p class="mb-6">${processInline(block)}</p>`;
                                        })
                                        .join('')
                                }}
                            />
                        </div>

                        {/* Key Takeaways */}
                        <KeyTakeaways takeaways={post.takeaways} />

                        {/* Author Bio */}
                        <div className="mt-20 pt-16 border-t border-border">
                            <h3 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-8">About the Author</h3>
                            <AuthorCard author={author} />
                        </div>

                        {/* CTA Section */}
                        <BlogCTA type={post.ctaType} />

                        {/* Footer Navigation */}
                        <div className="flex justify-between items-center mt-20 pt-10 border-t border-border/50">
                            <Link
                                href="/blog"
                                className="inline-flex items-center text-sm font-bold text-muted-foreground hover:text-primary transition-colors group"
                            >
                                <ArrowLeft className="mr-2 size-4 group-hover:-translate-x-1 transition-transform" />
                                All Articles
                            </Link>
                            <div className="flex gap-2">
                                {post.tags.map(tag => (
                                    <span key={tag} className="text-xs font-bold px-3 py-1 bg-muted/50 border border-border/50 uppercase tracking-wider">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recommendations section placeholder */}
            <section className="bg-muted/20 py-24 border-y border-border/50 overflow-hidden">
                <div className="container px-4 mx-auto max-w-6xl">
                    <div className="flex items-end justify-between mb-12">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold">Related Insights</h2>
                            <p className="text-muted-foreground">More strategies to help you grow your software service business.</p>
                        </div>
                        <Button variant="outline" className="rounded-none hidden md:flex" asChild>
                            <Link href="/blog">View All Posts</Link>
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {BLOG_POSTS
                            .filter(p => p.id !== post.id && (p.category === post.category || p.tags.some(t => post.tags.includes(t))))
                            .slice(0, 3)
                            .map(p => (
                                <div key={p.id} className="group">
                                    <Link href={`/blog/${p.slug}`} className="block aspect-[16/9] overflow-hidden mb-6 relative">
                                        <div className="w-full h-full bg-muted flex items-center justify-center p-8 transition-transform duration-500 group-hover:scale-110">
                                            <div className="text-primary/10 font-bold text-3xl select-none rotate-[-15deg]">
                                                {p.category.split(' ')[0]}
                                            </div>
                                        </div>
                                    </Link>
                                    <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">{p.category}</p>
                                    <h3 className="text-xl font-bold mb-4 leading-tight group-hover:text-primary transition-colors mb-4 line-clamp-2">
                                        <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                                    </h3>
                                    <Link href={`/blog/${p.slug}`} className="text-sm font-bold border-b-2 border-primary/20 hover:border-primary transition-all pb-1">
                                        Read More
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </article>
    );
}
