

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-primary-content">
                <div className="hero-content text-center flex-col">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold text-primary">About Me</h1>
                    </div>
                    <div className="w-3/4 mx-auto text-justify">
                        <p className="py-6 space-y-2">
                            <p>Over the past six months, I have undergone rigorous training in web development, immersing myself in the latest industry practices and technologies. Through hands-on projects and collaborative learning experiences, I have honed my skills in front-end and back-end development, mastering languages such as HTML, CSS, JavaScript, Tailwind CSS, Daisy UI, React.js, Node.js, Express.js, MongoDB, Firebase.</p>

                            <p> In addition to my practical training, I have obtained a professional Fundamental IT Engineering Certificate, solidifying my foundational knowledge in IT principles and methodologies. This certification reflects my commitment to excellence and my readiness to tackle complex technical challenges head-on.</p>
                            
                            <p> Outside of the digital realm, I am an avid learner, constantly seeking out new opportunities for growth and self-improvement. I thrive in dynamic environments where collaboration and innovation are encouraged, and I am always eager to connect with like-minded professionals who share my passion for technology and innovation.</p>
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            <div>
                                <h1 className="text-xl">Name:</h1>
                                <h1 className="text-xl font-bold">Khairul Alam</h1>
                            </div>
                            <div className="">
                            <h1 className="text-xl">Email:</h1>
                                <h1 className="text-xl font-bold break-all">khairul431743@gmail.com</h1>
                            </div>
                            <div>
                                <h1 className="text-xl">Contact Number:</h1>
                                <span className="text-xl font-bold">+880 1956431743</span>
                            </div>
                            <div>
                                <h1 className="text-xl">From:</h1>
                                <h1 className="text-xl font-bold break-all">Dhaka, Bangladesh</h1>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default About;