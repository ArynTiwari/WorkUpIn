import type { User } from "next-auth";
import Link from "next/link";
import React from "react";
import { env } from "../../env/client.mjs";
interface props {
  title: string | undefined;
  desc: string | undefined;
  category: string[] | undefined;
  createdAt: string | undefined;
  author: User;
}

const SingleProject = ({ title, desc, category, createdAt, author }: props) => {
  return (
    <section>
      <div className="mx-4">
        <div className="text-black-600 mx-6 mt-4 text-3xl font-bold">
          Project Details
        </div>
        <div className="flex flex-col md:flex-row ">
          <div className="flex flex-1">
            <div className="mt-4 px-6 py-4 text-black ">
              <div className="font-momo mb-2 text-2xl ">{title}</div>
              <hr className="stroke-2"></hr>
              <p className=" text-0.5xl pt-3 text-base text-slate-800">
                Description: {desc}
              </p>
              <p className=" text-0.5xl pt-3 text-base text-slate-800">
                <br></br>
                Category: {category}
              </p>

              <hr className="stroke-2"></hr>

              <p className=" text-0xl mr-7 pt-7 text-base text-slate-800">
                Created at: {createdAt}
              </p>
              <p className=" text-0xl pr-7 text-base text-slate-500">
                Fixed price
              </p>
              <hr className="my-5 stroke-2"></hr>

              <p className=" text-0xl mr-7 text-base text-slate-900">
                Project Type: One-time project
              </p>

              <hr className="my-5 stroke-2"></hr>

              <p className=" text-0xl mr-7 mb-7 text-base text-neutral-900">
                Skills Required: {category}
              </p>
              <hr className="my-5 stroke-2"></hr>
            </div>
          </div>
          <div className="flex">
            <div className="mt-4 px-6 py-4 text-black">
              <div className="flex flex-col">
                <button className="mx-3 truncate rounded-full bg-green-500 px-14 py-1 pb-2 text-white hover:bg-violet-700">
                  <Link href={`${env.NEXT_PUBLIC_URL}/projects/pt/proposal`}>Submit Proposal</Link>
                </button>
                <button className="mx-3 mt-5 rounded-full bg-green-500 px-14 py-1 pb-2 text-white hover:bg-violet-700">
                  Save Job
                </button>
              </div>
              <p className=" text-black-900 text-0xl ml-5 mt-5 text-base">
                Flag as inappropriate
              </p>
              <p className=" text-0xl ml-5 mt-3 text-base text-slate-700">
                Send a proposal for: 2 Connects
                <br></br>
                Available Connects: 50
              </p>
              <hr className="my-5 stroke-2"></hr>
              <div className="text-black-900 ml-5 mt-5 text-3xl">
                About the client
                <Link href={`${env.NEXT_PUBLIC_URL}/user/profile/${author.id}`}>
                  <div className=" text-0px ml-5 mt-3 text-base text-slate-500">
                    Name : {author.name}
                    <p className=" text-0px mt-3 text-base text-slate-500">
                      Member since Nov 13, 2021
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProject;
