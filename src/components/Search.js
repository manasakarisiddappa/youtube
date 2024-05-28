import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addVideos } from "../utils/videoSlice";
import { generateSearchURL } from "../utils/constants";
import { Link } from "react-router-dom";
import SearchCard from "./SearchCard";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const dispatch = useDispatch();
  const [videos, setVideos] = useState([]);
  const renderVideos = useSelector((store) => store.video.videos);
  const searchQueryHandler = async () => {
    try {
      const videoData = await fetch(generateSearchURL(query));
      const json = await videoData.json();
      setVideos(json.items);
      dispatch(addVideos(json.items));
    } catch (error) {}
  };
  useEffect(() => {
    searchQueryHandler();
  }, []);
  return (
    <div className="flex flex-wrap w-10/12 dark:bg-gray-900 ml-5 md:ml-24">
      {Array.isArray(renderVideos) &&
        renderVideos.map((video) => {
          if (video && video?.id) {
            return (
              <Link key={video?.id} to={"/watch?v=" + video?.id?.videoId}>
                <SearchCard info={video} />
              </Link>
            );
          }
          return null;
        })}
    </div>
  );
};

export default Search;
