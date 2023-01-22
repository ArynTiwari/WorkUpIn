import Talk from "talkjs";
import { useEffect, useState, useRef } from "react";

function MyChatComponent() {
  const chatboxEl = useRef(null);

  // wait for TalkJS to load
  const [talkLoaded, markTalkLoaded] = useState(false);

  useEffect(() => {
    void Talk.ready.then(() => markTalkLoaded(true));

    if (talkLoaded) {
      const currentUser = new Talk.User({
        id: "1",
        name: "Henry Mill",
        email: "henrymill@example.com",
        photoUrl: "henry.jpeg",
        welcomeMessage: "Hello!",
        role: "default",
      });

      const otherUser = new Talk.User({
        id: "2",
        name: "Jessica Wells",
        email: "jessicawells@example.com",
        photoUrl: "jessica.jpeg",
        welcomeMessage: "Hello!",
        role: "default",
      });

      const session = new Talk.Session({
        appId: "tCo5e5KE",
        me: currentUser,
      });

      const conversationId = Talk.oneOnOneId(currentUser, otherUser);
      const conversation = session.getOrCreateConversation(conversationId);
      console.log(chatboxEl)
      conversation.setParticipant(currentUser);
      conversation.setParticipant(otherUser);

      const inbox = session.createChatbox();
      inbox.select(conversation);
      void inbox.mount(chatboxEl.current);

      return () => session.destroy();
    }
  }, [talkLoaded]);

  return (
    
      <div ref={chatboxEl} style={{marginTop:'15px',marginLeft:'auto',marginRight:'auto',alignItems:'center',fontSize:'16px' , height: '80vh'}}/>

  );
}
export default MyChatComponent;
