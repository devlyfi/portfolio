import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS, AUTHORS } from "@/lib/blog-data";
import { KeyTakeaways } from "@/components/blog/KeyTakeaways";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { AuthorCard } from "@/components/blog/AuthorCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { ShareButtons } from "@/components/blog/ShareButtons";

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
        <article className="bg-background min-h-screen pb-0">
            {/* Split Header */}
            <header className="pt-32 pb-0 border-b border-border/40 overflow-hidden bg-background">
                <div className="container px-4 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-0 border border-border/40">
                        {/* Title Side */}
                        <div className="p-8 md:p-12 lg:p-16 border-b lg:border-b-0">
                            <div className="inline-flex items-center gap-3 mb-8">
                                <Link href="/blog" className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground/60 hover:text-primary transition-colors">Insights</Link>
                                <div className="h-[1px] w-8 bg-border" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">{post.category.toUpperCase()}</span>
                            </div>
                            <h1 className="display-bold text-4xl md:text-5xl lg:text-7xl leading-[1.1] tracking-tight">
                                {post.title.toUpperCase()}
                            </h1>
                        </div>

                        {/* Description Side */}
                        <div className="lg:border-l border-border/40 p-8 md:p-12 lg:p-16 flex flex-col justify-end bg-muted/5">
                            <p className="text-lg text-muted-foreground leading-relaxed italic border-l-2 border-primary/20 pl-6">
                                {post.excerpt}
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Content & Sidebar Redesign */}
            <div className="border-b border-border/40">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-col lg:grid lg:grid-cols-[1fr_400px] divide-y lg:divide-y-0 lg:divide-x divide-border/40 border border-border/40">

                        {/* Narrative Content */}
                        <div className="p-8 md:p-12 lg:p-20 bg-background relative group">
                            <div className="sidebar-meta absolute -left-2 top-24">01 // NARRATIVE</div>

                            <div className="blog-content prose prose-lg dark:prose-invert max-w-none">
                                <div
                                    className="space-y-8 text-muted-foreground leading-relaxed text-lg font-medium"
                                    dangerouslySetInnerHTML={{
                                        __html: post.content.trim()
                                            .split('\n\n')
                                            .map(block => {
                                                const processInline = (text: string) =>
                                                    text.replace(/\*\*([^*]+)\*\*/g, '<strong class="text-foreground font-bold">$1</strong>');

                                                if (block.startsWith('## ')) {
                                                    return `<div class="pt-8 pb-4 border-b border-border/40 mb-8">
                                                              <span class="text-[10px] font-bold text-primary uppercase tracking-[0.4em] block mb-2">// SECTION_HEADER</span>
                                                              <h2 class="text-3xl font-bold text-foreground m-0 uppercase tracking-tight">${processInline(block.replace('## ', ''))}</h2>
                                                            </div>`;
                                                }
                                                if (block.startsWith('### ')) {
                                                    return `<h3 class="text-2xl font-bold text-foreground mt-12 mb-6 uppercase tracking-tight flex items-center gap-3">
                                                              <div class="size-1.5 bg-primary"></div>
                                                              ${processInline(block.replace('### ', ''))}
                                                            </h3>`;
                                                }
                                                if (block.includes('1. ') || block.includes('- ')) {
                                                    const items = block.split('\n').map(item => {
                                                        const content = item.replace(/^\d+\.\s+/, '').replace(/^-\s+/, '');
                                                        return `<li class="ml-6 mb-3 relative pl-2">
                                                                  <span class="absolute left-[-20px] top-3 size-1 bg-border/60"></span>
                                                                  ${processInline(content)}
                                                                </li>`;
                                                    }).join('');
                                                    const listTag = block.includes('1. ') ? 'ol' : 'ul';
                                                    return `<${listTag} class="list-none space-y-2 mb-10 border-l border-border/40 my-8 py-2">${items}</${listTag}>`;
                                                }

                                                return `<p class="mb-8 leading-extra-relaxed">${processInline(block)}</p>`;
                                            })
                                            .join('')
                                    }}
                                />
                            </div>

                            {/* Key Takeaways - Technical Grid */}
                            <div className="mt-24 pt-20 border-t border-border/40">
                                <div className="inline-flex items-center gap-3 mb-10">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">/TAKEAWAYS</span>
                                    <div className="h-[1px] w-12 bg-border" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/40 border border-border/40">
                                    {post.takeaways.map((takeaway, i) => (
                                        <div key={i} className="bg-background p-8 relative group hover:bg-muted/5 transition-colors">
                                            <div className="flex items-start gap-4">
                                                <span className="text-[10px] font-bold text-primary">0{i + 1}</span>
                                                <p className="text-sm font-medium leading-relaxed uppercase tracking-wide">{takeaway}</p>
                                            </div>
                                            <div className="grid-symbol -top-2.5 -left-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid-symbol -bottom-2.5 -left-2.5" />
                        </div>

                        {/* Sidebar Metadata */}
                        <aside className="bg-muted/5 relative group">
                            <div className="sticky top-32 divide-y divide-border/40 border-b border-border/40 lg:border-none">
                                {/* Author */}
                                <div className="p-8 lg:p-12 space-y-6">
                                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.4em]">// AUTHOR_PROFILE</span>
                                    <div className="flex items-center gap-4">
                                        <div className="size-14 bg-muted border border-border/40 flex items-center justify-center text-foreground font-black text-2xl">
                                            {author.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold uppercase tracking-widest">{author.name}</h4>
                                            <p className="text-[10px] text-muted-foreground mt-1 uppercase tracking-[0.2em]">{author.role}</p>
                                        </div>
                                    </div>
                                    <p className="text-xs text-muted-foreground leading-relaxed uppercase tracking-wider">
                                        {author.bio}
                                    </p>
                                </div>

                                {/* Transmission Metadata */}
                                <div className="p-8 lg:p-12 space-y-8">
                                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.4em]">// TX_METADATA</span>
                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <p className="text-[9px] font-bold text-muted-foreground tracking-widest uppercase">/PUBLISHED_ON</p>
                                            <p className="text-xs font-bold uppercase tracking-widest text-foreground">{formattedDate}</p>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-[9px] font-bold text-muted-foreground tracking-widest uppercase">/READING_ELAPSED</p>
                                            <p className="text-xs font-bold uppercase tracking-widest text-foreground">{post.readingTime.toUpperCase()}</p>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-[9px] font-bold text-muted-foreground tracking-widest uppercase">/VERIFICATION_STATUS</p>
                                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                                                <div className="size-1.5 bg-primary animate-pulse" />
                                                Verified Insight
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Share Transmission */}
                                <div className="p-8 lg:p-12 space-y-8">
                                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.4em]">// SHARE_PROTOCOL</span>
                                    <ShareButtons title={post.title} url={`https://devlyfi.com/blog/${post.slug}`} />
                                </div>
                            </div>

                            <div className="sidebar-meta absolute -right-2 top-24">02 // METADATA</div>
                            <div className="grid-symbol -top-2.5 -right-2.5" />
                        </aside>
                    </div>
                </div>
            </div>

            {/* Premium Footer Transition */}
            <section className="bg-background border-t border-border/40 overflow-hidden">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-col lg:grid lg:grid-cols-[1fr_400px] divide-y lg:divide-y-0 lg:divide-x divide-border/40 border border-border/40">
                        {/* Next Post Preview */}
                        <div className="relative group/next overflow-hidden bg-muted/5">
                            <Link href={`/blog/${BLOG_POSTS[(BLOG_POSTS.findIndex(p => p.id === post.id) + 1) % BLOG_POSTS.length].slug}`} className="block relative h-full">
                                <div className="p-12 lg:p-20 space-y-8 relative z-20 transition-transform duration-700 group-hover/next:-translate-y-4">
                                    <div className="flex items-center gap-4 text-primary font-black text-[10px] uppercase tracking-[0.4em]">
                                        <div className="h-px w-8 bg-primary" />
                                        Next Strategy Item
                                    </div>
                                    <h3 className="display-bold text-4xl lg:text-5xl uppercase tracking-tight leading-none max-w-2xl group-hover/next:text-primary transition-colors">
                                        {BLOG_POSTS[(BLOG_POSTS.findIndex(p => p.id === post.id) + 1) % BLOG_POSTS.length].title}
                                    </h3>
                                    <div className="flex items-center gap-8 opacity-40 group-hover/next:opacity-100 transition-opacity">
                                        <div className="space-y-1">
                                            <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">/READING_TIME</p>
                                            <p className="text-xs font-bold uppercase tracking-widest">{BLOG_POSTS[(BLOG_POSTS.findIndex(p => p.id === post.id) + 1) % BLOG_POSTS.length].readingTime}</p>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">/CATEGORY</p>
                                            <p className="text-xs font-bold uppercase tracking-widest">{BLOG_POSTS[(BLOG_POSTS.findIndex(p => p.id === post.id) + 1) % BLOG_POSTS.length].category.split(' ')[0]}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Abstract Visual Background */}
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent z-10 opacity-70" />
                                <div className="absolute inset-0 grayscale brightness-[0.2] group-hover/next:grayscale-0 group-hover/next:brightness-[0.4] transition-all duration-1000 -z-10">
                                    {BLOG_POSTS[(BLOG_POSTS.findIndex(p => p.id === post.id) + 1) % BLOG_POSTS.length].featuredImage ? (
                                        <img
                                            src={BLOG_POSTS[(BLOG_POSTS.findIndex(p => p.id === post.id) + 1) % BLOG_POSTS.length].featuredImage}
                                            alt="Next Post"
                                            className="w-full h-full object-cover scale-110 group-hover/next:scale-100 transition-transform duration-[2000ms]"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-primary/5 flex items-center justify-center">
                                            <span className="text-[15vw] font-black opacity-5">NEXT</span>
                                        </div>
                                    )}
                                </div>
                                <div className="grid-symbol -bottom-2.5 -left-2.5" />
                                <div className="absolute right-12 top-1/2 -translate-y-1/2 group-hover/next:translate-x-4 transition-transform duration-500 opacity-0 group-hover/next:opacity-100">
                                    <ArrowLeft className="size-12 rotate-180 text-primary/40" />
                                </div>
                            </Link>
                        </div>

                        {/* Directory Access */}
                        <div className="p-12 lg:p-20 flex flex-col items-center justify-center bg-muted/5 relative group/dir">
                            <Link href="/blog" className="flex flex-col items-center gap-8 w-full">
                                <div className="relative">
                                    <div className="size-20 border border-border/40 flex items-center justify-center relative z-20 bg-background group-hover/dir:border-primary transition-colors duration-500">
                                        <div className="grid grid-cols-2 gap-1.5">
                                            <div className="size-1.5 bg-muted-foreground group-hover/dir:bg-primary transition-colors" />
                                            <div className="size-1.5 bg-muted-foreground group-hover/dir:bg-primary transition-colors" />
                                            <div className="size-1.5 bg-muted-foreground group-hover/dir:bg-primary transition-colors" />
                                            <div className="size-1.5 bg-muted-foreground group-hover/dir:bg-primary transition-colors" />
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 size-20 border border-primary/20 -z-10 animate-pulse group-hover/dir:scale-125 transition-transform" />
                                </div>

                                <div className="space-y-4 text-center">
                                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em] block animate-pulse">/DIRECTORY_ACCESS</span>
                                    <h4 className="display-bold text-2xl uppercase tracking-tight group-hover/dir:text-primary transition-colors">Return to All<br />Insights & Case Studies</h4>
                                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest opacity-40 group-hover/dir:opacity-100 transition-opacity">
                                        System Protocol // Secure Return
                                    </p>
                                </div>

                                <div className="w-full bg-border/40 h-px relative overflow-hidden mt-4">
                                    <div className="absolute inset-0 bg-primary w-1/4 -translate-x-full group-hover/dir:translate-x-[400%] transition-transform duration-[1500ms]" />
                                </div>

                                <div className="grid-symbol -top-2.5 -right-2.5" />
                                <div className="grid-symbol -bottom-2.5 -right-2.5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    );
}
