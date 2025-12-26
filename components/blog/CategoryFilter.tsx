"use client";

import { BLOG_CATEGORIES, BlogCategory } from "@/lib/blog-data";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
    activeCategory: BlogCategory | "All";
    onCategoryChange: (category: BlogCategory | "All") => void;
}

export function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
    return (
        <div className="flex flex-wrap gap-px bg-border/40 border border-border/40">
            <button
                onClick={() => onCategoryChange("All")}
                className={cn(
                    "px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300",
                    activeCategory === "All"
                        ? "bg-primary text-primary-foreground"
                        : "bg-background text-muted-foreground hover:bg-muted/5 hover:text-primary"
                )}
            >
                All Insights
            </button>
            {BLOG_CATEGORIES.map((category) => (
                <button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className={cn(
                        "px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 border-l border-border/40",
                        activeCategory === category
                            ? "bg-primary text-primary-foreground"
                            : "bg-background text-muted-foreground hover:bg-muted/5 hover:text-primary"
                    )}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}
