import { SiFontawesome } from "react-icons/si";
import { BsFillHeartFill } from "react-icons/bs";
import Link from "next/link";
import moment from "moment";
import type { NextPage } from "next";
import { api } from "../../utils/api";
import LoadingTemplate from "../../components/Utils/LoadingTemplate";
import ErrorPage from "../../components/Utils/Error";
function date(value: moment.MomentInput) {
  const time = moment.utc(value).utcOffset("+05:30").format("DD-MM-YY HH:mm");
  return time;
}
const DisplayProjects: NextPage = () => {
  const { data: projects, isError, isLoading } = api.projects.getAll.useQuery();
  if (isLoading) {
    return <LoadingTemplate />;
  }
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <>
      <div className="mx-4 my-4 flex flex-col text-center">
        <h2 className="font-momo text-3xl font-semibold text-black">
          Jobs you might like
        </h2>
        <br />
        <p className="text-1xl font-serif text-black">
          Browse jobs that match your experience to a client hiring preferences.
          Ordered by most relevant.
        </p>
      </div>
      <br />
      <div className="flex flex-col">
        {projects?.length ? (
          projects.map((list) => (
            <div key={list.id}>
              <div className="h-300 w-98 m-3 rounded-lg  border-2 border-gray-500 md:box-content lg:box-border">
                <div className="mt-2  ">
                  <div className="pl-4">
                    <Link
                      href={`/projects/pt/${list.id}`}
                      className="cursor-pointer text-2xl text-black hover:text-violet-600 hover:underline"
                    >
                      {list.title}
                    </Link>
                    <button className="float-right ">
                      <SiFontawesome />
                    </button>{" "}
                    <button className="float-right ">
                      <BsFillHeartFill />
                    </button>
                    <br />
                    <p className="text-1xl pt-2 font-serif text-black">
                      {list.desc}
                    </p>
                    <p className="text-1xl pt-1 font-serif text-slate-600">
                      Price: {list.amount}
                    </p>
                    <p className="text-1xl pt-1 font-serif text-slate-600">
                      Category: {list.category}
                    </p>
                    <p className="text-1xl pt-1 font-serif text-slate-600">
                      Level: {list.level}
                    </p>
                    <p className="text-1xl pt-1 font-serif text-slate-600">
                      Proposed by: {}
                    </p>
                    <p className="text-1xl pt-1 font-serif text-slate-600">
                      <>Uploaded :{date(list.createdAt)}</>
                    </p>
                    <br />
                    <br />
                    {/* <div className="mb-4">
                        <div className="flex flex-wrap justify-left space-x-2">
                          <h3 className="font-semibold"> Skills:- </h3>
                          {list.category.map((cat: any) => (
                            <span
                              key={cat.id}
                              className="px-4 py-2 rounded-full border border-gray-300 text-gray-500 font-semibold text-sm flex align-right w-max  active:bg-gray-300 transition duration-300 ease">
                              {cat}
                            </span>
                          ))}
                        </div>
                      </div> */}
                    <p className="mt-7 flex flex-row text-3xl font-bold text-black">
                      Payment Verified:
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="star"
                        className=" mr-1  w-4 text-green-700"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                        ></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="star"
                        className=" mr-1  w-4 text-green-700"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                        ></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="star"
                        className=" mr-1  w-4 text-green-700"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                        ></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="star"
                        className=" mr-1  w-4 text-green-700"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                        ></path>
                      </svg>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <ErrorPage/>
        )}
      </div>
    </>
  );
};
export default DisplayProjects;
