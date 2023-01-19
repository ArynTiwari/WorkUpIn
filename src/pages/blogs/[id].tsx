import { api } from "../../utils/api";
import moment from "moment";
import { useRouter } from "next/router";
import LoadingTemplate from "../../components/Utils/LoadingTemplate";
function date(value: moment.MomentInput) {
  const time = moment.utc(value).utcOffset("+05:30").format("DD-MM-YY HH:mm");
  return time;
}

const DisplayBlogs = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const { data: blog, isLoading, isError } = api.blogs.getOne.useQuery({ id });
  console.log(blog)
  if(isLoading){
    return (
      <LoadingTemplate/>
    )
  }
  if (isError) {
    return <div>Error</div>;
  } else {
    return (
      <div className="flex flex-col ">
        <div className="mx-4 my-2">
          <div className="flex flex-col">
            <div className="flex flex-col justify-between rounded-b border-r border-b border-l border-gray-400 bg-white p-4 leading-normal lg:rounded-b-none lg:rounded-r lg:border-l-0 lg:border-t lg:border-gray-400">
              <div className="flex items-center">
                {/* <Image className="w-10 h-10 rounded-full mr-4" src={`https://placekitten.com/200/300`} height={10} width={10} alt="Avatar of Writer"/> */}
                <div className="text-sm">
                  <p className="leading-none text-gray-900">
                    Category:{blog?.title}
                  </p>
                  <p className="text-gray-600">Created at: {blog?.desc}</p>
                  <p className="text-gray-600">
                    Created at: {date(blog?.createdAt)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default DisplayBlogs;
