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
          <div className="feature-image hidden md:block">
            <Image src={asset18} alt="" />
          </div>
          <div className="feature-desc flex items-center">
            <h4 className="text-xl font-medium">Unlock Your Creative Potential</h4>
            <h3 className="text-2xl font-semibold">Join WorkUp - The Ultimate Platform for Design Professionals</h3>
            <p className="text-lg">Are you a talented design professional looking for new opportunities to showcase your skills and connect with clients from around the world? WorkUp offers effortless validation and empowers you to reach new heights in your career.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ForClient;
