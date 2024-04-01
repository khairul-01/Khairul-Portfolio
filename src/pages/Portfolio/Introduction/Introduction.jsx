import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer";

const Introduction = () => {
    const { ref, inView } = useInView();
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.002 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#F5F5DC]"
        >
            <h1 className="text-5xl text-primary font-bold text-center py-7">Introduction</h1>
            <div className="hero-content flex-col md:flex-row-reverse sm:px-12 text-[#4B0082] bg-[#F5F5DC] p-4">
                <div className="w-3/4 sm:w-1/2">
                    <img src="https://i.ibb.co/F7zcLtj/cpc-P6-W7-A9974v1.jpg" className="rounded-lg shadow-2xl mx-auto w-2/4" />
                </div>
                <div className="w-3/4 sm:w-1/2 text-justify">
                    Greetings! I am a results-driven IT engineer with a strong background in both frontend and backend development. My journey in the tech world began with a curiosity for how things work, which has evolved into a deep-seated passion for creating efficient and scalable solutions. With a focus on user-centric design and meticulous attention to detail, I strive to deliver exceptional experiences that leave a lasting impression. Lets connect and explore how we can collaborate to bring your ideas to life.
                </div>
            </div>
        </motion.div>
    );
};

export default Introduction;