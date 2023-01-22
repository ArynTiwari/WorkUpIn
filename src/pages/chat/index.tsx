import React from "react";
import { useSession } from "next-auth/react";
import MyChatComponent from "../../components/chat/ChatPanel";
const Chat = () => {
  const { data: session } = useSession();

  return (
    <MyChatComponent
      id={session?.user?.id as string}
      name={session?.user?.name as string}
      email={session?.user?.email as string}
      photoUrl={session?.user?.image as string}
    />
  );
};

export default Chat;
