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
                        Through our exercises, you will find harmony in your body and mind. We focus on mental health as well as physical health.
                    </p>
                    <Button variant="primary" size="lg">
                        Personal Training
                    </Button>
                </div>

                <div className="relative">
                    <div className="aspect-square rounded-3xl overflow-hidden bg-muted relative">
                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">Harmony Image</div>
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
