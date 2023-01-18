/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Image from "next/image";
import Button from "../Utils/Button";
import confused from '../../../public/assets/unDraw/confused.svg';
function ForClient() {
  return (
    <>
      <section className="mt-8 mx-2  md:mx-6 lg:mx-12 flex flex-col lg:flex-row justify-around">
        <div className="flex flex-col p-2 lg:max-w-[700px] ">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            Confused about your <span className="text-violet-700">project</span>{" "}
            ?
          </h1>
          <p className="max-w-[600px]  mb-8 text-base md:text-xl lg:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea autem
            recusandae saepe quas! Alias, consequatur!
          </p>
          <div className="flex flex-col lg:flex-row w-full justify-around gap-4 md:gap-2">
            <Button title="Find Talent" width="38" />
          </div>
        </div>
        <div className="hidden lg:flex lg:max-w-[700px] ">
          <Image className="" src={confused} alt="clientImage" />
        </div>
      </section>
      <hr className="border-lime-400 mt-1" />
    </>
  );
}

export default ForClient;
