import React from "react";
import { useRouter } from "next/router";
import { api } from "../../utils/api";
import LoadingTemplate from "../../components/Utils/LoadingTemplate";
import Error from "../../components/Utils/Error";
import MyChatComponent from "../../components/chat/ChatPanel";
const Chat = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const { data: user, isLoading, isError } = api.user.getOne.useQuery({ id });
  if (isLoading) {
    return <LoadingTemplate />;
  }
  if (isError) {
    return <Error />;
  }
  return (
    <MyChatComponent
      id={user?.id as string}
      name={user?.name as string}
      email={user?.email as string}
      photoUrl={user?.image as string}
    />
  );
};

export default Chat;
