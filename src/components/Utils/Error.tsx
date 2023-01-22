import type { NextPage } from "next";
import { signIn } from "next-auth/react";
import React from "react";

const Error: React.FC = () => {
  function siginIn() {
    void signIn();
  }
  return (
    <>
      <section className="flex h-[80vh] items-center justify-center overflow-hidden">
        <div className="flex items-center">
          <div className="container flex flex-col items-center justify-center px-5 text-gray-700 md:flex-row">
            <div className="max-w-md">
              <div className="font-dark text-5xl font-bold">500 :(</div>
              <p className="text-2xl font-light leading-normal md:text-3xl">
                Sorry we are having trouble here!.{" "}
              </p>
              <p className="mb-8">But dont worry, you can log in again :)</p>
              <button
                onClick={siginIn}
                className="focus:shadow-outline-blue inline rounded-lg border border-transparent bg-violet-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-violet-800 focus:outline-none active:bg-blue-600"
              >
                Click Here!
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;
