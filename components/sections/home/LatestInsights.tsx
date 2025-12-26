import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog-data";
import { BlogCard } from "@/components/blog/BlogCard";
import { Button } from "@/components/ui/button";

export function LatestInsights() {
    // Show the 3 most recent posts
    const recentPosts = BLOG_POSTS.slice(0, 3);

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-muted/30" />

            <div className="container px-4 mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center rounded-none border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-4 backdrop-blur-sm uppercase tracking-widest">
                            <span className="flex h-2 w-2 rounded-none bg-primary mr-2"></span>
                            Knowledge Hub
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold">Latest <span className="text-primary italic">Insights</span></h2>
                        <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
                            Strategies and resources to help you scale your software business, master client communication, and dominate the global market.
                        </p>
                    </div>

                    <Button variant="outline" className="rounded-none h-12 px-6 group" asChild>
                        <Link href="/blog">
                            View All Insights <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recentPosts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </section>
    );
}
