import { motion } from "framer-motion";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import covidImage from "../assets/covid-tracker.png";
import gameImage from "../assets/area-15-game.png";
import vrImage from "../assets/vr-project.png";
import { useRef, useState } from "react";

const Projects = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const projects = [
        {
            id: 1,
            title: "VR Pedestrian Behavior",
            description: "Final Thesis: Evaluation of Pedestrian Behavior in Virtual Reality for Traffic Education Using Eye Tracking.",
            tags: ["VR", "Research", "C#", "Unity"],
            github: "https://github.com/Xpecialist/Evaluation-of-Pedestrian-Behavior-in-Virtual-Reality-for-Traffic-Education-Using-Eye-Tracking",
            demo: "#",
            image: vrImage
        },
        {
            id: 2,
            title: "Area 15: Run for your life!",
            description: "A 2D platformer video game developed using Python as part of a software engineering project.",
            tags: ["Python", "Game Dev"],
            github: "https://github.com/Xpecialist/SoftwareEngineeringProject",
            demo: "#",
            image: gameImage
        },
        {
            id: 3,
            title: "Activity on Cloud",
            description: "Booking Engine for activities. React & Tailwind for frontend, Spring API for backend. Includes Admin interface.",
            tags: ["React", "Tailwind", "Springboot"],
            github: "https://github.com/Xpecialist/ActivityOnCloud",
            demo: "#",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
        },
        {
            id: 4,
            title: "Covid-19 Tracker Map",
            description: "Map-based website showing covid-free shops/areas. Tracks user location and displays status markers.",
            tags: ["React", "Maps", "Web"],
            github: "https://github.com/Xpecialist/WebProject",
            demo: "#",
            image: covidImage
        },
        {
            id: 5,
            title: "NoSQL Movie Database",
            description: "Implementation of a NoSQL database with CassandraDB including complex queries for data retrieval.",
            tags: ["NoSQL", "CassandraDB"],
            github: "https://github.com/Xpecialist/bigDataProject",
            demo: "#",
            image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80"
        }
    ];

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            // Calculate stride: card width + gap (24px)
            // Using 400px (md) or 85vw (mobile) approx, but best to read actual clientWidth of first child
            const firstCard = container.firstElementChild as HTMLElement;
            const stride = firstCard ? firstCard.clientWidth + 24 : 424;

            const currentScroll = container.scrollLeft;
            // Align to nearest stride multiple for "exact stop" feel
            const targetScroll = direction === 'left'
                ? Math.floor((currentScroll - 10) / stride) * stride
                : Math.ceil((currentScroll + 10) / stride) * stride;

            container.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            });
        }
    };

    // Mouse Drag Handlers
    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollContainerRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
        scrollContainerRef.current.style.cursor = 'grabbing';
        scrollContainerRef.current.style.scrollBehavior = 'auto';
    };

    const handleMouseLeave = () => {
        if (!isDragging) return;
        setIsDragging(false);
        if (scrollContainerRef.current) {
            scrollContainerRef.current.style.cursor = 'grab';
            scrollContainerRef.current.style.scrollBehavior = 'smooth';
        }
    };

    const handleMouseUp = () => {
        if (!isDragging) return;
        setIsDragging(false);
        if (scrollContainerRef.current) {
            scrollContainerRef.current.style.cursor = 'grab';
            scrollContainerRef.current.style.scrollBehavior = 'smooth';
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollContainerRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 1.5;
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };


    return (
        <section id="projects" className="py-20 text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
                </motion.div>
            </div>

            <div className="relative group w-full">
                {/* Left Button */}
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-surface/30 p-3 rounded-full hover:bg-primary/80 transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:block backdrop-blur-md border border-white/10 shadow-lg"
                >
                    <ChevronLeft size={24} />
                </button>

                {/* Right Button */}
                <button
                    onClick={() => scroll('right')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-surface/80 p-3 rounded-full hover:bg-primary transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:block backdrop-blur-sm border border-white/10"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Scroll Container */}
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto gap-6 pb-8 hide-scrollbar cursor-grab active:cursor-grabbing px-4 md:px-8"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            // Dimensions: "Tad smaller" -> Reduced from 450px to 400px on desktop
                            className="
                                flex-shrink-0 
                                w-[85vw] md:w-[400px]
                                h-[450px]
                                bg-surface rounded-xl overflow-hidden border border-white/5 
                                hover:border-secondary/50 transition-all duration-300 hover:-translate-y-2 
                                flex flex-col select-none
                            "
                        >
                            <div className="relative h-56 overflow-hidden pointer-events-none shrink-0">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    draggable="false"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80" />
                            </div>

                            <div className="p-5 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-1 group-hover:text-secondary transition-colors line-clamp-1">{project.title}</h3>
                                <p className="text-gray-400 mb-3 text-sm line-clamp-3 overflow-hidden">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4 mt-auto content-end">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-medium px-2 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 mt-auto">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                                        onMouseDown={(e) => e.stopPropagation()}
                                    >
                                        <Github size={18} /> Code
                                    </a>
                                    {project.demo !== "#" && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                                            onMouseDown={(e) => e.stopPropagation()}
                                        >
                                            <ExternalLink size={18} /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <style>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};

export default Projects;
