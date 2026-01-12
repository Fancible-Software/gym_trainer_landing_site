"use client";

import { CheckCircle2, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";

const packages = [
    {
        name: "Single Session",
        price: "$75",
        duration: "1 hour",
        description: "Perfect for trying a session or flexible schedule",
        features: ["In‑studio, in‑home, or online", "Custom workout plan", "Progress tracking"],
        active: false,
        savings: null,
    },
    {
        name: "5 Sessions",
        price: "$70",
        perSession: true,
        totalPrice: "$350",
        description: "Great starter package",
        features: [
            "Custom workout plan tailored to you",
            "Progress tracking & feedback",
            "Optional nutrition guidance",
            "Flexible scheduling (early mornings, evenings, weekends)"
        ],
        active: false,
        savings: "Save $25",
    },
    {
        name: "10 Sessions",
        price: "$65",
        perSession: true,
        totalPrice: "$650",
        description: "Best Value!",
        features: [
            "Custom workout plan tailored to you",
            "Progress tracking & feedback",
            "Optional nutrition guidance",
            "Flexible scheduling (early mornings, evenings, weekends)"
        ],
        active: true, // highlighted
        savings: "Save $100",
    },
    {
        name: "20 Sessions",
        price: "$60",
        perSession: true,
        totalPrice: "$1,200",
        description: "Maximum commitment, maximum results",
        features: [
            "Custom workout plan tailored to you",
            "Progress tracking & feedback",
            "Optional nutrition guidance",
            "Flexible scheduling (early mornings, evenings, weekends)"
        ],
        active: false,
        savings: "Save $300",
    },
];

export default function Pricing() {
    return (
        <section id="packages" className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Flexible Pricing Options</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Choose the package that suits your needs. All sessions can be in‑studio, in‑home, or online – your choice.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {packages.map((pkg, index) => (
                    <div
                        key={index}
                        className={`rounded-3xl p-6 border ${pkg.active ? 'border-secondary bg-background shadow-2xl scale-105 z-10 relative' : 'border-border bg-background'}`}
                    >
                        {pkg.active && (
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                                <Star className="w-4 h-4 fill-secondary-foreground" />
                                Best Value
                            </div>
                        )}

                        <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>

                        <div className={`mb-6 ${pkg.active ? 'text-primary' : 'text-foreground'}`}>
                            <div className="text-4xl font-bold">
                                {pkg.price}
                                {pkg.perSession && <span className="text-lg font-normal text-muted-foreground">/session</span>}
                            </div>
                            {pkg.totalPrice && (
                                <div className="text-lg font-semibold mt-1">
                                    {pkg.totalPrice} total
                                </div>
                            )}
                            {pkg.duration && (
                                <div className="text-sm text-muted-foreground mt-1">
                                    {pkg.duration}
                                </div>
                            )}
                            {pkg.savings && (
                                <div className="text-sm font-semibold text-green-600 mt-2">
                                    {pkg.savings}
                                </div>
                            )}
                        </div>

                        <ul className="space-y-3 mb-6">
                            {pkg.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${pkg.active ? 'text-primary' : 'text-muted-foreground'}`} />
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
                            Book Your First Session
                        </a>
                    </div>
                ))}
            </div>

            <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                    📌 All sessions can be in‑studio, in‑home, or online – your choice.
                </p>
            </div>
        </section>
    );
}
