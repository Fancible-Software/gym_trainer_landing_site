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
            className={`transition-all duration-700 ease-out ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
