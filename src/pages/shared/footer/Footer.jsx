import { FaFacebook, FaGithub, FaLinkedin, FaXTwitter, FaWhatsapp } from "react-icons/fa6"; // Updated to include Twitter/X and WhatsApp
import { MdEmail, MdPhone } from "react-icons/md";
// import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
// import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Footer = () => {
    // const axiosPublic = useAxiosPublic();
    const { ref, inView } = useInView({ triggerOnce: true }); // Prevent repeated snapping triggers while typing in forms
    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    // const onSubmit = async (data) => {
    //     console.log(data);
    //     const contactInfo = {
    //         name: data.name,
    //         email: data.email,
    //         message: data.message
    //     };

    //     try {
    //         const contactInf = await axiosPublic.post('/contact', contactInfo);
    //         if (contactInf.data.insertedId) {
    //             reset();
    //             Swal.fire({
    //                 position: "top-end",
    //                 icon: "success",
    //                 title: `${data.name}, your message has been submitted to Khairul Alam`,
    //                 showConfirmButton: false,
    //                 timer: 1500
    //             });
    //         }
    //     } catch (error) {
    //         console.error("Submission failed", error);
    //     }
    // };

    const onSubmit = async (data) => {
        // Prepare the payload for Web3Forms
        const formData = {
            access_key: "a80681c3-d2fe-4914-9a0c-fafc9b73fc58", // Paste your free key here
            name: data.name,
            email: data.email,
            message: data.message
        };

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (result.success) {
                reset(); // Clear form fields
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name}, your message has been sent to my email!`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (error) {
            console.error("Email submission failed", error);
        }
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
        >
            {/* Main Combined Contact & Footer Container */}
            <footer id="contact" className="mt-4 p-6 md:p-12 bg-base-200 text-base-content rounded-t-2xl shadow-inner">
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

                    {/* Left Column: Direct Contact Details & Social Handles */}
                    <nav className="flex flex-col justify-between text-left space-y-6">
                        <div>
                            <h1 className="text-3xl font-extrabold mb-3 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                                {`Let's Connect`}
                            </h1>
                            <p className="mb-6 text-sm opacity-80 leading-relaxed">
                                Please fill out the form to drop me a message, or use the direct details below to get in touch with me directly at any time.
                            </p>

                            {/* Mandated Direct Contact Block */}
                            <div className="space-y-3 font-medium text-sm md:text-base">
                                <div className="flex items-center gap-3">
                                    <MdEmail className="text-violet-600 text-xl" />
                                    <a href="mailto:khairul431743@gmail.com" className="hover:underline">khairul431743@gmail.com</a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MdPhone className="text-violet-600 text-xl" />
                                    <a href="tel:+8801956431743" className="hover:underline">+880 1956-431743</a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaWhatsapp className="text-emerald-500 text-xl" />
                                    <a href="https://wa.me/8801956431743" target="_blank" rel="noreferrer" className="hover:underline">
                                        Chat on WhatsApp (Optional)
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Mandated Social Profiles Links Segment */}
                        <div>
                            <h2 className="text-lg font-bold mb-3">Find Me On</h2>
                            <div className="flex flex-wrap gap-3">
                                <a href="https://github.com/khairul-01" target="_blank" rel="noreferrer" className="btn btn-circle btn-sm md:btn-md btn-outline btn-neutral hover:bg-neutral">
                                    <FaGithub className="text-lg md:text-xl" />
                                </a>
                                <a href="https://www.linkedin.com/in/khairul01" target="_blank" rel="noreferrer" className="btn btn-circle btn-sm md:btn-md btn-outline btn-info hover:bg-sky-500 hover:text-white">
                                    <FaLinkedin className="text-lg md:text-xl" />
                                </a>
                                <a href="https://twitter.com/your_handle" target="_blank" rel="noreferrer" className="btn btn-circle btn-sm md:btn-md btn-outline btn-neutral hover:bg-black hover:text-white">
                                    <FaXTwitter className="text-lg md:text-xl" />
                                </a>
                                <a href="https://www.facebook.com/khairul35" target="_blank" rel="noreferrer" className="btn btn-circle btn-sm md:btn-md btn-outline btn-primary hover:bg-blue-600 hover:text-white">
                                    <FaFacebook className="text-lg md:text-xl" />
                                </a>
                            </div>
                        </div>
                    </nav>

                    {/* Right Column: Contact Messaging Form */}
                    <nav className="bg-base-100 p-4 md:p-6 rounded-xl shadow-md border border-base-300">
                        <h2 className="text-2xl font-bold px-4 pt-2">Send a Message</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body p-4 space-y-2">
                            <div className="form-control">
                                <label className="label py-1"><span className="label-text font-medium">Name</span></label>
                                <input type="text" {...register("name", { required: true })} placeholder="Your Name" className="input input-bordered focus:input-primary text-sm" required />
                            </div>
                            <div className="form-control">
                                <label className="label py-1"><span className="label-text font-medium">Email</span></label>
                                <input type="email" {...register("email", { required: true })} placeholder="Your Email" className="input input-bordered focus:input-primary text-sm" required />
                            </div>
                            <div className="form-control">
                                <label className="label py-1"><span className="label-text font-medium">Message</span></label>
                                <textarea rows="4" className="textarea textarea-bordered focus:textarea-primary text-sm h-28" {...register("message", { required: true })} placeholder="Type your message here..." required></textarea>
                            </div>
                            <div className="form-control mt-4">
                                <button className="btn btn-primary bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white border-none shadow">
                                    Submit Message
                                </button>
                            </div>
                        </form>
                    </nav>
                </div>

                {/* Simple & Elegant Footer Strip */}
                <hr className="border-base-300 mt-8 max-w-6xl mx-auto" />
                <aside className="pt-4 text-center text-xs opacity-60">
                    <p>Copyright © {new Date().getFullYear()} - All rights reserved by Md. Khairul Alam</p>
                </aside>
            </footer>
        </motion.div>
    );
};

export default Footer;