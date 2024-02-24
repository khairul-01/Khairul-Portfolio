import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer";

const Banner = () => {
    const { ref, inView } = useInView();
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            // initial="hidden"
            // animate="visible"
            variants={variants}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.003 }}
            whileTap={{ scale: 0.98 }}
        >
            <div className="hero min-h-screen bg-gradient-to-r from-indigo-200 from-10% via-sky-300 via-50% to-emerald-200 to-90%">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="w-1/2">
                        <img src="https://i.ibb.co/hFQfXS6/Khairul-Alam.jpg" className="rounded-lg shadow-2xl mx-auto" />
                    </div>
                    <div className="w-1/2 text-center">
                        <div className="w-3/4 mx-auto ">
                            <h1 className="text-5xl font-bold">Hi, I am</h1>
                            <h1 className="text-5xl text-orange-950">Khairul Alam</h1>
                            <p className="py-6 text-justify">Welcome to my portfolio! I am a dedicated and aspiring web developer with a passion for creating impactful digital experiences. My journey into the world of technology began with a deep-seated curiosity and a drive to understand the inner workings of the web.</p>
                            <div className="flex gap-4 justify-center">

                                <Link to='https://drive.google.com/file/d/10y6WoNBESp-AuytqyT_hurtvJEoM8Xqf/view?usp=sharing' target="blank"><button className="btn btn-secondary">Download CV</button></Link>
                                <Link to="/hireMe"><button className="btn btn-secondary">Contact</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Banner;