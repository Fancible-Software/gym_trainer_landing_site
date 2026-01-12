"use client";

import { CheckCircle2, UserCheck, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Why Should You Choose Me</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    I have a lot of features that make me the best choice for you.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Image Side */}
                <div className="relative order-2 lg:order-1">
                    <div className="relative z-10 mx-auto w-full max-w-[500px] aspect-square rounded-full bg-muted overflow-hidden border-8 border-white/50 shadow-2xl">
                        <img
                            src="https://res.cloudinary.com/dq1li2qrf/image/upload/v1768096096/experience_img_eey4ei.png"
                            alt="Experience"
                            className="w-full h-full object-cover"
                        />

                        {/* Floating badge */}
                        <div className="absolute top-1/4 -right-4 bg-secondary text-secondary-foreground px-6 py-4 rounded-xl shadow-xl z-20">
                            <span className="text-xl font-bold block">15+</span>
                            <span className="text-xs font-medium uppercase tracking-wider">Years Experience</span>
                        </div>
                    </div>
                </div>

                {/* Features Side */}
                <div className="space-y-8 order-1 lg:order-2">
                    {[
                        {
                            title: "Personal Training",
                            desc: "I am ready to help you achieve your goals.",
                            icon: UserCheck
                        },
                        {
                            title: "Expert Guidance",
                            desc: "I have years of experience helping clients like you.",
                            icon: CheckCircle2
                        },
                        {
                            title: "Affordable Price",
                            desc: "I offer affordable prices for everyone.",
                            icon: ShieldCheck
                        }
                    ].map((item, index) => (
                        <div key={index} className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <item.icon className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-muted-foreground">{item.desc}</p>
                            </div>
                        </div>
                    ))}

                    <div className="pt-4">
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-semibold transition-all shadow-lg text-center cursor-pointer"
                        >
                            Book Your First Session
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
