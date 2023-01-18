import React from "react";
import ServiceCard from "./ServiceCard";

const Services:React.FC=()=> {
  return (
    <section className="services mt-8">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col text-center">
          <h1 className="text-4xl p-2 font-semibold">Talent <span className="text-violet-700">Category</span></h1>
          <p className="mt-2 mb-2 p-2">
            Chose the talent you need to kick start your project!
          </p>
        </div>
        <div className="grid grid-flow-row md:grid-flow-col md:grid-cols-3 md:grid-rows-2 md:gap-4">
          <ServiceCard
            title="Developement & IT"
            description="Web and mobile developement"
            link="/cat/dev_it"
          />
          <ServiceCard
            title="Writing & Translation"
            description="Academic writing"
            link="/cat/dev_it"
          />
          <ServiceCard
            title="Logo & Animations"
            description="Build your owm brand"
            link="/cat/jobs"
          />
          <ServiceCard
            title="Legal & Support"
            description="Online support at your doorstep"
            link="/cat/mahak"
          />
          <ServiceCard
            title="Sales & Marketing"
            description="Reach out to potential clients"
            link="/cat/sales"
          />
          <ServiceCard
            title="Fitness & Yoga"
            description="Be fit at your home"
            link="/cat/yoga"
          />
        </div>
      </div>
      <hr className="border-lime-400 mt-1" />
    </section>
    // <section id="services" className="services_area pt-120 pb-120">
    //   <div className="container">
    //     <div className="row justify-center">
    //       <div className="w-full lg:w-1/2">
    //         <div className="section_title text-center pb-6">
    //         <h1 className="text-4xl p-2 font-semibold">Talent <span className="text-violet-700">Category</span></h1>
    //           <h4 className="main_title">Our Services</h4>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="row justify-center">
    //       <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
    //         <div className="single_services text-center mt-8 mx-3">
    //           <div className="services_icon">
    //             <i className="lni lni-layout"></i>
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="94"
    //               height="92"
    //               viewBox="0 0 94 92"
    //             >
    //               <path
    //                 className="services_shape"
    //                 id="Polygon_12"
    //                 data-name="Polygon 12"
    //                 d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z"
    //               />
    //             </svg>
    //           </div>
    //           <div className="services_content mt-5 xl:mt-10">
    //             <h3 className="services_title text-black font-semibold text-xl md:text-2xl lg:text-xl xl:text-3xl">
    //               Web Design
    //             </h3>
    //             <p className="mt-4">
    //               Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed
    //               diam voluptua. At vero eos accusam et justo duo dolores
    //             </p>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
    //         <div className="single_services text-center mt-8 mx-3">
    //           <div className="services_icon">
    //             <i className="lni lni-bullhorn"></i>
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="94"
    //               height="92"
    //               viewBox="0 0 94 92"
    //             >
    //               <path
    //                 className="services_shape"
    //                 id="Polygon_12"
    //                 data-name="Polygon 12"
    //                 d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z"
    //               />
    //             </svg>
    //           </div>
    //           <div className="services_content mt-5 xl:mt-10">
    //             <h3 className="services_title text-black font-semibold text-xl md:text-2xl lg:text-xl xl:text-3xl">
    //               Digital Marketing
    //             </h3>
    //             <p className="mt-4">
    //               Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed
    //               diam voluptua. At vero eos accusam et justo duo dolores
    //             </p>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
    //         <div className="single_services text-center mt-8 mx-3">
    //           <div className="services_icon">
    //             <i className="lni lni-mobile"></i>
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="94"
    //               height="92"
    //               viewBox="0 0 94 92"
    //             >
    //               <path
    //                 className="services_shape"
    //                 id="Polygon_12"
    //                 data-name="Polygon 12"
    //                 d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z"
    //               />
    //             </svg>
    //           </div>
    //           <div className="services_content mt-5 xl:mt-10">
    //             <h3 className="services_title text-black font-semibold text-xl md:text-2xl lg:text-xl xl:text-3xl">
    //               Mobile Apps
    //             </h3>
    //             <p className="mt-4">
    //               Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed
    //               diam voluptua. At vero eos accusam et justo duo dolores
    //             </p>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
    //         <div className="single_services text-center mt-8 mx-3">
    //           <div className="services_icon">
    //             <i className="lni lni-seo"></i>
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="94"
    //               height="92"
    //               viewBox="0 0 94 92"
    //             >
    //               <path
    //                 className="services_shape"
    //                 id="Polygon_12"
    //                 data-name="Polygon 12"
    //                 d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z"
    //               />
    //             </svg>
    //           </div>
    //           <div className="services_content mt-5 xl:mt-10">
    //             <h3 className="services_title text-black font-semibold text-xl md:text-2xl lg:text-xl xl:text-3xl">
    //               SEO Consultancy
    //             </h3>
    //             <p className="mt-4">
    //               Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed
    //               diam voluptua. At vero eos accusam et justo duo dolores
    //             </p>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
    //         <div className="single_services text-center mt-8 mx-3">
    //           <div className="services_icon">
    //             <i className="lni lni-layers"></i>
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="94"
    //               height="92"
    //               viewBox="0 0 94 92"
    //             >
    //               <path
    //                 className="services_shape"
    //                 id="Polygon_12"
    //                 data-name="Polygon 12"
    //                 d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z"
    //               />
    //             </svg>
    //           </div>
    //           <div className="services_content mt-5 xl:mt-10">
    //             <h3 className="services_title text-black font-semibold text-xl md:text-2xl lg:text-xl xl:text-3xl">
    //               Graphic Design
    //             </h3>
    //             <p className="mt-4">
    //               Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed
    //               diam voluptua. At vero eos accusam et justo duo dolores
    //             </p>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
    //         <div className="single_services text-center mt-8 mx-3">
    //           <div className="services_icon">
    //             <i className="lni lni-briefcase"></i>
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="94"
    //               height="92"
    //               viewBox="0 0 94 92"
    //             >
    //               <path
    //                 className="services_shape"
    //                 id="Polygon_12"
    //                 data-name="Polygon 12"
    //                 d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z"
    //               />
    //             </svg>
    //           </div>
    //           <div className="services_content mt-5 xl:mt-10">
    //             <h3 className="services_title text-black font-semibold text-xl md:text-2xl lg:text-xl xl:text-3xl">
    //               Business Consultancy
    //             </h3>
    //             <p className="mt-4">
    //               Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed
    //               diam voluptua. At vero eos accusam et justo duo dolores
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}

export default Services;
