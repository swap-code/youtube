import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage/ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../../../../utils/chatSlice";
import {
  makeRandomMessage,
  generateRandomName,
} from "../../../../../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [liveChatInput, setLiveChatInput] = useState([]);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column-reverse",
          width: "100%",
          borderRadius: "20px",
          height: "500px",
          marginLeft: "20px",
          padding: "20px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          overflowY: "scroll",
          backgroundColor: "#f9f9f9",
        }}
      >
        {chatMessages.map((chatMessage, i) => (
          <ChatMessage
            key={i}
            name={chatMessage.name}
            message={chatMessage.message}
          />
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({ name: "swapnil", message: liveChatInput }));
          setLiveChatInput("");
        }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "10px 20px",
          backgroundColor: "#fff",
          borderTop: "1px solid #ddd",
          borderRadius: "0 0 20px 20px",
          boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <input
          style={{
            flex: 1,
            padding: "10px 14px",
            fontSize: "12px",
            border: "1px solid #ccc",
            borderRadius: "20px",
            outline: "none",
            transition: "border-color 0.3s ease, box-shadow 0.3s ease",
          }}
          value={liveChatInput}
          onChange={(e) => setLiveChatInput(e.target.value)}
          type="text"
          placeholder="Say something..."
        />
      </form>
    </div>
  );
};

export default LiveChat;
