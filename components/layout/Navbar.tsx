"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                scrolled
                    ? "bg-background/80 backdrop-blur-md border-border shadow-sm"
                    : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="size-8 bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl rounded-none">
                            D
                        </div>
                        <span className="text-xl font-bold tracking-tight">
                            {SITE_CONFIG.name}
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary",
                                    pathname === link.href ? "text-primary font-bold border-b-2 border-primary" : "text-muted-foreground"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Button asChild>
                            <Link href="/contact">Get a Quote</Link>
                        </Button>
                        <ModeToggle />
                    </nav>

                    <div className="flex items-center gap-4 md:hidden">
                        <ModeToggle />
                        {/* Mobile Menu Toggle */}
                        <button
                            className="p-2 text-muted-foreground hover:text-foreground"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border p-4 shadow-lg animate-in slide-in-from-top-5">
                    <nav className="flex flex-col gap-4">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "flex items-center justify-between text-base font-medium p-2 hover:bg-muted rounded-none",
                                    pathname === link.href ? "text-primary font-bold bg-muted" : "text-muted-foreground hover:text-primary"
                                )}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                                <ChevronRight className="size-4 opacity-50" />
                            </Link>
                        ))}
                        <Button className="w-full mt-4" asChild onClick={() => setIsOpen(false)}>
                            <Link href="/contact">Get started</Link>
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
}
