import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            {/* Background gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-accent font-medium tracking-wider uppercase text-sm mb-4 block">
                        Welcome to my portfolio
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
                        I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">digital experiences</span>
                        <br />
                        that matter.
                    </h1>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                        I'm a Full Stack Developer passionate about building accessible, pixel-perfect, and performant web applications.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-3 rounded-full bg-primary hover:bg-violet-600 text-white font-medium transition-colors flex items-center gap-2"
                        >
                            View Work <ArrowRight size={20} />
                        </a>
                        <a
                            href="/cv.pdf"
                            className="px-8 py-3 rounded-full border border-gray-700 hover:border-gray-500 hover:bg-gray-800/50 text-white font-medium transition-all flex items-center gap-2"
                        >
                            Download CV <Download size={20} />
                        </a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
            >
                <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-2">
                    <div className="w-1 h-3 bg-gray-500 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
