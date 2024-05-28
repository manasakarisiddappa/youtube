import React, { useEffect } from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useDispatch, useSelector } from "react-redux";
import Shimmer from "./Shimmer";
import { addRandomVideos, toggleIsData } from "../utils/videoSlice";
import { YOUTUBE_API_KEY } from "../utils/constants";

const MainContainer = () => {
  const isData = useSelector((store) => store.video.isData);
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(YOUTUBE_API_KEY);
    const json = await data.json();
    dispatch(addRandomVideos(json.items));
    dispatch(toggleIsData());
  };
  return (
    <div className="w-10/12 dark:bg-gray-900 sm:ml-24 justify-between flex md:flex-col">
      <ButtonList />
      {isData ? <VideoContainer /> : <Shimmer />}
    </div>
  );
};

export default MainContainer;
