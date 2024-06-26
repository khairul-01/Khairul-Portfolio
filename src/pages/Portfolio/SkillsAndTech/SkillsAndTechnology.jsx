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
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer";


const SkillsAndTechnology = () => {
    const { ref, inView } = useInView();
    const axiosPublic = useAxiosPublic();

    const { isPending, error, data: skills = [] } = useQuery({
        queryKey: ["skills"],
        queryFn: async () => {
            const res = await axiosPublic.get('/skills');
            return res.data;
        }
    })

    console.log(skills.length);

    const webDev = skills.filter(skill => skill.category === 'Web Development');
    const database = skills.filter(skill => skill.category === 'Database');
    const programLang = skills.filter(skill => skill.category === 'Programming Languages');
    const software = skills.filter(skill => skill.category === 'Software and Hardware');
    console.log(webDev.length, database.length, programLang.length, software.length);

    // if (isPending) return 'Loading...'

    // if (error) return 'An error has occurred: ' + error.message ;


    return (

        <motion.div className="sm:px-12 bg-[#E6E6FA] text-[#006400]"
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.002 }}
            whileTap={{ scale: 0.98 }}
        >
            <h1 className="text-5xl text-center text-success py-9">Skills and Technologies</h1>
            <hr className="py-4" />
            <Tabs>
                <TabList className={""}>
                    <Tab>Web Development</Tab>
                    <Tab>Database</Tab>
                    <Tab>Programming Languages</Tab>
                    <Tab>Software and Hardware</Tab>
                </TabList>

                <TabPanel>
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 1 }}
                        whileHover={{ scale: 1.002 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <h3 className="text-2xl font-bold text-center mt-3 mb-7">Web Development</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 px-5">
                            {
                                webDev.map((skill, ind) => <div key={ind} className="flex flex-col items-center space-y-2">
                                    <figure className="">
                                        <img src={skill.image} alt="conference management photo" className="rounded-xl w-8 h-8" />
                                    </figure>
                                    <span className="font-bold">{skill.skillName}</span> <p className="text-wrap text-justify">{skill.skillDescription}</p>
                                </div>)
                            }

                        </div>
                    </motion.div>
                </TabPanel>
                <TabPanel>
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 1 }}
                        whileHover={{ scale: 1.002 }}
                        whileTap={{ scale: 0.98 }}
                    >
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
                    </motion.div>

                </TabPanel>
                <TabPanel>
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 1 }}
                        whileHover={{ scale: 1.002 }}
                        whileTap={{ scale: 0.98 }}
                    >
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
                    </motion.div>

                </TabPanel>
                <TabPanel>
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 1 }}
                        whileHover={{ scale: 1.002 }}
                        whileTap={{ scale: 0.98 }}
                    >
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
                    </motion.div>

                </TabPanel>
            </Tabs>


        </motion.div>
    );
};

export default SkillsAndTechnology;