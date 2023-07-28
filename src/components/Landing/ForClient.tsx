/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Image from "next/image";
import Button from "../Utils/Button";
import asset18 from '../../../public/assets/new/asset18.png'
import confused from '../../../public/assets/unDraw/confused.svg';
function ForClient() {
  return (
    <>
      <section className="big-feature-section ">
        <div className="container flex items-center big-feature-container">
          <div className="feature-image">
            <Image src={asset18} alt="" />
          </div>
          <div className="feature-desc flex items-center">
            <h4>Effortless validation for</h4>
            <h3>Design professionals</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum repellat fugit consequatur laborum voluptates deleniti dolor, commodi quisquam iusto consequuntur!</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ForClient;
