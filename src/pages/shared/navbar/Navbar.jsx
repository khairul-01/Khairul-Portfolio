// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//     // const NavLinks = <>
//     //     <li><NavLink to="/">Home</NavLink></li>
//     //     <li><NavLink to="/about">About Me</NavLink></li>
//     //     <li><NavLink to="/skills">Skills</NavLink></li>
//     //     <li><NavLink to="/projects">Projects</NavLink></li>
//     //     <li><NavLink to="/contact">Contact</NavLink></li>
//     // </>

//     const NavLinks = <>
//         <li><a href="#hero">Home</a></li>
//         <li><a href="#about">About Me</a></li>
//         <li><a href="#skills">Skills</a></li>
//         <li><a href="#education">Education & Experience</a></li>
//         <li><a href="#projects">Projects</a></li>
//         <li><a href="#contact">Contact</a></li>
//     </>

//     return (
//         <div className="navbar sticky top-0 z-50 bg-violet-100 mb-1 text-black shadow-md">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
//                         </svg>
//                     </div>
//                     <ul tabIndex={0} className="menu gap-2 menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52 text-black">
//                         {NavLinks}
//                     </ul>
//                 </div>
//                 <div className="flex items-center btn btn-ghost bg-gradient-to-r from-green-300 to-blue-300 hover:from-pink-300 hover:to-yellow-300 text-primary">
//                     <img className="h-12" src="https://i.ibb.co/2tRKfqC/download-removebg-preview.png" alt="Logo" />
//                     <span className="text-xl font-bold text-neutral">Khairul Alam</span>
//                 </div>
//             </div>

//             <div className="navbar-end hidden sm:flex">
//                 <ul className="menu items-center gap-2 menu-horizontal px-1 font-medium">
//                     {NavLinks}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default Navbar;

import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleScrollLink = (e, targetId) => {
        setIsOpen(false); // Close mobile menu when clicked
        if (location.pathname === "/") {
            e.preventDefault();
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            navigate(`/#${targetId}`);
        }
    };

    const navLinks = (
        <>
            <li>
                <a href="#about" onClick={(e) => handleScrollLink(e, "about")} className="hover:text-violet-600 transition-colors">About</a>
            </li>
            <li>
                <a href="#skills" onClick={(e) => handleScrollLink(e, "skills")} className="hover:text-violet-600 transition-colors">Skills</a>
            </li>
            <li>
                <a href="#projects" onClick={(e) => handleScrollLink(e, "projects")} className="hover:text-violet-600 transition-colors">Projects</a>
            </li>
            <li>
                <a href="#education" onClick={(e) => handleScrollLink(e, "education")} className="hover:text-violet-600 transition-colors">Qualifications</a>
            </li>
            <li>
                <Link to="/blog" className={`hover:text-violet-600 transition-colors ${location.pathname === "/blog" ? "text-violet-600 font-bold" : ""}`}>
                    Blog
                </Link>
            </li>
        </>
    );

    return (
        /* FIX 1 & 2: Added absolute styling properties to prevent layout breaking */
        <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-100 z-50 h-16 flex items-center">
            <div className="navbar max-w-6xl mx-auto px-4 w-full justify-between">

                {/* Brand Logo - Styled and Fully Linked to Home */}
                <div className="flex-1 lg:flex-none">
                    <Link
                        to="/"
                        onClick={(e) => {
                            // Smoothly scrolls to top if you are already on the home page
                            if (location.pathname === "/") {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: "smooth" });
                            }
                        }}
                        className="inline-flex flex-col items-start select-none group cursor-pointer"
                    >
                        <span className="text-xl md:text-2xl font-black bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-700 bg-clip-text text-transparent tracking-tight leading-none group-hover:opacity-90 transition-opacity">
                            Khairul <span className="text-violet-600">Alam</span>
                        </span>
                        <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400 mt-0.5 group-hover:text-violet-500 transition-colors">
                            Portfolio
                        </span>
                    </Link>
                </div>

                {/* Desktop Navigation links */}
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 font-semibold text-slate-600 text-sm gap-6">
                        {navLinks}
                    </ul>
                </div>

                {/* Desktop CTA Action button */}
                <div className="hidden lg:flex ml-4">
                    <a
                        href="#contact"
                        onClick={(e) => handleScrollLink(e, "contact")}
                        className="btn bg-violet-600 hover:bg-violet-700 text-white border-none rounded-xl font-bold btn-sm shadow-sm px-5"
                    >
                        Hire Me
                    </a>
                </div>

                {/* Mobile Hamburger Trigger Toggle Button */}
                <div className="flex lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-slate-700 text-xl focus:outline-none"
                    >
                        {isOpen ? <FaXmark /> : <FaBars />}
                    </button>
                </div>

            </div>

            {/* Mobile Dropdown Overlay Menu List Wrapper */}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-white border-b border-slate-100 shadow-lg lg:hidden animate-fadeIn">
                    <ul className="menu menu-vertical px-4 py-4 font-semibold text-slate-600 gap-3">
                        {navLinks}
                        <li className="pt-2">
                            <a
                                href="#contact"
                                onClick={(e) => handleScrollLink(e, "contact")}
                                className="btn bg-violet-600 hover:bg-violet-700 text-white border-none rounded-xl font-bold text-center w-full"
                            >
                                Hire Me
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Navbar;