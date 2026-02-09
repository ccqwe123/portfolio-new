import { Home, Folder, User, FileText, Github } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl px-6 py-4 glass rounded-full flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-white">
                    J
                </div>
                <span className="font-outfit font-bold text-lg hidden sm:block">Portfolio</span>
            </div>

            <div className="flex items-center gap-6">
                <NavLink href="#home" icon={<Home size={20} />} label="Home" />
                <NavLink href="#projects" icon={<Folder size={20} />} label="Projects" />
                <NavLink href="#about" icon={<User size={20} />} label="About" />
                <NavLink href="#resume" icon={<FileText size={20} />} label="Resume" />
            </div>

            <div className="hidden md:flex items-center gap-4">
                <SocialLink href="https://github.com/ccqwe123" icon={<Github size={20} />} />
            </div>
        </nav>
    );
};

const NavLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
    <a
        href={href}
        className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors duration-200"
        title={label}
    >
        {icon}
        <span className="text-sm font-medium hidden lg:block">{label}</span>
    </a>
);

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
    >
        {icon}
    </a>
);

export default Navbar;
