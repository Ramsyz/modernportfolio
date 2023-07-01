import Title from "./Title";
import { AiFillInfoCircle } from "react-icons/ai";

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text="About Me" icon={<AiFillInfoCircle />} />
      <div className="flex flex-col gap-6">
        <p className="text-lg tracking-wide ">
          I have always had a knack for technology and working with computers. I
          started working with HTML & CSS to make some minor edits on a website
          that i was operating. What I thought was just a few small edits turned
          into a curiosity.
        </p>
        <p className="text-lg tracking-wide">
          Fascinated with how intricate programming can be I was quickly drawn
          to learn more. I started learning javascript and was even more
          enthused with making website interactive. I am now spending my time
          building projects with React JS, MongoDB, and learning new
          technologies.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
