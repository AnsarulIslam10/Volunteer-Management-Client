import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
const PostCard = ({ post }) => {
  const { _id, thumbnail, title, category, deadline, volunteersNumber } = post;
  return (
    <div className="bg-white h-[100%] hover:scale-105 transition-all duration-300 flex flex-col justify-center dark:bg-[#1a242e] rounded-lg shadow-lg overflow-hidden">
      <img
        className="w-full h-48 rounded-t-lg object-cover"
        src={thumbnail}
        alt=""
      />
      <div className="flex-1 flex-col justify-center items-center p-4">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <p className="text-sm text-gray-500 dark:text-[#e0e0e0] mb-2">
          Category:{" "}
          <span className="text-gray-700 dark:text-[#c0bebe] font-semibold">
            {category}
          </span>
        </p>
        <p className="text-sm text-gray-500 dark:text-[#e0e0e0] mb-2">
          Deadline:{" "}
          <span className="text-gray-500 dark:text-[#c0bebe] font-semibold">
            {moment(deadline).format("DD/MM/YYYY")}
          </span>
        </p>
        {volunteersNumber <= 0 ? (
          <p className="text-sm text-green-500 mb-4">Recruitment Closed</p>
        ) : (
          <p className="text-sm dark:text-[#e0e0e0] text-gray-500 mb-4">
            Vlounteer Needs:{" "}
            <span className="text-green-500 font-semibold">
              {volunteersNumber}
            </span>
          </p>
        )}
      </div>
      <div className="p-4">
        <Link
          className="btn border-none bg-green-500 text-white hover:bg-green-600 transition-colors"
          to={`/volunteer-need-post-details/${_id}`}
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
