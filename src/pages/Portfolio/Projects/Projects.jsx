import { Link } from "react-router-dom";


const Projects = () => {
    return (
        <div className='mt-9'>
            <h1 className="text-center text-5xl text-primary">Projects</h1>
            <hr className="my-4" />
            <div className="card w-3/4 mx-auto bg-neutral text-neutral-content">
                <div className="card-body  text-left">
                    <h2 className="card-title">KA Fitness Tracker</h2>
                    <p> <span className="font-bold">Description</span> The Fitness Tracker Website is a comprehensive platform designed to help users achieve their fitness goals, and connect with trainers. The website offers a range of features and functionalities tailored to meet the diverse needs of users, trainers, and administrators. Provide users with a user-friendly and visually appealing platform to track their fitness progress, access training resources, and connect with trainers and peers. Empower trainers to effectively manage their classes, engage with clients, and deliver personalized training experiences.</p>
                    <p><span className="font-bold">Technologies:</span> Frontend: React.js, Tailwind CSS, Daisy UI, React Router, HTML-5. Backend: Node.js, Express.js. Database: MongoDB, Firebase (for Authentication). Deployment: Vercel(for backend), Firebase(for frontend)</p>
                    <p><span className="font-bold">Live demo:</span> <Link to='https://kafitnesstracker.web.app' target="blank">https://kafitnesstracker.web.app</Link></p>
                    <p><span className="font-bold">Frontend GitHub Repository Link:</span> <Link to='https://github.com/khairul-01/ka-fitness-tracker.git' target="blank">https://github.com/khairul-01/ka-fitness-tracker.git</Link></p>
                    <p><span className="font-bold">Backend GitHub Repository Link:</span> <Link to='https://github.com/khairul-01/ka-fitness-tracker-server-site.git' target="blank">https://github.com/khairul-01/ka-fitness-tracker-server-site.git</Link></p>
                </div>
            </div>
            <hr className="my-4" />
            <div className="card w-3/4 mx-auto bg-neutral text-neutral-content">
                <div className="card-body  text-left">
                    <h2 className="card-title">KH Automotive Brand Shop</h2>
                    <p> <span className="font-bold">Description</span> The KH Automotive Brand Shop is a sophisticated online platform dedicated to automotive enthusiasts, offering a curated selection of premium automotive products and accessories. With a seamless user experience and a range of features, the website caters to both casual shoppers and avid collectors alike. Provide users with a seamless and intuitive shopping experience, with easy navigation, clear product information, and secure checkout processes. Empower administrators to manage product inventory, update product details, and monitor sales performance efficiently. Enhance user engagement and satisfaction with customizable theme options, ensuring optimal readability and visual comfort for users.</p>
                    <p><span className="font-bold">Technologies:</span> Frontend: React.js, Tailwind CSS, Daisy UI, React Router, HTML-5. Backend: Node.js, Express.js. Database: MongoDB, Firebase (for Authentication). Deployment: Vercel(for backend), Firebase(for frontend)</p>
                    <p><span className="font-bold">Live demo:</span> <Link to='https://automotive-brand-shop-c1048.web.app' target="blank">https://automotive-brand-shop-c1048.web.app</Link></p>
                    <p><span className="font-bold">Frontend GitHub Repository Link:</span> <Link to='https://github.com/khairul-01/kh-automotive-brand-shop-client-side.git' target="blank">https://github.com/khairul-01/kh-automotive-brand-shop-client-side.git</Link></p>
                    <p><span className="font-bold">Backend GitHub Repository Link:</span> <Link to='https://github.com/khairul-01/kh-automotive-brand-shop-server-side.git' target="blank">https://github.com/khairul-01/kh-automotive-brand-shop-server-side.git</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Projects;