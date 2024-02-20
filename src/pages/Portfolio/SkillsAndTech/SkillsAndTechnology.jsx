// import { DiMongodb } from "react-icons/di";
// import { FaCss3, FaGitAlt, FaHtml5, FaJava, FaNodeJs, FaPython, FaReact } from "react-icons/fa6";
// import { IoLogoJavascript } from "react-icons/io5";
// import { SiAcademia, SiAdobephotoshop, SiArduino, SiDaisyui, SiExpress, SiFirebase, SiMicrosoftoffice, SiMultisim } from "react-icons/si";
// import { TbBrandNextjs, TbBrandVscode, TbFileTypeSql } from "react-icons/tb";
// import { SiTailwindcss } from "react-icons/si";
// import { GiMaterialsScience } from "react-icons/gi";
// import { BiLogoCPlusPlus } from "react-icons/bi";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';


const SkillsAndTechnology = () => {
    const axiosPublic = useAxiosPublic();

    const { isPending, error, data: skills = [] } = useQuery({
        queryKey: ["skills"],
        queryFn: async () => {
            const res = await axiosPublic.get('/skills');
            return res.data;
        }
    })

    const webDev = skills.filter(skill => skill.category === 'Web Development');
    const database = skills.filter(skill => skill.category === 'Database');
    const programLang = skills.filter(skill => skill.category === 'Programming Languages');
    const software = skills.filter(skill => skill.category === 'Software and Hardware');
    // console.log(webDev.length, database.length, programLang.length, software.length);
    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message ;


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
                        {
                            webDev.map((skill, ind) => <div key={ind} className="flex flex-col justify-center items-center space-y-2">
                                <figure className="">
                                    <img src={skill.image} alt="conference management photo" className="rounded-xl w-8 h-8" />
                                </figure>
                                <span className="font-bold">{skill.skillName}</span> <p className="text-wrap text-justify">{skill.skillDescription}</p>
                            </div>)
                        }

                    </div>
                </TabPanel>
                <TabPanel>
                    <h3 className="text-2xl font-bold text-center mt-3 mb-7">Database</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 px-5 mb-3">

                        {
                            database.map((skill, ind) => <div key={ind} className="flex flex-col justify-center items-center space-y-2">
                                <figure className="">
                                    <img src={skill.image} alt="conference management photo" className="rounded-xl w-8 h-8" />
                                </figure>
                                <span className="font-bold">{skill.skillName}</span> <p className="text-wrap text-justify">{skill.skillDescription}</p>
                            </div>)
                        }

                    </div>
                </TabPanel>
                <TabPanel>
                    <h3 className="text-2xl font-bold text-center mt-3 mb-7">Programming Languages</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 px-5 mb-3">
                        {
                            programLang.map((skill, ind) => <div key={ind} className="flex flex-col justify-center items-center space-y-2">
                                <figure className="">
                                    <img src={skill.image} alt="conference management photo" className="rounded-xl w-8 h-8" />
                                </figure>
                                <span className="font-bold">{skill.skillName}</span> <p className="text-wrap text-justify">{skill.skillDescription}</p>
                            </div>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h3 className="text-2xl font-bold text-center mt-3 mb-7">Software and Hardware</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 px-5">
                        {
                            software.map((skill, ind) => <div key={ind} className="flex flex-col justify-center items-center space-y-2">
                                <figure className="">
                                    <img src={skill.image} alt="conference management photo" className="rounded-xl w-8 h-8" />
                                </figure>
                                <span className="font-bold">{skill.skillName}</span> <p className="text-wrap text-justify">{skill.skillDescription}</p>
                            </div>)
                        }
                    </div>
                </TabPanel>
            </Tabs>


        </div>
    );
};

export default SkillsAndTechnology;