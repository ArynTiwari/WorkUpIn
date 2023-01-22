import type { RtmChannel, RtmMessage } from "agora-rtm-sdk";
import { useRef, useState } from "react";
import { env } from "../../env/client.mjs";
import type { TMessage } from "../../components/chat/HelpWidget";

export const useRTM = (initialMessages?: TMessage[]) => {
  const channelRef = useRef<RtmChannel | null>(null);
  const [messages, setMessages] = useState<TMessage[]>(initialMessages ?? []);

  const connectTo = async (id: string) => {
    if (channelRef.current) {
      void channelRef.current.leave();
      channelRef.current = null;
    }
    const { default: AgoraRTM } = await import("agora-rtm-sdk");
    const client = AgoraRTM.createInstance(`cac169f7b4c84f279bae147b0499ea97`);
    await client.login({
      uid: `${Math.floor(Math.random() * 250)}`,
      token: undefined,
    });
    const channel = client.createChannel(id);
    channelRef.current = channel;
    await channel.join();
    channel.on("ChannelMessage", (message: RtmMessage) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          message: message.text ?? "",
          id: `Math.random() + ""`,
          sender: "1",
        },
      ]);
    });
  };

  const sendMessage = async (text: string) => {
    const channel = channelRef.current;
    await channel?.sendMessage({ text });
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        message: text,
        id: `Math.random() + ""`,
        sender: "0",
      },
    ]);
  };

  const clearMessages = () => {
    setMessages([]);
  };

  return { messages, clearMessages, sendMessage, connectTo };
};