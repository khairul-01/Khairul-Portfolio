import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Footer = () => {
    const axiosPublic = useAxiosPublic();
    const { ref, inView } = useInView();
    const {
        register,
        handleSubmit,
        // watch,
        reset
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        const contactInfo = {
            name: data.name,
            email: data.email,
            message: data.message
        }
        console.log(contactInfo);

        const contactInf = await axiosPublic.post('/contact', contactInfo)
        console.log(contactInf.data);
        if (contactInf.data.insertedId) {
            // show success popup
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name}, your message has been submitted to Khairul Alam`,
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.002 }}
            whileTap={{ scale: 0.98 }}
        >
            <footer id="contact" className=" mt-1 p-3 md:p-10 bg-[#FFF8F3] text-base-content rounded">
                <div className="grid sm:grid-cols-2 gap-3">
                    <nav className="w-3/4 text-left mx-auto">
                        <h1 className="text-3xl font-bold mb-2">Lets connect</h1>
                        <p className="mb-3">Please fill out the form on this section to contact with me or Email me any time or call between 9 A.M to 8 P.M Monday to Sunday</p>
                        <div className="flex gap-4 text-2xl">
                            <Link to='https://www.facebook.com/khairul35' target="blank">
                                <div className='btn btn-sm btn-info text-xl'>
                                    <FaFacebook />
                                </div>
                            </Link>
                            <Link to='https://github.com/khairul-01'
                                target="blank">
                                <div className='btn btn-sm btn-info text-xl'>
                                    <FaGithub />
                                </div>
                            </Link>
                            <Link to='https://www.linkedin.com/in/khairul01' target="blank">
                                <div className='btn btn-sm btn-info text-xl'>
                                    <FaLinkedin />
                                </div>
                            </Link>
                            <Link to='https://mail.google.com' target="blank" >
                                <div className='btn btn-sm btn-info text-xl'>
                                    <MdEmail />
                                </div>
                            </Link>
                            {/* <Link to='https://www.instagram.com/rank_1_khairul_alam' target="blank" >
                                <div className='btn btn-sm btn-info text-xl'>
                                    <FaInstagram />
                                </div>
                            </Link> */}
                        </div>
                    </nav>
                    <nav className="w-3/4 mx-auto">
                        <h1 className="text-3xl font-bold mb-2">Lets Message Me</h1>
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} placeholder="Your Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} placeholder="Your Email" className="input input-bordered" required />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea className="textarea input input-bordered" {...register("message", { required: true })} placeholder="Message" required></textarea>


                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </nav>
                </div>
                <aside className="pt-3 text-center">
                    <p>Copyright © 2024 - All right reserved by Mr. MD. Khairul Alam</p>
                </aside>
            </footer>
        </motion.div>
    );
};

export default Footer;