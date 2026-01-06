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
            const containerWidth = scrollContainerRef.current.clientWidth;
            // Scroll one item width roughly (approx 1/3 of container on desktop)
            const scrollAmount = containerWidth / 3;
            const newScrollLeft = direction === 'left'
                ? scrollContainerRef.current.scrollLeft - scrollAmount
                : scrollContainerRef.current.scrollLeft + scrollAmount;

            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
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
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
        if (scrollContainerRef.current) {
            scrollContainerRef.current.style.cursor = 'grab';
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        if (scrollContainerRef.current) {
            scrollContainerRef.current.style.cursor = 'grab';
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollContainerRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed multiplier
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };


    return (
        <section id="projects" className="py-20 text-white relative">
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

                <div className="relative group">
                    {/* Left Button */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-surface/80 p-3 rounded-full hover:bg-primary transition-colors hidden md:block backdrop-blur-sm border border-white/10"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    {/* Right Button */}
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-surface/80 p-3 rounded-full hover:bg-primary transition-colors hidden md:block backdrop-blur-sm border border-white/10"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Scroll Container */}
                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar cursor-grab active:cursor-grabbing"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                // Width logic: Mobile = full, md = 1/2, lg = 1/3. 
                                // Subtracting gap approximation from calc to ensure dragging feels right
                                className="min-w-[85vw] md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] snap-center bg-surface rounded-xl overflow-hidden border border-white/5 hover:border-secondary/50 transition-all duration-300 hover:-translate-y-2 flex-shrink-0 select-none"
                            >
                                <div className="relative h-48 overflow-hidden pointer-events-none"> {/* Disable pointer events on image to prevent drag conflicts */}
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
                                            onMouseDown={(e) => e.stopPropagation()} // Allow clicking links without dragging
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
