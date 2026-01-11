"use client";

import { Check } from "lucide-react";
import Link from "next/link";

export default function Features() {
    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="order-2 lg:order-1 space-y-8">
                    <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                        Experience Balance, Strength, And Harmony
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        My exercises are designed to help you find balance and harmony in your life. I focus on strength and flexibility.
                    </p>

                    <div className="space-y-4">
                        {[
                            "Personalized training plans",
                            "Expert guidance and support",
                            "Comprehensive nutrition advice",
                            "Flexible scheduling options"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                                    <Check className="w-4 h-4 text-primary" />
                                </div>
                                <span className="font-medium">{item}</span>
                            </div>
                        ))}
                    </div>

                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-semibold transition-all shadow-lg text-center cursor-pointer"
                    >
                        See All Features
                    </a>
                </div>

                {/* Image Grid */}
                <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
                    {/* Image 1 */}
                    <div className="space-y-4 mt-8">
                        <div className="aspect-[4/5] bg-muted rounded-3xl overflow-hidden relative">
                            <img
                                src="https://res.cloudinary.com/dq1li2qrf/image/upload/v1768096096/Weight_img_lc6jpf.png"
                                alt="Gym Trainer Feature 1"
                                className="w-full h-full object-cover"
                            />
                            {/* Floating badge */}
                            <div className="absolute bottom-4 left-4 right-4 bg-secondary/90 backdrop-blur p-4 rounded-xl">
                                <p className="text-xs font-bold text-secondary-foreground">Trusted by</p>
                                <p className="text-lg font-bold text-secondary-foreground">500+ Member</p>
                            </div>
                        </div>
                    </div>
                    {/* Image 2 */}
                    <div className="space-y-4">
                        <div className="aspect-[4/5] bg-muted rounded-3xl overflow-hidden relative">
                            <img
                                src="https://res.cloudinary.com/dq1li2qrf/image/upload/v1768096095/Strength_img1_lgjmwg.png"
                                alt="Gym Trainer Feature 2"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
