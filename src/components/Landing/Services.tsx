import React from "react";
import ServiceCard from "./ServiceCard";
import Button from "../Utils/Button";
import asset11 from '../../../public/assets/new/asset11.svg'
import asset13 from '../../../public/assets/new/asset13.svg'
import asset14 from '../../../public/assets/new/asset14.svg'
import asset15 from '../../../public/assets/new/asset15.svg'
import asset16 from '../../../public/assets/new/asset16.svg'
import asset17 from '../../../public/assets/new/asset17.svg'
const Services: React.FC = () => {
  return (
    <section className="features-section">
      <div className="container">
        <div className="features-header flex flex-col items-center mb-4">
          <h2 className="text-4xl font-semibold mb-5">Services you can avail!</h2>
          <Button title="See all services" />
        </div>
        <div className="features-area flex flex-wrap justify-between gap-3">
          <ServiceCard img={asset11 as string} title="Developement & IT" description="Web and mobile developement" link="/cat/dev_it" />
          <ServiceCard img={asset13 as string} title="Developement & IT" description="Web and mobile developement" link="/cat/dev_it" />
          <ServiceCard img={asset14 as string} title="Developement & IT" description="Web and mobile developement" link="/cat/dev_it" />
          <ServiceCard img={asset15 as string} title="Developement & IT" description="Web and mobile developement" link="/cat/dev_it" />
          <ServiceCard img={asset16 as string} title="Developement & IT" description="Web and mobile developement" link="/cat/dev_it" />
          <ServiceCard img={asset17 as string} title="Developement & IT" description="Web and mobile developement" link="/cat/dev_it" />

        </div>
      </div>
    </section>
  );
}

export default Services;
