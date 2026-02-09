import { Download, ChevronRight } from 'lucide-react';
import Typewriter from './Typewriter';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-indigo-600/20 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-400/10 rounded-full blur-[120px] -z-10 animate-pulse delay-700" />

            <div className="max-w-4xl text-center space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-sm mb-4">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                    </span>
                    Available for new opportunities
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight flex flex-col items-center">
                    <Typewriter text="Hi, I'm Jayson" delay={100} className="block mb-4" />
                    <span className="text-gradient">
                        <Typewriter text="Web Developer" delay={100} startDelay={1500} />
                    </span>
                </h1>

                <div className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed mt-6 h-24 sm:h-auto">
                    <Typewriter
                        text="I build modern, responsive, and user-friendly web applications."
                        delay={50}
                        startDelay={3000}
                        showCursor={true}
                    />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <a href="#projects" className="btn-primary">
                        View My Projects
                        <ChevronRight size={20} />
                    </a>

                    <a
                        href="/resume.pdf"
                        download
                        className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-all"
                    >
                        <Download size={20} className="text-indigo-400" />
                        Resume / CV
                    </a>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
                <div className="w-6 h-10 rounded-full border-2 border-slate-400 flex justify-center p-1">
                    <div className="w-1 h-2 bg-slate-400 rounded-full"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
