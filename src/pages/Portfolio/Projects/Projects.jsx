import { Link } from "react-router-dom";


const Projects = () => {
    return (
        <div className='mt-9'>
            <h1 className="text-center text-5xl text-info">My Projects</h1>
            <hr className="my-4" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="card mx-auto bg-neutral text-neutral-content">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/QFD7Y6j/image.png" alt="KA Fiteness Tracker photo" className="rounded-xl" />
                    </figure>
                    <div className="card-body  text-left">
                        <h2 className="card-title">KA Fitness Tracker</h2>
                        <p> <span className="font-bold">Description</span> The Fitness Tracker Website is a comprehensive platform designed to help users achieve their fitness goals, and connect with trainers. The website offers a range of features and functionalities tailored to meet the diverse needs of users, trainers, and administrators. Provide users with a user-friendly and visually appealing platform to track their fitness progress, access training resources, and connect with trainers and peers. Empower trainers to effectively manage their classes, engage with clients, and deliver personalized training experiences.</p>
                        <p><span className="font-bold">Technologies:</span> <li>Frontend: React.js, Tailwind CSS, Daisy UI, React Router, HTML-5.</li> <li>Backend: Node.js, Express.js. Database: MongoDB, Firebase (for Authentication).</li> <li>Deployment: Vercel(for backend), Firebase(for frontend)</li></p>
                        <p><span className="font-bold">Live demo:</span> <Link to='https://kafitnesstracker.web.app' target="blank">https://kafitnesstracker.web.app</Link></p>
                        <p><span className="font-bold">Frontend GitHub Repository Link:</span> <Link to='https://github.com/khairul-01/ka-fitness-tracker.git' target="blank">https://github.com/khairul-01/ka-fitness-tracker.git</Link></p>
                        <p><span className="font-bold">Backend GitHub Repository Link:</span> <Link to='https://github.com/khairul-01/ka-fitness-tracker-server-site.git' target="blank">https://github.com/khairul-01/ka-fitness-tracker-server-site.git</Link></p>
                    </div>
                </div>

                <div className="card mx-auto bg-neutral text-neutral-content">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/3dKzGzT/image.png" alt="kh automotive brand shop photo" className="rounded-xl" />
                    </figure>
                    <div className="card-body  text-left">
                        <h2 className="card-title">KH Automotive Brand Shop</h2>
                        <p> <span className="font-bold">Description</span> The KH Automotive Brand Shop is a sophisticated online platform dedicated to automotive enthusiasts. Provide users with a seamless and intuitive shopping experience, with easy navigation, clear product information, and secure checkout processes. Empower administrators to manage product inventory, update product details, and monitor sales performance efficiently. Enhance user engagement and satisfaction with customizable theme options, ensuring optimal readability and visual comfort for users.</p>
                        <p><span className="font-bold">Technologies:</span> <li>Frontend: React.js, Tailwind CSS, Daisy UI, React Router, HTML-5.</li> <li>Backend: Node.js, Express.js. Database: MongoDB, Firebase (for Authentication).</li> <li>Deployment: Vercel(for backend), Firebase(for frontend)</li></p>
                        <p><span className="font-bold">Live demo:</span> <Link to='https://automotive-brand-shop-c1048.web.app' target="blank">https://automotive-brand-shop-c1048.web.app</Link></p>
                        <p><span className="font-bold">Frontend GitHub Repository Link:</span> <Link to='https://github.com/khairul-01/kh-automotive-brand-shop-client-side.git' target="blank">https://github.com/khairul-01/kh-automotive-brand-shop-client-side.git</Link></p>
                        <p><span className="font-bold">Backend GitHub Repository Link:</span> <Link to='https://github.com/khairul-01/kh-automotive-brand-shop-server-side.git' target="blank">https://github.com/khairul-01/kh-automotive-brand-shop-server-side.git</Link></p>
                    </div>
                </div>

                <div className="card mx-auto bg-neutral text-neutral-content">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/xsx2Zzg/image.png" alt="conference management photo" className="rounded-xl" />
                    </figure>
                    <div className="card-body  text-left">
                        <h2 className="card-title">Donation Campaign</h2>
                        <p> <span className="font-bold">Description</span> The Donation Campaign website is a philanthropic platform designed to facilitate charitable giving and raise awareness for various causes and campaigns. With a user-friendly interface and insightful statistics, the website aims to inspire generosity and support meaningful initiatives that make a positive impact on society.</p>
                        <p><span className="font-bold">Technologies:</span> <li>Frontend: React.js, Tailwind CSS, Daisy UI, React Router, HTML-5, JavaScript.</li> <li>Deployment: Surge</li></p>
                        <p><span className="font-bold">Live demo:</span> <Link to='https://plain-lift.surge.sh' target="blank">https://plain-lift.surge.sh/</Link></p>
                        <p><span className="font-bold"> GitHub Repository Link:</span> <Link to='https://github.com/khairul-01/donation-campaign.git' target="blank">https://github.com/khairul-01/donation-campaign.git</Link></p>

                    </div>
                </div>
                <div className="card mx-auto bg-neutral text-neutral-content">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/N6Nztgc/image.png" alt="conference management photo" className="rounded-xl" />
                    </figure>
                    <div className="card-body  text-left">
                        <h2 className="card-title">Conference Management</h2>
                        <p> <span className="font-bold">Description</span> The Conference Management website is a comprehensive platform designed to streamline the organization and management of conferences, events, and seminars. With user-friendly features and secure authentication, the website caters to event organizers, attendees, and speakers, providing a seamless experience from registration to participation.</p>
                        <p><span className="font-bold">Technologies:</span> <li>Frontend: React.js, Tailwind CSS, Daisy UI, React Router, HTML-5, JavaScript.</li>
                            <li>Backend: Firebase Authentication (for user authentication)</li>
                            <li>Database: Firebase Firestore (for storing conference data)</li>
                            <li>Deployment: Surge</li> </p>
                        <p><span className="font-bold">Live demo:</span> <Link to='https://plain-lift.surge.sh' target="blank">https://plain-lift.surge.sh/</Link></p>
                        <p><span className="font-bold"> GitHub Repository Link:</span> <Link to='https://github.com/khairul-01/donation-campaign.git' target="blank">https://github.com/khairul-01/donation-campaign.git</Link></p>

                    </div>
                </div>
                <div className="card mx-auto bg-neutral text-neutral-content">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/5knrPnr/image.png" alt="conference management photo" className="rounded-xl" />
                    </figure>
                    <div className="card-body  text-left">
                        <h2 className="card-title">Course Registration Roster</h2>
                        <p> <span className="font-bold">Description</span> The Course Registration Roster website is fully functional and ready for users to explore and register for courses. Continuous updates and improvements are planned to enhance usability, optimize performance, and add new features as needed. The website enforces a maximum course credit limit of 20 hours per user.</p>
                        <p><span className="font-bold">Technologies:</span> <li>Frontend: Tailwind CSS, Daisy UI, HTML-5, JavaScript.</li>
                            
                            <li>Deployment: Surge</li> </p>
                        <p><span className="font-bold">Live demo:</span> <Link to='https://sweet-trouble.surge.sh' target="blank">https://sweet-trouble.surge.sh</Link></p>
                        <p><span className="font-bold"> GitHub Repository Link:</span> <Link to='https://github.com/khairul-01/course-registration-roster.git' target="blank">https://github.com/khairul-01/course-registration-roster.git</Link></p>

                    </div>
                </div>
                <div className="card mx-auto bg-neutral text-neutral-content">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/Rjd76H9/image.png" alt="conference management photo" className="rounded-xl" />
                    </figure>
                    <div className="card-body  text-left">
                        <h2 className="card-title">PHero-Tube</h2>
                        <p> <span className="font-bold">Description</span> PHero-Tube is a dynamic and engaging video-sharing platform designed to entertain and inspire users through a diverse range of content categories. With an intuitive interface and powerful sorting capabilities, the website offers a personalized and immersive viewing experience for users of all interests.</p>
                        <p><span className="font-bold">Technologies:</span> <li>Frontend: HTML-5, CSS-3, JavaScript.</li>
                            
                            <li>Deployment: Surge</li> </p>
                        <p><span className="font-bold">Live demo:</span> <Link to='https://apathetic-orange.surge.sh' target="blank">https://apathetic-orange.surge.sh</Link></p>
                        <p><span className="font-bold"> GitHub Repository Link:</span> <Link to='https://github.com/khairul-01/PHero-tube.git' target="blank">https://github.com/khairul-01/PHero-tube.git</Link></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;