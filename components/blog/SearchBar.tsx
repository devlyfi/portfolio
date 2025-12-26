"use client";

import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
    return (
        <div className="relative max-w-md mx-auto w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
            <Input
                type="text"
                placeholder="Search articles, topics or keywords..."
                className="pl-12 pr-10 h-14 rounded-none border-border/50 bg-background/50 backdrop-blur-sm focus-visible:ring-primary/20 focus-visible:border-primary text-base"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            {value && (
                <button
                    onClick={() => onChange("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                    <X className="size-5" />
                </button>
            )}
        </div>
    );
}
