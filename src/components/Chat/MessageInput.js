import { styled } from "@stitches/react";
import { PlusCircledIcon, PaperPlaneIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { io } from "socket.io-client";
import { useDispatch } from "react-redux";
import { newMsg } from "../../features/conversation/conversationSlice";

const socket = io("http://localhost:8000");

const InputContainer = styled("div", {
  padding: "10px 20px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "20px",
  borderRadius: 25,
  backgroundColor: "#1e2021",
  //   font color => #ecedee
});

const iconStyle = {
  opacity: "0.5",
  cursor: "pointer",
  width: "25px",
  height: "25px",
};

const AttachMediaIcon = styled(PlusCircledIcon, {
  ...iconStyle,
});

const Input = styled("input", {
  all: "unset",
  padding: "5px 0px",
  flex: "1",
  fontSize: "14px",
});

const SendMessageIcon = styled(PaperPlaneIcon, {
  ...iconStyle,
});

export default function MessageInput() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const sendMessage = (msg) => {
    if (input !== "") {
      socket.emit("MESSAGE-SENT", msg);
      dispatch(newMsg(input));
      setInput("");
    }
  };
  return (
    <InputContainer>
      <AttachMediaIcon />
      <Input
        autoFocus={true}
        placeholder="Say Hi 👋"
        value={input}
        onChange={inputHandler}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            sendMessage(input);
          }
        }}
      />
      <SendMessageIcon
        onClick={() => {
          sendMessage(input);
        }}
      />
    </InputContainer>
  );
}
