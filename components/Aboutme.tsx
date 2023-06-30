import Title from "./Title";
import { AiFillInfoCircle } from "react-icons/ai";

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text="About Me" icon={<AiFillInfoCircle />} />
      <div>
        <p className="text-lg tracking-wide flex flex-col gap-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quia
          saepe fuga, voluptatibus illum harum modi vero ratione cum nihil at
          obcaecati. Fuga odit nostrum ratione quis exercitationem placeat.
          Iusto est iure natus et vitae dolor quae praesentium nobis
          perspiciatis, ipsa explicabo voluptatibus eligendi reiciendis
          delectus, repudiandae doloremque maxime ipsum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
          expedita, maiores ipsum neque doloremque quidem sint tempore molestiae
          consequuntur perspiciatis natus reiciendis rerum at nemo cupiditate,
          numquam blanditiis? Quas velit illum asperiores cum dolorum, sint
          officiis recusandae delectus suscipit labore!
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
