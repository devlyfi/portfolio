"use client";

import { useState, useMemo } from "react";
import { BLOG_POSTS, BlogCategory } from "@/lib/blog-data";
import { BlogCard } from "@/components/blog/BlogCard";
import { FeaturedPost } from "@/components/blog/FeaturedPost";
import { CategoryFilter } from "@/components/blog/CategoryFilter";
import { SearchBar } from "@/components/blog/SearchBar";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function BlogListingPage() {
    const [activeCategory, setActiveCategory] = useState<BlogCategory | "All">("All");
    const [searchQuery, setSearchQuery] = useState("");

    const featuredPost = BLOG_POSTS[0]; // Always the first one for now
    const otherPosts = BLOG_POSTS.slice(0); // Show all including featured in the grid

    const filteredPosts = useMemo(() => {
        return otherPosts.filter(post => {
            const matchesCategory = activeCategory === "All" || post.category === activeCategory;
            const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

    return (
        <div className="bg-background min-h-screen">
            {/* Header Section */}
            <div className="container relative z-10 px-4 mx-auto pt-32 pb-16 text-foreground">
                <div className="mb-24">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">
                        <span>Agency</span>
                        <span>/</span>
                        <span className="text-foreground">Insights</span>
                        <span>/</span>
                        <span>Strategy</span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-24 items-end">
                        <h1 className="display-bold text-6xl md:text-7xl lg:text-9xl flex flex-col items-start gap-2 uppercase tracking-tighter !leading-[0.85]">
                            <span className="flex items-center gap-6">
                                Insights <span className="h-[2px] w-12 md:w-24 bg-primary mt-4" />
                            </span>
                            <span className="text-muted-foreground/20">& Strategy.</span>
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed pb-2 border-l border-border/40 pl-8 italic">
                            Expert guidance on Fiverr growth, client management, and scaling your software agency in the global market.
                        </p>
                    </div>
                </div>
            </div>

            {/* Metadata Grid */}
            <section className="bg-background">
                <div className="container px-4 mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border/40 border border-border/40 bg-muted/5 border-b border-border/40">
                        {[
                            { label: "/TOTAL_POSTS", value: BLOG_POSTS.length.toString().padStart(2, '0') },
                            { label: "/CATEGORIES", value: "07" },
                            { label: "/AUTHORS", value: "02" },
                            { label: "/LATEST", value: "Q4_2025" }
                        ].map((stat, i) => (
                            <div key={i} className="p-8 lg:p-10 flex flex-col gap-4 relative group hover:bg-background transition-colors duration-500">
                                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-muted-foreground group-hover:text-primary transition-colors">{stat.label}</span>
                                <span className="text-4xl font-bold tracking-tighter">{stat.value}</span>
                                <div className="grid-symbol -top-2.5 -left-2.5" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            {!searchQuery && activeCategory === "All" && (
                <div className="relative border-b border-border/40">
                    <FeaturedPost post={featuredPost} />
                    <div className="grid-symbol -bottom-2.5 left-1/2 -ml-2.5 z-20" />
                </div>
            )}

            {/* Filters and Search - Architectural Layout */}
            <section className="py-12 sticky top-[60px] bg-background/90 backdrop-blur-md z-30">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 border border-border/40 p-6 relative">
                        <CategoryFilter
                            activeCategory={activeCategory}
                            onCategoryChange={(cat) => setActiveCategory(cat)}
                        />
                        <div className="hidden lg:block w-[1px] h-8 bg-border/40" />
                        <SearchBar value={searchQuery} onChange={setSearchQuery} />

                        <div className="grid-symbol -top-2.5 -left-2.5" />
                        <div className="grid-symbol -bottom-2.5 -right-2.5" />
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-20 lg:py-32 relative overflow-hidden bg-background">
                {/* Connected Grid Background Lines */}
                <div className="absolute inset-0 pointer-events-none opacity-20">
                    <div className="absolute left-[33%] top-0 bottom-0 w-[1px] bg-border/40" />
                    <div className="absolute left-[66%] top-0 bottom-0 w-[1px] bg-border/40" />
                </div>

                <div className="container px-4 mx-auto relative z-10">
                    {filteredPosts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-border/40">
                            {filteredPosts.map((post, i) => (
                                <div key={post.id} className={cn(
                                    "p-8 lg:p-12 border-border/40 relative group",
                                    i % 3 !== 2 && "lg:border-r",
                                    i % 2 !== 1 && "md:border-r lg:md:border-none",
                                    i >= 3 && "border-t",
                                    i >= 2 && "md:border-t lg:md:border-none"
                                )}>
                                    <BlogCard post={post} />
                                    {/* Architectural intersection markers would go here if we were using a more manual grid */}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 max-w-md mx-auto border border-border/40 p-12 relative">
                            <div className="size-20 bg-muted/50 flex items-center justify-center mx-auto mb-6 border border-border/40">
                                <Search className="size-8 text-muted-foreground/40" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2 uppercase tracking-tighter">No results found</h3>
                            <p className="text-sm text-muted-foreground mb-8 uppercase tracking-widest leading-relaxed">
                                We couldn't find any articles matching "{searchQuery}" in {activeCategory}.
                            </p>
                            <Button
                                variant="outline"
                                className="rounded-none px-8 text-xs font-bold uppercase tracking-[0.2em]"
                                onClick={() => {
                                    setSearchQuery("");
                                    setActiveCategory("All");
                                }}
                            >
                                Clear All Filters
                            </Button>
                            <div className="grid-symbol -top-2.5 -left-2.5" />
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter/Subscriber - Visual/Narrative Split */}
            <section className="py-0 border-t border-border/40 bg-muted/10">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-border/40 border border-border/40">
                        {/* Narrative Side */}
                        <div className="lg:w-1/2 p-12 lg:p-24 space-y-8 relative group">
                            <div className="sidebar-meta absolute -left-2 top-24">01 // SUBSCRIPTION</div>
                            <h2 className="display-bold text-4xl md:text-5xl leading-tight">
                                Never miss an <span className="text-muted-foreground/30">insight.</span>
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed italic border-l-2 border-primary/20 pl-6">
                                Join 2,500+ software professionals receiving our weekly strategy teardowns directly in their inbox.
                            </p>
                            <div className="grid-symbol -bottom-2.5 -left-2.5" />
                        </div>

                        {/* Input Side */}
                        <div className="lg:w-1/2 p-12 lg:p-24 flex items-center justify-center bg-background relative group">
                            <div className="grid-symbol -top-2.5 -right-2.5" />
                            <div className="w-full max-w-lg space-y-6">
                                <div className="space-y-4">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground/60">/NEWSLETTER_TRANSMISSION</label>
                                    <div className="flex flex-col sm:flex-row gap-0">
                                        <input
                                            type="email"
                                            placeholder="ENTER@EMAIL.ADDR"
                                            className="flex-1 px-6 h-16 bg-muted/20 border border-border focus:border-primary outline-none text-xs font-bold uppercase tracking-widest placeholder:opacity-30"
                                        />
                                        <Button size="lg" className="rounded-none h-16 px-10 text-xs font-bold uppercase tracking-[0.2em] shadow-xl shadow-primary/10">
                                            Transmit
                                        </Button>
                                    </div>
                                </div>
                                <p className="text-[10px] text-muted-foreground/40 mt-4 uppercase tracking-[0.2em] flex items-center gap-2">
                                    <div className="size-1 bg-primary animate-pulse" />
                                    No spam, ever. Only high-value growth strategies.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
