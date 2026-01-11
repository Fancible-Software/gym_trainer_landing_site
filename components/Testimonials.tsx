"use client";

import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Fitness Enthusiast",
        image: "https://res.cloudinary.com/dq1li2qrf/image/upload/v1768088774/f7772079-bf87-4be5-b505-e677eec17afc_z4pclz.jpg",
        content: "Brijesh's training program completely transformed my lifestyle. I've never felt stronger!",
    },
    {
        name: "Michael Chen",
        role: "Software Engineer",
        image: "https://res.cloudinary.com/dq1li2qrf/image/upload/v1768088770/ce897bf7-80ce-463a-8f2a-3ba7d872a94b_fowuii.jpg",
        content: "The flexibility of the online coaching allowed me to stay fit despite my busy schedule.",
    },
    {
        name: "Emily Davis",
        role: "Yoga Instructor",
        image: "https://res.cloudinary.com/dq1li2qrf/image/upload/v1768088791/b5c69499-1286-4c4e-b9f7-79effcebc622_hekqou.jpg",
        content: "A holistic approach that focuses on both physical strength and mental well-being.",
    },
    {
        name: "David Wilson",
        role: "Marathon Runner",
        image: "https://res.cloudinary.com/dq1li2qrf/image/upload/v1768088777/515421b1-5989-4aa9-85fe-9af873691eb7_kpehyi.jpg",
        content: "The customized diet and workout plans were game-changers for my marathon prep.",
    },
];

export default function Testimonials() {
    return (
        <section id="review" className="py-20 overflow-hidden bg-muted/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-4">What My Clients Say</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Read success stories from people who have transformed their lives.
                    </p>
                </div>
            </div>

            {/* Infinite Marquee Slider */}
            <div className="relative w-full">
                <div className="flex overflow-hidden mask-linear-gradient">
                    <motion.div
                        className="flex gap-8 px-4"
                        animate={{ x: "-50%" }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 30, // Adjust speed here
                        }}
                        style={{ width: "max-content" }}
                    >
                        {/* Duplicate lists for seamless looping */}
                        {[...testimonials, ...testimonials, ...testimonials].map((item, index) => (
                            <div
                                key={index}
                                className="w-[350px] md:w-[450px] flex-shrink-0 bg-background border border-border/50 p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow h-full flex flex-col"
                            >
                                <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden mb-6 bg-muted border border-border/50">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="flex items-center gap-4 mb-3">
                                    <div>
                                        <h4 className="text-lg font-bold">{item.name}</h4>
                                        <p className="text-sm text-muted-foreground">{item.role}</p>
                                    </div>
                                    <Quote className="ml-auto w-8 h-8 text-primary/20 fill-current" />
                                </div>
                                <div className="flex gap-1 mb-4 text-secondary">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} className="w-4 h-4 fill-current" />
                                    ))}
                                </div>
                                <p className="text-foreground/80 italic leading-relaxed">
                                    "{item.content}"
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
