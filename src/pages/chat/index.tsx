import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import MyChatComponent from "../../components/chat/ChatPanel";
import ErrorPage from "../../components/Utils/Error";
const Chat = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  if (status === "unauthenticated") {
    void router.push("/");
    return <ErrorPage />;
  }
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
