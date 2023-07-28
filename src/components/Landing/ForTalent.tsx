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
            <h4 className="text-xl font-medium">Unleash Your Writing Talents</h4>
            <h3 className="text-2xl font-semibold">WorkUp - Your Go-To Platform for Content Writers</h3>
            <p className="text-lg">Are you a skilled content writer seeking exciting opportunities to showcase your creativity and collaborate with clients from all corners of the globe? WorkUp provides a seamless validation process and empowers you to excel in your writing career.</p>
          </div>
          <div className="feature-image hidden md:block">
            <Image src={asset21} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ForTalent;
