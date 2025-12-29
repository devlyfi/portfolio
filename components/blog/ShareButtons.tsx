"use client";

import { Facebook, Twitter, Linkedin, Link as LinkIcon } from "lucide-react";
import { toast } from "sonner";

interface ShareButtonsProps {
    title: string;
    url: string;
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

    const shareLinks = [
        {
            name: "Facebook",
            icon: Facebook,
            url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        },
        {
            name: "Twitter",
            icon: Twitter,
            url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
        },
        {
            name: "Linkedin",
            icon: Linkedin,
            url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
        },
    ];

    const copyToClipboard = () => {
        navigator.clipboard.writeText(url);
        toast.success("Link copied to clipboard");
    };

    return (
        <div className="grid grid-cols-4 gap-4">
            {shareLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="aspect-square border border-border/40 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all group/icon"
                    title={`Share on ${link.name}`}
                >
                    <link.icon className="size-4 group-hover/icon:scale-110 transition-transform" />
                </a>
            ))}
            <button
                onClick={copyToClipboard}
                className="aspect-square border border-border/40 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all group/icon"
                title="Copy Link"
            >
                <LinkIcon className="size-4 group-hover/icon:scale-110 transition-transform" />
            </button>
        </div>
    );
}
