import { useState } from "react";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import covidImage from "../assets/covid-tracker.png";
import gameImage from "../assets/area-15-game.png";
import vrImage from "../assets/vr-project.png";

const MAX_VISIBILITY = 3;

interface ProjectsProps {
    isDark?: boolean;
}

const Projects = ({ isDark = true }: ProjectsProps) => {
    const [active, setActive] = useState(0);

    const projects = [
        {
            id: 3,
            title: "Activity on Cloud",
            description: "Booking Engine for activities. React & Tailwind for frontend, Spring API for backend. Includes Admin interface for managing bookings and schedules.",
            tags: ["React", "Tailwind CSS", "Spring Boot", "Java"],
            github: "https://github.com/Xpecialist/ActivityOnCloud",
            demo: "#",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
        },
        {
            id: 1,
            title: "VR Pedestrian Behavior",
            description: "Final Thesis: Evaluation of Pedestrian Behavior in Virtual Reality for Traffic Education Using Eye Tracking technology.",
            tags: ["VR", "Research", "C#", "Unity", "Eye Tracking"],
            github: "https://github.com/Xpecialist/Evaluation-of-Pedestrian-Behavior-in-Virtual-Reality-for-Traffic-Education-Using-Eye-Tracking",
            demo: "#",
            image: vrImage
        },
        {
            id: 2,
            title: "Area 15: Run for your life!",
            description: "A 2D platformer video game developed using Python as part of a software engineering project with dynamic level design.",
            tags: ["Python", "Pygame", "Game Dev"],
            github: "https://github.com/Xpecialist/SoftwareEngineeringProject",
            demo: "#",
            image: gameImage
        },
        {
            id: 4,
            title: "Covid-19 Tracker Map",
            description: "Map-based web application displaying shop and area statuses. Tracks user geolocation and renders interactive markers.",
            tags: ["React", "Leaflet Maps", "Web API"],
            github: "https://github.com/Xpecialist/WebProject",
            demo: "#",
            image: covidImage
        },
        {
            id: 5,
            title: "NoSQL Movie Database",
            description: "Implementation of a high-throughput NoSQL database schema using Apache CassandraDB with optimized data queries.",
            tags: ["NoSQL", "CassandraDB", "Big Data"],
            github: "https://github.com/Xpecialist/bigDataProject",
            demo: "#",
            image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80"
        }
    ];

    const count = projects.length;

    return (
        <section id="projects" className="scroll-mt-16 lg:scroll-mt-24" aria-label="Selected projects">
            <div className={`sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 flex items-center justify-between ${isDark ? 'bg-slate-900/75' : 'bg-slate-100/80'}`}>
                <h2 className={`text-sm font-bold uppercase tracking-widest ${isDark ? 'text-slate-200' : 'text-purple-900'}`}>Projects</h2>
            </div>

            <div className="mb-6">
                <h3 className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-slate-400' : 'text-purple-900'}`}>Featured Projects</h3>
            </div>

            {/* 3D CAROUSEL */}
            <div className="relative w-full min-h-[520px] flex flex-col justify-center items-center py-2">
                {/* Left Navigation Arrow */}
                {active > 0 && (
                    <button
                        onClick={() => setActive(i => i - 1)}
                        className={`absolute left-0 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full border backdrop-blur-md transition-all shadow-xl hover:scale-110 active:scale-95 ${
                            isDark
                                ? 'bg-slate-800/90 hover:bg-teal-400/90 text-white border-slate-700'
                                : 'bg-white/95 hover:bg-purple-600 text-purple-900 hover:text-white border-purple-200 shadow-purple-500/20'
                        }`}
                        aria-label="Previous project"
                    >
                        <ChevronLeft size={24} />
                    </button>
                )}

                {/* Right Navigation Arrow */}
                {active < count - 1 && (
                    <button
                        onClick={() => setActive(i => i + 1)}
                        className={`absolute right-0 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full border backdrop-blur-md transition-all shadow-xl hover:scale-110 active:scale-95 ${
                            isDark
                                ? 'bg-slate-800/90 hover:bg-teal-400/90 text-white border-slate-700'
                                : 'bg-white/95 hover:bg-purple-600 text-purple-900 hover:text-white border-purple-200 shadow-purple-500/20'
                        }`}
                        aria-label="Next project"
                    >
                        <ChevronRight size={24} />
                    </button>
                )}

                {/* 3D Perspective Stack Container */}
                <div className="carousel-3d-perspective">
                    {projects.map((project, i) => {
                        const isActive = i === active;
                        const absDiff = Math.abs(active - i);

                        return (
                            <div
                                key={project.id}
                                className="carousel-3d-card-container"
                                onClick={() => !isActive && setActive(i)}
                                style={{
                                    '--active': isActive ? 1 : 0,
                                    '--offset': (active - i) / 3,
                                    '--direction': Math.sign(active - i),
                                    '--abs-offset': absDiff / 3,
                                    pointerEvents: isActive ? 'auto' : absDiff < MAX_VISIBILITY ? 'auto' : 'none',
                                    opacity: absDiff >= MAX_VISIBILITY ? '0' : '1',
                                    display: absDiff > MAX_VISIBILITY ? 'none' : 'block',
                                    zIndex: count - absDiff,
                                    cursor: !isActive ? 'pointer' : 'default',
                                } as React.CSSProperties}
                            >
                                <div className="carousel-3d-card overflow-hidden flex flex-col select-none backdrop-blur-sm">
                                    <div className="relative h-[250px] overflow-hidden shrink-0">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                            draggable="false"
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent ${
                                            isDark ? 'from-slate-900' : 'from-white'
                                        }`} />
                                    </div>

                                    <div className="carousel-card-content p-4 flex flex-col flex-grow justify-between overflow-hidden">
                                        <div>
                                            <h4 className={`text-base font-bold mb-1 line-clamp-1 ${
                                                isDark ? 'text-slate-200' : 'text-slate-950 font-bold'
                                            }`}>
                                                {project.title}
                                            </h4>
                                            <p className={`text-xs leading-relaxed line-clamp-2 mb-2 ${
                                                isDark ? 'text-slate-400' : 'text-slate-800 font-medium'
                                            }`}>
                                                {project.description}
                                            </p>
                                        </div>

                                        <div>
                                            <div className="flex flex-wrap gap-1 mb-3">
                                                {project.tags.map(tag => (
                                                    <span
                                                        key={tag}
                                                        className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${
                                                            isDark
                                                                ? 'bg-teal-400/10 text-teal-300 border-teal-500/10'
                                                                : 'bg-purple-100 text-purple-900 border-purple-300'
                                                        }`}
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className={`flex items-center gap-4 pt-2 border-t ${
                                                isDark ? 'border-slate-700/50' : 'border-purple-200'
                                            }`}>
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noreferrer noopener"
                                                    className={`flex items-center gap-1.5 text-xs font-bold transition-colors ${
                                                        isDark ? 'text-slate-300 hover:text-teal-300' : 'text-slate-800 hover:text-purple-700'
                                                    }`}
                                                    onClick={(e) => !isActive && e.preventDefault()}
                                                >
                                                    <Github size={16} /> Code
                                                </a>
                                                {project.demo !== "#" && (
                                                    <a
                                                        href={project.demo}
                                                        target="_blank"
                                                        rel="noreferrer noopener"
                                                        className={`flex items-center gap-1.5 text-xs font-bold transition-colors ${
                                                            isDark ? 'text-teal-300 hover:text-white' : 'text-purple-700 hover:text-purple-950'
                                                        }`}
                                                        onClick={(e) => !isActive && e.preventDefault()}
                                                    >
                                                        <ExternalLink size={16} /> Live Demo
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Dots */}
                <div className="flex justify-center items-center gap-2 mt-6 z-20">
                    {projects.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                i === active
                                    ? isDark ? 'w-6 bg-teal-300' : 'w-6 bg-purple-600'
                                    : isDark ? 'w-2 bg-slate-600 hover:bg-slate-400' : 'w-2 bg-slate-400 hover:bg-purple-400'
                            }`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
