import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
    FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt 
} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiMongodb, SiTailwindcss, SiFirebase, SiDaisyui } from "react-icons/si";

const WhatiDo = () => {
    const { ref, inView } = useInView({ triggerOnce: true });

    // Grouping core skills into explicitly categorised datasets
    const skillCategories = [
        {
            title: "Frontend Technologies",
            badgeColor: "badge-primary",
            skills: [
                { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, desc: "Semantic site structure." },
                { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, desc: "Responsive responsive layouts." },
                { name: "JavaScript", icon: <IoLogoJavascript className="text-yellow-500" />, desc: "ES6 logic & async actions." },
                { name: "React.js", icon: <FaReact className="text-sky-400 animate-spin-slow" />, desc: "SPA state-driven UIs." },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" />, desc: "Utility-first design styling." },
                { name: "DaisyUI", icon: <SiDaisyui className="text-purple-500" />, desc: "Clean pre-built component skins." },
            ]
        },
        {
            title: "Backend Engineering",
            badgeColor: "badge-secondary",
            skills: [
                { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, desc: "Asynchronous system runtime." },
                { name: "Express.js", icon: <SiExpress className="text-slate-800" />, desc: "RESTful API routes & middleware." },
                { name: "MongoDB", icon: <SiMongodb className="text-emerald-600" />, desc: "NoSQL document management." },
            ]
        },
        {
            title: "Dev Tools & Services",
            badgeColor: "badge-accent",
            skills: [
                { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-600" />, desc: "Version control branching." },
                { name: "Firebase", icon: <SiFirebase className="text-amber-500" />, desc: "Safe OAuth & live web hosting." },
            ]
        }
    ];

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-6xl mx-auto px-4 py-12"
        >
            {/* Header Description Title */}
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-4xl font-black text-slate-800">
                    What <span className="text-violet-600">I Do</span>
                </h2>
                <div className="w-16 h-1 bg-violet-600 mx-auto mt-3 rounded-full mb-6"></div>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    I specialize in leveraging the MERN stack to engineer responsive, reliable web applications. 
                    I use cleanly organized system architecture to translate wireframe ideas into intuitive user experiences.
                </p>
            </div>

            {/* Categorized Visual Columns Structure */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {skillCategories.map((category, idx) => (
                    <div 
                        key={idx} 
                        className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 hover:shadow-md transition-shadow flex flex-col"
                    >
                        {/* Column Sub-Title Label */}
                        <div className="flex items-center justify-between mb-6 border-b border-slate-50 pb-3">
                            <h3 className="font-extrabold text-slate-800 tracking-tight text-md">
                                {category.title}
                            </h3>
                            <span className={`badge ${category.badgeColor} badge-sm font-bold text-[10px] uppercase tracking-wider`}>
                                Tech Stack
                            </span>
                        </div>

                        {/* List Grid Items wrapper */}
                        <div className="space-y-4 flex-grow">
                            {category.skills.map((skill, sIdx) => (
                                <div 
                                    key={sIdx} 
                                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                                >
                                    {/* High contrast vector wrapper */}
                                    <div className="text-3xl p-1 bg-white shadow-sm rounded-lg border border-slate-100 group-hover:scale-110 transition-transform">
                                        {skill.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm text-slate-800">
                                            {skill.name}
                                        </h4>
                                        <p className="text-xs text-slate-500 mt-0.5">
                                            {skill.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default WhatiDo;