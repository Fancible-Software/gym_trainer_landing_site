import { Button } from "@/components/ui/Button";

export default function Contact() {
    return (
        <section id="contact" className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 bg-black text-white rounded-[3rem] p-8 lg:p-16 overflow-hidden relative">
                {/* Background Image placeholder */}
                <div className="absolute inset-0 opacity-20 bg-center bg-cover" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80)' }}></div>

                <div className="relatve z-10 space-y-8">
                    <h2 className="text-4xl font-bold">Get In Touch</h2>
                    <p className="text-gray-400">
                        Have some questions? Feel free to ask them.
                    </p>

                    <div className="space-y-4">
                        <div>
                            <h4 className="font-bold text-primary mb-1">Address</h4>
                            <p>123 Gym Street, Fitness City, FC 12345</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-primary mb-1">Email</h4>
                            <p>contact@brijesh.com</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-primary mb-1">Phone</h4>
                            <p>+123 456 7890</p>
                        </div>
                    </div>
                </div>

                <form className="relative z-10 space-y-4 bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10">
                    <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="First Name" className="bg-transparent border-b border-gray-600 py-3 px-2 focus:outline-none focus:border-primary w-full" />
                        <input type="text" placeholder="Last Name" className="bg-transparent border-b border-gray-600 py-3 px-2 focus:outline-none focus:border-primary w-full" />
                    </div>
                    <input type="email" placeholder="Email" className="bg-transparent border-b border-gray-600 py-3 px-2 focus:outline-none focus:border-primary w-full" />
                    <textarea placeholder="Message" rows={4} className="bg-transparent border-b border-gray-600 py-3 px-2 focus:outline-none focus:border-primary w-full resize-none"></textarea>

                    <Button className="w-full">Send Message</Button>
                </form>
            </div>
        </section>
    );
}
