"use client";

import { useState, useMemo } from "react";
import { BLOG_POSTS, BlogCategory } from "@/lib/blog-data";
import { BlogCard } from "@/components/blog/BlogCard";
import { FeaturedPost } from "@/components/blog/FeaturedPost";
import { CategoryFilter } from "@/components/blog/CategoryFilter";
import { SearchBar } from "@/components/blog/SearchBar";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
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
            {/* Page Header */}
            <section className="pt-20 pb-16 lg:pt-32 lg:pb-24 border-b border-border/50 bg-muted/20 relative overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 right-0 -mr-40 -mt-40 size-96 bg-primary/5 rounded-none blur-3xl" />
                    <div className="absolute bottom-0 left-0 -ml-40 -mb-40 size-96 bg-secondary/10 rounded-none blur-3xl" />
                </div>

                <div className="container px-4 mx-auto text-center relative z-10">
                    <div className="inline-flex items-center rounded-none border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-6 backdrop-blur-sm uppercase tracking-widest">
                        <span className="flex h-2 w-2 rounded-none bg-primary mr-2"></span>
                        Insights & Resources
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
                        Elevate Your <span className="text-primary italic">Software Business.</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Expert guidance on Fiverr growth, client management, and scaling your software agency in the global market.
                    </p>
                </div>
            </section>

            {/* Featured Post */}
            {!searchQuery && activeCategory === "All" && (
                <div className="relative -mt-12 lg:-mt-20 z-20 pb-20">
                    <FeaturedPost post={featuredPost} />
                </div>
            )}

            {/* Filters and Search */}
            <section className="py-12 border-b border-border/50 sticky top-20 bg-background/80 backdrop-blur-md z-30">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        <CategoryFilter
                            activeCategory={activeCategory}
                            onCategoryChange={(cat) => {
                                setActiveCategory(cat);
                                // Optional: scroll to grid if needed
                            }}
                        />
                        <SearchBar value={searchQuery} onChange={setSearchQuery} />
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-20 lg:py-32">
                <div className="container px-4 mx-auto">
                    {filteredPosts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                            {filteredPosts.map((post) => (
                                <BlogCard key={post.id} post={post} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 max-w-md mx-auto">
                            <div className="size-20 bg-muted rounded-none flex items-center justify-center mx-auto mb-6">
                                <SearchBar value="" onChange={() => { }} /> {/* Just for icon visual */}
                            </div>
                            <h3 className="text-2xl font-bold mb-2">No results found</h3>
                            <p className="text-muted-foreground mb-8">
                                We couldn't find any articles matching "{searchQuery}" in {activeCategory}.
                                Try clearing your filters or search something else.
                            </p>
                            <Button
                                variant="outline"
                                className="rounded-none px-8"
                                onClick={() => {
                                    setSearchQuery("");
                                    setActiveCategory("All");
                                }}
                            >
                                Clear All Filters
                            </Button>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter/Subscriber Placeholder */}
            <section className="py-24 bg-muted/30 border-t border-border/50">
                <div className="container px-4 mx-auto text-center max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Never miss an insight.</h2>
                    <p className="text-lg text-muted-foreground mb-10">
                        Join 2,500+ software professionals receiving our weekly strategy teardowns directly in their inbox.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="flex-1 px-6 h-14 bg-background border border-border focus:border-primary outline-none text-base"
                        />
                        <Button size="lg" className="rounded-none h-14 px-8 text-base shadow-lg shadow-primary/20">
                            Subscribe Now
                        </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4 italic">
                        No spam, ever. Only high-value growth strategies.
                    </p>
                </div>
            </section>
        </div>
    );
}
