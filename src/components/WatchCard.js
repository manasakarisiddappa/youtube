import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchCard = () => {
  let [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex flex-col w-full">
      <div className="px-5 flex w-[400px] md:w-full">
        <div>
          <iframe
            width="350"
            height="400"
            className="md:w-[800px] md:h-[500px]"
            src={"https://www.youtube.com/embed/" + id + "?autoplay=1"}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-[400px] hidden md:block">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchCard;
