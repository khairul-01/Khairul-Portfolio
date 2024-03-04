import { FaCss3, FaGitAlt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa6"
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer";


const WhatiDo = () => {
    const { ref, inView } = useInView();
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.002 }}
            whileTap={{ scale: 0.98 }}
        >
            <div className="hero min-h-screen bg-[#E0FFFF] text-[#8B0000]">
                <div className="hero-content text-center flex-col">
                    <div className="w-3/4 mx-auto text-justify">
                        <h1 className="text-5xl font-bold text-center text-info mb-3">What I Do</h1>
                        <p className="py-6">In my journey as a web developer, I specialize in leveraging the MERN (MongoDB, Express.js, React.js, Node.js) stack to create dynamic and robust web applications. With a strong foundation in both front-end and back-end development, I bring ideas to life through clean code, intuitive user interfaces, and seamless functionality.
                            <p className="py-1">Below is a quick overview of my main technical skill sets and technologies i use. Want to find out more about experience? Check out my online resume and project portfolio.</p>
                        </p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 px-5 mx-5">
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <FaHtml5 className="text-2xl" /> <span className="font-bold">HTML 5</span> <p className="text-wrap text-justify">Semantic markup for structuring web pages.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <FaCss3 className="text-2xl" /> <span className="font-bold">CSS 3</span> <p className="text-wrap text-justify">Styling and layout design, including CSS frameworks like Tailwind</p>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <IoLogoJavascript className="text-2xl" /> <span className="font-bold">JavaScript</span> <p className="text-wrap text-justify">Proficient in ES6+ syntax, DOM manipulation, and asynchronous programming.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <FaReact className="text-2xl" /> <span className="font-bold">React.js</span> <p className="text-wrap text-justify">Building interactive user interfaces and single-page applications.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <FaNodeJs className="text-2xl" /> <span className="font-bold">Node.js</span> <p className="text-wrap text-justify">Server-side JavaScript runtime environment.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <SiExpress className="text-2xl" /> <span className="font-bold">Express.js</span> <p className="text-wrap text-justify">Building scalable and efficient web applications and APIs.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <DiMongodb className="text-2xl" /> <span className="font-bold">MongoDB</span> <p className="text-wrap text-justify">NoSQL database for storing and managing data.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <FaGitAlt className="text-2xl" /> <span className="font-bold">Version Control</span> <p className="text-wrap text-justify">Proficient in Git for collaborative development and version control.</p>
                        </div>

                    </div>
                </div>

            </div>
        </motion.div>
    );
};

export default WhatiDo;