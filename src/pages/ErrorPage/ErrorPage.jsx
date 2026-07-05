import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4">
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-slate-100 p-8 text-center space-y-6"
            >
                {/* Visual Icon Header */}
                <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center mx-auto text-rose-500 text-3xl shadow-inner animate-pulse">
                    <FaExclamationTriangle />
                </div>

                {/* Clear, User-Friendly Typography */}
                <div className="space-y-2">
                    <h1 className="text-7xl font-black text-slate-800 tracking-tight">404</h1>
                    <h2 className="text-xl font-bold text-slate-700">Page Not Found</h2>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>
                </div>

                {/* Clean, Prominent Action Button */}
                <div className="pt-2">
                    <Link to="/">
                        <button className="btn btn-primary bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white border-none px-6 rounded-xl shadow-md shadow-indigo-100 gap-2 font-bold w-full sm:w-auto">
                            <FaHome className="text-base" />
                            Back to Home
                        </button>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default ErrorPage;