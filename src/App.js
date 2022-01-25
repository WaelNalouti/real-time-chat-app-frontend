import React from "react";
import "./App.css";
import Chat from "./components/Chat/Chat";
import Header from "./components/Header/Header";
import { styled } from "@stitches/react";

const Main = styled("div", {
  width: "100%",
  height: "calc(100vh - 61px)",
  paddingBottom: "20px",
  display: "flex",
  flexDirection: "coloumn",
  alignItems: "flex-end",
  justifyContent: "center",
});

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Chat />
      </Main>
    </div>
  );
}

export default App;
