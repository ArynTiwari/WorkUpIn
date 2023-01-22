import React from "react";
import { useSession } from "next-auth/react";
import UserBlog from "../../../components/Blog/UseBlog";
const UserBlogs = () => {
  const { data: session } = useSession();
  const id = session?.user?.id;
  return (
    <>
      <UserBlog id={id as string} />
    </>
  );
};
export default UserBlogs;
