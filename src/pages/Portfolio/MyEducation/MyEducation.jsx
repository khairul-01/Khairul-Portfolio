

const MyEducation = () => {
    return (
        <div className="mt-5">
            <h1 className="text-5xl text-primary text-center py-7 font-bold">My Education</h1>
            <div className="card bg-sky-200 text-primary-content-content w-1/2 mx-auto">
                <figure className="px-10 pt-10 h-96">
                    <img src="https://i.ibb.co/B35xQsP/Certificates-4.jpg" alt="conference management photo" className="rounded-xl" />
                </figure>
                <div className="card-body  text-left">
                    <h2 className="card-title">Bachelor of Science in Electrical and Electronics Engineering (EEE)</h2>
                    <p className="text-xl">North South University | 2017 -  2021</p>
                    <p>Duration: April, 2021 - August 2023</p>
                    <p>Department: Electrical and Computer Engineering</p>
                    <p>CGPA: 3.17</p>

                </div>
            </div>
        </div>
    );
};

export default MyEducation;