import React from "react";
import { youtubeButtons } from "../utils/constants";
import Button from "./Button";
const ButtonList = () => {
  return (
    <div className="flex-col sm:flex sm:flex-row  ">
      {youtubeButtons.map((button, index) => {
        return <Button key={index} name={button} />;
      })}
    </div>
  );
};

export default ButtonList;
