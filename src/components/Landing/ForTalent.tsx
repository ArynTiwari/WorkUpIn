/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Image from "next/image";
import Button from "../Utils/Button";
import project from "../../../public/assets/unDraw/project.svg";
const ForTalent: React.FC = () => {
  return (
    <>
      <section className="mx-2 mt-8  flex flex-col justify-around md:mx-6 lg:mx-12 lg:flex-row">
        <div className="flex flex-col p-2 lg:max-w-[700px] ">
          <h1 className="mb-4 text-3xl font-semibold md:text-4xl lg:text-5xl">
            Confused about your <span className="text-violet-700">project</span>{" "}
            ?
          </h1>
          <p className="mb-8  max-w-[600px] text-base md:text-xl lg:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea autem
            recusandae saepe quas! Alias, consequatur!
          </p>
          <div className="flex items-center justify-center">
            <Button title="Find Talent" width="40" />
          </div>
        </div>
        <div className="hidden lg:flex lg:max-w-[700px] ">
          <Image
            className="scale-95 transform"
            src={project}
            alt="clientImage"
          />
        </div>
      </section>
      <hr className="mt-1 border-lime-400" />
    </>
  );
};

export default ForTalent;
