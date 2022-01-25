import { styled } from "@stitches/react";
import Conversation from "./Conversation";
import MessageInput from "./MessageInput";

const ChatMain = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  maxWidth: "70vw",
  minWidth: 400,
  padding: "0px 20px",
  height: "100%",
});

export default function Chat() {
  return (
    <ChatMain>
      <Conversation />
      <MessageInput />
    </ChatMain>
  );
}
