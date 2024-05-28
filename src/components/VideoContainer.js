import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_API_KEY } from "../utils/constants";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addRandomVideos, addVideos, toggleIsData } from "../utils/videoSlice";
import { nanoid } from "nanoid";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const videos = useSelector((store) => store.video.randomVideos);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(YOUTUBE_API_KEY + `&page=${page}`);
      const data = await response.json();
      const newVideos = data.items || [];
      dispatch(addRandomVideos([...videos, ...newVideos]));
      setPage(page + 1);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 20 && !loading) {
      fetchData();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap ">
      {videos?.map((video) => {
        if (video && video?.id) {
          return (
            <Link key={nanoid()} to={"/watch?v=" + video.id}>
              <div className="video-card">
                <VideoCard info={video} />
              </div>
            </Link>
          );
        }
        return null;
      })}
    </div>
  );
};

export default VideoContainer;
