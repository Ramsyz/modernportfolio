import { GiSkills } from "react-icons/gi";
import Title from "./Title";
import SkillsInput from "./SkillsInput";

const Skills = () => {
  return (
    <div className="wrapper">
      <Title text="Skills" icon={<GiSkills />} />
      <div className="flex gap-4 flex-wrap">
        <SkillsInput title="HTML5" />
        <SkillsInput title="CSS3" />
        <SkillsInput title="JavaScript" />
        <SkillsInput title="Reactjs" />
        <SkillsInput title="Nodejs" />
        <SkillsInput title="Tailwindcss" />
        <SkillsInput title="Git" />
        <SkillsInput title="Figma" />
      </div>
    </div>
  );
};

export default Skills;
