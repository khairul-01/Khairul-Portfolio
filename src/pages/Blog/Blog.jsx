import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { GrDislike, GrLike } from "react-icons/gr";
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer";

const Blog = () => {

    const { ref, inView } = useInView();

    const [upVote, setUpVote] = useState(0);
    const [downVote, setDownVote] = useState(0);

    const handleUpVote = () => {

        const newVote = upVote + 1;
        setUpVote(newVote);

    }
    const handleDownVote = () => {

        const newVote = downVote + 1;
        setDownVote(newVote);

    }
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.002 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#E6E6FA] text-[#006400]"
        >
            <h1 className="text-5xl text-info text-center py-7 my-7">Welcome to My Blog </h1>

            <div className="grid gap-5 grid-cols-1 mt-3 sm:w-2/3 mx-auto">

                <div className="card bg-[#E6E6FA] text-[#006400]">
                    <figure className="px-6 sm:px-10 pt-6 sm:pt-10 h-96">
                        <img src="https://i.ibb.co/px9t4pC/432000382-1487603411792305-7096449324897784746-n.jpg" alt="conference management photo" className="rounded-xl" />
                        <img src="https://i.ibb.co/6BVxYg9/Whats-App-Image-2024-03-07-at-18-52-31-37ddc7d6copy.jpg" alt="conference management photo" className="rounded-xl" />
                    </figure>
                    <div className="card-body  text-left">
                        <div className="card-actions gap-5">
                            <div className="flex gap-2 items-center"><FaRegUserCircle /> Khairul Alam </div>
                            <div className="flex gap-2 items-center"> <FaCalendarAlt /> March 03, 2024</div>
                        </div>
                        <h2 className="card-title">Mastering Japanese Language and Culture: My Journey with B-MEET Plus</h2>
                        <p>The B-MEET Plus program is an intensive one-month training initiative that builds upon the foundational knowledge acquired in the previous B-MEET program. With a renewed focus on Japanese language revision and cultural immersion, the program aims to deepen participants' understanding and appreciation of the Japanese language and culture.</p>
                        {/* <div className="card-actions justify-end">
                            <div onClick={handleUpVote} className="btn text-base"><GrLike /> Like {upVote}</div>

                            <div onClick={handleDownVote} className="btn text-base"><GrDislike /> Dislike {downVote}</div>
                        </div> */}
                        <div className="card-actions justify-end">

                            <button className="btn btn-outline btn-accent rounded-3xl">Read More</button>

                        </div>
                    </div>
                </div>

            </div>
            <br />
            <div className="grid gap-5 grid-cols-1 mt-3 sm:w-2/3 mx-auto">

                <div className="card bg-[#E6E6FA] text-[#006400]">
                    <figure className="px-6 sm:px-10 pt-6 sm:pt-10 h-96">
                        <img src="https://i.ibb.co/VgVbMcc/IMGL7795.jpg" alt="conference management photo" className="rounded-xl" />
                        <img src="https://i.ibb.co/KLrtfrh/IMGL7889.jpg" alt="conference management photo" className="rounded-xl" />
                    </figure>
                    <div className="card-body  text-left">
                        <div className="card-actions gap-5">
                            <div className="flex gap-2 items-center"><FaRegUserCircle /> Khairul Alam </div>
                            <div className="flex gap-2 items-center"> <FaCalendarAlt /> March 29, 2023</div>
                        </div>
                        <h2 className="card-title">Exploring Japanese Language and Culture: My Experience with the B-MEET Program</h2>
                        <p>Konnichiwa, everyone! I'm thrilled to share with you my experience participating in the Bangladesh Miyazaki ICT Engineering Training Program (B-MEET). Over the course of one month, I immersed myself in the world of Japanese language, culture, and professional development, and I'm excited to take you along on this journey with me. </p>
                        {/* <div className="card-actions justify-end">
                            <div onClick={handleUpVote} className="btn text-base"><GrLike /> Like {upVote}</div>

                            <div onClick={handleDownVote} className="btn text-base"><GrDislike /> Dislike {downVote}</div>
                        </div> */}
                        <div className="card-actions justify-end">

                            <button className="btn btn-outline btn-accent rounded-3xl">Read More</button>

                        </div>
                    </div>
                </div>

            </div>
        </motion.div>
    );
};

export default Blog;