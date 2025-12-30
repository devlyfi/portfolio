export function DevlyfiLogo({ className = "", size = 32 }: { className?: string; size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Dynamic angular D mark with speed lines */}
            {/* Main D shape - bold and angular */}
            <path
                d="M8 8L8 40L20 40C31.046 40 40 31.046 40 20C40 8.954 31.046 8 20 8L8 8Z"
                fill="currentColor"
            />

            {/* Inner cutout creating the D shape */}
            <path
                d="M16 16L16 32L20 32C26.627 32 32 26.627 32 20C32 13.373 26.627 16 20 16L16 16Z"
                fill="var(--background, white)"
            />

            {/* Speed accent lines - dynamic motion effect */}
            <rect x="4" y="14" width="2" height="8" fill="currentColor" opacity="0.3" transform="skewY(-15)" />
            <rect x="4" y="26" width="2" height="8" fill="currentColor" opacity="0.5" transform="skewY(-15)" />
        </svg>
    );
}

export function DevlyfiLogoMark({ className = "", size = 24 }: { className?: string; size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Modern angular logo mark */}
            {/* Three dynamic slanted bars creating a D-like pattern */}
            <g transform="skewX(-12)">
                {/* Bar 1 - Left tall bar */}
                <rect x="10" y="4" width="5" height="24" rx="1" fill="currentColor" />

                {/* Bar 2 - Middle bar */}
                <rect x="17" y="4" width="5" height="16" rx="1" fill="currentColor" opacity="0.7" />

                {/* Bar 3 - Right short bar */}
                <rect x="24" y="4" width="5" height="10" rx="1" fill="currentColor" opacity="0.4" />
            </g>

            {/* Connecting curve at bottom - forms the D */}
            <path
                d="M6 28C6 28 12 28 18 24C24 20 26 14 26 14"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                opacity="0.8"
            />
        </svg>
    );
}

// Alternative: Clean geometric speed mark
export function DevlyfiSpeedMark({ className = "", size = 24 }: { className?: string; size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Four dynamic slanted bars - speed/progress effect */}
            <rect x="2" y="4" width="4" height="24" rx="1" fill="currentColor" transform="skewX(-12)" />
            <rect x="10" y="6" width="4" height="20" rx="1" fill="currentColor" opacity="0.8" transform="skewX(-12)" />
            <rect x="18" y="8" width="4" height="16" rx="1" fill="currentColor" opacity="0.6" transform="skewX(-12)" />
            <rect x="26" y="10" width="4" height="12" rx="1" fill="currentColor" opacity="0.4" transform="skewX(-12)" />
        </svg>
    );
}

// Grid-based architectural mark
export function DevlyfiGridMark({ className = "", size = 24 }: { className?: string; size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Four-quadrant clover-inspired but angular */}
            {/* Top-left */}
            <rect x="2" y="2" width="13" height="13" rx="3" fill="currentColor" />
            {/* Top-right */}
            <rect x="17" y="2" width="13" height="13" rx="3" fill="currentColor" opacity="0.7" />
            {/* Bottom-left */}
            <rect x="2" y="17" width="13" height="13" rx="3" fill="currentColor" opacity="0.7" />
            {/* Bottom-right - accent */}
            <rect x="17" y="17" width="13" height="13" rx="3" fill="currentColor" opacity="0.4" />

            {/* Center cross cutout */}
            <rect x="13" y="0" width="6" height="32" fill="var(--background, white)" />
            <rect x="0" y="13" width="32" height="6" fill="var(--background, white)" />
        </svg>
    );
}

export default DevlyfiLogoMark;