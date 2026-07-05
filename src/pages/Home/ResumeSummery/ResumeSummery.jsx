import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGraduationCap, FaBriefcase, FaCertificate, FaDownload } from "react-icons/fa6";

const ResumeSummary = () => {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-6xl mx-auto px-4 py-16"
        >
            {/* Main Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl font-black text-slate-800">
                    Qualifications & <span className="text-violet-600">Experience</span>
                </h2>
                <div className="w-16 h-1 bg-violet-600 mx-auto mt-3 rounded-full mb-4"></div>
                <p className="text-slate-500 text-sm md:text-base">
                    A timeline of my formal academic background above HSC, professional engineering certifications, and university management experience.
                </p>
            </div>

            {/* Split Two-Column Timeline Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                
                {/* ================= LEFT COLUMN: EDUCATION & TRAINING ================= */}
                <div className="space-y-8">
                    <div className="flex items-center gap-3 border-b border-slate-100 pb-3 mb-6">
                        <div className="p-2 bg-violet-100 text-violet-600 rounded-xl text-xl">
                            <FaGraduationCap />
                        </div>
                        <h3 className="text-2xl font-black text-slate-800">Education & Training</h3>
                    </div>

                    <div className="relative border-l-2 border-slate-200 ml-4 pl-6 space-y-8">
                        
                        {/* Item 1: BSc Degree */}
                        <div className="relative">
                            <div className="absolute -left-[31px] top-1 bg-white border-2 border-violet-600 w-4 h-4 rounded-full"></div>
                            <span className="badge badge-sm bg-violet-50 text-violet-700 font-bold border-none mb-1">
                                2017 - 2021
                            </span>
                            <h4 className="font-extrabold text-slate-800 text-base md:text-md">
                                Bachelor of Science in EEE
                            </h4>
                            <p className="text-xs font-bold text-slate-500">
                                North South University • CGPA 3.17
                            </p>
                            <p className="text-xs text-slate-400 mt-1">
                                Department of Electrical and Computer Engineering. Focused on foundational programming concepts, network design, and systems engineering logic.
                            </p>
                        </div>

                        {/* Item 2: MERN Web Dev Training */}
                        <div className="relative">
                            <div className="absolute -left-[31px] top-1 bg-white border-2 border-violet-600 w-4 h-4 rounded-full"></div>
                            <span className="badge badge-sm bg-violet-50 text-violet-700 font-bold border-none mb-1">
                                Jun 2023 - Jan 2024
                            </span>
                            <h4 className="font-extrabold text-slate-800 text-base">
                                Full-Stack Web Development (MERN)
                            </h4>
                            <p className="text-xs font-bold text-slate-500">
                                Programming Hero
                            </p>
                            <p className="text-xs text-slate-400 mt-1">
                                Intensive industry-aligned engineering stack training covering Single Page Application logic, NoSQL architecture, secure cloud authentications, and fluid interfaces.
                            </p>
                        </div>

                        {/* Item 3: B-MEET */}
                        <div className="relative">
                            <div className="absolute -left-[31px] top-1 bg-white border-2 border-violet-600 w-4 h-4 rounded-full"></div>
                            <span className="badge badge-sm bg-violet-50 text-violet-700 font-bold border-none mb-1">
                                May 2023
                            </span>
                            <h4 className="font-extrabold text-slate-800 text-base">
                                Bangladesh Miyazaki ICT Engineering Program (B-MEET)
                            </h4>
                            <p className="text-xs font-bold text-slate-500">
                                B-JET Center, North South University
                            </p>
                            <p className="text-xs text-slate-400 mt-1">
                                Focused on international software engineering working principles, communication workflows, and enterprise methodologies.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ================= RIGHT COLUMN: EXPERIENCE & CERTIFICATIONS ================= */}
                <div className="space-y-8">
                    
                    {/* Professional Work History Section */}
                    <div>
                        <div className="flex items-center gap-3 border-b border-slate-100 pb-3 mb-6">
                            <div className="p-2 bg-emerald-100 text-emerald-600 rounded-xl text-xl">
                                <FaBriefcase />
                            </div>
                            <h3 className="text-2xl font-black text-slate-800">Experience</h3>
                        </div>

                        <div className="relative border-l-2 border-slate-200 ml-4 pl-6">
                            <div className="relative">
                                <div className="absolute -left-[31px] top-1 bg-white border-2 border-emerald-500 w-4 h-4 rounded-full"></div>
                                <span className="badge badge-sm bg-emerald-50 text-emerald-700 font-bold border-none mb-1">
                                    Oct 2023 - Aug 2024
                                </span>
                                <h4 className="font-extrabold text-slate-800 text-base">
                                    Guest Employee
                                </h4>
                                <p className="text-xs font-bold text-slate-500 mb-2">
                                    Career and Placement Center (CPC) • North South University
                                </p>
                                {/* Reformatted bullet points to look impactful and professional */}
                                <ul className="text-xs text-slate-500 space-y-1.5 list-disc pl-4 leading-relaxed">
                                    <li>Managed and resolved student system inquiries, ensuring high satisfaction.</li>
                                    <li>Organized high-visibility corporate seminars and cross-department administrative workflows.</li>
                                    <li>Collaborated with design stakeholders to plan layout optimizations for university web resources.</li>
                                    <li>Participated in cross-organization meetings, refining professional presentation skills.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Verified National Certifications Section */}
                    <div className="pt-4">
                        <div className="flex items-center gap-3 border-b border-slate-100 pb-3 mb-6">
                            <div className="p-2 bg-amber-100 text-amber-600 rounded-xl text-xl">
                                <FaCertificate />
                            </div>
                            <h3 className="text-2xl font-black text-slate-800">Certifications</h3>
                        </div>

                        <div className="bg-slate-50 rounded-2xl border border-slate-100 p-5 shadow-sm">
                            <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 uppercase tracking-wide">
                                Verified Pass
                            </span>
                            <h4 className="font-extrabold text-slate-800 text-sm md:text-base mt-2">
                                Fundamental IT Engineering Exam (FE)
                            </h4>
                            <p className="text-xs font-bold text-slate-500">
                                Issued by Bangladesh Computer Council (BCC)
                            </p>
                            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                                A highly rigorous, nationally recognized examination validating foundational standards in software development paradigm architectures, algorithms, data structures, and computer science principles.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Download CV Action Button */}
            <div className="flex justify-center mt-16">
                <a 
                    href="https://drive.google.com/file/d/1k7Wf5X2htxaYKA9TFmZqx48xNYOEfcxY/view?usp=sharing" 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn btn-primary bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white border-none px-8 rounded-xl shadow-md shadow-indigo-100 gap-2 font-bold group"
                >
                    <FaDownload className="group-hover:translate-y-0.5 transition-transform" />
                    Download Complete CV
                </a>
            </div>
        </motion.div>
    );
};

export default ResumeSummary;