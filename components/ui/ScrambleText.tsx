"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface ScrambleTextProps {
    text: string;
    className?: string;
    trigger?: boolean;
}

const CHARS = "ABCDEFGHJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

export function ScrambleText({ text, className, trigger = false }: ScrambleTextProps) {
    const [displayText, setDisplayText] = useState(text);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const hasTriggeredRef = useRef(false);

    useEffect(() => {
        if (trigger && !hasTriggeredRef.current) {
            scramble();
            hasTriggeredRef.current = true;
        } else if (!trigger) {
            hasTriggeredRef.current = false;
            stopScramble();
            setDisplayText(text);
        }
    }, [trigger, text]);

    const scramble = () => {
        let iteration = 0;
        stopScramble();

        intervalRef.current = setInterval(() => {
            setDisplayText((prev) =>
                text
                    .split("")
                    .map((char, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        if (char === " ") return " ";
                        return CHARS[Math.floor(Math.random() * CHARS.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                stopScramble();
            }

            iteration += 1 / 3;
        }, 30);
    };

    const stopScramble = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    useEffect(() => {
        return () => stopScramble();
    }, []);

    return (
        <span className={cn("relative inline-flex", className)}>
            <span className="invisible select-none" aria-hidden="true">
                {text}
            </span>
            <span className="absolute inset-0">
                {displayText}
            </span>
        </span>
    );
}
