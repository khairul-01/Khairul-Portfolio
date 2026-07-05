import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCode, FaFutbol, FaGraduationCap, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const About = () => {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-6xl mx-auto px-4"
        >
            {/* Main Interactive Glassmorphism-style Container */}
            <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-xl border border-slate-200/60 p-8 md:p-14 overflow-hidden relative">
                
                {/* Background Decorative Accent Ring */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-violet-200/30 rounded-full blur-3xl pointer-events-none"></div>

                {/* Section Title Header */}
                <div className="text-center md:text-left mb-12">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-800">
                        About <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">Me</span>
                    </h2>
                    <div className="w-16 h-1.5 bg-gradient-to-r from-violet-600 to-indigo-600 mt-4 rounded-full mx-auto md:mx-0"></div>
                </div>

                {/* Two-Column Modern Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    {/* Left Side: Captivating Bio Text Blocks */}
                    <div className="lg:col-span-7 space-y-6 text-slate-600 text-base leading-relaxed text-justify">
                        
                        {/* 1. Programming Journey Card */}
                        <div className="p-5 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2 mb-2">
                                <span className="p-2 bg-violet-100 rounded-lg text-violet-600 text-sm">🌱</span> 
                                My Coding Journey
                            </h3>
                            <p className="text-sm md:text-base">
                                Driven by intense curiosity, I plunged into the software engineering world. Over the past several months, I have turned that curiosity into a serious development obsession, committing hours to mastering modern web ecosystems and engineering complex architectural logic from scratch.
                            </p>
                        </div>

                        {/* 2. Type of Work Enjoyed Card */}
                        <div className="p-5 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2 mb-2">
                                <span className="p-2 bg-emerald-100 rounded-lg text-emerald-600 text-sm"><FaCode /></span> 
                                What I Love to Build
                            </h3>
                            <p className="text-sm md:text-base">
                                I thrive at the intersection of **Frontend Polish and Robust System Architecture**. I enjoy writing clean, dynamic component layouts that scale beautifully across mobile, tablet, and desktop viewports. Creating fluid animations that elevate user experiences is my absolute sweet spot.
                            </p>
                        </div>

                    </div>

                    {/* Right Side: Personality, Hobbies & Direct Metadata Information */}
                    <div className="lg:col-span-5 space-y-6">
                        
                        {/* 3. Personality & Interests Checklist Grid */}
                        <div className="p-6 bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-2xl shadow-lg space-y-4">
                            <h3 className="text-lg font-bold flex items-center gap-2">
                                <span className="text-xl text-yellow-400">✨</span> Beyond The Code
                            </h3>
                            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                                I am an energetic collaborator focused heavily on team growth. When I pull myself away from code reviews, you will reliably find me:
                            </p>
                            
                            {/* Graphic Personality Badges */}
                            <div className="grid grid-cols-2 gap-3 text-xs md:text-sm pt-2">
                                <div className="flex items-center gap-2 bg-white/10 px-3 py-2.5 rounded-xl border border-white/5">
                                    <FaFutbol className="text-emerald-400" />
                                    <span>Playing Football</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/10 px-3 py-2.5 rounded-xl border border-white/5">
                                    <FaGraduationCap className="text-violet-400" />
                                    <span>Self-Improvement</span>[cite: 1]
                                </div>
                                <div className="flex items-center gap-2 bg-white/10 px-3 py-2.5 rounded-xl border border-white/5">
                                    <span className="text-sky-400">📚</span>
                                    <span>Tech Documentation</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/10 px-3 py-2.5 rounded-xl border border-white/5">
                                    <span className="text-pink-400">🌍</span>
                                    <span>Exploring Outdoors</span>
                                </div>
                            </div>
                        </div>

                        {/* Direct Micro-Detail Profile List */}
                        <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-3.5">
                            <div className="flex items-center gap-3 text-sm">
                                <span className="p-2 bg-slate-100 rounded-lg text-slate-500"><span className="font-bold">ID</span></span>
                                <div>
                                    <span className="text-xs font-semibold text-slate-400 block uppercase">Name</span>
                                    <span className="font-bold text-slate-700">Khairul Alam</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <span className="p-2 bg-violet-50 rounded-lg text-violet-600"><FaEnvelope /></span>
                                <div>
                                    <span className="text-xs font-semibold text-slate-400 block uppercase">Email Address</span>
                                    <a href="mailto:khairul431743@gmail.com" className="font-bold text-violet-600 hover:underline break-all">
                                        khairul431743@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <span className="p-2 bg-emerald-50 rounded-lg text-emerald-600"><FaPhoneAlt /></span>
                                <div>
                                    <span className="text-xs font-semibold text-slate-400 block uppercase">Contact Number</span>
                                    <a href="tel:+8801956431743" className="font-bold text-slate-700 hover:underline">
                                        +880 1956-431743
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <span className="p-2 bg-amber-50 rounded-lg text-amber-600"><FaMapMarkerAlt /></span>
                                <div>
                                    <span className="text-xs font-semibold text-slate-400 block uppercase">Location</span>
                                    <span className="font-bold text-slate-700">Dhaka, Bangladesh</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </motion.div>
    );
};

