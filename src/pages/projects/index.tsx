import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import { Projects } from "../../types";
import moment from "moment";
interface IProps {
  projectList: Projects[];
}
function date(value: moment.MomentInput) {
  const time = moment
    .utc(value)
    .utcOffset("+05:30")
    .format("YYYY-MM-DD HH:mm:ss");
  const hoursAgo = moment().from(time);
  return hoursAgo;
}
const DisplayProjects = ({ projectList }: IProps) => {
  return (
    <>
      <div className="mx-4 my-4 flex flex-col text-center">
        <h2 className="text-black text-3xl font-momo font-semibold">
          Jobs you might like
        </h2>
        <br />
        <p className="text-black font-serif text-1xl">
          Browse jobs that match your experience to a client hiring preferences.
          Ordered by most relevant.
        </p>
      </div>
      <br />
      <div className="flex flex-col">
        {projectList.length ? (
          projectList.map((list) => (
            <div key={list.id}>
              <div className="md:box-content lg:box-border h-300 w-98  m-3 border-2 rounded-lg border-gray-500">
                <div className="mt-2  ">
                  <div className="pl-4">
                    <Link
                      href={`/projects/${list.id}`}
                      className="text-black text-2xl hover:text-violet-600 hover:underline cursor-pointer"
                    >
                      {list.title}
                    </Link>
                    <button className="float-right ">
                      <FontAwesomeIcon
                        icon={faThumbsDown}
                        style={{ width: "50px", height: "30px",color:'blue' }}
                      />
                    </button>{" "}
                    <button className="float-right ">
                      <FontAwesomeIcon
                        icon={faHeart}
                        style={{ width: "50px", height: "30px",color:'violet' }}
                      />
                    </button>
                    <br />
                    <p className="text-black font-serif text-1xl pt-2">
                      {list.description}
                    </p>
                    <p className="text-slate-600 font-serif text-1xl pt-1">
                      Price: {list.amount}
                    </p>
                    <p className="text-slate-600 font-serif text-1xl pt-1">
                      Category: {list.category}
                    </p>
                    <p className="text-slate-600 font-serif text-1xl pt-1">
                      Level: {list.level}
                    </p>
                    <p className="text-slate-600 font-serif text-1xl pt-1">
                      Proposed by: {list.user.name}
                    </p>
                    <p className="text-slate-600 font-serif text-1xl pt-1">
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
                    <p className="flex flex-row text-black font-bold text-3xl mt-7">
                      Payment Verified:
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="star"
                        className=" w-4  text-green-700 mr-1"
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
                        className=" w-4  text-green-700 mr-1"
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
                        className=" w-4  text-green-700 mr-1"
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
                        className=" w-4  text-green-700 mr-1"
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
          <h1 className="flex text-center">Please Refresh</h1>
        )}
      </div>
    </>
  );
};
export default DisplayProjects;

export const getServerSideProps = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_URL}/api/projects`
  );
  return {
    props: { projectList: data },
  };
};
