import React, { useEffect } from "react";
import "./Main.css";
import { useDispatch, useSelector } from "react-redux";
import { getChats } from "../../Redux/chatThunk";

const Main = ({ socket }) => {
  const dispatch = useDispatch();
  const chats = useSelector((state) => state.chat.chats);

  useEffect(() => {
    dispatch(getChats());
    socket.on("message", (message) => {
      dispatch(getChats());
    });
    return () => {
      socket.off("message");
    };
  }, [dispatch,socket]);

  return (
    <div className="main-container">
      <div className="child-container">
        {chats.map((chat, index) => (
          <h4 key={index}>
            <strong>{chat.type === "user" ? "User" : "Bot"}</strong>
            {chat.text}
          </h4>
        ))}
      </div>
    </div>
  );
};

export default Main;
