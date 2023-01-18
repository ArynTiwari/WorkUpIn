/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Button from "../Utils/Button";
import Image from "next/image";
import Link from "next/link";
import hero from "../../../public/assets/unDraw/hero.svg";
const Landing: React.FC = () => {
  return (
    <>
      <section className='flex flex-row justify-between mt-2 md:mt-10 mb-10'>
        <div className="flex flex-col flex-wrap text-center">
          <h1 className="mb-4 text-4xl font-semibold md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl">
            Best place to find <br/>the <span className="text-violet-700">Best</span>{" "}
            <span>talent.</span>
          </h1>
          <p className="max-w-[750px] text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl leading-8 mb-8">
            Search among top talented people who fit right for your job! Look
            for project&apos;s that suite your skill set.
          </p>
          <div className="flex flex-row text-center items-center  justify-center gap-4">
            <Link href="/projects">
              <Button title="For Client" width="38"/>
            </Link>
            <Link href="/ForTalent">
              <Button title="For Talent" width="38" />
            </Link>
          </div>
        </div>
        <div className="hidden md:flex justify-end">
          <Image src={hero} alt="hero Image" priority/>
        </div>
      </section>
    </>
  );
};

export default Landing;
