import { Code2, Smartphone, Globe, Layers, Zap, Shield, Laptop, Terminal, Cpu, Database } from 'lucide-react';

const About = () => {
    const categories = [
        {
            title: "Preferred Tech Stack",
            icon: <Cpu className="text-indigo-400" />,
            skills: [
                { name: 'React', image: '/stack/react.png' },
                { name: 'Laravel', image: '/stack/laravel.png' },
                { name: 'Tailwind CSS', image: '/stack/tailwind.png' },
                { name: 'TypeScript', image: '/stack/typescript.png' },
            ]
        },
        {
            title: "Development Tools",
            icon: <Terminal className="text-green-400" />,
            skills: [
                { name: 'VS Code', image: '/stack/vscode.png' },
                { name: 'GitHub', image: '/stack/github.png' },
                { name: 'Git', image: '/stack/git.png' },
                { name: 'Postman', image: '/stack/postman.png' },
            ]
        },
        {
            title: "Others",
            icon: <Database className="text-purple-400" />,
            skills: [
                { name: 'JavaScript', image: '/stack/javascript.png' },
                { name: 'MySQL', image: '/stack/mysql.png' },
                { name: 'Livewire', image: '/stack/livewire.png' },
                { name: 'PHP', image: '/stack/php.png' },
            ]
        }
    ];

    return (
        <section id="about" className="py-24 max-w-6xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
                {/* Profile Image Section */}
                <div className="lg:sticky lg:top-32 w-full lg:w-1/3">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative aspect-square rounded-3xl overflow-hidden glass border-white/10">
                            <img
                                src="/mypicture.png"
                                alt="Profile"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>

                        <div className="mt-8 space-y-4">
                            <h2 className="text-4xl font-black">
                                About <span className="text-gradient">Me</span>
                            </h2>
                            <p className="text-slate-400 leading-relaxed">
                                I'm a passionate developer dedicated to crafting exceptional digital experiences.
                                With a focus on performance and clean code, I turn complex problems into elegant solutions.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Categories Section */}
                <div className="flex-grow w-full space-y-12">
                    {categories.map((category, catIdx) => (
                        <div key={catIdx} className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                                    {category.icon}
                                </div>
                                <h3 className="text-2xl font-bold font-outfit">{category.title}</h3>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {category.skills.map((skill, skillIdx) => (
                                    <div key={skillIdx} className="glass-card group flex items-center gap-4 hover:border-indigo-500/50">
                                        <div className="p-2 rounded-xl bg-white/5 group-hover:bg-indigo-500/10 transition-colors w-12 h-12 flex items-center justify-center overflow-hidden">
                                            {skill.image ? (
                                                <img src={skill.image} alt={skill.name} className="max-w-full max-h-full object-contain" />
                                            ) : (
                                                skill.icon
                                            )}
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-200 tracking-wide">{skill.name}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
