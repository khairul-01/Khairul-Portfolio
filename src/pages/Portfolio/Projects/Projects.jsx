

const Projects = () => {
    return (
        <div>
            <h1 className="text-center text-5xl text-primary">Projects</h1>
            <hr className="my-4" />
            <div className="card w-3/4 mx-auto bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Cookies!</h2>
                    <p>We are using cookies for no reason.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Accept</button>
                        <button className="btn btn-ghost">Deny</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;