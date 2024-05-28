import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center gap-3 shadow-sm p-1">
      <img
        src="https://tse1.mm.bing.net/th?id=OIP.n5T5keacN9hUAxh5NVxvKAHaHa&pid=Api&P=0&h=180"
        alt="user-icon"
        className="h-8 w-8 rounded-full"
      ></img>
      <p className="font-bold">{name}</p>
      <p>{message}</p>
    </div>
  );
};

export default ChatMessage;
