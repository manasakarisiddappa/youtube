import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics, contentDetails } = info;
  const { channelTitle, thumbnails, title } = snippet;
  function convertDuration(durationString) {
    const match = durationString.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

    const hours = parseInt(match[1]) || 0;
    const minutes = parseInt(match[2]) || 0;
    const seconds = parseInt(match[3]) || 0;

    const formattedDuration = [hours, minutes, seconds]
      .map((unit) => (unit < 10 ? `0${unit}` : `${unit}`))
      .filter((unit, index) => unit !== "00" || index > 0)
      .join(":");

    return formattedDuration;
  }
  const time = convertDuration(contentDetails?.duration);

  function formatViewCount(count) {
    if (count >= 1e6) {
      return Math.floor(count / 1e6) + "M";
    } else if (count >= 1e3) {
      return Math.floor(count / 1e3) + "k";
    } else {
      return count.toString();
    }
  }

  const viewCount = formatViewCount(statistics?.viewCount);

  return (
    <div className="p-2 m-2 w-60 md:h-[269px] sm:w-80 shadow-md relative rounded-sm dark:text-white">
      <img
        alt="thumnail"
        className="relative rounded-lg"
        src={thumbnails.medium.url}
      />
      <div className="absolute bg-black text-white bg-opacity-80 p-1 rounded-md m-1 md:top-32 top-24 right-4">
        {time}
      </div>
      <ul>
        <li className="font-bold">{title.split(" ").slice(0, 5).join(" ")}</li>
        <li>{channelTitle}</li>
        <li>{viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
