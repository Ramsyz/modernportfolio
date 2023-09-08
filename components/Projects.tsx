import { GoProjectSymlink } from "react-icons/go";
import Title from "./Title";
import digitalagency from "../public/img/digitalagency.jpeg";
import travel from "../public/img/travel.jpeg";
import itcom from "../public/img/itcom.jpeg";
import bookManager from "../public/img/bookmanager.jpeg";
import trip from "../public/img/trip.jpeg";
import ecom from "../public/img/ecom.jpeg";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<GoProjectSymlink />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        <ProjectCard
          img={ecom.src}
          title="Demo"
          subtitle="Code"
          link="https://ecom-store-ramsyz.vercel.app/"
          GithubLink="https://github.com/Ramsyz/Ecom-store"
        />
        <ProjectCard
          img={itcom.src}
          title="Demo"
          subtitle="Code"
          link="https://ramsyz.github.io/creqit-company/"
          GithubLink="https://github.com/Ramsyz/creqit-company"
        />
        <ProjectCard
          img={travel.src}
          title="Demo"
          subtitle="Code"
          link="https://trvlnest.netlify.app/"
          GithubLink="https://github.com/Ramsyz/trvlnest"
        />
        <ProjectCard
          img={digitalagency.src}
          title="Demo"
          subtitle="Code"
          link="https://digitalfuture.vercel.app/"
          GithubLink="https://github.com/Ramsyz/digitalfuture"
        />
        <ProjectCard
          img={trip.src}
          title="Demo"
          subtitle="Code"
          link="https://travelexpirence.vercel.app/"
          GithubLink="https://github.com/Ramsyz/Trip"
        />
        <ProjectCard
          img={bookManager.src}
          title="Demo"
          subtitle="Code"
          link="https://ramsyz.github.io/Manage-Landing-Page/"
          GithubLink="https://github.com/Ramsyz/Manage-Landing-Page"
        />
      </div>
    </div>
  );
};

export default Projects;
