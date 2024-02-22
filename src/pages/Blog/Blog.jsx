import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { GrDislike, GrLike } from "react-icons/gr";

const Blog = () => {
    const [upVote, setUpVote] = useState(0);
    const [downVote, setDownVote] = useState(0);

    const handleUpVote = () => {

        const newVote = upVote + 1;
        setUpVote(newVote);

    }
    const handleDownVote = () => {

        const newVote = downVote + 1;
        setDownVote(newVote);

    }
    return (
        <div>
            <h1 className="text-5xl text-info text-center my-7">Welcome to Blog Page</h1>

            <div className="grid gap-5 grid-cols-1 mt-3 w-2/3 mx-auto">
                <div className="card bg-sky-200 text-primary-content-content">
                    <figure className="px-10 pt-10 h-96">
                        <img src="https://i.ibb.co/B31xWM3/ICT-Certificates-1.jpg" alt="conference management photo" className="rounded-xl" />
                    </figure>
                    <div className="card-body  text-left">
                        <div className="card-actions gap-5">
                            <div className="flex gap-2 items-center"><FaRegUserCircle /> Khairul Alam </div>
                            <div className="flex gap-2 items-center"> <FaCalendarAlt /> 21 October, 2023</div>
                        </div>
                        <h2 className="card-title">Celebrating Success: My Journey to Passing the Fundamental IT Engineering (ITEE - FE) Exam</h2>
                        <p>Hello everyone! I am thrilled to share with you all that I recently passed the Fundamental IT Engineering exam, and I could not be more excited! In this blog post, I will take you through my journey of preparing for the exam, the challenges I faced, and ultimately, the joy of achieving this milestone in my IT career. </p>
                        {/* <div className="card-actions justify-end">
                            <div onClick={handleUpVote} className="btn text-base"><GrLike /> Like {upVote}</div>

                            <div onClick={handleDownVote} className="btn text-base"><GrDislike /> Dislike {downVote}</div>
                        </div> */}
                        <div className="card-actions justify-end">

                            <button className="btn btn-outline btn-accent rounded-3xl">Read More</button>

                        </div>
                    </div>
                </div>
                <div className="card bg-sky-200 text-primary-content-content">
                    <figure className="px-10 pt-10 h-96">
                        <img src="https://i.ibb.co/f8gwYNw/ICT-Certificates-3.jpg" alt="conference management photo" className="rounded-xl" />
                    </figure>
                    <div className="card-body  text-left">
                        <div className="card-actions gap-5">
                            <div className="flex gap-2 items-center"><FaRegUserCircle /> Khairul Alam </div>
                            <div className="flex gap-2 items-center"> <FaCalendarAlt /> May 29, 2023</div>
                        </div>
                        <h2 className="card-title">Exploring Japanese Language and Culture: My Experience with the B-MEET Program</h2>
                        <p>Konnichiwa, everyone! I'm thrilled to share with you my experience participating in the Bangladesh Miyazaki ICT Engineering Training Program (B-MEET). Over the course of one month, I immersed myself in the world of Japanese language, culture, and professional development, and I'm excited to take you along on this journey with me. </p>
                        {/* <div className="card-actions justify-end">
                            <div onClick={handleUpVote} className="btn text-base"><GrLike /> Like {upVote}</div>

                            <div onClick={handleDownVote} className="btn text-base"><GrDislike /> Dislike {downVote}</div>
                        </div> */}
                        <div className="card-actions justify-end">

                            <button className="btn btn-outline btn-accent rounded-3xl">Read More</button>

                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Blog;