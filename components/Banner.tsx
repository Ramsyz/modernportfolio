import Image from "next/image";
import ProfileImg from "../public/img/profileImg.jpg";

const Banner = () => {
  return (
    <div className="wrapper flex flex-col md:flex-row items-center gap-10">
      {/*Image */}
      <div className="w-44 h-44 rounded-full bg-black">
        <Image
          className="w-full h-full rounded-full border-[1px] bg-blue-300 p-1 object-cover"
          src={ProfileImg}
          alt="ProfileImg"
        />
      </div>
      {/*Description */}
      <div className="w-3/4 flex flex-col text-center md:items-start gap-2">
        <h1 className="text-3xl lg:text-5xl">Seetaram Vannemreddi</h1>
        <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-red-500 to-indigo-500 tracking-wide">
          Front-End Developer
        </h3>
        <p className="text-base tracking-wide text-center md:text-left">
          I'm a front-end web developer specializing in building and
          occasionally designing exceptional digital experiences. Currently, I'm
          focused on building responsive front-end web applications while
          learning back-end technologies.
        </p>
      </div>
    </div>
  );
};

export default Banner;
