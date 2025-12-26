"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function ContactPage() {
    const [activeTab, setActiveTab] = useState<"hello" | "quote">("hello");

    return (
        <div className="bg-background">
            <div className="relative bg-background overflow-hidden min-h-screen">
                <div className="container relative z-10 px-4 mx-auto pt-32 pb-24 text-foreground">
                    {/* Header Section */}
                    <div className="mb-24">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">
                            <span>Agency</span>
                            <span>/</span>
                            <span>Partnership</span>
                            <span>/</span>
                            <span className="text-foreground">Contact</span>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-24 items-end">
                            <h1 className="text-5xl lg:text-8xl font-bold display-bold leading-[0.9]">
                                Let's Build <br /> Something.
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed pb-2 border-l border-border/40 pl-8">
                                Whether you have a specific project in mind or just want to explore a new idea, we're here to help you navigate the digital frontier.
                            </p>
                        </div>
                    </div>

                    {/* Metadata Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32 py-12 border-y border-border/40 relative">
                        <div className="grid-symbol -top-2.5 -left-2.5" />
                        <div className="grid-symbol -top-2.5 -right-2.5" />
                        <div className="grid-symbol -bottom-2.5 -left-2.5" />
                        <div className="grid-symbol -bottom-2.5 -right-2.5" />

                        <div className="space-y-2">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">/ENQUIRIES</p>
                            <p className="font-bold uppercase tracking-tighter text-xl truncate">{SITE_CONFIG.contact.email}</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">/ADDRESS</p>
                            <p className="font-bold uppercase tracking-tighter text-xl">San Francisco, CA</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">/PHONE</p>
                            <p className="font-bold uppercase tracking-tighter text-xl">{SITE_CONFIG.contact.phone}</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">/HOURS</p>
                            <p className="font-bold uppercase tracking-tighter text-xl">Mon-Sat: 9AM - 8PM</p>
                        </div>
                    </div>

                    {/* Contact Section - Narrative Visual Split */}
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] border border-border/40 divide-y lg:divide-y-0 lg:divide-x divide-border/40 relative group/section bg-muted/5">
                        <div className="flex flex-col">
                            {/* Form area */}
                            <div className="p-8 lg:p-16">
                                <div className="mb-12">
                                    <div className="flex items-center gap-3 mb-6">
                                        <Mail className="size-5 text-primary" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground whitespace-nowrap">/INQUIRY_FORM_V01</span>
                                    </div>
                                    <h2 className="text-3xl lg:text-5xl font-bold display-bold mb-6">Start a <br /> Conversation.</h2>
                                </div>

                                {/* Custom Tabs */}
                                <div className="flex w-full mb-12 border border-border/40">
                                    <button
                                        onClick={() => setActiveTab("hello")}
                                        className={cn(
                                            "flex-1 py-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-all",
                                            activeTab === "hello"
                                                ? "bg-primary text-primary-foreground"
                                                : "bg-transparent text-muted-foreground hover:text-foreground"
                                        )}
                                    >
                                        Say Hello
                                    </button>
                                    <button
                                        onClick={() => setActiveTab("quote")}
                                        className={cn(
                                            "flex-1 py-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-all",
                                            activeTab === "quote"
                                                ? "bg-primary text-primary-foreground"
                                                : "bg-transparent text-muted-foreground hover:text-foreground"
                                        )}
                                    >
                                        Get a Quote
                                    </button>
                                </div>

                                <form className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <Label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Full Name *</Label>
                                            <Input id="name" placeholder="John Doe" required className="bg-transparent border-border/40 focus:border-primary rounded-none h-14" />
                                        </div>
                                        <div className="space-y-3">
                                            <Label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Email Address *</Label>
                                            <Input id="email" type="email" placeholder="john@example.com" required className="bg-transparent border-border/40 focus:border-primary rounded-none h-14" />
                                        </div>
                                        <div className="space-y-3">
                                            <Label htmlFor="company" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Company</Label>
                                            <Input id="company" placeholder="Agency Inc." className="bg-transparent border-border/40 focus:border-primary rounded-none h-14" />
                                        </div>
                                        {activeTab === "quote" ? (
                                            <div className="space-y-3">
                                                <Label htmlFor="budget" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Budget Range</Label>
                                                <Select>
                                                    <SelectTrigger className="bg-transparent border-border/40 focus:border-primary rounded-none h-14">
                                                        <SelectValue placeholder="Select budget" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="5k-10k">$5k - $10k</SelectItem>
                                                        <SelectItem value="10k-25k">$10k - $25k</SelectItem>
                                                        <SelectItem value="25k-50k">$25k - $50k</SelectItem>
                                                        <SelectItem value="50k+">$50k+</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        ) : (
                                            <div className="space-y-3">
                                                <Label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Phone Number</Label>
                                                <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" className="bg-transparent border-border/40 focus:border-primary rounded-none h-14" />
                                            </div>
                                        )}
                                    </div>

                                    <div className="space-y-3">
                                        <Label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Message *</Label>
                                        <Textarea
                                            id="message"
                                            required
                                            placeholder="Briefly describe your project or enquiry..."
                                            className="min-h-[150px] bg-transparent border-border/40 focus:border-primary rounded-none resize-none"
                                        />
                                    </div>

                                    <Button size="lg" className="w-full lg:w-fit rounded-none h-14 px-12 text-[10px] font-bold uppercase tracking-[0.3em] bg-primary text-primary-foreground hover:bg-primary/90 transition-all">
                                        {activeTab === "hello" ? "Send Message" : "Submit Request"}
                                    </Button>
                                </form>
                            </div>
                        </div>

                        {/* Sidebar Column */}
                        <div className="flex flex-col bg-muted/10 divide-y divide-border/40">
                            {/* Status/Time Slot */}
                            <div className="p-12 flex flex-col items-center justify-center text-center space-y-6">
                                <div className="sidebar-meta">01 // AVAILABILITY</div>
                                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-green-500">
                                    <div className="size-2 rounded-full bg-green-500 animate-pulse" />
                                    <span>Taking New Projects</span>
                                </div>
                                <div className="pt-6 border-t border-border/40 w-full">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Current Local Time</p>
                                    <p className="text-2xl font-bold display-bold">01:07 AM</p>
                                </div>
                            </div>

                            {/* Social Links Slot */}
                            <div className="p-12 flex flex-col items-center justify-center text-center space-y-8">
                                <div className="sidebar-meta">02 // CHANNELS</div>
                                <div className="space-y-4 w-full">
                                    {["LinkedIn", "Twitter", "Instagram", "GitHub"].map((social) => (
                                        <a
                                            key={social}
                                            href="#"
                                            className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors py-2 border border-transparent hover:border-border/40"
                                        >
                                            /{social}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Legal/Privacy Slot */}
                            <div className="p-12 flex-grow flex flex-col items-center justify-center text-center space-y-6 bg-primary/5 min-h-[300px]">
                                <div className="sidebar-meta">03 // PRIVACY</div>
                                <p className="text-[10px] leading-loose text-muted-foreground/80 uppercase tracking-widest max-w-[200px]">
                                    Your data is encrypted and handled with absolute confidentiality. We are happy to execute an NDA prior to disclosure.
                                </p>
                                <div className="h-12 w-[1px] bg-border/40" />
                                <div className="sidebar-meta !text-[8px] !tracking-[0.2em] mt-4">
                                    /SECURE_TX
                                </div>
                            </div>
                        </div>

                        {/* Architectural Symbols */}
                        <div className="grid-symbol -top-2.5 -left-2.5" />
                        <div className="grid-symbol -top-2.5 -right-2.5" />
                        <div className="grid-symbol -bottom-2.5 -left-2.5" />
                        <div className="grid-symbol -bottom-2.5 -right-2.5" />
                        <div className="grid-symbol top-1/2 -mt-2.5 right-[400px] -mr-2.5 hidden lg:block" />
                    </div>
                </div>
            </div>
        </div>
    );
}
