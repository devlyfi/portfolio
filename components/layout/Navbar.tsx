"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { ScrambleText } from "@/components/ui/ScrambleText";
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
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                scrolled
                    ? "bg-background/90 backdrop-blur-md border-b border-border/40 py-4 shadow-sm"
                    : "bg-transparent py-8"
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative group">
                {/* Navbar Connected Grid Effect */}
                <div className={cn(
                    "absolute -left-2 -right-2 inset-y-0 border border-border/20 transition-opacity duration-500",
                    scrolled ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                )} />

                <div className="flex items-center justify-between relative">
                    {/* Left: Logo + Phase Marker */}
                    <div className="flex items-center gap-8">
                        <Link href="/" className="flex items-center gap-3 group/logo">
                            <div className="size-6 bg-primary flex items-center justify-center text-[10px] text-primary-foreground font-bold rounded-none group-hover/logo:rotate-90 transition-transform duration-500">
                                NX
                            </div>
                            <span className="text-sm font-bold tracking-[0.2em] uppercase">
                                {SITE_CONFIG.name}
                            </span>
                        </Link>
                        <div className="hidden lg:flex items-center gap-2 text-[8px] font-bold tracking-[0.3em] text-muted-foreground/40 border-l border-border/40 pl-8">
                            <span className="text-primary animate-pulse">●</span>
                            <span>SYSTEM_STATUS // ONLINE</span>
                        </div>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-12">
                        {NAV_LINKS.map((link) => (
                            <NavLink key={link.href} link={link} pathname={pathname} />
                        ))}
                        <div className="w-[1px] h-4 bg-border/40" />
                        <Link
                            href="/contact"
                            className="text-xs font-bold uppercase tracking-[0.2em] px-6 py-2 border border-border/40 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all group/btn"
                        >
                            <EnquiryButtonText />
                        </Link>
                        <ModeToggle />
                    </nav>

                    <div className="flex items-center gap-4 md:hidden">
                        <ModeToggle />
                        <button
                            className="p-2 text-muted-foreground hover:text-foreground"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
                        </button>
                    </div>

                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
                    <nav className="flex flex-col p-8 gap-6 bg-muted/5">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-xs font-bold uppercase tracking-[0.3em] p-4 border border-transparent hover:border-border/40 transition-all",
                                    pathname === link.href ? "text-primary bg-primary/5 border-border/40" : "text-muted-foreground"
                                )}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="w-full py-5 text-center text-xs font-bold uppercase tracking-[0.3em] bg-primary text-primary-foreground"
                        >
                            CONTACT US
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}

function NavLink({ link, pathname }: { link: { label: string; href: string }; pathname: string }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link
            href={link.href}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={cn(
                "text-xs font-bold uppercase tracking-[0.2em] transition-all hover:text-primary",
                pathname === link.href ? "text-primary" : "text-muted-foreground"
            )}
        >
            <ScrambleText text={link.label} trigger={isHovered} />
        </Link>
    );
}

function EnquiryButtonText() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <span
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative"
        >
            <ScrambleText text="Enquiry" trigger={isHovered} />
        </span>
    );
}
