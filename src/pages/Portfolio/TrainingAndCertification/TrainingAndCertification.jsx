import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer";

const TrainingAndCertification = () => {
    const { ref, inView } = useInView();
    return (
        <motion.div className="mt-5 bg-[#E6E6FA] text-[#006400]"
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.002 }}
            whileTap={{ scale: 0.98 }}
        >
            <h1 className="text-5xl text-primary text-center py-7 font-bold">My Training and Certification</h1>
            <div className="grid grid-cols-2 gap-3 mt-3">
                <div className="card">
                    <figure className="px-10 pt-10 h-96">
                        <img src="https://i.ibb.co/B31xWM3/ICT-Certificates-1.jpg" alt="conference management photo" className="rounded-xl" />
                    </figure>
                    <div className="card-body  text-left">
                        <h2 className="card-title">Fundamental IT Engineering Examination (FE) Exam</h2>
                        <p>Bangladesh Computer Council (BCC), Agargaon, Dhaka</p>
                        <p>Date of Passing: 21 October, 2023</p>
                    </div>
                </div>
                <div className="card">
                    <figure className="px-10 pt-10 h-96">
                        <img src="https://i.ibb.co/f8gwYNw/ICT-Certificates-3.jpg" alt="conference management photo" className="rounded-xl" />
                    </figure>
                    <div className="card-body  text-left">
                        <h2 className="card-title">Bangladesh Miyazaki ICT Engineering Training Program (B-MEET)</h2>
                        <p>B-JET Center, North South University</p>
                        <p>Duration: One Month, May 2023</p>
                    </div>
                </div>
            </div>

        </motion.div>
    );
};

export default TrainingAndCertification;