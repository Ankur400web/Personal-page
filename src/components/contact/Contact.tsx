import {
    Mail,
    MapPin,
    GitBranch,
    ArrowUpRight,
} from "lucide-react";
function Contact() {
    return (
        <section
            id="contact"
            className="px-6 py-20 sm:px-10 lg:px-12"
        >
            {/* Heading */}
            <div className="mb-10">
                <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                    Get In Touch
                </p>

                <h2 className="text-4xl font-bold tracking-tight text-white">
                    Let's build something useful.
                </h2>

                <p className="mt-3 max-w-2xl leading-7 text-slate-400">
                    I'm open to backend development opportunities, internships,
                    interesting projects, and technical collaborations.
                </p>
            </div>

            {/* Contact layout */}
            <div className="grid gap-6 lg:grid-cols-3">

                {/* Main CTA */}
                <div className="rounded-2xl border border-slate-800 bg-[#0d1524] p-7 lg:col-span-2">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                        <Mail className="h-6 w-6 text-blue-400" />
                    </div>

                    <h3 className="mt-6 text-2xl font-semibold text-white">
                        Have an opportunity?
                    </h3>

                    <p className="mt-3 max-w-xl leading-7 text-slate-400">
                        Whether you're hiring for a backend role, looking for
                        someone to collaborate with, or want to discuss a
                        project, feel free to reach out.
                    </p>

                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=itsmavrick007@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        className="
        mt-7 inline-flex items-center gap-2
        rounded-lg
        bg-blue-600
        px-5 py-3
        text-sm font-medium text-white
        transition
        hover:bg-blue-500
    "
                    >
                        <Mail className="h-4 w-4" />
                        Send me an email
                        <ArrowUpRight className="h-4 w-4" />
                    </a>

                </div>

                {/* Contact information */}
                <div className="rounded-2xl border border-slate-800 bg-[#0d1524] p-7">

                    <h3 className="text-lg font-semibold text-white">
                        Contact
                    </h3>

                    <div className="mt-6 space-y-6">

                        {/* Email */}
                        <div className="flex items-start gap-4">
                            <Mail className="mt-0.5 h-5 w-5 text-blue-400" />

                            <div>
                                <p className="text-xs uppercase tracking-wide text-slate-500">
                                    Email
                                </p>

                                <a
                                    href="mailto:itsmavrick007@gmail.com"
                                    className="mt-1 block text-sm text-slate-300 transition hover:text-blue-400"
                                >
                                    itsmavrick007@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-start gap-4">
                            <MapPin className="mt-0.5 h-5 w-5 text-blue-400" />

                            <div>
                                <p className="text-xs uppercase tracking-wide text-slate-500">
                                    Location
                                </p>

                                <p className="mt-1 text-sm text-slate-300">
                                    India
                                </p>
                            </div>
                        </div>

                        {/* GitHub */}
                        <div className="flex items-start gap-4">
                            <GitBranch className="mt-0.5 h-5 w-5 text-blue-400" />

                            <div>
                                <p className="text-xs uppercase tracking-wide text-slate-500">
                                    GitHub
                                </p>

                                <a
                                    href="https://github.com/Ankur400web"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-1 block text-sm text-slate-300 transition hover:text-blue-400"
                                >
                                    github.com/Ankur400web
                                </a>
                            </div>
                        </div>

                        {/* LinkedIn */}
                        <div className="flex items-start gap-4">
    <span className="mt-0.5 flex h-5 w-5 items-center justify-center text-sm font-bold text-blue-400">
        in
    </span>

                            <div>
                                <p className="text-xs uppercase tracking-wide text-slate-500">
                                    LinkedIn
                                </p>

                                <a
                                    href="https://www.linkedin.com/in/ankur-kumar-b78299432/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-1 block text-sm text-slate-300 transition hover:text-blue-400"
                                >
                                    linkedin.com/in/ankur-kumar
                                </a>
                            </div>
                        </div>

                        {/* X */}
                        <div className="flex items-start gap-4">
                            <span className="mt-0.5 flex h-5 w-5 items-center justify-center text-sm font-bold text-blue-400">
                                X
                            </span>

                            <div>
                                <p className="text-xs uppercase tracking-wide text-slate-500">
                                    X
                                </p>

                                <a
                                    href="https://x.com/ankurku7365"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-1 block text-sm text-slate-300 transition hover:text-blue-400"
                                >
                                    x.com/ankurku7365
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            {/* Footer */}
            <div className="mt-16 border-t border-slate-800 pt-6 text-center">
                <p className="text-sm text-slate-500">
                    © 2026 Ankur Kumar. Built with React, TypeScript & Tailwind CSS.
                </p>
            </div>

        </section>
    );
}

export default Contact;