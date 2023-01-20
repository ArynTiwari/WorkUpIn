import React from "react";
import Image from "next/image";
import mountain from "../../../public/assets/unDraw/mountain.jpg";
interface props {
  title: string | undefined;
  desc: string | undefined;
  category: string | undefined;
  createdAt: string | undefined;
}
const SingleBlog = ({ title, desc, category, createdAt }: props) => {
  return (
    <>
      <div className="mx-auto my-8 flex max-w-sm flex-col items-center justify-center overflow-hidden rounded text-center shadow-lg">
        <Image
          className="w-full"
          src={mountain}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">{title}</div>
          <p className="text-base text-gray-700">{desc}</p>
          <p className="text-base text-gray-700">Created at: {createdAt}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
            #{category}
          </span>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
