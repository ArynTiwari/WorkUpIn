/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Image from "next/image";
import Button from "../Utils/Button";
import asset21 from '../../../public/assets/new/asset21.png'
import project from "../../../public/assets/unDraw/project.svg";
const ForTalent: React.FC = () => {
  return (
    <>
      <section className="big-feature-section ">
        <div className="container flex items-center big-feature-container">

          <div className="feature-desc flex items-center">
            <h4>Effortless validation for</h4>
            <h3>Design professionals</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum repellat fugit consequatur laborum voluptates deleniti dolor, commodi quisquam iusto consequuntur!</p>
          </div>
          <div className="feature-image">
            <Image src={asset21} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ForTalent;
