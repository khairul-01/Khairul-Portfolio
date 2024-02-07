import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div>
            <footer id="contact" className=" mt-3 p-3 md:p-10 bg-[FFF8F3] text-base-content rounded">
                <div className="grid grid-cols-2 gap-3">
                    <nav className="w-3/4 text-left mx-auto">
                        <h1 className="text-3xl font-bold mb-2">Lets connect</h1>
                        <p className="mb-3">Please fill out the form on this section to contact with me or Email me any time or call between 9 A.M to 8 P.M Monday to Sunday</p>
                        <div className="flex gap-4 text-2xl">
                            <div className='btn btn-sm btn-info text-xl'>
                                <FaFacebook />
                            </div>
                            <div className='btn btn-sm btn-info text-xl'>
                                <FaGithub />
                            </div>
                            <div className='btn btn-sm btn-info text-xl'>
                                <FaLinkedin />
                            </div>
                            <div className='btn btn-sm btn-info text-xl'>
                                <MdEmail />
                            </div>
                        </div>
                    </nav>
                    <nav className="w-3/4 mx-auto">
                        <h1 className="text-3xl font-bold mb-2">Lets Message Me</h1>
                        <div>
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="email" placeholder="Your Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="password" placeholder="Your Email" className="input input-bordered" required />
                                    
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea className="textarea input input-bordered" placeholder="Message" required></textarea>
                                    
                                    
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
        </div>
    );
};

export default Footer;