interface CVProps {
    isDark?: boolean;
}

const CV = ({ isDark = true }: CVProps) => {
    const experiences = [
        {
            id: 1,
            role: "Game Master",
            company: "Playhouse Board Game Cafe",
            period: "Sept 2024 — Sept 2025",
            description:
                "Developed and maintained expert-level knowledge of a catalog of 100-120 complex products. Conducted requirements-gathering conversations with customer groups (2-15 people) to recommend optimal solutions. Collaborated with a cross-functional team in high-pressure environments, delivering clear on-the-spot rules explanations and managing concurrent workflows.",
            skills: ["Requirements Gathering", "Team Coordination", "Technical Support", "Troubleshooting", "User Onboarding", "Communication"]
        },
        {
            id: 2,
            role: "Full Stack Developer Intern",
            company: "Knowledge A.E.",
            period: "March 2024 — May 2024",
            description:
                "Designed and implemented RESTful APIs in Java, applying OOP principles. Built a full-stack Booking Engine application with a React.js front end and Spring Boot backend. Collaborated within a cross-functional Agile/Scrum team, actively participating in sprint planning and daily stand-ups across the SDLC.",
            skills: ["Java", "React.js", "Spring Boot", "RESTful APIs", "Agile/Scrum", "SDLC", "OOP"]
        },
    ];

    const education = [
        {
            id: 1,
            degree: "Computer Engineer & Informatics (Integrated Masters)",
            school: "University of Patras",
            period: "2018 — 2024",
            description: "Integrated Master's degree focusing on Software Engineering, Databases, and Systems Design.",
            skills: ["Software Engineering", "Algorithms", "Databases", "Distributed Systems", "SDLC"]
        },
        {
            id: 2,
            degree: "ETSI de Sistemas Informáticos",
            school: "Universidad Politécnica de Madrid",
            period: "2022 — 2023",
            description: "International ERASMUS exchange program in Madrid, Spain.",
            skills: ["International Exchange", "Computer Systems", "Spanish"]
        },
    ];

    const skills = [
        "Java", "C#", "Python", "JavaScript", "SQL", "React.js", "Spring Boot", "NoSQL (CassandraDB)", "Agile/Scrum", "SDLC", "Quality Assurance (QA)", "Git/GitHub", "Microsoft Office 365", "English (C2)"
    ];

    return (
        <div className="space-y-24">
            {/* ABOUT SECTION */}
            <section id="about" className="scroll-mt-16 lg:scroll-mt-24" aria-label="About me">
                <div className={`sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 ${isDark ? 'bg-slate-900/75' : 'bg-slate-100/80'}`}>
                    <h2 className={`text-sm font-bold uppercase tracking-widest ${isDark ? 'text-slate-200' : 'text-purple-900'}`}>About</h2>
                </div>
                <div className={`space-y-4 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-800 font-medium'}`}>
                    <p>
                        I'm a <span className={`font-semibold ${isDark ? 'text-slate-200' : 'text-slate-950 font-bold'}`}>Full Stack Developer</span> and Computer Engineer from Greece, passionate about building high-performance web applications and resilient backend services. I thrive at the intersection of frontend user experience and robust architecture.
                    </p>
                    <p>
                        Holding an <span className={`font-semibold ${isDark ? 'text-slate-200' : 'text-slate-950 font-bold'}`}>Integrated Master's Degree</span> from the University of Patras (with exchange studies at Universidad Politécnica de Madrid), my experience ranges from developing full-stack Web Applications to VR Video Games and even Academic Researches.
                    </p>

                    {/* Skill Tags Cloud */}
                    <div className="pt-4">
                        <h4 className={`text-xs font-bold uppercase tracking-widest mb-3 ${isDark ? 'text-slate-300' : 'text-slate-900'}`}>Tech Stack & Tools</h4>
                        <div className="flex flex-wrap gap-1.5">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className={`flex items-center rounded-full px-3 py-1 text-xs font-semibold leading-5 border ${
                                        isDark
                                            ? 'bg-teal-400/10 text-teal-300 border-teal-500/10'
                                            : 'bg-purple-100/80 text-purple-900 border-purple-300 shadow-sm'
                                    }`}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* EXPERIENCE SECTION */}
            <section id="experience" className="scroll-mt-16 lg:scroll-mt-24" aria-label="Work experience">
                <div className={`sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 ${isDark ? 'bg-slate-900/75' : 'bg-slate-100/80'}`}>
                    <h2 className={`text-sm font-bold uppercase tracking-widest ${isDark ? 'text-slate-200' : 'text-purple-900'}`}>Experience</h2>
                </div>
                <div>
                    <ol className="group/list">
                        {experiences.map((exp) => (
                            <li key={exp.id} className="mb-12">
                                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                    <div className={`absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block ${
                                        isDark
                                            ? 'lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]'
                                            : 'lg:group-hover:bg-white lg:group-hover:shadow-md lg:group-hover:border lg:group-hover:border-purple-200'
                                    }`} />
                                    <header
                                        className={`z-10 mb-2 mt-1 text-xs font-bold uppercase tracking-wide sm:col-span-2 ${isDark ? 'text-slate-500' : 'text-slate-600'}`}
                                        aria-label={exp.period}
                                    >
                                        {exp.period}
                                    </header>
                                    <div className="z-10 sm:col-span-6">
                                        <h3 className={`font-bold leading-snug text-base ${isDark ? 'text-slate-200' : 'text-slate-950'}`}>
                                            {exp.role} · <span className={isDark ? 'text-teal-300' : 'text-purple-700'}>{exp.company}</span>
                                        </h3>
                                        <p className={`mt-2 text-sm leading-normal ${isDark ? 'text-slate-400' : 'text-slate-800 font-medium'}`}>
                                            {exp.description}
                                        </p>
                                        <ul className="mt-3 flex flex-wrap" aria-label="Technologies used">
                                            {exp.skills.map((tech) => (
                                                <li key={tech} className="mr-1.5 mt-2">
                                                    <div className={`flex items-center rounded-full px-3 py-1 text-xs font-semibold leading-5 ${
                                                        isDark
                                                            ? 'bg-teal-400/10 text-teal-300'
                                                            : 'bg-purple-100 text-purple-900 border border-purple-300/60'
                                                    }`}>
                                                        {tech}
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* EDUCATION SECTION */}
            <section id="education" className="scroll-mt-16 lg:scroll-mt-24" aria-label="Education">
                <div className={`sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 ${isDark ? 'bg-slate-900/75' : 'bg-slate-100/80'}`}>
                    <h2 className={`text-sm font-bold uppercase tracking-widest ${isDark ? 'text-slate-200' : 'text-purple-900'}`}>Education</h2>
                </div>
                <div>
                    <ol className="group/list">
                        {education.map((edu) => (
                            <li key={edu.id} className="mb-12">
                                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                    <div className={`absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block ${
                                        isDark
                                            ? 'lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]'
                                            : 'lg:group-hover:bg-white lg:group-hover:shadow-md lg:group-hover:border lg:group-hover:border-purple-200'
                                    }`} />
                                    <header
                                        className={`z-10 mb-2 mt-1 text-xs font-bold uppercase tracking-wide sm:col-span-2 ${isDark ? 'text-slate-500' : 'text-slate-600'}`}
                                    >
                                        {edu.period}
                                    </header>
                                    <div className="z-10 sm:col-span-6">
                                        <h3 className={`font-bold leading-snug text-base ${isDark ? 'text-slate-200' : 'text-slate-950'}`}>
                                            {edu.degree} · <span className={isDark ? 'text-teal-300' : 'text-purple-700'}>{edu.school}</span>
                                        </h3>
                                        <p className={`mt-2 text-sm leading-normal ${isDark ? 'text-slate-400' : 'text-slate-800 font-medium'}`}>
                                            {edu.description}
                                        </p>
                                        <ul className="mt-3 flex flex-wrap" aria-label="Key subjects">
                                            {edu.skills.map((skill) => (
                                                <li key={skill} className="mr-1.5 mt-2">
                                                    <div className={`flex items-center rounded-full px-3 py-1 text-xs font-semibold leading-5 ${
                                                        isDark
                                                            ? 'bg-teal-400/10 text-teal-300'
                                                            : 'bg-purple-100 text-purple-900 border border-purple-300/60'
                                                    }`}>
                                                        {skill}
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>
        </div>
    );
};

export default CV;
