import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import Footer from "../shared/footer/Footer";

const Root = () => {
    return (
        // Flex column layout ensures the footer stays at the bottom of short pages
        <div className="flex flex-col min-h-screen bg-slate-50 text-neutral selection:bg-indigo-500 selection:text-white">
            
            {/* Persistent, fixed-access Navigation Bar */}
            <Navbar />
            
            {/* 
                Main Content Area:
                - 'flex-grow' pushes the footer down.
                - 'max-w-7xl' keeps your portfolio beautifully aligned on extra-wide screens.
                - 'w-full mx-auto px-4' handles symmetric side margins automatically on mobile/tablet.
            */}
            <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <Outlet />
            </main>
            
            {/* Polished, required Footer */}
            <Footer />
        </div>
    );
};

export default Root;