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
        <article className="bg-background min-h-screen pb-0">
            {/* Split Header */}
            <header className="pt-32 pb-0 border-b border-border/40 overflow-hidden bg-background">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-col lg:flex-row">
                        {/* Title Side */}
                        <div className="lg:w-2/3 pb-12 lg:pb-20">
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
                        <div className="lg:w-1/3 border-l border-border/40 p-8 md:p-12 lg:p-16 flex flex-col justify-end">
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
                    <div className="flex flex-col lg:grid lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border/40 border-x border-border/40">

                        {/* Narrative Content */}
                        <div className="lg:col-span-8 p-8 md:p-12 lg:p-20 bg-background relative group">
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
                        <aside className="lg:col-span-4 bg-muted/5 relative group">
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
                                    <div className="grid grid-cols-4 gap-4">
                                        {[Facebook, Twitter, Linkedin, LinkIcon].map((Icon, i) => (
                                            <button key={i} className="aspect-square border border-border/40 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all group/icon">
                                                <Icon className="size-4 group-hover/icon:scale-110 transition-transform" />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="sidebar-meta absolute -right-2 top-24">02 // METADATA</div>
                            <div className="grid-symbol -top-2.5 -right-2.5" />
                        </aside>
                    </div>
                </div>
            </div>

            {/* Next Insight Section */}
            <section className="bg-background py-0 border-b border-border/40 overflow-hidden">
                <div className="container px-4 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 border-x border-border/40 divide-y lg:divide-y-0 lg:divide-x divide-border/40">
                        <div className="lg:col-span-8 p-12 lg:p-24 space-y-8 relative overflow-hidden group">
                            <div className="relative z-10 flex flex-col items-start gap-8">
                                <div className="space-y-4">
                                    <span className="text-[10px] font-bold text-primary uppercase tracking-[0.4em]">Next Insight</span>
                                    <h3 className="display-bold text-4xl lg:text-6xl leading-[1.1] uppercase tracking-tight group-hover:text-primary transition-colors">
                                        Ready for the <span className="text-muted-foreground/30 text-nowrap">next level?</span>
                                    </h3>
                                </div>
                                <BlogCTA type={post.ctaType} />
                            </div>

                            {/* Background Symbol Pattern */}
                            <div className="absolute top-1/2 right-[-50px] -translate-y-1/2 opacity-[0.03] rotate-12 pointer-events-none select-none">
                                <span className="text-[20vw] font-black leading-none">STRATEGY</span>
                            </div>
                            <div className="grid-symbol -bottom-2.5 -left-2.5" />
                        </div>

                        {/* Next Post Preview */}
                        <div className="lg:col-span-4 p-8 lg:p-16 flex flex-col justify-center gap-8 bg-muted/5 relative group">
                            <span className="text-[9px] font-bold text-muted-foreground tracking-widest uppercase">/CONTINUE_TRANSMISSION</span>
                            <div className="learn-more-box group/btn">
                                <Link
                                    href="/blog"
                                    className="block p-8 border border-border/40 bg-background hover:bg-muted/5 transition-all relative group-hover/btn:-translate-y-2 group-hover/btn:translate-x-2"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">/DIRECTORY</span>
                                        <ArrowLeft className="size-4 rotate-180" />
                                    </div>
                                    <h4 className="text-xl font-bold uppercase tracking-tight">Return to All Insights</h4>
                                </Link>
                                <div className="absolute inset-0 border border-primary opacity-0 group-hover/btn:opacity-100 -z-10 transition-all" />
                            </div>
                            <div className="grid-symbol -bottom-2.5 -right-2.5" />
                        </div>
                    </div>
                </div>
            </section>
        </article>
    );
}
