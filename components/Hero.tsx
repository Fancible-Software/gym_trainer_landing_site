"use client";

import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Hero() {
    return (
        <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -z-10 w-[50%] h-[70%] bg-gradient-to-bl from-secondary/20 to-transparent rounded-full blur-3xl opacity-50" />
            <div className="absolute top-20 left-10 -z-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Text Content */}
                    <div className="space-y-8">
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full">Fitness</span>
                            <span className="px-3 py-1 text-xs font-semibold tracking-wider text-secondary-foreground uppercase bg-secondary rounded-full">Gym</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-foreground">
                            Unlock Your Full <span className="text-primary">Fitness</span> Potential
                        </h1>

                        <p className="text-lg text-muted-foreground max-w-lg">
                            Get the body you want with our customized fitness programs. Expert trainers, flexible schedules, and diet plans included.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-semibold transition-all shadow-lg flex items-center gap-2">
                                Get Started <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="bg-white hover:bg-gray-50 text-foreground border border-gray-200 px-8 py-4 rounded-full font-semibold transition-all flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                                    <Play className="w-3 h-3 fill-secondary-foreground text-secondary-foreground" />
                                </span>
                                Watch Video
                            </button>
                        </div>

                        {/* Social Proof */}
                        <div className="flex items-center gap-4 pt-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-gray-200 overflow-hidden relative">
                                        {/* Placeholder for avatars */}
                                        <div className="absolute inset-0 bg-slate-300"></div>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <p className="font-bold text-lg">25k+</p>
                                <p className="text-sm text-muted-foreground">Happy Customers</p>
                            </div>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="relative">
                        <div className="relative z-10 mx-auto w-full max-w-[500px] aspect-square">
                            {/* Main circle image placeholder */}
                            <div className="w-full h-full rounded-full bg-gradient-to-tr from-gray-200 to-gray-100 overflow-hidden border-8 border-white/50 relative">
                                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-medium">Hero Image</div>
                                {/* Decorative ring */}
                                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground p-4 text-center text-xs font-bold leading-tight">
                                    Start Your Healthy Life
                                </div>
                            </div>
                        </div>

                        {/* Floating elements */}
                        <div className="absolute top-1/2 -left-4 lg:-left-12 bg-white p-4 rounded-2xl shadow-xl z-20 max-w-[150px]">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">💪</div>
                                <div>
                                    <p className="text-xs font-bold">150+</p>
                                    <p className="text-[10px] text-muted-foreground">Expert Trainers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
