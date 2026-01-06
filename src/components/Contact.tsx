import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-background/50 text-white relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-primary/10 blur-3xl rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <a
                        href="mailto:hello@example.com"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary hover:bg-emerald-600 text-white font-medium transition-colors"
                    >
                        <Mail size={20} />
                        Say Hello
                    </a>
                </motion.div>

                <div className="flex flex-col items-center border-t border-white/10 pt-8 mt-16">
                    <div className="flex space-x-6 mb-4">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Twitter size={24} />
                        </a>
                    </div>
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} CV Website. Built with React & Tailwind.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
