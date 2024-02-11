import { DiMongodb } from "react-icons/di";
import { FaCss3, FaGitAlt, FaHtml5, FaJava, FaNodeJs, FaPython, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiAcademia, SiAdobephotoshop, SiArduino, SiDaisyui, SiExpress, SiFirebase, SiMicrosoftoffice, SiMultisim } from "react-icons/si";
import { TbBrandNextjs, TbBrandVscode, TbFileTypeSql } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { GiMaterialsScience } from "react-icons/gi";
import { BiLogoCPlusPlus } from "react-icons/bi";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const SkillsAndTechnology = () => {
    return (

        <div className="sm:px-12">
            <h1 className="text-5xl text-center text-info py-9">Skills and Technologies</h1>
            <hr className="py-4" />
            <Tabs>
                <TabList>
                    <Tab>Web Development</Tab>
                    <Tab>Database</Tab>
                    <Tab>Programming Languages</Tab>
                    <Tab>Software and Hardware</Tab>
                </TabList>

                <TabPanel>
                    <h3 className="text-2xl font-bold text-center mb-7">Web Development</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 px-5">
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <FaHtml5 className="text-2xl" /> <span className="font-bold">HTML 5</span> <p className="text-wrap text-justify">Semantic markup for structuring web pages.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <FaCss3 className="text-2xl" /> <span className="font-bold">CSS 3</span> <p className="text-wrap text-justify">Styling and layout design, including CSS frameworks like Tailwind</p>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <SiTailwindcss className="text-2xl" /> <span className="font-bold">Tailwind CSS</span> <p className="text-wrap text-justify">A utility-first CSS framework that provides a set of pre-designed building blocks for quickly styling web interfaces.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <SiDaisyui className="text-2xl" /> <span className="font-bold">Daisy UI</span> <p className="text-wrap text-justify">A collection of customizable components and utility classes for rapidly building modern and responsive user interfaces using Tailwind CSS.</p>
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
                            <TbBrandNextjs className="text-2xl" /> <span className="font-bold">Next.js</span> <p className="text-wrap text-justify">A React framework for building server-rendered, static, and dynamic web applications.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <GiMaterialsScience className="text-2xl" /> <span className="font-bold">Material-UI</span> <p className="text-wrap text-justify">A popular React component library that implements Googles Material Design principles for building visually appealing and consistent user interfaces.</p>
                        </div>

                    </div>
                </TabPanel>
                <TabPanel>
                    <h3 className="text-2xl font-bold text-center mb-7">Database</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 px-5 mb-3">

                        <div className="flex flex-col justify-center items-center space-y-2">
                            <DiMongodb className="text-2xl" /> <span className="font-bold">MongoDB</span> <p className="text-wrap text-justify">NoSQL database for storing and managing data.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <SiFirebase className="text-2xl" /> <span className="font-bold">Firebase</span> <p className="text-wrap text-justify">A comprehensive platform by Google for building and managing web and mobile applications.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <TbFileTypeSql className="text-2xl" /> <span className="font-bold">SQL</span> <p className="text-wrap text-justify">An open-source relational database management system (RDBMS) known for its reliability, scalability, and ease of use.</p>
                        </div>

                    </div>
                </TabPanel>
                <TabPanel>
                    <h3 className="text-2xl font-bold text-center mb-7">Programming Languages</h3>
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
                            <BiLogoCPlusPlus className="text-2xl" /> <span className="font-bold">C++</span> <p className="text-wrap text-justify">A powerful, general-purpose programming language derived from C.</p>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <h3 className="text-2xl font-bold text-center mb-7">Software and Hardware</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 px-5">
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <TbBrandVscode className="text-2xl" /> <span className="font-bold">VS Code</span> <p className="text-wrap text-justify">A lightweight, open-source code editor developed by Microsoft, known for its speed, extensibility, and rich ecosystem of extensions.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <FaGitAlt className="text-2xl" /> <span className="font-bold">Git</span> <p className="text-wrap text-justify"> A distributed version control system that enables developers to track changes to source code and collaborate with others on software projects.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <div>
                                <img src="https://i.ibb.co/gwbkRP6/kisspng-matlab-simulink-signal-processing-programming-lang-cube-island-online-survival-3d-5b3b394d2f.jpg" alt="matlab logo" className="w-10 h-10" />
                                <p className="font-bold pt-3">MATLAB</p>
                            </div>
                            <p className="text-wrap text-justify">A high-level programming language and interactive environment developed by MathWorks, commonly used for numerical computing, data analysis, and algorithm development.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <SiAcademia className="text-2xl" /> <span className="font-bold">AutoCAD</span> <p className="text-wrap text-justify">A computer-aided design (CAD) software developed by Autodesk, widely used by architects, engineers, and designers for creating 2D and 3D drawings, models, and blueprints.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <SiArduino className="text-2xl" /> <span className="font-bold">Arduino</span> <p className="text-wrap text-justify">An open-source electronics platform based on easy-to-use hardware and software, designed for building interactive projects and prototypes.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <SiMultisim className="text-2xl" /> <span className="font-bold">Multisim</span> <p className="text-wrap text-justify">A circuit design and simulation software developed by National Instruments (now part of NI) for designing and analyzing electronic circuits.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <SiMicrosoftoffice className="text-2xl" /> <span className="font-bold">Microsoft Office</span> <p className="text-wrap text-justify">A suite of productivity applications developed by Microsoft, including Word (word processing), Excel (spreadsheets), PowerPoint (presentations), Outlook (email client), and others.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <SiAdobephotoshop className="text-2xl" /> <span className="font-bold">Adobe Photoshop</span> <p className="text-wrap text-justify">A powerful raster graphics editor developed by Adobe Inc., known for its extensive capabilities in image editing, manipulation, and enhancement.</p>
                        </div>

                    </div>
                </TabPanel>
            </Tabs>


        </div>
    );
};

export default SkillsAndTechnology;