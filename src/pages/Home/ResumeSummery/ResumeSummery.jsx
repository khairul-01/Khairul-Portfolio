import { Link } from "react-router-dom";


const ResumeSummery = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-emerald-50 text-success">
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="text-5xl font-bold mb-10">A Summery of My Resume</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                            <div className="w-3/4 mx-auto">
                                <h1 className="text-2xl font-bold">My Education</h1>
                                <br />
                                <div className="text-left">
                                    <h3 className="text-xl">Bachelor of Science in Electrical and Electronics Engineering</h3>
                                    <p>North South University | 2017 -  2021</p>
                                    <p>Department: Electrical and Computer Engineering</p>
                                    <p>CGPA: 3.17</p>
                                </div>
                                <br />
                                <hr />
                                <br />
                                <h1 className="text-2xl font-bold">Training Course</h1>
                                <br />
                                <div className="text-left">
                                    <h3 className="text-xl">Web Development (MERN Stack)</h3>
                                    <p>Programming Hero | June 2023 -  January 2024</p>
                                    <p>Skills: React, Firebase, MongoDB, Node.js, Express.js, Tailwind CSS, Daisy UI, Vanilla CSS, HTML, Next.js</p>

                                </div>
                            </div>
                            <div className="text-left w-3/4 mx-auto">
                                <h1 className="text-2xl font-bold">Work Experience</h1>
                                <br />
                                <div>
                                    <h3 className="text-xl">Guest Employee</h3>
                                    <p>North South University | April, 2023 -  Continue</p>
                                    <p>Department: Career and Placement Center (CPC)</p>
                                    <p>Responsibilities:</p>
                                    <p>
                                        Handling student queries, Assisting administrative works, Attending corporate meetings,
                                        Learning and designing several websites, Organizing Seminars
                                    </p>
                                </div>
                                <br />
                                <hr />
                                <br />
                                <h1 className="text-2xl font-bold">Certifications</h1>
                                <br />
                                <h3 className="text-xl">Fundamental IT Engineering Examination (FE) Exam</h3>
                                <p>Bangladesh Computer Council (BCC), Agargaon, Dhaka</p>
                                <p>Date of Passing: 21 October, 2023</p>
                                <br />
                                <h3 className="text-xl">Bangladesh Miyazaki ICT Engineering Training Program (B-MEET)</h3>
                                <p>B-JET Center, North South University</p>
                                <p>Duration: May 2023</p>
                            </div>
                        </div>
                        <div className="flex justify-center mt-7">
                            <Link to='https://drive.google.com/file/d/10y6WoNBESp-AuytqyT_hurtvJEoM8Xqf/view?usp=sharing' target="blank" ><button className="btn btn-secondary">Download CV</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumeSummery;