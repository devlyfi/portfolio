"use client";

import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface CursorFollowingLabelProps {
    children: React.ReactNode;
    labelContent: React.ReactNode;
    className?: string;
}

export function CursorFollowingLabel({ children, labelContent, className }: CursorFollowingLabelProps) {
    const [isHovered, setIsHovered] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const labelRef = useRef<HTMLDivElement>(null);

    // Position state
    const [pos, setPos] = useState({ x: 0, y: 0 });
    // Targeted position (last known mouse position)
    const targetPos = useRef({ x: 0, y: 0 });
    // Current smoothed position
    const currentPos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        let animationFrameId: number;

        const animate = () => {
            // Smoothly interpolate current towards target
            // Lerp formula: current + (target - current) * factor
            currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.15;
            currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.15;

            if (labelRef.current) {
                labelRef.current.style.transform = `translate3d(calc(${currentPos.current.x}px - 50%), calc(${currentPos.current.y}px - 50%), 0)`;
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        if (isHovered) {
            animationFrameId = requestAnimationFrame(animate);
        }

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [isHovered]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        targetPos.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
    };

    const handleMouseEnter = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const initialX = e.clientX - rect.left;
        const initialY = e.clientY - rect.top;

        targetPos.current = { x: initialX, y: initialY };
        currentPos.current = { x: initialX, y: initialY };
        setIsHovered(true);
    };

    return (
        <div
            ref={containerRef}
            className={cn("relative overflow-hidden group/cursor", className)}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}

            <div
                ref={labelRef}
                className={cn(
                    "learn-more-label pointer-events-none z-50 md:flex hidden",
                    "transition-opacity duration-300",
                    isHovered ? "opacity-100 scale-100" : "opacity-0 scale-90"
                )}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    willChange: "transform"
                }}
            >
                {labelContent}
            </div>
        </div>
    );
}
