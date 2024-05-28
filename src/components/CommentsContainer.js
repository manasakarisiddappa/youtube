import React, { useState } from "react";
import { commentsData } from "../utils/constants";
import Comment from "./Comment";

const CommentList = ({ comments, setData, completeData }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} completeData={completeData} setData={setData} />
      {comment.replies.length > 0 && (
        <div className="pl-5 light:border light:border-l-black ml-5">
          <CommentList
            comments={comment.replies}
            completeData={completeData}
            setData={setData}
          />
        </div>
      )}
    </div>
  ));
};

const CommentsContainer = () => {
  const [data, setData] = useState(commentsData);

  return (
    <div className="m-5 p-2 w-[800px]">
      <h1 className="font-bold text-2xl dark:text-white">Comments:</h1>
      <CommentList comments={data} completeData={data} setData={setData} />
    </div>
  );
};

export default CommentsContainer;
