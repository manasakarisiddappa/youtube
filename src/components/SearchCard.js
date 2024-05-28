import React from "react";

const SearchCard = ({ info }) => {
  const { snippet } = info;
  const { channelTitle, thumbnails, title } = snippet;
  return (
    <div className="p-2 m-2 w-80  shadow-md relative rounded-sm dark:text-white">
      <img
        alt="thumnail"
        className="relative rounded-lg w-[304px] h-[171px] "
        src={thumbnails.medium.url}
      />
      <ul>
        <li className="font-bold">{title}</li>
        <li>{channelTitle}</li>
      </ul>
    </div>
  );
};

export default SearchCard;
