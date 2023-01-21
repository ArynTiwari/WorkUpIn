import { api } from "../../utils/api";
import { useSession } from "next-auth/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import LoadingTemplate from "../../components/Utils/LoadingTemplate";
import moment from "moment";
import SingleProject from "../../components/Project/SingleProject";
function date(value: moment.MomentInput) {
  const time = moment.utc(value).utcOffset("+05:30").format("DD-MM-YY HH:mm");
  return time;
}
const Project: NextPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const id = router.query.id as string;
  console.log(id)
  const {
    data: project,
    isLoading,
    isError,
  } = api.blogs.getOne.useQuery({ id });
  if (isLoading) {
    return <LoadingTemplate />;
  }
  if (isError) {
    return <div>Error</div>;
  }

  return (
    <>
      {session && status === "authenticated" && (
        <SingleProject
          title={project?.title}
          desc={project?.desc}
          category={project?.category}
          createdAt={date(project?.createdAt)}
        />
      )}
    </>
  );
};
export default Project;
