"use client";

import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

const packages = [
    {
        name: "Standard",
        price: "$80.00",
        features: ["Personal Training", "Cardio Exercise", "Weight Lifting", "Diet Plans", "Yoga"],
        active: false,
    },
    {
        name: "Premium",
        price: "$90.00",
        features: ["Personal Training", "Cardio Exercise", "Weight Lifting", "Diet Plans", "Yoga", "Massage"],
        active: true, // highlighted
    },
    {
        name: "Platinum",
        price: "$100.00",
        features: ["Personal Training", "Cardio Exercise", "Weight Lifting", "Diet Plans", "Yoga", "Massage", "Swimming"],
        active: false,
    },
];

export default function Pricing() {
    return (
        <section id="packages" className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Check Out My Packages</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Choose the package that suits your needs.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {packages.map((pkg, index) => (
                    <div
                        key={index}
                        className={`rounded-3xl p-8 border ${pkg.active ? 'border-secondary bg-background shadow-2xl scale-105 z-10' : 'border-border bg-background'}`}
                    >
                        <h3 className="text-xl font-bold mb-4">{pkg.name}</h3>
                        <div className={`text-4xl font-bold mb-6 ${pkg.active ? 'text-primary' : 'text-foreground'}`}>
                            {pkg.price}
                        </div>

                        <ul className="space-y-4 mb-8">
                            {pkg.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm">
                                    <CheckCircle2 className={`w-5 h-5 ${pkg.active ? 'text-primary' : 'text-muted-foreground'}`} />
                                    <span className="text-foreground/80">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className={`w-full block text-center py-3 rounded-full font-bold transition-all shadow-lg cursor-pointer ${pkg.active
                                ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                                : 'bg-background text-foreground border border-border hover:bg-muted'
                                }`}
                        >
                            Choose Package
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
