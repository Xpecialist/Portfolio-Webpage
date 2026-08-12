import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="scroll-mt-16 lg:scroll-mt-24 pt-12 pb-16" aria-label="Contact information">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">Contact</h2>
            </div>

            <div className="bg-slate-800/40 p-8 rounded-2xl border border-slate-700/40">
                <h3 className="text-xl font-bold text-slate-200 mb-2">Get In Touch</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    I'm currently open to new software engineering opportunities, collaborative projects, or remote full-stack roles. Feel free to reach out!
                </p>

                <div className="space-y-3 mb-8 text-sm text-slate-300">
                    <div className="flex items-center gap-3">
                        <MapPin size={16} className="text-teal-300 shrink-0" />
                        <span>Based in Patras, Greece (Available for Remote Work)</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Phone size={16} className="text-teal-300 shrink-0" />
                        <span>+30 6942533083</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Mail size={16} className="text-teal-300 shrink-0" />
                        <a href="mailto:manolouk2010@gmail.com" className="hover:text-teal-300 transition-colors">
                            manolouk2010@gmail.com
                        </a>
                    </div>
                </div>

                <a
                    href="mailto:manolouk2010@gmail.com"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-teal-400/10 text-teal-300 border border-teal-500/20 font-medium hover:bg-teal-400/20 transition-all text-sm"
                >
                    <Mail size={18} />
                    Say Hello
                </a>
            </div>

            {/* Footer Attribution */}
            <footer className="mt-16 text-xs text-slate-500 space-y-2">
                <p>
                    Designed & Built by <span className="text-slate-400 font-medium">Manos Loukakis</span>.
                    Inspired by <a href="https://brittanychiang.com" target="_blank" rel="noreferrer noopener" className="text-slate-400 hover:text-teal-300 transition-colors">Brittany Chiang</a>.
                </p>
                <p>© {new Date().getFullYear()} Manos Loukakis. All rights reserved.</p>
            </footer>
        </section>
    );
};

export default Contact;
