import { FaFacebook, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6"; // Standard portfolio social icons
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Banner = () => {
    const { ref, inView } = useInView({ triggerOnce: true }); // Prevents layout snapping back when scrolling away

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
        >
            {/* Soft, professional gradient theme replacing the complex color markers */}
            <div className="hero min-h-[85vh] bg-gradient-to-br from-slate-100 via-violet-50 to-emerald-50 rounded-2xl shadow-sm border border-slate-200/60 p-4 md:p-8">
                <div className="hero-content flex-col lg:flex-row-reverse gap-8 w-full">
                    
                    {/* Right Column: Professional Photo Profile Wrapper */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <div className="avatar">
                            <div className="w-64 md:w-80 rounded-2xl shadow-xl ring ring-violet-200 ring-offset-base-100 ring-offset-2">
                                <img 
                                    src="https://i.ibb.co.com/rfccGQMM/Khairul-Profile-Image.jpg" 
                                    alt="Khairul Alam Profile Photo" 
                                />
                            </div>
                        </div>
                    </div>
                    
                    {/* Left Column: Direct Designations, Introductions & Actions */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
                        <div className="max-w-xl mx-auto lg:mx-0">
                            <span className="text-sm font-semibold tracking-widest text-violet-600 uppercase block mb-2">
                                Welcome to my Portfolio
                            </span>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 leading-tight">
                                Hi, I am <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">Khairul Alam</span>
                            </h1>
                            
                            {/* Mandated Requirement: Clear Professional Designation */}
                            <h2 className="text-xl md:text-2xl font-bold text-emerald-600 mt-2">
                                Full Stack Developer
                            </h2>
                            
                            <p className="py-4 text-slate-600 text-sm md:text-base leading-relaxed text-justify lg:text-left">
                                I am a dedicated and aspiring developer with a passion for creating impactful, robust digital experiences. My journey into the world of technology began with a deep-seated curiosity and a drive to build highly scalable, interactive web applications.
                            </p>
                            
                            {/* Mandated Requirement: Clear Social Media Links Embedded */}
                            <div className="flex justify-center lg:justify-start gap-4 mb-8 mt-2">
                                <a href="https://github.com/khairul-01" target="_blank" rel="noreferrer" className="btn btn-circle btn-sm btn-outline btn-neutral hover:bg-neutral transition-colors">
                                    <FaGithub className="text-lg" />
                                </a>
                                <a href="https://www.linkedin.com/in/khairul01" target="_blank" rel="noreferrer" className="btn btn-circle btn-sm btn-outline btn-info hover:bg-sky-500 hover:text-white transition-colors">
                                    <FaLinkedin className="text-lg" />
                                </a>
                                <a href="https://twitter.com/your_handle" target="_blank" rel="noreferrer" className="btn btn-circle btn-sm btn-outline btn-neutral hover:bg-black hover:text-white transition-colors">
                                    <FaXTwitter className="text-lg" />
                                </a>
                                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="btn btn-circle btn-sm btn-outline btn-primary hover:bg-blue-600 hover:text-white transition-colors">
                                    <FaFacebook className="text-lg" />
                                </a>
                            </div>

                            {/* Mandated Requirement: Accessible Resume/CV & Contact CTA Targets */}
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                {/* Clicking this instantly opens your Google Drive resume link for view/download */}
                                <a 
                                    href="https://drive.google.com/file/d/1k7Wf5X2htxaYKA9TFmZqx48xNYOEfcxY/view?usp=sharing" 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="btn btn-primary bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white border-none px-6 shadow-md shadow-indigo-200"
                                >
                                    Download Resume
                                </a>
                                <a 
                                    href="#contact" 
                                    className="btn btn-outline btn-neutral px-6 hover:bg-slate-800 transition-all"
                                >
                                    Get In Touch
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </motion.div>
    );
};

export default Banner;