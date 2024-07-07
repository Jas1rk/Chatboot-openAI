import { useState } from "react";
import "./App.css";
import { Header, Main, Message } from "./Components";
import {io} from 'socket.io-client'
import { localhostUrl } from "./Service/baseUrl";

const socket = io(localhostUrl)


function App() {
  return <>
    <Header/>
    <Main socket={socket}/>
    <Message  socket={socket}/>
  </>;
}

export default App;
