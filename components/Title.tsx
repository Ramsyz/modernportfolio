import { ReactNode } from "react";
interface Props {
  text: string;
  icon: ReactNode;
}

const Title = ({ text, icon }:Props) => {
  return (
    <div className="flex items-center gap-2 text-2xl group pb-6">
      <h3 className="text-2xl font-semibold relative overflow-hidden">
        {text}
        <span className="w-full h-[2px] absolute bottom-0 left-0 inline-block bg-blue-700 -translate-x-[100%] group-hover:translate-x-0 transition duration-300"></span>
      </h3>
      <span>{icon}</span>
    </div>
  );
};

export default Title;
