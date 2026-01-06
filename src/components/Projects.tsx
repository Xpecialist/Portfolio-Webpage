import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "A full-featured online store with cart functionality, payment gateway integration, and admin dashboard.",
            tags: ["React", "Node.js", "MongoDB", "Stripe"],
            github: "https://github.com",
            demo: "https://demo.com",
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80"
        },
        {
            id: 2,
            title: "Task Management App",
            description: "Collaborative project management tool with real-time updates, kanban boards, and team chat.",
            tags: ["Next.js", "TypeScript", "Tailwind", "Firebase"],
            github: "https://github.com",
            demo: "https://demo.com",
            image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80"
        },
        {
            id: 3,
            title: "AI Image Generator",
            description: "Web application that uses AI to generate unique images based on text prompts using OpenAI API.",
            tags: ["React", "Python", "FastAPI", "OpenAI"],
            github: "https://github.com",
            demo: "https://demo.com",
            image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80"
        }
    ];

    return (
        <section id="projects" className="py-20 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-surface rounded-xl overflow-hidden border border-white/5 hover:border-secondary/50 transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80" />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">{project.title}</h3>
                                <p className="text-gray-400 mb-4 text-sm line-clamp-3">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-medium px-2 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                                    >
                                        <Github size={18} /> Code
                                    </a>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                                    >
                                        <ExternalLink size={18} /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
