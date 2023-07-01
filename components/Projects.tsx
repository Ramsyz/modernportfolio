import { GoProjectSymlink } from "react-icons/go";
import Title from "./Title";
import retailStore from "../public/img/retailstore.jpeg";
import travel from "../public/img/travel.jpeg";
import digitalAgency from "../public/img/digitalagency.jpeg";
import bookManager from "../public/img/bookmanager.jpeg";
import trip from "../public/img/trip.jpeg";
import space from "../public/img/space.jpeg";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<GoProjectSymlink />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        <ProjectCard
          img={retailStore.src}
          title="Demo"
          subtitle="Code"
          link="https://reatailstore.netlify.app/"
          GithubLink="https://github.com/Ramsyz/retailstore"
        />
        <ProjectCard
          img={travel.src}
          title="Demo"
          subtitle="Code"
          link="https://trvlnest.netlify.app/"
          GithubLink="https://github.com/Ramsyz/trvlnest"
        />
        <ProjectCard
          img={digitalAgency.src}
          title="Demo"
          subtitle="Code"
          link="https://mycompany-landingpage.vercel.app/"
          GithubLink="https://github.com/Ramsyz/chakraui-landingpage"
        />
        <ProjectCard
          img={bookManager.src}
          title="Demo"
          subtitle="Code"
          link="https://ramsyz.github.io/Manage-Landing-Page/"
          GithubLink="https://github.com/Ramsyz/Manage-Landing-Page"
        />
        <ProjectCard
          img={trip.src}
          title="Demo"
          subtitle="Code"
          link="https://travelexpirence.vercel.app/"
          GithubLink="https://github.com/Ramsyz/Trip"
        />
        <ProjectCard
          img={space.src}
          title="Demo"
          subtitle="Code"
          link="https://spctrvl.netlify.app/"
          GithubLink="https://github.com/Ramsyz/spctrvl"
        />
      </div>
    </div>
  );
};

export default Projects;
