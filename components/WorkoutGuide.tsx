import { Play } from "lucide-react";

export default function WorkoutGuide() {
    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Check Out The Workout Guide</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Get started with these simple workouts.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="group relative aspect-video bg-muted rounded-3xl overflow-hidden cursor-pointer">
                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">Video Thumbnail {i}</div>

                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                                    <Play className="w-5 h-5 text-primary fill-primary ml-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
