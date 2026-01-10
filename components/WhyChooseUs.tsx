import { CheckCircle2, UserCheck, ShieldCheck } from "lucide-react";

export default function WhyChooseUs() {
    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Why Should People Choose Us</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    We have a lot of features that make us the best choice for you.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Image Side */}
                <div className="relative order-2 lg:order-1">
                    <div className="relative z-10 mx-auto w-full max-w-[500px] aspect-square rounded-full bg-muted overflow-hidden border-8 border-white/50 shadow-2xl">
                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-medium">Why Us Image</div>

                        {/* Floating badge */}
                        <div className="absolute top-1/4 -right-4 bg-secondary text-secondary-foreground px-6 py-4 rounded-xl shadow-xl z-20">
                            <span className="text-xl font-bold block">150+</span>
                            <span className="text-xs font-medium uppercase tracking-wider">Expert Trainers</span>
                        </div>
                    </div>
                </div>

                {/* Features Side */}
                <div className="space-y-8 order-1 lg:order-2">
                    {[
                        {
                            title: "Personal Training",
                            desc: "Our trainers are ready to help you achieve your goals.",
                            icon: UserCheck
                        },
                        {
                            title: "Expert Teams",
                            desc: "We have a team of experts who are ready to help you.",
                            icon: CheckCircle2
                        },
                        {
                            title: "Affordable Price",
                            desc: "We offer affordable prices for everyone.",
                            icon: ShieldCheck
                        }
                    ].map((item, index) => (
                        <div key={index} className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <item.icon className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-muted-foreground">{item.desc}</p>
                            </div>
                        </div>
                    ))}

                    <div className="pt-4">
                        <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-semibold transition-all shadow-lg">
                            Start Training
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
