import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col gap-3 items-center justify-center max-w-md mx-auto">
            <h1 className="text-5xl text-pink-500 text-justify">You are in Error Page. Please Solve you error and be calm and patient</h1>
            <Link to={'/'}><button className="btn btn-primary">Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;