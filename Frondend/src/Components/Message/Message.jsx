import React from "react";
import "./Message.css";

const Message = () => {
  return (
    <div className="message-container">
      <form className="form-container">
        <input type="text" placeholder="Type here" className="input-section" />
        <button>send</button>
      </form>
    </div>
  );
};

export default Message;
