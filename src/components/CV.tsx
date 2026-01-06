import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const CV = () => {
    const experiences = [
        {
            id: 1,
            role: "Senior Frontend Developer",
            company: "Tech Corp",
            period: "2023 - Present",
            description: "Leading the frontend team, building scalable React applications, and mentoring junior developers.",
        },
        {
            id: 2,
            role: "Full Stack Developer",
            company: "Creative Agency",
            period: "2021 - 2023",
            description: "Developed full-stack web solutions using MERN stack, optimized database queries, and improved site performance.",
        },
        {
            id: 3,
            role: "Junior Developer",
            company: "Startup Inc",
            period: "2020 - 2021",
            description: "Assisted in developing UI components, fixing bugs, and writing unit tests.",
        },
    ];

    const education = [
        {
            id: 1,
            degree: "Information Technology",
            school: "University of Technology",
            period: "2016 - 2020",
            description: "Specialized in Software Engineering and Web Technologies.",
        },
    ];

    return (
        <section id="cv" className="py-20 bg-surface text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Experience Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <Briefcase className="text-primary" size={28} />
                            <h3 className="text-2xl font-semibold">Work Experience</h3>
                        </div>

                        <div className="space-y-8">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={exp.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-background/50 p-6 rounded-xl border border-white/5 hover:border-primary/50 transition-colors"
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                                        <span className="flex items-center text-sm text-gray-400 bg-surface px-3 py-1 rounded-full">
                                            <Calendar size={14} className="mr-2" />
                                            {exp.period}
                                        </span>
                                    </div>
                                    <p className="text-primary font-medium mb-3">{exp.company}</p>
                                    <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <GraduationCap className="text-secondary" size={28} />
                            <h3 className="text-2xl font-semibold">Education</h3>
                        </div>

                        <div className="space-y-8">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={edu.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-background/50 p-6 rounded-xl border border-white/5 hover:border-secondary/50 transition-colors"
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                                        <span className="flex items-center text-sm text-gray-400 bg-surface px-3 py-1 rounded-full">
                                            <Calendar size={14} className="mr-2" />
                                            {edu.period}
                                        </span>
                                    </div>
                                    <p className="text-secondary font-medium mb-3">{edu.school}</p>
                                    <p className="text-gray-400 leading-relaxed">{edu.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CV;
