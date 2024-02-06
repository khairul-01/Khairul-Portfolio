import { FaCss3, FaGitAlt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa6"
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const WhatiDo = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content text-center flex-col">
                    <div className="w-3/4 mx-auto text-justify">
                        <h1 className="text-5xl font-bold text-center text-primary mb-3">What I Do</h1>
                        <p className="py-6">In my journey as a web developer, I specialize in leveraging the MERN (MongoDB, Express.js, React.js, Node.js) stack to create dynamic and robust web applications. With a strong foundation in both front-end and back-end development, I bring ideas to life through clean code, intuitive user interfaces, and seamless functionality.
                            <p className="py-1">Below is a quick overview of my main technical skill sets and technologies i use. Want to find out more about experience? Check out my online resume and project portfolio.</p>
                        </p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3">
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <FaHtml5 /> <span className="font-bold">HTML 5</span> <p className="text-wrap">Semantic markup for structuring web pages.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <FaCss3 /> <span className="font-bold">CSS 3</span> <p className="text-wrap">Styling and layout design, including CSS frameworks like Tailwind</p>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <IoLogoJavascript /> <span className="font-bold">JavaScript</span> <p className="text-wrap">Proficient in ES6+ syntax, DOM manipulation, and asynchronous programming.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <FaReact /> <span className="font-bold">React.js</span> <p className="text-wrap">Building interactive user interfaces and single-page applications.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <FaNodeJs /> <span className="font-bold">Node.js</span> <p className="text-wrap">Server-side JavaScript runtime environment.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <SiExpress /> <span className="font-bold">Express.js</span> <p className="text-wrap">Building scalable and efficient web applications and APIs.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <DiMongodb /> <span className="font-bold">MongoDB</span> <p className="text-wrap">NoSQL database for storing and managing data.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <FaGitAlt /> <span className="font-bold">Version Control</span> <p className="text-wrap">Proficient in Git for collaborative development and version control.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatiDo;