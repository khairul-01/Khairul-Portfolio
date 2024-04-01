import Introduction from "../Introduction/Introduction";
import MyEducation from "../MyEducation/MyEducation";
import Projects from "../Projects/Projects";
import SkillsAndTechnology from "../SkillsAndTech/SkillsAndTechnology";
import TrainingAndCertification from "../TrainingAndCertification/TrainingAndCertification";


const Portfolio = () => {
    return (
        <div className="space-y-1">
            <Introduction></Introduction>
            <SkillsAndTechnology></SkillsAndTechnology>
            <Projects></Projects>
            <MyEducation></MyEducation>
            <TrainingAndCertification></TrainingAndCertification>
        </div>
    );
};

export default Portfolio;