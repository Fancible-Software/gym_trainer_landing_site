import Link from "next/link";
import { Facebook, Instagram, Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-background mt-24 py-16 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="space-y-4 md:col-span-2">
                        <Link href="/" className="text-2xl font-bold text-primary">Urbanfit Toronto</Link>
                        <p className="text-muted-foreground">
                            Unlock your full potential with my customized fitness programs.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://www.facebook.com/share/1CDY7hCTz2/?mibextid=wwXIfr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-secondary/90 transition-colors"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.instagram.com/brijeshmaitrak?igsh=MThib2ttN3QzZWs0Zw%3D%3D&utm_source=qr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-secondary/90 transition-colors"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-muted-foreground">
                            <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
                            <li><a href="#program" className="hover:text-primary transition-colors">Programs</a></li>
                            <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
                            <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-muted-foreground">
                            <li>Toronto & GTA</li>
                            <li>contact@urbanfit.com</li>
                            <li>+1 (368) 886-7348</li>
                        </ul>
                    </div>

                </div>

                <div className="mt-16 pt-8 text-center text-muted-foreground text-sm flex items-center justify-center flex-wrap gap-1">
                    © {new Date().getFullYear()} Urbanfit Toronto. All rights reserved. Built with <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" /> by <a href="mailto:info@fanciblesoftware.com" className="text-foreground font-bold text-base ml-1 drop-shadow-md hover:text-primary transition-all">info@fanciblesoftware.com</a>
                </div>
            </div>
        </footer>
    );
}
