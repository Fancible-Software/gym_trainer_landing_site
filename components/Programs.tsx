import { Dumbbell, Activity, Heart } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const programs = [
    {
        title: "Weight Lifting",
        description: "Build muscle and increase strength with our specialized weight lifting programs designed for all levels.",
        icon: Dumbbell,
        color: "bg-blue-100 text-blue-600",
    },
    {
        title: "Yoga & Stretching",
        description: "Improve flexibility and reduce stress with our calming yoga and stretching sessions.",
        icon: Activity, // Placeholder, maybe use a better icon if available
        color: "bg-green-100 text-green-600",
    },
    {
        title: "Cardio & Fitness",
        description: "Boost your endurance and heart health with high-energy cardio workouts.",
        icon: Heart,
        color: "bg-red-100 text-red-600",
    },
];

export default function Programs() {
    return (
        <section id="program" className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-4xl font-bold mb-4">Explore our Fitness Programs</h2>
                <p className="text-muted-foreground">
                    Choose a program that fits your goals. We offer a variety of classes to help you stay fit and healthy.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {programs.map((program, index) => (
                    <div key={index} className="bg-background rounded-3xl p-8 border border-border hover:border-secondary hover:shadow-xl transition-all group relative overflow-hidden">
                        {/* Hover Background Accent */}
                        <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className={`w-14 h-14 rounded-2xl ${program.color} flex items-center justify-center mb-6`}>
                            <program.icon className="w-7 h-7" />
                        </div>

                        <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                        <p className="text-muted-foreground mb-6 line-clamp-3">
                            {program.description}
                        </p>

                        <Link href="#" className="inline-flex items-center text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                            Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
