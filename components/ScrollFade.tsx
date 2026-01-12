"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ScrollFadeProps {
    children: React.ReactNode;
    delay?: number;
}

export default function ScrollFade({ children, delay = 0 }: ScrollFadeProps) {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ${isVisible
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-12 scale-95'
                }`}
            style={{
                transitionDelay: `${delay}ms`,
                transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
        >
            {children}
        </div>
    );
}
