/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Button from "../Utils/Button";
import Image from "next/image";
import heroImage from "../../../public/assets/new/asset 2.jpeg";

const Landing: React.FC = () => {
  return (
    <header>
      <div className="container mx-auto py-10 px-4 md:flex md:items-center">
        <div className="md:w-1/2 md:mr-10">
          <h1 className=" text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Unlocking Freelance Potential
          </h1>
          <p className="text-base text-justify md:text-lg lg:text-xl leading-relaxed mb-8">
            Are you a talented freelancer looking for exciting opportunities to showcase your skills and connect with clients from around the world? Look no further than WorkUp, your ultimate platform for freelancing success!
          </p>
          <Button
            title="Get Started"
          />
        </div>
        <div className="hidden md:block md:w-1/2">
         
            <Image
              src={heroImage}
              alt="hero"
              width={700}
              height={500}
              className="transform hover:scale-105 transition-transform duration-300"
            />
         
        </div>
      </div>
    </header>
  );
};

export default Landing;
