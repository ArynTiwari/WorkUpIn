import Talk from "talkjs";
import { useSession } from "next-auth/react";
import { useEffect, useState, useRef } from "react";
import Notifier from "../Utils/Notifier";

interface prop {
  id: string;
  name: string;
  email: string;
  photoUrl: string;
}
function MyChatComponent({ id, name, email, photoUrl }: prop) {
  const { data: sessioUser } = useSession();
  const chatboxEl = useRef(null);

  // wait for TalkJS to load
  const [talkLoaded, markTalkLoaded] = useState(false);
  useEffect(() => {
    void Talk.ready.then(() => markTalkLoaded(true));

    if (talkLoaded) {
      const currentUser = new Talk.User({
        id: sessioUser?.user?.id as string,
        name: sessioUser?.user?.name as string,
        email: sessioUser?.user?.email as string,
        photoUrl: sessioUser?.user?.image as string,
        role: "default",
      });

      const otherUser = new Talk.User({
        id: id,
        name: name,
        email: email,
        photoUrl: photoUrl,

        role: "default",
      });

      const session = new Talk.Session({
        appId: "tCo5e5KE",
        me: currentUser,
      });

      const conversationId = Talk.oneOnOneId(currentUser, otherUser);
      const conversation = session.getOrCreateConversation(conversationId);
      conversation.setParticipant(currentUser);
      conversation.setParticipant(otherUser);

      const inbox = session.createInbox();
      inbox.select(conversation);
      void inbox.mount(chatboxEl.current);
      session.unreads.onChange((unreadConversations: unknown[]) => {
        const amountOfUnreads = unreadConversations.length;
        if (amountOfUnreads > 0) {
          <Notifier count={amountOfUnreads}/>
        }
      });

      return () => session.destroy();
    }
  }, [
    email,
    id,
    name,
    photoUrl,
    sessioUser?.user?.email,
    sessioUser?.user?.id,
    sessioUser?.user?.image,
    sessioUser?.user?.name,
    talkLoaded,
  ]);

  return (
    <>
      <div
        ref={chatboxEl}
        style={{
          marginTop: "15px",
          marginLeft: "auto",
          marginRight: "auto",
          alignItems: "center",
          fontSize: "16px",
          height: "80vh",
        }}
      />
    </>
  );
}

export default MyChatComponent;
