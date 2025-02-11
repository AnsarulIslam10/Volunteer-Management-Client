import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { FaCalendarAlt } from "react-icons/fa";
const PostCard = ({ post }) => {
  const {
    _id,
    thumbnail,
    title,
    category,
    deadline,
    volunteersNumber,
    description,
  } = post;
  return (
    <div className="bg-white h-[100%] flex flex-col justify-center dark:bg-[#1a242e] rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <img
          className="w-full h-44 rounded-t-lg object-cover"
          src={thumbnail}
          alt=""
        />
        <p className="absolute bottom-2 right-2 badge bg-green-400  border-none">
          {category}
        </p>
      </div>
      <div className="flex-1 flex-col justify-center items-center p-4">
        <h2 className="text-xl font-semibold mb-2 cursor-pointer" title={title}>
          {title.length > 22 ? `${title.slice(0, 22)}...` : title}
        </h2>
        <p className="text-sm font-semibold dark:text-[#f5f4f4] mb-1 flex items-center gap-1">
          <FaCalendarAlt/>{" "}
          <span className="dark:text-white font-normal">
            {moment(deadline).format("DD/MM/YYYY")}
          </span>
        </p>
        {volunteersNumber <= 0 ? (
          <p className="text-sm text-green-500 mb-4">Recruitment Closed</p>
        ) : (
          <p className="text-sm  font-semibold dark:text-[#f5f4f4] mb-1">
            Vlounteer Needs:{" "}
            <span className="text-green-500 font-semibold">
              {volunteersNumber}
            </span>
          </p>
        )}
        <p className="text-gray-500 dark:text-[#cfcdcd]">
          {description.slice(0, 50)}...
        </p>
      </div>
      <div className="p-4">
        <Link
          className="btn border-none bg-green-500 text-white hover:bg-green-600 transition-colors duration-300"
          to={`/volunteer-need-post-details/${_id}`}
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
