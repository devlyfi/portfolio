import Link from "next/link";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";
import { Twitter, Linkedin, Github, Mail, MapPin, Phone } from "lucide-react";
import { DevlyfiLogoMark } from "@/components/ui/DevlyfiLogo";
import Image from "next/image";
import footerr from '../../public/footerr.png'
export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background border-t border-border/40 mt-auto relative overflow-hidden">
            {/* Connected Grid Background Lines */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute left-[25%] top-0 bottom-0 w-[1px] bg-border/40" />
                <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-border/40" />
                <div className="absolute left-[75%] top-0 bottom-0 w-[1px] bg-border/40" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 lg:divide-x divide-border/40 border border-border/40">
                    {/* Brand Column */}
                    <div className="p-8 lg:p-12 space-y-8 flex flex-col relative group">
                        <Link href="/" className="flex items-center gap-3 group/logo">
                            <DevlyfiLogoMark size={32} className="text-primary group-hover/logo:scale-110 transition-transform" />
                            <span className="text-lg font-bold tracking-[0.2em] uppercase">
                                {SITE_CONFIG.name}
                            </span>
                        </Link>
                        <p className="text-xs uppercase tracking-widest text-foreground/70 font-medium leading-relaxed max-w-[240px]">
                            {SITE_CONFIG.description}. We engineer digital experiences that push the boundaries of possibility.
                        </p>
                        islands                        <div className="flex items-center gap-6 pt-4">
                            {[
                                { icon: Twitter, href: SITE_CONFIG.links.twitter },
                                { icon: Linkedin, href: SITE_CONFIG.links.linkedin },
                                { icon: Github, href: SITE_CONFIG.links.github }
                            ].map((social, i) => (
                                <a key={i} href={social.href} className="text-muted-foreground hover:text-primary transition-colors">
                                    <social.icon className="size-4" />
                                </a>
                            ))}
                        </div>
                        <div className="sidebar-meta absolute -left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">DEVLYFI_GLOBAL</div>
                    </div>

                    {/* Links Column */}
                    <div className="p-8 lg:p-12 space-y-8 relative group">
                        <div className="flex items-center gap-3">
                            <div className="size-1.5 bg-primary" />
                            <h3 className="text-[11px] font-bold uppercase tracking-[0.3em]">Navigation</h3>
                        </div>
                        <ul className="space-y-4">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-xs uppercase tracking-widest text-foreground/80 font-bold hover:text-primary transition-colors flex items-center gap-2 group/item"
                                    >
                                        <span className="opacity-0 group-hover/item:opacity-100 transition-opacity">_</span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="sidebar-meta absolute top-12 right-4">SITE_MAP</div>
                    </div>

                    {/* Services Column */}
                    <div className="p-8 lg:p-12 space-y-8 relative group">
                        <div className="flex items-center gap-3">
                            <div className="size-1.5 bg-primary" />
                            <h3 className="text-xs font-bold uppercase tracking-widest">Expertise</h3>
                        </div>
                        <ul className="space-y-4 text-xs uppercase tracking-widest text-foreground/80 font-bold">
                            {["Architecture", "Engineering", "Intelligence", "Interface"].map((item) => (
                                <li key={item} className="flex items-center gap-2 group/item hover:text-primary transition-colors">
                                    <span className="size-1.5 bg-border/40 group-hover/item:bg-primary transition-colors" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="sidebar-meta absolute top-12 right-4">SERVICES</div>
                    </div>

                    {/* Contact Column */}
                    <div className="p-8 lg:p-12 space-y-8 relative group">
                        <div className="flex items-center gap-3">
                            <div className="size-1.5 bg-primary" />
                            <h3 className="text-xs font-bold uppercase tracking-widest">Terminal</h3>
                        </div>
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <p className="text-[10px] font-bold text-muted-foreground tracking-widest uppercase">LOCATION</p>
                                <p className="text-xs uppercase tracking-widest text-foreground font-bold">{SITE_CONFIG.contact.address}</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-[10px] font-bold text-muted-foreground tracking-widest uppercase">CONTACT</p>
                                <p className="text-xs uppercase tracking-widest text-foreground font-bold">{SITE_CONFIG.contact.email}</p>
                            </div>
                        </div>
                        <div className="sidebar-meta absolute -right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">STATUS_ONLINE</div>
                    </div>
                </div>

                <div className="w-full md:mt-4">
                    <Image src={footerr} alt="Footer logo" width={2000} height={2000} />
                </div>

                {/* Bottom Bar with Symbols */}
                <div className="border border-t border-border/40 py-8 px-8 flex flex-col md:flex-row justify-between items-center gap-6 relative group/bottom">
                    <p className="text-[10px] uppercase tracking-[0.4em] text-foreground/60 font-medium">
                        &copy; {currentYear} {SITE_CONFIG.name}_SYSTEMS [[ ALL_RIGHTS_RESERVED ]]
                    </p>
                    <div className="flex gap-8">
                        {["Privacy", "Terms"].map((legal) => (
                            <Link key={legal} href={`/${legal.toLowerCase()}`} className="text-[10px] uppercase tracking-[0.3em] text-foreground/70 font-bold hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1">
                                {legal}
                            </Link>
                        ))}
                    </div>

                    {/* Intersection Symbols */}
                    {[0, 25, 50, 75, 100].map((pos) => (
                        <div key={pos} className="grid-symbol -top-2.5" style={{ left: `calc(${pos}% - 10px)` }} />
                    ))}
                    <div className="grid-symbol -bottom-2.5 left-[-10px]" />
                    <div className="grid-symbol -bottom-2.5 right-[-10px]" />
                </div>
            </div>
        </footer>
    );
}
