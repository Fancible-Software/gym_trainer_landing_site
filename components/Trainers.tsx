export default function Trainers() {
    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Our Best Trainers</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Meet our professional trainers.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { name: "John Doe", role: "Fitness Trainer" },
                    { name: "Jane Smith", role: "Yoga Instructor" },
                    { name: "Mike Johnson", role: "Body Building" },
                ].map((trainer, i) => (
                    <div key={i} className="group relative overflow-hidden rounded-3xl aspect-[3/4] bg-muted">
                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">Trainer {i + 1}</div>

                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white translate-y-full group-hover:translate-y-0 transition-transform">
                            <h3 className="text-xl font-bold">{trainer.name}</h3>
                            <p className="text-white/80">{trainer.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
