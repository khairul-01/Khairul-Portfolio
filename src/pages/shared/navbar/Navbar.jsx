import { NavLink } from "react-router-dom";


const Navbar = () => {
    const NavLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/portfolio'}>Portfolio</NavLink></li>
        <li><NavLink to={'/blog'}>Blog</NavLink></li>
        <li><NavLink to={'/hireMe'}> Hire Me </NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 mb-1">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu gap-2 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-primary">Khairul Alam</a>
                </div>

                <div className="navbar-end hidden sm:flex">
                    <ul className="menu items-center gap-2 menu-horizontal px-1">
                        {NavLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;