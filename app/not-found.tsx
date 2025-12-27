import Link from "next/link";
import { ArrowRight, Home, Compass, Terminal, MoveRight } from "lucide-react";
import { ScrambleButton } from "@/components/ui/ScrambleButton";

export default function NotFound() {
    return (
        <section className="relative min-h-[90vh] flex items-stretch overflow-hidden bg-background">
            {/* Architectural Grid Underlay */}
            <div className="absolute inset-0 -z-10 pointer-events-none opacity-40">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:80px_80px]" />
            </div>

            <div className="container px-4 mx-auto flex flex-col justify-center">
                <div className="flex flex-col lg:flex-row border border-border/40 min-h-[70vh] bg-background/50 backdrop-blur-[2px] relative group">
                    {/* Left Sidebar Info (35%) */}
                    <div className="lg:w-[35%] p-10 lg:p-20 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border/40 bg-muted/5">
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em] block animate-pulse">/STATUS_NULL</span>
                                <h1 className="display-bold text-8xl lg:text-9xl uppercase tracking-tighter !leading-[0.8]">
                                    404
                                </h1>
                            </div>

                            <div className="space-y-4 pt-12 border-t border-border/40">
                                <span className="text-[9px] font-black text-muted-foreground uppercase tracking-[0.4em] block opacity-40">/ERROR_METADATA</span>
                                <div className="space-y-3">
                                    <div className="flex justify-between text-[9px] font-mono uppercase tracking-widest text-muted-foreground/60">
                                        <span>Layer:</span>
                                        <span>Route_Undefined</span>
                                    </div>
                                    <div className="flex justify-between text-[9px] font-mono uppercase tracking-widest text-muted-foreground/60">
                                        <span>Status:</span>
                                        <span>Critical_Null</span>
                                    </div>
                                    <div className="flex justify-between text-[9px] font-mono uppercase tracking-widest text-muted-foreground/60">
                                        <span>Registry:</span>
                                        <span>0xBAD_ADDR</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="sidebar-meta absolute -right-2 top-10 scale-75 opacity-20">SYS_AUTH_ERR_404</div>
                    </div>

                    {/* Main Narrative Content (65%) */}
                    <div className="lg:w-[65%] p-12 lg:p-24 flex flex-col justify-center relative overflow-hidden">
                        <div className="max-w-xl space-y-12 relative z-10">
                            <div className="space-y-6">
                                <h2 className="display-bold text-4xl lg:text-6xl uppercase tracking-tighter !leading-[1.1]">
                                    Oops! You've drifted <br /> off the <span className="text-primary italic">grid.</span>
                                </h2>
                                <p className="text-[11px] md:text-[13px] text-muted-foreground uppercase leading-[2] tracking-[0.3em] font-medium opacity-80 border-l border-primary/20 pl-8">
                                    The specified resource could not be located in our active directory. It might have been moved, renamed, or never existed in this dimension.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-6">
                                <ScrambleButton
                                    size="lg"
                                    scrambleText="REBOOT_TO_HOME"
                                    className="h-16 px-12 text-[10px] font-black uppercase tracking-[0.4em] rounded-none group/btn bg-primary text-primary-foreground hover:bg-primary/90 transition-all border border-primary"
                                    asChild
                                >
                                    <Link href="/" className="flex items-center">
                                        <Home className="ml-4 size-4 group-hover/btn:translate-x-2 transition-transform duration-500" />
                                    </Link>
                                </ScrambleButton>
                                <ScrambleButton
                                    size="lg"
                                    variant="outline"
                                    scrambleText="CONTACT_OPS"
                                    className="h-16 px-12 text-[10px] font-black uppercase tracking-[0.4em] rounded-none border-border/40 hover:bg-muted/10 transition-all"
                                    asChild
                                >
                                    <Link href="/contact" className="flex items-center">
                                        <MoveRight className="ml-4 size-4 opacity-40 group-hover:translate-x-2 transition-transform" />
                                    </Link>
                                </ScrambleButton>
                            </div>
                        </div>

                        {/* Background Visual Element */}
                        <Compass className="absolute top-1/2 right-[-10%] -translate-y-1/2 size-96 opacity-[0.03] rotate-12 group-hover:rotate-45 transition-transform duration-[10000ms] ease-linear" />

                        {/* Architectural Symbols */}
                        <div className="grid-symbol -top-2.5 -right-2.5" />
                        <div className="grid-symbol -bottom-2.5 -right-2.5" />
                    </div>

                    {/* Left corner grid symbol */}
                    <div className="grid-symbol -top-2.5 -left-2.5 lg:block hidden" />
                    <div className="grid-symbol -bottom-2.5 -left-2.5 lg:block hidden" />
                </div>
            </div>
        </section>
    );
}
