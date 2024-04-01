import { NavLink } from "react-router-dom";
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer";


const Navbar = () => {
    const NavLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/portfolio'}>Portfolio</NavLink></li>
        <li><NavLink to={'/blog'}>Blog</NavLink></li>
        <li><NavLink to={'/hireMe'}> Hire Me </NavLink></li>
    </>
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
            <div className="navbar z-10 bg-violet-100 mb-1 text-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu gap-2 menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52">
                            {NavLinks}
                        </ul>
                    </div>
                    <div className="flex items-center btn btn-ghost bg-gradient-to-r from-green-300 to-blue-300 hover:from-pink-300 hover:to-yellow-300 text-primary"> <img className="h-12" src="https://i.ibb.co/2tRKfqC/download-removebg-preview.png" alt="" /> <a className=" text-xl ">Khairul Alam</a></div>
                </div>

                <div className="navbar-end hidden sm:flex">
                    <ul className="menu items-center gap-2 menu-horizontal px-1">
                        {NavLinks}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

export default Navbar;