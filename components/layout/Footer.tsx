import Link from "next/link";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";
import { Twitter, Linkedin, Github, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-muted/30 border-t border-border mt-auto">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="size-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                                D
                            </div>
                            <span className="text-xl font-bold tracking-tight">
                                {SITE_CONFIG.name}
                            </span>
                        </Link>
                        <p className="text-muted-foreground text-sm max-w-xs">
                            {SITE_CONFIG.description}. We build digital products that matter.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href={SITE_CONFIG.links.twitter} className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="size-5" />
                            </a>
                            <a href={SITE_CONFIG.links.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin className="size-5" />
                            </a>
                            <a href={SITE_CONFIG.links.github} className="text-muted-foreground hover:text-primary transition-colors">
                                <Github className="size-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-3">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-muted-foreground hover:text-primary text-sm transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Column - Static subset of services for footer */}
                    <div>
                        <h3 className="font-semibold mb-4">Services</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/services/web-application-development" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                                    Web Development
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/mobile-app-development" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                                    Mobile Apps
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/cloud-devops" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                                    Cloud & DevOps
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/ui-ux-design" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                                    UI/UX Design
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="font-semibold mb-4">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                <MapPin className="size-5 shrink-0 text-primary" />
                                <span>{SITE_CONFIG.contact.address}</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-muted-foreground">
                                <Phone className="size-5 shrink-0 text-primary" />
                                <span>{SITE_CONFIG.contact.phone}</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-muted-foreground">
                                <Mail className="size-5 shrink-0 text-primary" />
                                <span>{SITE_CONFIG.contact.email}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <p>&copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-foreground">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
