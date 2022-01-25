import { styled } from "@stitches/react";
import {
  Root,
  Trigger,
  Content,
  Label,
  Item,
  Arrow,
  Separator,
} from "@radix-ui/react-dropdown-menu";
import { Root as Avatar, Image as AvatarImage } from "@radix-ui/react-avatar";

// Stiches styles

const StyledHeader = styled("div", {
  padding: "10px 40px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: "1px solid #1c1c1f",
});
const Logo = styled("h3", {});

const ItemStyle = {
  //   all: "unset",
  fontSize: 13,
  fontFamily: "Roboto",
  lineHeight: 1,
  borderRadius: 3,
  display: "flex",
  alignItems: "center",
  height: 25,
  padding: "0 5px",
  position: "relative",
  paddingLeft: 25,
  userSelect: "none",
  "&:focus": {
    backgroundColor: "Blue",
    color: "white",
    cursor: "pointer",
  },
};

const DDTrigger = styled(Trigger, {
  outline: "none",
  border: "3px solid #46a757",
  borderRadius: "100%",
  cursor: "pointer",
});

const DDArrow = styled(Arrow, {
  fill: "White",
});

const UserAvatar = styled(Avatar, {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle",
  overflow: "hidden",
  userSelect: "none",
  width: 30,
  height: 30,
  borderRadius: "100%",
});

const StyledAvatarImage = styled(AvatarImage, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit",
});

const DDContent = styled(Content, {
  minWidth: 170,
  backgroundColor: "white",
  borderRadius: 6,
  padding: 5,
  border: "1px solid lightGray",
});

const DDLabel = styled(Label, {
  ...ItemStyle,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  height: "fit-content",
  lineHeight: "20px",
  margin: "2px 0px",
});

const DDItem = styled(Item, { ...ItemStyle });

const DDSeparator = styled(Separator, {
  height: 1,
  backgroundColor: "lightGray",
  margin: "5px -5px",
});

export default function Header() {
  return (
    <StyledHeader>
      <Logo className="logo">ChatRoom</Logo>

      {/* user dropdonw */}
      <Root>
        <DDTrigger>
          <UserAvatar>
            <StyledAvatarImage
              src="https://images.unsplash.com/photo-1629467057571-42d22d8f0cbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80"
              alt="Profile-Picture"
            />
          </UserAvatar>
        </DDTrigger>
        <DDContent>
          <DDArrow offset={10} />
          <DDLabel>
            Logged in as <b>WaelNalouti</b>
          </DDLabel>
          <DDSeparator />
          <DDItem>Profile</DDItem>
          <DDItem>Account settings</DDItem>
          <DDItem>Help</DDItem>
          <DDSeparator />
          <DDItem>Logout</DDItem>
        </DDContent>
      </Root>

      {/* navigations */}
    </StyledHeader>
  );
}
