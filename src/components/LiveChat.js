import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { getRandomName } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatData = useSelector((store) => store.chat.messages);
  const [liveChat, setLiveChat] = useState("");
  const clickHandler = (event) => {
    setLiveChat(event.target.value);
  };
  const submitHandler = () => {
    dispatch(
      addMessage({
        name: "Manasa K",
        message: liveChat,
      })
    );
    setLiveChat("");
  };
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: getRandomName(),
          message: "This is live chat",
        })
      );
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <div className="w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-hidden relative dark:bg-gray-900 dark:text-white">
        <div className="sticky top-0 w-24  justify-items-center font-bold  z-10 bg-white rounded-lg p-1  dark:bg-gray-900 dark:text-white ">
          Live chat
        </div>
        <div className="overflow-y-scroll h-full flex flex-col-reverse ">
          {chatData.map((data, index) => (
            <ChatMessage key={index} name={data.name} message={data.message} />
          ))}
        </div>
      </div>
      <div className="w-full p-2 ml-2 border border-black flex rounded-lg">
        <input
          className="w-96  dark:bg-gray-900 dark:text-white"
          type="text"
          placeholder="Chat... "
          value={liveChat}
          onChange={clickHandler}
        ></input>
        <button
          className="px-2 mx-2 bg-black text-white rounded-full"
          onClick={submitHandler}
        >
          Send
        </button>
      </div>
    </>
  );
};

export default LiveChat;
