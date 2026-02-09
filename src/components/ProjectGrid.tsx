import { Github, ExternalLink } from 'lucide-react';

interface Project {
    title: string;
    description: string;
    image: string;
    tags: string[];
    github: string;
    demo: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <div className="glass-card group overflow-hidden p-0 flex flex-col h-full hover:border-indigo-500/50">
            <div className="relative aspect-video overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex gap-4">
                        <a href={project.github} target='_blank' className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                            <Github size={20} />
                        </a>
                        {project.demo !== "#" && (
                            <a href={project.demo} target='_blank' className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-600 transition-colors">
                                <ExternalLink size={20} />
                            </a>
                        )}
                    </div>
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-md bg-white/5 text-slate-400">
                            {tag}
                        </span>
                    ))}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                </p>
            </div>
        </div>
    );
};

const ProjectGrid = () => {
    const projects: Project[] = [
        {
            title: "TTC",
            description: "TTC System is an online platform that allows members to pay fees, book tennis courts, join tournaments, and easily generate reports.",
            image: "/ttc.png",
            tags: ["React", "TypeScript", "Tailwind", "Laravel", "MySQL"],
            github: "https://github.com/ccqwe123/tennis-lara-react",
            demo: "#"
        },
        {
            title: "Oralux Dental Clinic",
            description: "Oralux Dental Clinic Landing Page is a website that showcases the clinic’s services and allows visitors to book a free demo appointment online.",
            image: "/oralux.png",
            tags: ["React", "Framer Motion", "Tailwind v3"],
            github: "https://github.com/ccqwe123/oralux-frontend",
            demo: "http://aguora.tplinkdns.com:6870/"
        },
        {
            title: "OnPoint Quotation",
            description: "Onpoint Quotation System is a sales platform for agents where they can add products to cart, select plans, and manage booked demos.",
            image: "/onpoint.png",
            tags: ["React", "Typescript", "Laravel", "Tailwind", "MySQL"],
            github: "https://github.com/ccqwe123/onpoint-commerce",
            demo: "http://aguora.tplinkdns.com:8030/"
        }
    ];

    return (
        <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-black">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-slate-400 max-w-lg">
                        A selection of my recent work across web and mobile platforms.
                    </p>
                </div>
                <a href="https://github.com/ccqwe123" className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-2">
                    View all on GitHub <ExternalLink size={18} />
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
};

export default ProjectGrid;
