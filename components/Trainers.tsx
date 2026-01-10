export default function Trainers() {
    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Meet Coach Brijesh</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Your partner in this fitness journey.
                </p>
            </div>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className="group relative overflow-hidden rounded-3xl aspect-[3/4] bg-muted shadow-2xl">
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">Brijesh's Photo</div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                        <h3 className="text-2xl font-bold">Brijesh</h3>
                        <p className="text-white/80 font-medium">Head Coach & Founder</p>
                    </div>
                </div>

                <div className="space-y-6">
                    <h3 className="text-3xl font-bold">Professional Trainer Since 2010</h3>
                    <p className="text-lg text-muted-foreground">
                        "I believe that fitness is not just about the body, but also about the mind. My mission is to help you unlock your true potential and live a healthier, happier life."
                    </p>
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-bold text-lg">Certifications</h4>
                            <ul className="list-disc list-inside text-muted-foreground">
                                <li>Certified Personal Trainer (NASM)</li>
                                <li>Nutrition Specialist</li>
                                <li>Strength & Conditioning Coach</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">Specializations</h4>
                            <p className="text-muted-foreground">Weight Loss, Muscle Building, Functional Training</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
