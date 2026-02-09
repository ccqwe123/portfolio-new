import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProjectGrid from './components/ProjectGrid';
import { Mail, Github } from 'lucide-react';

function App() {
  return (
    <main className="relative min-h-screen bg-neutral-950 text-slate-200">
      <Navbar />

      <Hero />

      <About />

      <ProjectGrid />

      {/* Contact Section */}
      <section id="contact" className="py-24 max-w-4xl mx-auto px-6 text-center">
        <div className="glass-card py-16 px-8 relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/10 blur-3xl -z-10" />

          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            I'm currently available for freelance projects and full-time opportunities.
            Feel free to reach out if you have a project in mind or just want to say hi!
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:jaysoncabbab6@gmail.com" className="btn-primary">
              <Mail size={20} />
              jaysoncabbab6@gmail.com
            </a>

            <div className="flex items-center gap-4">
              <a href="https://github.com/ccqwe123" target="_blank" rel="noopener" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:text-indigo-400 transition-all">
                <Github size={24} />
              </a>
              {/* <a href="https://linkedin.com" target="_blank" rel="noopener" className="disable w-12 h-12 rounded-full glass flex items-center justify-center hover:text-cyan-400 transition-all">
                <Linkedin size={24} />
              </a> */}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-12 text-center">
        <div className="mb-6 flex justify-center gap-8">
          <a href="#home" className="text-slate-500 hover:text-slate-300 transition-colors">Home</a>
          <a href="#projects" className="text-slate-500 hover:text-slate-300 transition-colors">Projects</a>
          <a href="#about" className="text-slate-500 hover:text-slate-300 transition-colors">About</a>
          <a href="#contact" className="text-slate-500 hover:text-slate-300 transition-colors">Contact</a>
        </div>
        <p className="text-slate-600 text-sm">
          Built with React, Tailwind CSS & Lucide Icons.
          <br />
          © {new Date().getFullYear()} Portfolio Design.
        </p>
      </footer>
    </main>
  );
}

export default App;
