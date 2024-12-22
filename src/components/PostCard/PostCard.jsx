import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns'
const PostCard = ({post}) => {
    const {_id, thumbnail, title, category, deadline } = post;
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            className="w-full h-48 rounded-t-lg object-cover"
            src={thumbnail}
            alt=""
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p className="text-sm text-gray-500 mb-2">
              Category:{" "}
              <span className="text-gray-700 font-semibold">{category}</span>
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Deadline:{" "}
              <span className="text-gray-500 font-semibold">{format(new Date(deadline), 'P')}</span>
            </p>

            <Link
              className="btn bg-green-500 text-white hover:bg-green-600 transition-colors"
              to={`/volunteer-need-post-details/${_id}`}
            >
              View Details
            </Link>
          </div>
        </div>

    );
};

export default PostCard;