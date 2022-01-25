import { styled } from "@stitches/react";
import { Root as Avatar, Image as AvatarImage } from "@radix-ui/react-avatar";

const messageStyle = {
  display: "flex",
  alignItems: "flex-end",
  gap: "10px",
  fontSize: "14px",
  lineHeight: "20px",
  margin: "5px 0px",
};

const timeStampStyle = {
  fontSize: "11px",
  opacity: "0.5",
  fontFamily: "Roboto",
  padding: "0px 10px",
};

const StyledRecievedMessage = styled("div", {
  ...messageStyle,
  justifyContent: "right",
  width: "100%",
  "& p": {
    textAlign: "left",
    backgroundColor: "Blueviolet",
    color: "#ecedee",
    border: "6px",
    borderRadius: "6px",
    padding: "10px",
    maxWidth: "330px",
    margin: "5px 0px",
  },

  "& pre": { ...timeStampStyle },
});

const StyledSentMessage = styled("div", {
  ...messageStyle,
  justifyContent: "left",
  width: "100%",
  "& p": {
    backgroundColor: "#ecedee",
    border: "6px",
    borderRadius: "6px",
    padding: "10px",
    color: "#161618",
    maxWidth: "330px",
    margin: "5px 0px",
  },

  "& pre": { ...timeStampStyle },
});

const MessageAvatar = styled(Avatar, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle",
  overflow: "hidden",
  userSelect: "none",
  width: 30,
  height: 30,
  borderRadius: "100%",
  marginBottom: "30px",
});

const MessageAvatarImage = styled(AvatarImage, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit",
});

export function SentMessage({ img, message }) {
  return (
    <StyledSentMessage>
      <MessageAvatar>
        <MessageAvatarImage src={img} alt="Profile-Picture" />
      </MessageAvatar>
      <div>
        <p>{message}</p>
        <pre>sent 20min ago</pre>
      </div>
    </StyledSentMessage>
  );
}

export function RecievedMessage({ img, message }) {
  return (
    <StyledRecievedMessage>
      <div style={{ textAlign: "right" }}>
        <p>{message}</p>
        <pre>sent 20min ago</pre>
      </div>
      <MessageAvatar>
        <MessageAvatarImage src={img} alt="Profile-Picture" />
      </MessageAvatar>
    </StyledRecievedMessage>
  );
}
