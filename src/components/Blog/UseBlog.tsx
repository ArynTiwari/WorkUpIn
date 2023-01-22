import React from "react";
import { api } from "../../utils/api";
import ErrorPage from "../Utils/Error";
import LoadingTemplate from "../Utils/LoadingTemplate";
interface props {
  id: string;
}
const UserBlog = ({ id }: props) => {
  const {
    data: blog,
    isError,
    isLoading,
  } = api.blogs.getUserBlog.useQuery({ id });

  if (isLoading) {
    return <LoadingTemplate />;
  }
  if (isError) {
    return <ErrorPage />;
  }
  return (
    <div className="bg-green-300">
      {blog?.map((blg) => (
        <div key={blg.id}>{blg.title}</div>
      ))}
    </div>
  );
};

export default UserBlog;
