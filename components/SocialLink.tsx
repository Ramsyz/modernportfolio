import { FaRegHandPointRight } from "react-icons/fa";
type Props = {
  title: string;
  link: string;
};

const SocialLink = ({ title, link }: Props) => {
  return (
    <a href={link} target="_blank">
      <div className="flex items-center justify-center gap-2 text-xl font-semibold group">
        <FaRegHandPointRight className="translate-x-0 translate-y-0 group-hover:translate-x-2 transition-transform duration-500" />
        <p className="group-hover:text-gray-700">{title}</p>
      </div>
    </a>
  );
};

export default SocialLink;
