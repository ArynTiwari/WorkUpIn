import React from "react";
import Image from "next/image";
import aboutImage from "../public/assets/about.png";
// import PerksofWorkUp from "../components/PerksofWorkUp";
function About() {
  return (
    <section className="mx-12 mt-12 flex flex-col">
      <h5 className="text-2xl md:text-4xl mx-auto md:mb-4">
        Our <span className="text-violet-600">inspiring</span> Mission and
        Vision...
      </h5>
      <div className="flex justify-around my-4">
        <div className="flex flex-col  p-2">
          <div className="flex flex-col p-2">
            <h4 className="flex justify-center my-2 text-2xl">
              For &nbsp;<span className="text-violet-600"> Talents</span>
            </h4>
            <p className="text-[24px]">
              Our purpose is to assist students who are having difficulty
              achieving their academic objectives due to a lack of high-caliber
              projects for their learning, experience, and CV. We are thrilled
              to launch a platform where learning is accomplished by working on
              actual projects from the real world.
            </p>
          </div>
          <div className="flex flex-col p-2">
            <h4 className="flex justify-center my-2 text-2xl">
              For &nbsp;<span className="text-violet-600"> clients</span>
            </h4>
            <p className="text-[24px]">
              We at WorkUp offer a platform where clients may browse through
              many iterations of their offered job and select the one that best
              meets their needs. We have a marketplace of specialists available
              to manage your project on your behalf. Before they are qualified
              to handle your project, we evaluate their capabilities and put
              them through trials.
            </p>
          </div>
        </div>
        <div className="hidden lg:flex lg:min-w-[450px] lg:my-auto lg:max-h-[400px] lg:items-baseline ">
          
          {/* <Image src={aboutImage} /> */}
        </div>
      </div>
      {/* <PerksofWorkUp /> */}

    </section>
  );
}

export default About;
