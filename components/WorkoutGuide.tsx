import { Play, Clock, Activity } from "lucide-react";

const workouts = [
    {
        title: "Incline Shoulder Press",
        duration: "12 min",
        level: "Intermediate",
        url: "https://player.cloudinary.com/embed/?cloud_name=dq1li2qrf&public_id=2510394f-34a0-440c-aeba-956908515b92_bibuh4&profile=cld-default"
    },
    {
        title: "Pushups Mastery",
        duration: "15 min",
        level: "Beginner",
        url: "https://player.cloudinary.com/embed/?cloud_name=dq1li2qrf&public_id=6c5b4208-4c4a-4da5-9233-afd6ea6dd516_sv7qud&profile=cld-default"
    },
    {
        title: "Strength & Power",
        duration: "45 min",
        level: "Advanced",
        url: "https://player.cloudinary.com/embed/?cloud_name=dq1li2qrf&public_id=92add95a-4b1f-4c2b-922c-0ae16024fe18_m21zih&profile=cld-default"
    },
    {
        title: "Lat Pull Down",
        duration: "20 min",
        level: "Intermediate",
        url: "https://player.cloudinary.com/embed/?cloud_name=dq1li2qrf&public_id=187e6e81-5264-45a7-b87a-992a6ab82cc9_eo9gxh&profile=cld-default"
    }
];

export default function WorkoutGuide() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Workout Guide</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Follow along with these guided sessions to maximize your results.
                        From warmups to intense strength training, I've got you covered.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {workouts.map((workout, index) => (
                        <div key={index} className="bg-background rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-border/50 flex flex-col">
                            {/* Video Container */}
                            <div className="relative aspect-video w-full bg-black">
                                <iframe
                                    src={workout.url}
                                    className="w-full h-full"
                                    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            {/* Video Info */}
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <span className={`px-3 py-1 text-xs font-semibold rounded-full 
                                        ${workout.level === 'Beginner' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                                            workout.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                                                workout.level === 'Advanced' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                                                    'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                                        }`}>
                                        {workout.level}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-2">{workout.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
