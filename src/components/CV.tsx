import { Calendar, ArrowUpRight } from "lucide-react";

const CV = () => {
    const experiences = [
        {
            id: 1,
            role: "Full Stack Developer Intern",
            company: "Knowledge A.E.",
            period: "March 2024 — May 2024",
            url: "#",
            description:
                "Implemented APIs using Java and developed a functional Booking Engine for an early company project using React and Spring Boot. Cooperated closely with a team of developers using SCRUM methodology to manage and organize work efficiently.",
            skills: ["Java", "React", "Spring Boot", "REST APIs", "SCRUM"]
        },
    ];

    const education = [
        {
            id: 1,
            degree: "Computer Engineer & Informatics (Integrated Masters)",
            school: "University of Patras",
            period: "2018 — 2024",
            description: "EQF Level 7. Integrated Master's degree focusing on Software Engineering, Databases, and Systems Design.",
            skills: ["Software Engineering", "Algorithms", "Databases", "Distributed Systems"]
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
        "Java", "C++", "C#", "Python", "JavaScript", "TypeScript", "React", "AngularJS", "Node.js", "Spring Boot", "Unity", "SQL", "NoSQL (Cassandra)", "Git", "Agile/SCRUM"
    ];

    return (
        <div className="space-y-24">
            {/* ABOUT SECTION */}
            <section id="about" className="scroll-mt-16 lg:scroll-mt-24" aria-label="About me">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">About</h2>
                </div>
                <div className="space-y-4 text-slate-400 leading-relaxed">
                    <p>
                        I'm a passionate <span className="text-slate-200 font-medium">Full Stack Developer</span> and Computer Engineer who loves bridging the gap between sleek user interfaces and robust backend systems.
                    </p>
                    <p>
                        Graduated with an <span className="text-slate-200 font-medium">Integrated Master's Degree</span> from the University of Patras, with exchange studies at Universidad Politécnica de Madrid. I have hands-on experience building full-stack web applications, REST APIs, Virtual Reality thesis research with Eye Tracking, and NoSQL database applications.
                    </p>
                    <p>
                        When I'm not coding, you can find me exploring new game dev techniques in Unity & Python, researching tech innovations, or sharpening my full stack skills.
                    </p>

                    {/* Skill Tags Cloud */}
                    <div className="pt-4">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-3">Tech Stack & Tools</h4>
                        <div className="flex flex-wrap gap-1.5">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 border border-teal-500/10"
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
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">Experience</h2>
                </div>
                <div>
                    <ol className="group/list">
                        {experiences.map((exp) => (
                            <li key={exp.id} className="mb-12">
                                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                                    <header
                                        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                                        aria-label={exp.period}
                                    >
                                        {exp.period}
                                    </header>
                                    <div className="z-10 sm:col-span-6">
                                        <h3 className="font-medium leading-snug text-slate-200">
                                            <div>
                                                <a
                                                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                                                    href={exp.url}
                                                    target="_blank"
                                                    rel="noreferrer noopener"
                                                >
                                                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                                                    <span>
                                                        {exp.role} ·{" "}
                                                        <span className="inline-block">
                                                            {exp.company}
                                                            <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                                                        </span>
                                                    </span>
                                                </a>
                                            </div>
                                        </h3>
                                        <p className="mt-2 text-sm leading-normal text-slate-400">
                                            {exp.description}
                                        </p>
                                        <ul className="mt-3 flex flex-wrap" aria-label="Technologies used">
                                            {exp.skills.map((tech) => (
                                                <li key={tech} className="mr-1.5 mt-2">
                                                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
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
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">Education</h2>
                </div>
                <div>
                    <ol className="group/list">
                        {education.map((edu) => (
                            <li key={edu.id} className="mb-12">
                                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                                    <header
                                        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                                    >
                                        {edu.period}
                                    </header>
                                    <div className="z-10 sm:col-span-6">
                                        <h3 className="font-medium leading-snug text-slate-200 text-base">
                                            {edu.degree} · <span className="text-teal-300">{edu.school}</span>
                                        </h3>
                                        <p className="mt-2 text-sm leading-normal text-slate-400">
                                            {edu.description}
                                        </p>
                                        <ul className="mt-3 flex flex-wrap" aria-label="Key subjects">
                                            {edu.skills.map((skill) => (
                                                <li key={skill} className="mr-1.5 mt-2">
                                                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
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
