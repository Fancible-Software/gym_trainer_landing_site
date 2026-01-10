import { CheckCircle } from "lucide-react";

export default function StatsIntro() {
    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Image Side */}
                <div className="relative">
                    <div className="relative z-10 mx-auto w-full max-w-[500px] aspect-square rounded-full bg-muted overflow-hidden border-8 border-muted/20">
                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-medium">Stats Image</div>

                        {/* Floating badge */}
                        <div className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2 bg-secondary text-secondary-foreground w-40 h-40 rounded-full flex flex-col items-center justify-center p-4 shadow-xl z-20">
                            <span className="text-4xl font-bold">15</span>
                            <span className="text-sm font-medium text-center leading-tight">Years of Experience</span>
                        </div>
                    </div>
                </div>

                {/* Text Side */}
                <div className="space-y-6">
                    <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                        Start Your Healthy Life Today With Us
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        We provide a complete course for those of you who want to be healthy and have a ideal body. Our trainers are very professional.
                    </p>

                    <ul className="space-y-4 pt-4">
                        {[
                            "Personalized training programs to fit your goals",
                            "Expert guidance from certified trainers",
                            "Progress tracking and nutritional advice"
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                                <span className="text-foreground/80">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="pt-6">
                        <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-semibold transition-all shadow-lg">
                            Explore More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
