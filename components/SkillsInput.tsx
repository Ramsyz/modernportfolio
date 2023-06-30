type Props = {
  title: string;
};
const SkillsInput = ({ title }: Props) => {
  return (
    <p className="border border-blue-200 px-6 py-2 text-lg tracking-wide bg-transparent hover:text-white hover:border-blue-600 hover:bg-black rounded-lg">
      {title}
    </p>
  );
};

export default SkillsInput;