export default About;

// const About = () => {
//     const isVisible = true;
//     const { ref, inView } = useInView();
//     return (
//         <AnimatePresence>
//             {isVisible && (
//                 <motion.div
//                     ref={ref}
//                     animate={inView ? { opacity: 1 } : { opacity: 0 }}
//                     initial={{ opacity: 0 }}
//                     // animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.9 }}
//                     whileHover={{ scale: 1.004 }}
//                     whileTap={{ scale: 0.98 }}
//                 >
//                     <div className="hero min-h-screen bg-[#B0C4DE] ">
//                         <div className="hero-content text-center flex-col ">
//                             <div className="max-w-md">
//                                 <h1 className="text-5xl font-bold text-blue-700">About Me</h1>
//                             </div>
//                             <div className="w-3/4 mx-auto text-justify text-[#2F4F4F]">
//                                 <p className="py-6 space-y-2">
//                                     <p>Over the past six months, I have undergone rigorous training in web development, immersing myself in the latest industry practices and technologies. Through hands-on projects and collaborative learning experiences, I have honed my skills in front-end and back-end development, mastering languages such as HTML, CSS, JavaScript, Tailwind CSS, Daisy UI, React.js, Node.js, Express.js, MongoDB, Firebase.</p>

//                                     <p> In addition to my practical training, I have obtained a professional Fundamental IT Engineering Certificate, solidifying my foundational knowledge in IT principles and methodologies. This certification reflects my commitment to excellence and my readiness to tackle complex technical challenges head-on.</p>

//                                     <p> Outside of the digital realm, I am an avid learner, constantly seeking out new opportunities for growth and self-improvement. I thrive in dynamic environments where collaboration and innovation are encouraged, and I am always eager to connect with like-minded professionals who share my passion for technology and innovation.</p>
//                                 </p>
//                                 <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
//                                     <div>
//                                         <h1 className="text-xl">Name:</h1>
//                                         <h1 className="text-xl font-bold">Khairul Alam</h1>
//                                     </div>
//                                     <div className="">
//                                         <h1 className="text-xl">Email:</h1>
//                                         <h1 className="text-xl font-bold break-all">khairul431743@gmail.com</h1>
//                                     </div>
//                                     <div>
//                                         <h1 className="text-xl">Contact Number:</h1>
//                                         <span className="text-xl font-bold">+880 1956431743</span>
//                                     </div>
//                                     <div>
//                                         <h1 className="text-xl">From:</h1>
//                                         <h1 className="text-xl font-bold break-all">Dhaka, Bangladesh</h1>
//                                     </div>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                 </motion.div>
//             )}
//         </AnimatePresence>
//         // <motion.div
//         //     initial={{ opacity: 0 }}
//         //     animate={{ opacity: 1 }}
//         //     exit={{ opacity: 0 }}
//         // >
//         //     <div className="hero min-h-screen bg-primary-content">
//         //         <div className="hero-content text-center flex-col">
//         //             <div className="max-w-md">
//         //                 <h1 className="text-5xl font-bold text-primary">About Me</h1>
//         //             </div>
//         //             <div className="w-3/4 mx-auto text-justify">
//         //                 <p className="py-6 space-y-2">
//         //                     <p>Over the past six months, I have undergone rigorous training in web development, immersing myself in the latest industry practices and technologies. Through hands-on projects and collaborative learning experiences, I have honed my skills in front-end and back-end development, mastering languages such as HTML, CSS, JavaScript, Tailwind CSS, Daisy UI, React.js, Node.js, Express.js, MongoDB, Firebase.</p>

//         //                     <p> In addition to my practical training, I have obtained a professional Fundamental IT Engineering Certificate, solidifying my foundational knowledge in IT principles and methodologies. This certification reflects my commitment to excellence and my readiness to tackle complex technical challenges head-on.</p>

//         //                     <p> Outside of the digital realm, I am an avid learner, constantly seeking out new opportunities for growth and self-improvement. I thrive in dynamic environments where collaboration and innovation are encouraged, and I am always eager to connect with like-minded professionals who share my passion for technology and innovation.</p>
//         //                 </p>
//         //                 <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
//         //                     <div>
//         //                         <h1 className="text-xl">Name:</h1>
//         //                         <h1 className="text-xl font-bold">Khairul Alam</h1>
//         //                     </div>
//         //                     <div className="">
//         //                         <h1 className="text-xl">Email:</h1>
//         //                         <h1 className="text-xl font-bold break-all">khairul431743@gmail.com</h1>
//         //                     </div>
//         //                     <div>
//         //                         <h1 className="text-xl">Contact Number:</h1>
//         //                         <span className="text-xl font-bold">+880 1956431743</span>
//         //                     </div>
//         //                     <div>
//         //                         <h1 className="text-xl">From:</h1>
//         //                         <h1 className="text-xl font-bold break-all">Dhaka, Bangladesh</h1>
//         //                     </div>
//         //                 </div>
//         //             </div>

//         //         </div>
//         //     </div>
//         // </motion.div>
//     );
// };

// export default About;