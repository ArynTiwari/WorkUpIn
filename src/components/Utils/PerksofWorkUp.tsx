import { perksWorkUp } from "../../utils/constants";
function WhyUs() {
  return (
    <div className="flex flex-col my-4">
      <h5 className="flex items-center justify-center text-2xl md:text-4xl">Perks at WorkUp</h5>
      <div className="flex flex-col justify-around  md:flex-row md:justify-around mt-4 border border-violet-500">
        {perksWorkUp.map((perks) => (
          <div key={perks.title} className="flex flex-col my-4 ml-2 md:ml-0">
            <h4 className="flex justify-center my-2 underline decoration-violet-800">{perks.title}</h4>
            <p className="text-sm p-2">{perks.description}</p>
          </div>
        ))}
      </div>
      {/* <FAQsec/> */}
    </div>
  );
}

export default WhyUs;
