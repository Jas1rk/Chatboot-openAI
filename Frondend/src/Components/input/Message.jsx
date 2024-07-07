import React, { useState } from "react";
import "./Message.css";
import { sendChat } from "../../Redux/chatThunk";
import { useDispatch } from "react-redux";

const Message = ({ socket }) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(sendChat(input));
    setInput("");
    socket.emit("message", input);
  };
  console.log("this==", input);
  
  return (
    <div className="message-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type here"
          className="input-section"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button>send</button>
      </form>
    </div>
  );
};

export default Message;
