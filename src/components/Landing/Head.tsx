/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Button from "../Utils/Button";
import Image from "next/image";
import Link from "next/link";
import hero from "../../../public/assets/new/asset 2.jpeg";
const Landing: React.FC = () => {
  return (
    <>
      <header>
        <section className="container header-section flex justify-center items-center">
          <div className="header-left flex flex-col flex-wrap md:max-w-[40vw] justify-center items-center md:items-start">
            <h1 className="mt-5 text-center text-2xl md:text-3xl  lg:text-5xl font-bold">Unlocking Freelance Potential</h1>
            <p className="text-justify text-sm md:text-base lg:text-xl">Are you a talented freelancer looking for exciting opportunities to showcase your skills and connect with clients from around the world? Look no further than workUp, your ultimate platform for freelancing success!</p>
            <Button title="Get Started" />
          </div>
          <div className="header-img hidden md:flex header-right bg-gray-600">
            <Image src={hero} alt="hero" width={700} />
          </div>
        </section>
      </header>
    </>
  );
};

export default Landing;
