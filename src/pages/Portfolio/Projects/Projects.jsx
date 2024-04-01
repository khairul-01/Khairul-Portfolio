import { Link } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer";

const Projects = () => {
    const { ref, inView } = useInView();
    const axiosPublic = useAxiosPublic();

    const { isPending, error, data: projects = [] } = useQuery({
        queryKey: ["projects"],
        queryFn: async () => {
            const res = await axiosPublic.get('/projects');
            return res.data;
        }
    })

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message;

    return (
        <motion.div className='bg-[#F5F5DC]'
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.002 }}
            whileTap={{ scale: 0.98 }}
        >
            <h1 className="text-center py-7 text-5xl text-info">My Projects</h1>
            <hr className="my-4" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {
                    projects.map((project, ind) => <motion.div key={ind} className="card mx-auto bg-[#FFFFF0] text-[#000080]"
                        ref={ref}
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 1 }}
                        whileHover={{ scale: 1.002 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <figure className="px-10 pt-10">
                            <img src={project.image} alt="KA Fiteness Tracker photo" className="rounded-xl" />
                        </figure>
                        <div className="card-body  text-left">
                            <h2 className="card-title"> {project?.title} </h2>
                            <p> <span className="font-bold">Description</span> {project?.description} </p>
                            <p><span className="font-bold">Technologies:</span>
                                {
                                    project.technologies.map((tech, ind) => <li key={ind}> {tech} </li>)
                                }
                            </p>
                            <p><span className="font-bold">Live demo:</span> <Link to={project.liveUrl} target="blank">{project.liveUrl}</Link></p>
                            <p><span className="font-bold">Frontend GitHub Repository Link:</span> <Link to={project?.frontendUrl} target="blank">{project?.frontendUrl}</Link></p>
                            {
                                project?.backendUrl && (
                                    <p><span className="font-bold">Backend GitHub Repository Link:</span> <Link to={project?.backendUrl} target="blank">{project?.backendUrl}</Link></p>
                                )
                            }

                        </div>
                    </motion.div>)
                }

            </div>
        </motion.div>
    );
};

export default Projects;