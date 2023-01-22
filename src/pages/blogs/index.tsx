import { api } from "../../utils/api";
import Link from "next/link";
import moment from "moment";
import LoadingTemplate from "../../components/Utils/LoadingTemplate";
import type { NextPage } from "next";
function date(value: moment.MomentInput) {
  const time = moment.utc(value).utcOffset("+05:30").format("DD-MM-YY HH:mm");
  return time;
}

const DisplayBlogs: NextPage = () => {
  const { data: blog, isLoading, isError } = api.blogs.getAll.useQuery();
  if (isLoading) {
    return <LoadingTemplate />;
  }
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <div className="flex flex-col ">
      {blog?.length ? (
        blog.map((list) => (
          <div className="mx-4 my-2" key={list.id}>
            <div className="flex flex-col">
              <div className="flex flex-col justify-between rounded-b border-r border-b border-l border-gray-400 bg-white p-4 leading-normal lg:rounded-b-none lg:rounded-r lg:border-l-0 lg:border-t lg:border-gray-400">
                <div className="mb-8">
                  <Link
                    href={`/blogs/pt/${list.id}`}
                    className="mb-2 cursor-pointer text-xl font-bold text-gray-900"
                  >
                    {list.title}
                  </Link>

                  <p className="text-base text-gray-700">{list.desc}</p>
                </div>
                <div className="flex items-center">
                  {/* <Image className="w-10 h-10 rounded-full mr-4" src={`https://placekitten.com/200/300`} height={10} width={10} alt="Avatar of Writer"/> */}
                  <div className="text-sm">
                    <p className="leading-none text-gray-900">
                      Category: {list.category}
                    </p>
                    <p className="text-gray-600">
                      Created at: {date(list.createdAt)}
                    </p>
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
export default DisplayBlogs;
