import WhatiDo from "../../WhatiDo/WhatiDo";
import About from "../About/About";
import Banner from "../Banner/Banner";
import ProjectsGrid from "../ProjectGrid/ProjectsGrid";
import ResumeSummery from "../ResumeSummery/ResumeSummery";


const Home = () => {
    return (
        <div className="space-y-24 md:space-y-32 pb-12">
            <section id="hero">
                <Banner />
            </section>
            {/* 5. About Me Section: Journey, personality, and hobbies */}
            <section id="about">
                <About />
            </section>
            {/* 6. Skills Section: Visually appealing graphical format (Frontend, Backend, Tools) */}
            <section id="skills">
                <WhatiDo />
            </section>
            {/* 7 & 8. Qualifications: Education background above HSC & Experience timeline */}
            <section id="education">
                <ResumeSummery />
            </section>
            
            {/* 9. Projects Section: Minimum of 3 project cards with details links */}
            <section id="projects">
                <ProjectsGrid />
            </section>
        </div>
    );
};

export default Home;