

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-50% to-emerald-500 to-90%">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="w-1/2">
                        <img src="https://i.ibb.co/hFQfXS6/Khairul-Alam.jpg" className="rounded-lg shadow-2xl mx-auto" />
                    </div>
                    <div className="w-1/2 text-center">
                        <h1 className="text-5xl font-bold">Hi, I am</h1>
                        <h1 className="text-5xl text-orange-500">Khairul Alam</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div className="flex gap-4 justify-center">

                        <button className="btn btn-primary">Download CV</button>
                        <button className="btn btn-primary">Contact</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;