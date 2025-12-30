"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis({
            autoRaf: true, // automatically handles animation loop
            // you can add other options here
        });

        // If you want a custom RAF loop instead:
        // function raf(time: number) {
        //   lenis.raf(time);
        //   requestAnimationFrame(raf);
        // }
        // requestAnimationFrame(raf);
    }, []);

    return <>{children}</>;
}
