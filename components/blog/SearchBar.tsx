"use client";

import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
    return (
        <div className="relative max-w-md mx-auto w-full group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 size-4 text-muted-foreground/60 group-focus-within:text-primary transition-colors" />
            <Input
                type="text"
                placeholder="/SEARCH_INSIGHTS..."
                className="pl-14 pr-10 h-14 rounded-none border-border/40 bg-background focus-visible:ring-0 focus-visible:border-primary text-xs font-bold uppercase tracking-widest placeholder:opacity-40"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            {value && (
                <button
                    onClick={() => onChange("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                >
                    <X className="size-4" />
                </button>
            )}
        </div>
    );
}
