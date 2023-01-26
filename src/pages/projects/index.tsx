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
                      Proposed by: {list.author.name}
                    </p>
                    <p className="text-1xl pt-1 font-serif text-slate-600">
                      <>Uploaded :{date(list.createdAt)}</>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <ErrorPage />
        )}
      </div>
    </>
  );
};
export default DisplayProjects;
