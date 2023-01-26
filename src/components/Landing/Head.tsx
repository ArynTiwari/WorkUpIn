/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Button from "../Utils/Button";
import Image from "next/image";
import Link from "next/link";
import hero from "../../../public/assets/unDraw/hero.svg";
const Landing: React.FC = () => {
  return (
    <>
      <section className="container mt-2 mb-10 flex flex-1 flex-row justify-between md:mt-6 p-2">
        <div className="flex flex-col flex-wrap text-center  p-2">
          <h1 className="mb-4 text-4xl font-semibold md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl ">
            Best place to find <br />
            the <span className="text-violet-700">Best</span>{" "}
            <span>talent.</span>
          </h1>
          <p className="mb-8 max-w-[750px] text-xl leading-8 md:text-xl lg:text-3xl xl:text-4xl 2xl:text-4xl">
            Search among top talented people who fit right for your job! Look
            for project&apos;s that suite your skill set.
          </p>
          <div className="items-center">
          <Link href="/info/getstarted">
            <Button title="Get Started"></Button>
          </Link>
          </div>
        </div>
        <div className="hidden justify-end md:flex">
          <Image src={hero} alt="hero Image" priority />
        </div>
      </section>
    </>
  );
};

export default Landing;
