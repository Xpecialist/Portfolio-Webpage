import { Mail, Phone, MapPin } from "lucide-react";

interface ContactProps {
    isDark?: boolean;
}

const Contact = ({ isDark = true }: ContactProps) => {
    return (
        <section id="contact" className="scroll-mt-16 lg:scroll-mt-24 pt-12 pb-16" aria-label="Contact information">
            <div className={`sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 ${isDark ? 'bg-slate-900/75' : 'bg-slate-100/80'}`}>
                <h2 className={`text-sm font-bold uppercase tracking-widest ${isDark ? 'text-slate-200' : 'text-purple-900'}`}>Contact</h2>
            </div>

            <div className={`p-8 rounded-2xl border backdrop-blur-sm shadow-md ${
                isDark
                    ? 'bg-slate-800/40 border-slate-700/40 text-slate-400'
                    : 'bg-white/90 border-purple-200 text-slate-700 shadow-purple-500/5'
            }`}>
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>Get In Touch</h3>
                <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-slate-400' : 'text-slate-700 font-medium'}`}>
                    I'm currently open to new software engineering opportunities, collaborative projects, or remote full-stack roles. Feel free to reach out!
                </p>

                <div className={`space-y-3 mb-8 text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-900'}`}>
                    <div className="flex items-center gap-3">
                        <MapPin size={16} className={isDark ? 'text-teal-300' : 'text-purple-600'} />
                        <span>Based in Patras, Greece (Available for Remote Work)</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Phone size={16} className={isDark ? 'text-teal-300' : 'text-purple-600'} />
                        <span>+30 6942533083</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Mail size={16} className={isDark ? 'text-teal-300' : 'text-purple-600'} />
                        <a href="mailto:manolouk2010@gmail.com" className={`transition-colors ${isDark ? 'hover:text-teal-300' : 'hover:text-purple-700 font-bold'}`}>
                            manolouk2010@gmail.com
                        </a>
                    </div>
                </div>

                <a
                    href="mailto:manolouk2010@gmail.com"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg border font-semibold transition-all text-sm shadow-md ${
                        isDark
                            ? 'bg-teal-400/10 text-teal-300 border-teal-500/20 hover:bg-teal-400/20'
                            : 'bg-purple-600 text-white border-purple-600 hover:bg-purple-700 shadow-purple-500/20'
                    }`}
                >
                    <Mail size={18} />
                    Say Hello
                </a>
            </div>

            {/* Footer Attribution */}
            <footer className={`mt-16 text-xs space-y-2 ${isDark ? 'text-slate-500' : 'text-slate-600 font-medium'}`}>

                <p>© {new Date().getFullYear()} Manos Loukakis. All rights reserved.</p>
            </footer>
        </section>
    );
};

export default Contact;
