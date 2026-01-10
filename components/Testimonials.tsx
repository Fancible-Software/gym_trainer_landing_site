import { Quote } from "lucide-react";

export default function Testimonials() {
    return (
        <section id="review" className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">What My Clients Say</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Read what my clients say about me.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center bg-muted/30 rounded-[3rem] p-8 lg:p-16">
                <div className="relative">
                    <div className="aspect-square rounded-full overflow-hidden border-8 border-white shadow-xl max-w-md mx-auto">
                        <div className="w-full h-full bg-gray-300 flex items-center justify-center text-muted-foreground">User Image</div>
                    </div>
                    {/* Quote Icon */}
                    <div className="absolute top-0 right-0 lg:right-10 bg-secondary text-secondary-foreground w-16 h-16 rounded-full flex items-center justify-center">
                        <Quote className="w-8 h-8 fill-current" />
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="flex gap-1 text-primary">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <span key={i}>★</span>
                        ))}
                    </div>
                    <p className="text-2xl font-medium italic leading-relaxed">
                        "Coach Brijesh is amazing! He is very professional and helpful. I've achieved my fitness goals thanks to his guidance."
                    </p>
                    <div>
                        <h4 className="text-xl font-bold">John Doe</h4>
                        <p className="text-muted-foreground">Entrepreneur</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
