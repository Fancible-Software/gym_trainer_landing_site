"use client";

import { Button } from "@/components/ui/Button";

export default function MidBanner() {
    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                        Find Harmony In Body And Mind
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Through my exercises, you will find harmony in your body and mind. I focus on mental health as well as physical health.
                    </p>
                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-full font-semibold transition-all shadow-lg text-center cursor-pointer"
                    >
                        Personal Training
                    </a>
                </div>

                <div className="relative">
                    <div className="aspect-square rounded-3xl overflow-hidden bg-muted relative">
                        <img
                            src="https://res.cloudinary.com/dq1li2qrf/image/upload/v1768096096/Cardio_img_kppsg5.png"
                            alt="Harmony"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-8 left-8 right-8 bg-secondary/90 p-6 rounded-2xl backdrop-blur">
                            <p className="font-bold text-lg mb-1">Today's Quote</p>
                            <p className="text-sm font-medium italic">"Health is not just about what you're eating. It's also about what you're thinking and saying."</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
