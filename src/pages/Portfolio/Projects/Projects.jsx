import { Link } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Projects = () => {
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
        <div className='mt-9'>
            <h1 className="text-center text-5xl text-info">My Projects</h1>
            <hr className="my-4" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {
                    projects.map((project, ind) => <div key={ind} className="card mx-auto bg-neutral text-neutral-content">
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
                    </div>)
                }

            </div>
        </div>
    );
};

export default Projects;