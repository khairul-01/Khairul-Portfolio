

const TrainingAndCertification = () => {
    return (
        <div className="mt-5">
            <h1 className="text-5xl text-primary text-center py-7 font-bold">My Training and Certification</h1>
            <div className="grid grid-cols-2 gap-3 mt-3">
                <div className="card bg-sky-200 text-primary-content-content">
                    <figure className="px-10 pt-10 h-96">
                        <img src="https://i.ibb.co/B31xWM3/ICT-Certificates-1.jpg" alt="conference management photo" className="rounded-xl" />
                    </figure>
                    <div className="card-body  text-left">
                        <h2 className="card-title">Fundamental IT Engineering Examination (FE) Exam</h2>
                        <p>Bangladesh Computer Council (BCC), Agargaon, Dhaka</p>
                        <p>Date of Passing: 21 October, 2023</p>
                    </div>
                </div>
                <div className="card bg-sky-200 text-primary-content-content">
                    <figure className="px-10 pt-10 h-96">
                        <img src="https://i.ibb.co/f8gwYNw/ICT-Certificates-3.jpg" alt="conference management photo" className="rounded-xl" />
                    </figure>
                    <div className="card-body  text-left">
                        <h2 className="card-title">Bangladesh Miyazaki ICT Engineering Training Program (B-MEET)</h2>
                        <p>B-JET Center, North South University</p>
                        <p>Duration: One Month, May 2023</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TrainingAndCertification;