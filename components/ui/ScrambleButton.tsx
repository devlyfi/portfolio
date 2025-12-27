"use client";

import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrambleText } from "@/components/ui/ScrambleText";
import { cn } from "@/lib/utils";

interface ScrambleButtonProps extends React.ComponentProps<typeof Button> {
    scrambleText: string;
    children?: React.ReactNode; // Extra icons etc
}

export function ScrambleButton({ scrambleText, children, onMouseEnter, onMouseLeave, ...props }: ScrambleButtonProps) {
    const [isHovered, setIsHovered] = useState(false);
    const { asChild, ...rest } = props;

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
        setIsHovered(true);
        onMouseEnter?.(e);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
        setIsHovered(false);
        onMouseLeave?.(e);
    };

    if (asChild && React.isValidElement(children)) {
        return (
            <Button
                {...rest}
                asChild
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {React.cloneElement(children as React.ReactElement<any>, {}, (
                    <>
                        <ScrambleText text={scrambleText} trigger={isHovered} />
                        {(children as React.ReactElement<any>).props.children}
                    </>
                ))}
            </Button>
        );
    }

    return (
        <Button
            {...rest}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <ScrambleText text={scrambleText} trigger={isHovered} />
            {children}
        </Button>
    );
}
