"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, X, MapPin, Home, MonitorPlay, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

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

                        {/* Location Badge */}
                        <div className="flex items-center gap-2 text-lg font-medium text-foreground bg-secondary/10 px-4 py-3 rounded-full w-fit border border-secondary/20">
                            <MapPin className="w-5 h-5 text-secondary" />
                            <span>Serving Toronto + GTA (Downtown, North York, etc.)</span>
                        </div>

                        <p className="text-lg text-muted-foreground max-w-lg">
                            Get the body you want with my customized fitness programs. Expert guidance, flexible schedules, and diet plans included.
                        </p>

                        {/* Training Types */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="flex items-center gap-3 bg-background border border-border p-4 rounded-xl">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Dumbbell className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">In-Studio / Gym</p>
                                    <p className="text-xs text-muted-foreground">Sessions</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 bg-background border border-border p-4 rounded-xl">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Home className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">In-Home</p>
                                    <p className="text-xs text-muted-foreground">Or Condo Gym</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 bg-background border border-border p-4 rounded-xl">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <MonitorPlay className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">Virtual / Online</p>
                                    <p className="text-xs text-muted-foreground">Coaching</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-semibold transition-all shadow-lg flex items-center gap-2 cursor-pointer"
                            >
                                Book Your First Session <ArrowRight className="w-5 h-5" />
                            </a>
                            <a
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="bg-background hover:bg-muted text-foreground border border-border px-8 py-4 rounded-full font-semibold transition-all flex items-center gap-2 cursor-pointer"
                            >
                                Schedule a Free Consult
                            </a>
                        </div>

                        {/* Social Proof */}
                        <div className="flex items-center gap-4 pt-4">
                            <div className="flex -space-x-3">
                                {[
                                    "https://res.cloudinary.com/dq1li2qrf/image/upload/v1768088777/515421b1-5989-4aa9-85fe-9af873691eb7_kpehyi.jpg",
                                    "https://res.cloudinary.com/dq1li2qrf/image/upload/v1768088791/b5c69499-1286-4c4e-b9f7-79effcebc622_hekqou.jpg",
                                    "https://res.cloudinary.com/dq1li2qrf/image/upload/v1768088774/f7772079-bf87-4be5-b505-e677eec17afc_z4pclz.jpg",
                                    "https://res.cloudinary.com/dq1li2qrf/image/upload/v1768088770/ce897bf7-80ce-463a-8f2a-3ba7d872a94b_fowuii.jpg"
                                ].map((url, i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted overflow-hidden relative">
                                        <img src={url} alt={`Client ${i + 1}`} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <p className="font-bold text-lg">25k+</p>
                                <p className="text-sm text-muted-foreground">Happy Clients</p>
                            </div>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="relative">
                        <div className="relative z-10 mx-auto w-full max-w-[500px] aspect-square">
                            {/* Main circle image placeholder */}
                            <div className="w-full h-full rounded-full bg-gradient-to-tr from-gray-200 to-gray-100 overflow-hidden border-8 border-white/50 relative">
                                <img
                                    src="https://res.cloudinary.com/dq1li2qrf/image/upload/v1768180582/528617640_780678081182050_3840672124530953631_n_eqcorw.jpg"
                                    alt="Coach Brijesh"
                                    className="w-full h-full object-cover"
                                />
                                {/* Decorative ring */}
                                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground p-4 text-center text-xs font-bold leading-tight">
                                    Start Your Healthy Life
                                </div>
                            </div>
                        </div>

                        {/* Experience Badge */}
                        <div className="absolute top-1/2 -left-4 lg:-left-12 bg-background border border-border p-4 rounded-2xl shadow-xl z-20 max-w-[150px]">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">💪</div>
                                <div>
                                    <p className="text-xs font-bold">15+</p>
                                    <p className="text-[10px] text-muted-foreground">Years Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isVideoModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setIsVideoModalOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setIsVideoModalOpen(false)}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <iframe
                                src="https://player.cloudinary.com/embed/?cloud_name=dq1li2qrf&public_id=2510394f-34a0-440c-aeba-956908515b92_bibuh4&profile=cld-default"
                                className="w-full h-full border-0"
                                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                                allowFullScreen
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
