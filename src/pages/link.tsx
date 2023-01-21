import moment from "moment";
import type { NextPage } from "next";
import LoadingTemplate from "../components/Utils/LoadingTemplate";
import { api } from "../utils/api";
function date(value: moment.MomentInput) {
  const time = moment.utc(value).utcOffset("+05:30").format("DD-MM-YY HH:mm");
  return time;
}
const Index: NextPage = () => {
  const { data: blog, isLoading, isError } = api.blogs.getAll.useQuery();
  if (isLoading) {
    return <LoadingTemplate />;
  }
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <div className="">
      {blog?.length ? (
        blog.map((blg) => (
          <div key={blg.id} className="container mx-auto flex flex-col">
            <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="rounded">
                <div className="mb-6 flex h-64 w-full flex-col items-start justify-between rounded-lg border border-blue-300 bg-blue-300 py-5 px-4">
                  <div>
                    <h4 className="mb-3 font-bold text-gray-800">
                      {blg.title}
                    </h4>
                    <p className="text-sm text-gray-800">{blg.desc}</p>
                  </div>
                  <div className="flex w-full flex-col items-start">
                    <div className="mb-3 flex items-center rounded-full border border-gray-800 px-3 py-1 text-xs text-gray-800">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-alarm"
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx={12} cy={13} r={7} />
                        <polyline points="12 10 12 13 14 13" />
                        <line x1={7} y1={4} x2="4.25" y2={6} />
                        <line x1={17} y1={4} x2="19.75" y2={6} />
                      </svg>
                      <p className="ml-2">{blg.category}</p>
                    </div>
                    <div className="flex w-full items-center justify-between text-gray-800">
                      <p className="text-sm">{date(blg.createdAt)}</p>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-pencil"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                          <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <LoadingTemplate />
      )}
    </div>
  );
};
export default Index;
