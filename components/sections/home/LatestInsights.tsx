"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ScrambleText } from "@/components/ui/ScrambleText";
import { BLOG_POSTS } from "@/lib/blog-data";
import { BlogCard } from "@/components/blog/BlogCard";

export function LatestInsights() {
    // Show the 3 most recent posts
    const recentPosts = BLOG_POSTS.slice(0, 3);

    return (
        <section className="py-0 bg-muted/1 overflow-hidden border-b border-border/40">
            <div className="container px-4 mx-auto">
                {/* Header Split */}
                <div className="flex flex-col lg:flex-row border-x border-border/40 divide-y lg:divide-y-0 lg:divide-x divide-border/40 border-b border-border/40 bg-background/40">
                    <div className="lg:w-2/3 p-12 lg:p-24 space-y-10">
                        <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em] block animate-pulse">/INTEL_STREAMS</span>
                        <h2 className="display-bold text-4xl lg:text-6xl uppercase tracking-tighter !leading-[0.9]">Technical<br />Insights &<br />Strategy</h2>
                    </div>
                    <div className="lg:w-1/3 p-12 lg:p-24 flex flex-col justify-center space-y-12 bg-muted/1 relative">
                        <p className="text-[11px] text-muted-foreground uppercase leading-[2] tracking-[0.3em] font-medium opacity-80 border-l border-primary/20 pl-8">
                            Engineering perspectives and strategic resources to master global scale and technical excellence.
                        </p>

                        <div className="pt-4">
                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-4 text-[10px] font-black text-primary uppercase tracking-[0.5em] hover:translate-x-4 transition-all duration-500 group"
                            >
                                <ArchiveLinkText /> <ArrowUpRight className="size-4 group-hover:rotate-45 transition-transform" />
                            </Link>
                        </div>
                        <div className="grid-symbol -top-2.5 -right-2.5" />
                    </div>
                </div>

                {/* Insights Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-x border-border/40 divide-x divide-border/40 relative">
                    {recentPosts.map((post) => (
                        <div key={post.id} className="relative group bg-background/50 hover:bg-background transition-all duration-700">
                            <BlogCard post={post} />
                            <div className="grid-symbol -bottom-2.5 -right-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    ))}
                    <div className="grid-symbol -top-2.5 -right-2.5 hidden lg:block" />
                    <div className="grid-symbol -bottom-2.5 -right-2.5" />
                </div>
            </div>
        </section>
    );
}

function ArchiveLinkText() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <span
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="inline-block"
        >
            <ScrambleText text="Access full archive" trigger={isHovered} />
        </span>
    );
}
