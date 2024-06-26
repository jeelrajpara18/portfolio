// import { useState } from "react";
import { useState } from "react";
import { SkillsData } from "../../utils/data";
import SkillCard from "./skillCard/skillCard";
import SkillInfo from "./skillInfoCard/skillInfo";
import "./skills.scss";
// import SkillInfo from "./skillInfoCard/skillInfo";

const Skills = () => {
    const [selectedSkill , setSelectedSkill] = useState(SkillsData[0]);

    const handleSelectSkill = (data) => {
        setSelectedSkill(data)
    }
  return (
    <>
    <section className="skills-container">
        <h2>Technical Proficiency</h2>
        <div className="skills-content">
            <div className="skills">
                {SkillsData.map((item)=>(
                    <SkillCard 
                    key={item.title}
                    iconUrl={item.icon}
                    title={item.title}
                    isActive={selectedSkill.title === item.title}
                    onClick={() => handleSelectSkill(item)}
                    />
                ))}
            </div>
            <div className="skills-info">
                <SkillInfo
                heading={selectedSkill.title}
                skills={selectedSkill.skills}
                />
            </div>
        </div>
    </section>
    </>
  );
};

export default Skills;
