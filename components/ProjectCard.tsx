import Image from "next/image";
interface Props {
  title: string;
  subtitle: string;
  img: string;
  link: string;
  GithubLink: string;
}

const ProjectCard = ({ title, subtitle, GithubLink, img, link }: Props) => {
  return (
    <div className="w-80 h-80 border-[1px] border-gray-400 overflow-hidden relative rounded-lg group">
      <Image
        className="object-cover translate-y-0 group-hover:-translate-y-[50%] transition duration-300"
        src={img}
        width={350}
        height={350}
        alt="retailStore"
      />
      <a href={link} target="_blank">
        <p className="absolute hidden group-hover:inline-block bottom-0 w-full py-1 bg-black text-white text-center font-semibold duration-300">
          {title}
        </p>
      </a>
      <a href={GithubLink} target="_blank">
        <p className="absolute hidden group-hover:inline-block bottom-9 w-full py-1 bg-black text-white text-center font-semibold duration-300">
          {subtitle}
        </p>
      </a>
    </div>
  );
};

export default ProjectCard;
