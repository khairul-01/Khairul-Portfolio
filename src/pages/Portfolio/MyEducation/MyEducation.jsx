import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer";

const MyEducation = () => {
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
            <div className="mt-5 bg-[#E0FFFF] text-[#8B0000]">
                <h1 className="text-5xl text-primary text-center py-7 font-bold">My Education</h1>
                <div className="card  w-1/2 mx-auto">
                    <figure className="px-10 pt-10 h-96">
                        <img src="https://i.ibb.co/B35xQsP/Certificates-4.jpg" alt="conference management photo" className="rounded-xl" />
                    </figure>
                    <div className="card-body  text-left">
                        <h2 className="card-title">Bachelor of Science in Electrical and Electronics Engineering (EEE)</h2>
                        <p className="text-xl">North South University </p>
                        <p>Duration: April, 2017 - August 2021</p>
                        <p>Department: Electrical and Computer Engineering</p>
                        <p>CGPA: 3.17</p>

                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default MyEducation;