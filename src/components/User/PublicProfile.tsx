import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
import React from "react";
import { api } from "../../utils/api";
import LoadingTemplate from "../Utils/LoadingTemplate";
import { env } from "../../env/client.mjs";
interface prop {
  id: string;
}
const PublicProfile = ({ id }: prop) => {
  const { data: session } = useSession();
  const router = useRouter();
  let showMessage = true;
  if (session?.user?.id == id) {
    showMessage = false;
  }
  const { data: data, isError, isLoading } = api.user.getOne.useQuery({ id });
  const { data: user } = api.user.getUserInfo.useQuery({ id });
  if (isLoading) {
    return <LoadingTemplate />;
  }
  if (isError) {
    return <div>Error</div>;
  }
  function handleCLick() {
    void router.push(`${env.NEXT_PUBLIC_URL}/chat/${id}`);
  }
  return (
    <>
      <section className="relative block" style={{ height: "500px" }}>
        <div
          className="absolute top-0 h-full w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
          }}
        >
          <span
            id="blackOverlay"
            className="absolute h-full w-full bg-black opacity-50"
          ></span>
        </div>
        <div
          className="pointer-events-none absolute top-auto bottom-0 left-0 right-0 w-full overflow-hidden"
          style={{ height: "70px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="fill-current text-gray-300"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
      <section className="relative bg-gray-300 py-16">
        <div className="container mx-auto px-4">
          <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-xl">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                  <div className="items-center justify-center">
                    <Image
                      alt="..."
                      src={data?.image as string}
                      width={1000}
                      height={50}
                      className="rounded-full"
                      style={{ maxWidth: "150px" }}
                    />
                  </div>
                </div>
                {showMessage ? (
                  <div className="mt-4 flex w-full items-center justify-center">
                    <div className="">
                      <button
                        onClick={handleCLick}
                        className="mb-1 rounded bg-pink-500 px-4 py-2 text-xs font-bold uppercase text-white shadow outline-none hover:shadow-md focus:outline-none active:bg-pink-600 sm:mr-2"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        Message
                      </button>
                    </div>
                  </div>
                ) : null}
                <div className="w-full px-4 lg:order-1 lg:w-4/12">
                  {/* <div className="flex justify-center py-4 pt-8 lg:pt-4">
                    <div className="mr-4 p-3 text-center">
                      <span className="block text-xl font-bold uppercase tracking-wide text-gray-700">
                        22
                      </span>
                      <span className="text-sm text-gray-500">Friends</span>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <span className="block text-xl font-bold uppercase tracking-wide text-gray-700">
                        10
                      </span>
                      <span className="text-sm text-gray-500">Photos</span>
                    </div>
                    <div className="p-3 text-center lg:mr-4">
                      <span className="block text-xl font-bold uppercase tracking-wide text-gray-700">
                        89
                      </span>
                      <span className="text-sm text-gray-500">Comments</span>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="mt-12 text-center">
                <h3 className="mb-2 text-4xl font-semibold leading-normal text-gray-800">
                  {`${user?.firstName as string}  ${user?.lastName as string}`}
                </h3>
                <div className="mt-0 mb-2 text-sm font-bold uppercase leading-normal text-gray-500">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                  {`${user?.city as string} ,  ${user?.state as string}`}
                </div>
                {/* <div className="mb-2 mt-10 text-gray-700">
                  <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                  Solution Manager - Creative Tim Officer
                </div>
                <div className="mb-2 text-gray-700">
                  <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                  University of Computer Science
                </div> */}
              </div>
              <div className="mt-10 border-t border-gray-300 py-10 text-center">
                <h1 className="text-3xl py-2">About Me</h1>
                <div className="flex flex-wrap justify-center">
                  <div className="w-full px-4 lg:w-9/12">
                    <p className="mb-4 text-lg leading-relaxed text-gray-800">
                      {user?.about}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PublicProfile;
