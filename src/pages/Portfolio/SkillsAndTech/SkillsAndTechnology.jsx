import { DiMongodb } from "react-icons/di";
import { FaCss3, FaGitAlt, FaHtml5, FaJava, FaNodeJs, FaPython, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress } from "react-icons/si";


const SkillsAndTechnology = () => {
    return (
        <div className="sm:px-12">
            <h1 className="text-5xl text-center text-info py-9">Skills and Technologies</h1>
            <hr className="py-4" />
            <h3 className="text-2xl font-bold text-center py-4">Programming Languages</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 px-5 mb-3">
                
                <div className="flex flex-col justify-center items-center space-y-2">
                    <IoLogoJavascript className="text-2xl" /> <span className="font-bold">JavaScript</span> <p className="text-wrap text-justify">Proficient in ES6+ syntax, DOM manipulation, and asynchronous programming.</p>
                </div>
                <div className="flex flex-col justify-center items-center space-y-2">
                    <FaPython className="text-2xl" /> <span className="font-bold">Python</span> <p className="text-wrap text-justify">An interpreted, high-level programming language known for its simplicity and readability.</p>
                </div>
                <div className="flex flex-col justify-center items-center space-y-2">
                    <FaJava className="text-2xl" /> <span className="font-bold">Java</span> <p className="text-wrap text-justify">A robust, object-oriented programming language known for its platform independence.</p>
                </div>
                <div className="flex flex-col justify-center items-center space-y-2">
                    <FaJava className="text-2xl" /> <span className="font-bold">Java</span> <p className="text-wrap text-justify">A robust, object-oriented programming language known for its platform independence.</p>
                </div>
            </div>
            <hr className="py-4" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 px-5">
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
    );
};

export default SkillsAndTechnology;