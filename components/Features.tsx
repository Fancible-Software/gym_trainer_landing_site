import { Check } from "lucide-react";

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

                    <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-semibold transition-all shadow-lg">
                        See All Features
                    </button>
                </div>

                {/* Image Grid */}
                <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
                    {/* Placeholder Layout */}
                    <div className="space-y-4 mt-8">
                        <div className="aspect-[4/5] bg-muted rounded-3xl overflow-hidden relative">
                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">Image 1</div>
                            {/* Floating badge */}
                            <div className="absolute bottom-4 left-4 right-4 bg-secondary/90 backdrop-blur p-4 rounded-xl">
                                <p className="text-xs font-bold text-secondary-foreground">Trusted by</p>
                                <p className="text-lg font-bold text-secondary-foreground">500+ Member</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="aspect-[4/5] bg-muted rounded-3xl overflow-hidden relative">
                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">Image 2</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
