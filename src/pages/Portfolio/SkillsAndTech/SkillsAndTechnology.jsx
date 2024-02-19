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
                <TabList className={""}>
                    <Tab>Web Development</Tab>
                    <Tab>Database</Tab>
                    <Tab>Programming Languages</Tab>
                    <Tab>Software and Hardware</Tab>
                </TabList>

                <TabPanel>
                    <h3 className="text-2xl font-bold text-center mt-3 mb-7">Web Development</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 px-5">
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <figure className="">
                                <img src="https://i.ibb.co/fX55RH4/png-transparent-logo-html-html5.png" alt="conference management photo" className="rounded-xl w-8 h-8" />
                            </figure>
                            <span className="font-bold">HTML 5</span> <p className="text-wrap text-justify">Semantic markup for structuring web pages.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <figure className="">
                                <img src="https://i.ibb.co/hVSkJbj/download.png" alt="conference management photo" className="rounded-xl w-8 h-8" />
                            </figure>
                            <span className="font-bold">CSS 3</span> <p className="text-wrap text-justify">Styling and layout design, including CSS frameworks like Tailwind</p>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <figure className="">
                                <img src="https://i.ibb.co/k326PHG/featured.png" alt="conference management photo" className="rounded-xl w-8 h-8" />
                            </figure>
                            <span className="font-bold">Tailwind CSS</span> <p className="text-wrap text-justify">A utility-first CSS framework that provides a set of pre-designed building blocks for quickly styling web interfaces.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <figure className="">
                                <img src="https://i.ibb.co/Sv2G03p/favicon-192.png" alt="conference management photo" className="rounded-xl w-8 h-8" />
                            </figure>
                            <span className="font-bold">Daisy UI</span> <p className="text-wrap text-justify">A collection of customizable components and utility classes for rapidly building modern and responsive user interfaces using Tailwind CSS.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <figure className="">
                                <img src="https://i.ibb.co/DWJxyjq/png-clipart-javascript-scalable-graphics-logo-encapsulated-postscript-javascript-icon-text-logo-thum.png" alt="conference management photo" className="rounded-xl w-8 h-8" />
                            </figure>
                            <span className="font-bold">JavaScript</span> <p className="text-wrap text-justify">Proficient in ES6+ syntax, DOM manipulation, and asynchronous programming.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <figure className="">
                                <img src="https://i.ibb.co/27r7Kw8/React-icon-svg.png" alt="conference management photo" className="rounded-xl w-8 h-8" />
                            </figure>
                            <span className="font-bold">React.js</span> <p className="text-wrap text-justify">Building interactive user interfaces and single-page applications.</p>
                        </div>

                        <div className="flex flex-col justify-center items-center space-y-2">
                            <figure className="">
                                <img src="https://i.ibb.co/tzWcxS6/png-clipart-node-js-logo-node-js-javascript-web-application-express-js-computer-software-others-misc.png" alt="conference management photo" className="rounded-xl w-8 h-8" />
                            </figure>
                            <span className="font-bold">Node.js</span> <p className="text-wrap text-justify">Server-side JavaScript runtime environment.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <figure className="">
                                <img src="https://i.ibb.co/RQ2Wwp3/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png" alt="conference management photo" className="rounded-xl w-8 h-8" />
                            </figure>
                            <span className="font-bold">Express.js</span> <p className="text-wrap text-justify">Building scalable and efficient web applications and APIs.</p>
                        </div>

                        <div className="flex flex-col justify-center items-center space-y-2">
                            <figure className="">
                                <img src="https://i.ibb.co/99jZ2x1/brand-nextjs-icon-512x512-iz9ba3mc.png" alt="conference management photo" className="rounded-xl w-8 h-8" />
                            </figure>
                            <span className="font-bold">Next.js</span> <p className="text-wrap text-justify">A React framework for building server-rendered, static, and dynamic web applications.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <figure className="">
                                <img src="https://i.ibb.co/8B8k4HW/png-transparent-material-ui-logo.png" alt="conference management photo" className="rounded-xl w-8 h-8" />
                            </figure>
                            <span className="font-bold">Material-UI</span> <p className="text-wrap text-justify">A popular React component library that implements Googles Material Design principles for building visually appealing and consistent user interfaces.</p>
                        </div>

                    </div>
                </TabPanel>
                <TabPanel>
                    <h3 className="text-2xl font-bold text-center mt-3 mb-7">Database</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 px-5 mb-3">

                        <div className="flex flex-col justify-center items-center space-y-2">
                            <figure className="">
                                <img src="https://i.ibb.co/y8D3vtn/m2-H7i8d3-A0-N4-H7-A0.png" alt="conference management photo" className="rounded-xl w-8 h-8" />
                            </figure>
                            <span className="font-bold">MongoDB</span> <p className="text-wrap text-justify">NoSQL database for storing and managing data.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <figure className="">
                                <img src="https://i.ibb.co/0QN5k17/png-transparent-firebase-hd-logo-thumbnail.png" alt="conference management photo" className="rounded-xl w-8 h-8" />
                            </figure>
                            <span className="font-bold">Firebase</span> <p className="text-wrap text-justify">A comprehensive platform by Google for building and managing web and mobile applications.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <figure className="">
                                <img src="https://i.ibb.co/wWXmYK9/png-transparent-sql-logo-illustration-microsoft-azure-sql-database-microsoft-sql-server-database-blu.png" alt="conference management photo" className="rounded-xl w-8 h-8" />
                            </figure>
                            <span className="font-bold">SQL</span> <p className="text-wrap text-justify">An open-source relational database management system (RDBMS) known for its reliability, scalability, and ease of use.</p>
                        </div>

                    </div>
                </TabPanel>
                <TabPanel>
                    <h3 className="text-2xl font-bold text-center mt-3 mb-7">Programming Languages</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 px-5 mb-3">

                        <div className="flex flex-col justify-center items-center space-y-2">
                            <figure className="">
                                <img src="https://i.ibb.co/C6m5PpC/b4de205cb6d4e7cad43c2971f780cfd9.png" alt="conference management photo" className="rounded-xl w-8 h-8" />
                            </figure>
                            <span className="font-bold">JavaScript</span> <p className="text-wrap text-justify">Proficient in ES6+ syntax, DOM manipulation, and asynchronous programming.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <figure className="">
                                <img src="https://i.ibb.co/MSZtrq9/Python-svg.png" alt="conference management photo" className="rounded-xl w-8 h-8" />
                            </figure>
                            <span className="font-bold">Python</span> <p className="text-wrap text-justify">An interpreted, high-level programming language known for its simplicity and readability.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <figure className="">
                                <img src="https://i.ibb.co/bNQyF1x/226777.png" alt="conference management photo" className="rounded-xl w-8 h-8" />
                            </figure>
                            <span className="font-bold">Java</span> <p className="text-wrap text-justify">A robust, object-oriented programming language known for its platform independence.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <figure className="">
                                <img src="https://i.ibb.co/26GDWzd/png-clipart-professional-c-c-primer-plus-c-the-complete-reference-eclipse-purple-logo.png" alt="conference management photo" className="rounded-xl w-8 h-8" />
                            </figure>
                            <span className="font-bold">C++</span> <p className="text-wrap text-justify">A powerful, general-purpose programming language derived from C.</p>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <h3 className="text-2xl font-bold text-center mt-3 mb-7">Software and Hardware</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 px-5">
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <figure className="">
                                <img src="https://i.ibb.co/r4ksftp/png-transparent-visual-studio-code-hd-logo-thumbnail.png" alt="conference management photo" className="rounded-xl w-6 h-6" />
                            </figure>
                            <span className="font-bold">VS Code</span> <p className="text-wrap text-justify">A lightweight, open-source code editor developed by Microsoft, known for its speed, extensibility, and rich ecosystem of extensions.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <figure className="">
                                <img src="https://i.ibb.co/ZJNgNWx/git-icon.png" alt="conference management photo" className="rounded-xl w-6 h-6" />
                            </figure>
                            <span className="font-bold">Git</span> <p className="text-wrap text-justify"> A distributed version control system that enables developers to track changes to source code and collaborate with others on software projects.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <figure className="">
                                <img src="https://i.ibb.co/YQDBXgQ/png-transparent-matlab-symbol.png" alt="conference management photo" className="rounded-xl w-8 h-6" />
                            </figure>
                            <span className="font-bold">MATLAB</span>
                            <p className="text-wrap text-justify">A high-level programming language and interactive environment developed by MathWorks, commonly used for numerical computing, data analysis, and algorithm development.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <figure className="">
                                <img src="https://i.ibb.co/VY0RcqC/Autocad-Logo.png" alt="conference management photo" className="rounded-xl w-8 " />
                            </figure>
                            <span className="font-bold">AutoCAD</span> <p className="text-wrap text-justify">A computer-aided design (CAD) software developed by Autodesk, widely used by architects, engineers, and designers for creating 2D and 3D drawings, models, and blueprints.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <figure className="">
                                <img src="https://i.ibb.co/QCbR6dj/arduino-logo-1.png" alt="conference management photo" className="rounded-xl w-6 h-6 " />
                            </figure>
                            <span className="font-bold">Arduino</span> <p className="text-wrap text-justify">An open-source electronics platform based on easy-to-use hardware and software, designed for building interactive projects and prototypes.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <figure className="">
                                <img src="https://i.ibb.co/rcWM8NZ/184-multisim-app-icon-ill.png" alt="conference management photo" className="rounded-xl w-6 h-6 " />
                            </figure>
                            <span className="font-bold">Multisim</span> <p className="text-wrap text-justify">A circuit design and simulation software developed by National Instruments (now part of NI) for designing and analyzing electronic circuits.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <figure className="">
                                <img src="https://i.ibb.co/SnFJz9h/mi3160fa63-microsoft-office-logo-file-microsoft-office-logo-2019-present-svg-liblogo.png" alt="conference management photo" className="rounded-xl w-6 h-6 " />
                            </figure>
                            <span className="font-bold">Microsoft Office</span> <p className="text-wrap text-justify">A suite of productivity applications developed by Microsoft, including Word (word processing), Excel (spreadsheets), PowerPoint (presentations), Outlook (email client), and others.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <figure className="">
                                <img src="https://i.ibb.co/n8TzGzC/adobe-photoshop-express-logo-CB0-F9-C1-CDD-seeklogo-com.png" alt="conference management photo" className="rounded-xl w-6 h-6 " />
                            </figure>
                            <span className="font-bold">Adobe Photoshop</span> <p className="text-wrap text-justify">A powerful raster graphics editor developed by Adobe Inc., known for its extensive capabilities in image editing, manipulation, and enhancement.</p>
                        </div>

                    </div>
                </TabPanel>
            </Tabs>


        </div>
    );
};

export default SkillsAndTechnology;