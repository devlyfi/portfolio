"use client";

import { BLOG_CATEGORIES, BlogCategory } from "@/lib/blog-data";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
    activeCategory: BlogCategory | "All";
    onCategoryChange: (category: BlogCategory | "All") => void;
}

export function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
    return (
        <div className="flex flex-wrap gap-2 justify-center">
            <button
                onClick={() => onCategoryChange("All")}
                className={cn(
                    "px-6 py-2.5 text-sm font-bold transition-all duration-300 rounded-none border",
                    activeCategory === "All"
                        ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                        : "bg-background/50 text-muted-foreground border-border hover:border-primary/50 hover:text-primary backdrop-blur-sm"
                )}
            >
                All Insights
            </button>
            {BLOG_CATEGORIES.map((category) => (
                <button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className={cn(
                        "px-6 py-2.5 text-sm font-bold transition-all duration-300 rounded-none border",
                        activeCategory === category
                            ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                            : "bg-background/50 text-muted-foreground border-border hover:border-primary/50 hover:text-primary backdrop-blur-sm"
                    )}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}
