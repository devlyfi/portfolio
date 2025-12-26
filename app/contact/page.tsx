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
            <section className="py-20 lg:py-32 bg-muted/30">
                <div className="container px-4 mx-auto text-center max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Let's Build Something Amazing Together</h1>
                    <p className="text-xl text-muted-foreground">
                        Whether you have a specific project in mind or just want to explore a new idea, we're here to help.
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="container px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Form */}
                    <div className="bg-card p-0 rounded-none border border-border shadow-sm overflow-hidden">
                        {/* Custom Tabs */}
                        <div className="flex w-full border-b border-border">
                            <button
                                onClick={() => setActiveTab("hello")}
                                className={cn(
                                    "flex-1 py-4 text-sm font-bold uppercase tracking-wider transition-colors",
                                    activeTab === "hello"
                                        ? "bg-background border-b-2 border-primary text-foreground"
                                        : "bg-muted/50 text-muted-foreground hover:text-foreground"
                                )}
                            >
                                Say Hello!
                            </button>
                            <button
                                onClick={() => setActiveTab("quote")}
                                className={cn(
                                    "flex-1 py-4 text-sm font-bold uppercase tracking-wider transition-colors",
                                    activeTab === "quote"
                                        ? "bg-background border-b-2 border-primary text-foreground"
                                        : "bg-muted/50 text-muted-foreground hover:text-foreground"
                                )}
                            >
                                Get a Quote
                            </button>
                        </div>

                        <div className="p-8">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Name<span className="text-destructive">*</span></Label>
                                        <Input id="name" placeholder="Your name" required className="bg-background" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email<span className="text-destructive">*</span></Label>
                                        <Input id="email" type="email" placeholder="Your email address" required className="bg-background" />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone</Label>
                                        <Input id="phone" type="tel" placeholder="Your phone number" className="bg-background" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="company">Company/Organisation</Label>
                                        <Input id="company" placeholder="Ex. Devlyfi" className="bg-background" />
                                    </div>

                                    {/* Quote-specific fields */}
                                    {activeTab === "quote" && (
                                        <>
                                            <div className="space-y-2">
                                                <Label htmlFor="type">Project type<span className="text-destructive">*</span></Label>
                                                <Select>
                                                    <SelectTrigger id="type" className="bg-background w-full">
                                                        <SelectValue placeholder="Project type" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="web">Web Development</SelectItem>
                                                        <SelectItem value="mobile">Mobile App</SelectItem>
                                                        <SelectItem value="uiux">UI/UX Design</SelectItem>
                                                        <SelectItem value="ai">AI Solution</SelectItem>
                                                        <SelectItem value="other">Other</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="budget">Project budget (USD)<span className="text-destructive">*</span></Label>
                                                <Select>
                                                    <SelectTrigger id="budget" className="bg-background w-full">
                                                        <SelectValue placeholder="Select budget" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="lt5k">Less than $5K</SelectItem>
                                                        <SelectItem value="5k-10k">$5K - $10K</SelectItem>
                                                        <SelectItem value="10k-20k">$10K - $20K</SelectItem>
                                                        <SelectItem value="20k-50k">$20K - $50K</SelectItem>
                                                        <SelectItem value="gt50k">More than $50K</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </>
                                    )}
                                </div>

                                {activeTab === "quote" && (
                                    <div className="space-y-2">
                                        <Label htmlFor="source">How did you hear about us?</Label>
                                        <Select>
                                            <SelectTrigger id="source" className="bg-background w-full">
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="google">Google Search</SelectItem>
                                                <SelectItem value="social">Social Media</SelectItem>
                                                <SelectItem value="clutch">Clutch/Upwork</SelectItem>
                                                <SelectItem value="referral">Referral</SelectItem>
                                                <SelectItem value="other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                )}

                                <div className="space-y-2">
                                    <Label htmlFor="message">Tell us about your project<span className="text-destructive">*</span></Label>
                                    <Textarea id="message" required placeholder={activeTab === "quote" ? "Ex. Hello, Devlyfi Design. We need help to make this project unique." : "How can we help you?"} className="min-h-[150px] bg-background" />
                                </div>

                                <Button size="lg" className="w-full">
                                    {activeTab === "hello" ? "Send Message" : "Submit Request"}
                                </Button>
                            </form>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-none">
                                        <MapPin className="size-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-bold">Headquarters</p>
                                        <p className="text-muted-foreground">{SITE_CONFIG.contact.address}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-none">
                                        <Phone className="size-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-bold">Phone</p>
                                        <p className="text-muted-foreground">{SITE_CONFIG.contact.phone}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-none">
                                        <Mail className="size-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-bold">Email</p>
                                        <p className="text-muted-foreground">{SITE_CONFIG.contact.email}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-none">
                                        <Clock className="size-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-bold">Business Hours</p>
                                        <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 8:30 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-muted px-6 py-8 rounded-none border border-primary/20 bg-primary/5">
                            <h3 className="font-bold mb-2">Our Promise</h3>
                            <p className="text-sm opacity-80">
                                We respect your privacy. All information shared is kept strictly confidential. We are happy to sign an NDA before our first call.
                            </p>
                        </div>
                    </div>
                </div >
            </section >
        </div >
    );
}
