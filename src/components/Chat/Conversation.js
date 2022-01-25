import { styled } from "@stitches/react";
import { RecievedMessage, SentMessage } from "./Message";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchConversation,
  newMsg,
  selectConversation,
} from "../../features/conversation/conversationSlice";
const socket = io("http://localhost:8000");

const StyledConversation = styled("div", {
  display: "flex",
  width: "100%",
  flexDirection: "column-reverse",
  justifyContent: "flex-start",
  alignItems: "center",
  flex: "1",
  paddingBottom: "10px",
  maxHeight: "100%",
  overflowY: "scroll",
  scrollbarWidth: "none",
  scrollBehavior: "smooth",
  "&::-webkit-scrollbar": {
    display: "none",
  },
});

export default function Conversation() {
  const conv = useSelector((state) => state.conversation.value);

  useEffect(() => {
    socket.on("connect", () => {
      // fetch previous messages
      // dispatch(fetchConversation(prevMsgs));

      socket.on("RECIEVE-MSG", (msg) => {
        // if user.id !== msg.userId
        // dispatch (newMsg(msg))
      });
    });
  }, []);

  return (
    <StyledConversation>
      {conv.map((msg) => (
        <RecievedMessage
          img="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          message="Congrats men 🎉🎉... Keep me updated! 🔥"
        />
      ))}
      {/* <RecievedMessage
        img="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        message="Congrats men 🎉🎉... Keep me updated! 🔥"
      />
      <SentMessage
        img="https://images.unsplash.com/photo-1629467057571-42d22d8f0cbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80"
        message="Ayoooo man this is a realtime messaging app. Finally working with
          Stiches, Radix primitives, Socketio and much more 🚀"
      /> */}
    </StyledConversation>
  );
}
