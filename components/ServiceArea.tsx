"use client";

import { MapPin, CheckCircle2 } from "lucide-react";

const serviceAreas = [
    { name: "Downtown Toronto", color: "bg-primary" },
    { name: "North York", color: "bg-secondary" },
    { name: "Scarborough", color: "bg-primary" },
    { name: "Etobicoke", color: "bg-secondary" },
    { name: "Mississauga", color: "bg-primary" },
    { name: "Vaughan", color: "bg-secondary" },
    { name: "Markham", color: "bg-primary" },
    { name: "Richmond Hill", color: "bg-secondary" },
];

export default function ServiceArea() {
    return (
        <section id="service-area" className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full mb-4">
                    <MapPin className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-semibold text-secondary">Service Coverage</span>
                </div>
                <h2 className="text-4xl font-bold mb-4">Where I Train Clients</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Professional personal training services across Toronto and the Greater Toronto Area.
                    I come to you or meet you at your preferred location.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Map Visualization */}
                <div className="relative order-2 lg:order-1">
                    <div className="relative bg-gradient-to-br from-secondary/5 to-primary/5 rounded-3xl p-8 border border-border">
                        {/* Stylized Map */}
                        <div className="relative aspect-square max-w-md mx-auto">
                            {/* Center point - Toronto */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                                <div className="relative">
                                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-xl animate-pulse">
                                        <MapPin className="w-8 h-8 text-primary-foreground" />
                                    </div>
                                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                                        <p className="text-sm font-bold">Toronto</p>
                                    </div>
                                </div>
                            </div>

                            {/* Service area circles - radiating outward */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-[60%] h-[60%] border-2 border-primary/30 rounded-full animate-pulse"></div>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-[80%] h-[80%] border-2 border-secondary/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-full h-full border-2 border-primary/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                            </div>

                            {/* Location markers around the map */}
                            {[
                                { top: '10%', left: '50%', name: 'North York' },
                                { top: '50%', left: '85%', name: 'Scarborough' },
                                { top: '50%', left: '15%', name: 'Etobicoke' },
                                { top: '85%', left: '30%', name: 'Mississauga' },
                                { top: '15%', left: '70%', name: 'Markham' },
                            ].map((location, index) => (
                                <div
                                    key={index}
                                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                                    style={{ top: location.top, left: location.left }}
                                >
                                    <div className="w-3 h-3 bg-secondary rounded-full shadow-lg"></div>
                                </div>
                            ))}
                        </div>

                        {/* Coverage radius indicator */}
                        <div className="mt-8 text-center">
                            <p className="text-sm text-muted-foreground">
                                <span className="font-semibold text-foreground">50km+</span> Service Radius
                            </p>
                        </div>
                    </div>
                </div>

                {/* Service Areas List */}
                <div className="order-1 lg:order-2 space-y-6">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Areas We Serve</h3>
                        <p className="text-muted-foreground mb-6">
                            Available for in-home, condo gym, or studio sessions across all these locations:
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        {serviceAreas.map((area, index) => (
                            <div
                                key={index}
                                className="group relative flex items-center gap-3 bg-background border border-border p-4 rounded-xl hover:border-primary transition-all hover:shadow-lg"
                            >
                                <div className={`w-10 h-10 ${area.color} rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                                    <CheckCircle2 className="w-5 h-5 text-white" />
                                </div>
                                <span className="font-semibold">{area.name}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-2xl">
                        <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-primary" />
                            Don't see your area?
                        </h4>
                        <p className="text-sm text-muted-foreground mb-4">
                            I may still be able to serve your location. Contact me to discuss your specific needs and location.
                        </p>
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full font-semibold text-sm transition-all shadow-lg cursor-pointer"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
