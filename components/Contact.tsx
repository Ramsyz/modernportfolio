import { FaRegHandPointRight } from "react-icons/fa";
import SocialLink from "./SocialLink";

const Contact = () => {
  return (
    <div className="wrapper ">
      <div className="max-w-5xl mx-auto flex flex-col gap-4 items-center justify-center">
        <h2 className="text-2xl font-bold">Let us create awesome websites</h2>
        <p className="text-lg tracking-wide font-medium">
          Improve your online presence, or help with your website design and
          converting challenges.
        </p>
        <a href="mailto:seetaram.vannemreddi@gmail.com">
          <button className="w-52 h-14 bg-gradient-to-r from-blue-500 via-red-300 to-indigo-500 text-lg font-semibold tracking-wide rounded-lg hover:from-indigo-500 hover:to-blue-500 duration-300">
            Contact Me
          </button>
        </a>
      </div>
      <div className="mt-8 flex items-center gap-4 justify-center">
        <SocialLink title="Github" link="https://github.com/Ramsyz" />
        <SocialLink
          title="Linkedin"
          link="https://www.linkedin.com/in/seetaram-v/"
        />
      </div>
    </div>
  );
};

export default Contact;
