import { useState } from "react";
import { Github, ExternalLink, ArrowUpRight, ChevronLeft, ChevronRight, Layers, LayoutList } from "lucide-react";
import covidImage from "../assets/covid-tracker.png";
import gameImage from "../assets/area-15-game.png";
import vrImage from "../assets/vr-project.png";

const MAX_VISIBILITY = 3;

const Projects = () => {
    const [viewMode, setViewMode] = useState<'list' | 'carousel'>('list');
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
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 flex items-center justify-between">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">Projects</h2>
            </div>

            {/* View Mode Toggle Header */}
            <div className="flex items-center justify-between mb-8">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 hidden lg:block">Featured Work</h3>
                <div className="flex items-center gap-1 bg-slate-800/80 p-1 rounded-lg border border-slate-700/50 text-xs">
                    <button
                        onClick={() => setViewMode('list')}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                            viewMode === 'list'
                                ? 'bg-teal-400/20 text-teal-300 font-semibold shadow-sm'
                                : 'text-slate-400 hover:text-slate-200'
                        }`}
                    >
                        <LayoutList size={14} /> Cards
                    </button>
                    <button
                        onClick={() => setViewMode('carousel')}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                            viewMode === 'carousel'
                                ? 'bg-teal-400/20 text-teal-300 font-semibold shadow-sm'
                                : 'text-slate-400 hover:text-slate-200'
                        }`}
                    >
                        <Layers size={14} /> 3D Carousel
                    </button>
                </div>
            </div>

            {/* VIEW MODE: LIST (Brittany Chiang style cards) */}
            {viewMode === 'list' && (
                <ul className="group/list">
                    {projects.map((project) => (
                        <li key={project.id} className="mb-12">
                            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                                
                                {/* Content Section */}
                                <div className="z-10 sm:order-2 sm:col-span-6">
                                    <h3>
                                        <a
                                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                        >
                                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                                            <span>
                                                {project.title}
                                                <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                                            </span>
                                        </a>
                                    </h3>
                                    <p className="mt-2 text-sm leading-normal text-slate-400">
                                        {project.description}
                                    </p>
                                    <ul className="mt-3 flex flex-wrap" aria-label="Technologies used">
                                        {project.tags.map((tag) => (
                                            <li key={tag} className="mr-1.5 mt-2">
                                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                                    {tag}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Thumbnail Image */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    width="200"
                                    height="48"
                                    className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1 z-10"
                                    draggable="false"
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            {/* VIEW MODE: 3D CAROUSEL */}
            {viewMode === 'carousel' && (
                <div className="relative w-full min-h-[520px] flex flex-col justify-center items-center py-4">
                    {/* Left Navigation Arrow */}
                    {active > 0 && (
                        <button
                            onClick={() => setActive(i => i - 1)}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-slate-800/90 hover:bg-teal-400/90 text-white p-3 rounded-full border border-slate-700 backdrop-blur-md transition-all shadow-xl hover:scale-110 active:scale-95"
                            aria-label="Previous project"
                        >
                            <ChevronLeft size={24} />
                        </button>
                    )}

                    {/* Right Navigation Arrow */}
                    {active < count - 1 && (
                        <button
                            onClick={() => setActive(i => i + 1)}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-slate-800/90 hover:bg-teal-400/90 text-white p-3 rounded-full border border-slate-700 backdrop-blur-md transition-all shadow-xl hover:scale-110 active:scale-95"
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
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
                                        </div>

                                        <div className="carousel-card-content p-4 flex flex-col flex-grow justify-between overflow-hidden">
                                            <div>
                                                <h4 className="text-base font-bold text-slate-200 mb-1 line-clamp-1">
                                                    {project.title}
                                                </h4>
                                                <p className="text-slate-400 text-xs leading-relaxed line-clamp-2 mb-2">
                                                    {project.description}
                                                </p>
                                            </div>

                                            <div>
                                                <div className="flex flex-wrap gap-1 mb-3">
                                                    {project.tags.map(tag => (
                                                        <span
                                                            key={tag}
                                                            className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-teal-400/10 text-teal-300 border border-teal-500/10"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>

                                                <div className="flex items-center gap-4 pt-2 border-t border-slate-700/50">
                                                    <a
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-teal-300 transition-colors"
                                                        onClick={(e) => !isActive && e.preventDefault()}
                                                    >
                                                        <Github size={16} /> Code
                                                    </a>
                                                    {project.demo !== "#" && (
                                                        <a
                                                            href={project.demo}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center gap-1.5 text-xs text-teal-300 hover:text-white transition-colors"
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
                                    i === active ? 'w-6 bg-teal-300' : 'w-2 bg-slate-600 hover:bg-slate-400'
                                }`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
