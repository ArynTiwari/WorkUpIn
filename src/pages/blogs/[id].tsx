import { api } from "../../utils/api";
import moment from "moment";
import { useRouter } from "next/router";
import LoadingTemplate from "../../components/Utils/LoadingTemplate";
import SingleBlog from "../../components/Blog/SingleBlog";
import type { NextPage } from "next";
function date(value: moment.MomentInput) {
  const time = moment.utc(value).utcOffset("+05:30").format("DD-MM-YY HH:mm");
  return time;
}
const DisplayBlogs: NextPage = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const { data: blog, isLoading, isError } = api.blogs.getOne.useQuery({ id });
  console.log(blog);
  if (isLoading) {
    return <LoadingTemplate />;
  }
  if (isError) {
    return <div>Error</div>;
  } else {
    return (
      <SingleBlog
        title={blog?.title}
        desc={blog?.desc}
        category={blog?.category}
        createdAt={date(blog?.createdAt)}
      />
    );
  }
};

export default DisplayBlogs;
