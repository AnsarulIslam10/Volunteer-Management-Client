import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const VolunteerNeedsNow = () => {
  return (
    <div className="my-24">
      <h1 className="text-4xl text-green-600 inline-block shadow-lg p-3 drop-shadow-xl font-bold up border-l-8 border-green-500 pl-3 mb-8">
        Volunteer Needs Now
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* cards */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            className="w-full h-48 rounded-t-lg object-cover"
            src="https://i.ibb.co.com/HYyx1bf/thumbnail.jpg"
            alt=""
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Post Title</h2>
            <p className="text-sm text-gray-500 mb-2">
              Category:{" "}
              <span className="text-gray-700 font-semibold">Education</span>
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Deadline:{" "}
              <span className="text-gray-500 font-semibold">25-12-2024</span>
            </p>

            <Link
              className="btn bg-green-500 text-white hover:bg-green-600 transition-colors"
              to={"/volunteer-need-post-details"}
            >
              View Details
            </Link>
          </div>
        </div>

        {/* Demo cards */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            className="w-full h-48 rounded-t-lg object-cover"
            src="https://i.ibb.co.com/HYyx1bf/thumbnail.jpg"
            alt=""
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Post Title</h2>
            <p className="text-sm text-gray-500 mb-2">
              Category:{" "}
              <span className="text-gray-700 font-semibold">Education</span>
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Deadline:{" "}
              <span className="text-gray-500 font-semibold">25-12-2024</span>
            </p>

            <Link
              className="btn bg-green-500 text-white hover:bg-green-600 transition-colors"
              to={"/volunteer-need-post-details"}
            >
              View Details
            </Link>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            className="w-full h-48 rounded-t-lg object-cover"
            src="https://i.ibb.co.com/HYyx1bf/thumbnail.jpg"
            alt=""
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Post Title</h2>
            <p className="text-sm text-gray-500 mb-2">
              Category:{" "}
              <span className="text-gray-700 font-semibold">Education</span>
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Deadline:{" "}
              <span className="text-gray-500 font-semibold">25-12-2024</span>
            </p>

            <Link
              className="btn bg-green-500 text-white hover:bg-green-600 transition-colors"
              to={"/volunteer-need-post-details"}
            >
              View Details
            </Link>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            className="w-full h-48 rounded-t-lg object-cover"
            src="https://i.ibb.co.com/HYyx1bf/thumbnail.jpg"
            alt=""
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Post Title</h2>
            <p className="text-sm text-gray-500 mb-2">
              Category:{" "}
              <span className="text-gray-700 font-semibold">Education</span>
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Deadline:{" "}
              <span className="text-gray-500 font-semibold">25-12-2024</span>
            </p>

            <Link
              className="btn bg-green-500 text-white hover:bg-green-600 transition-colors"
              to={"/volunteer-need-post-details"}
            >
              View Details
            </Link>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            className="w-full h-48 rounded-t-lg object-cover"
            src="https://i.ibb.co.com/HYyx1bf/thumbnail.jpg"
            alt=""
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Post Title</h2>
            <p className="text-sm text-gray-500 mb-2">
              Category:{" "}
              <span className="text-gray-700 font-semibold">Education</span>
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Deadline:{" "}
              <span className="text-gray-500 font-semibold">25-12-2024</span>
            </p>

            <Link
              className="btn bg-green-500 text-white hover:bg-green-600 transition-colors"
              to={"/volunteer-need-post-details"}
            >
              View Details
            </Link>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            className="w-full h-48 rounded-t-lg object-cover"
            src="https://i.ibb.co.com/HYyx1bf/thumbnail.jpg"
            alt=""
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Post Title</h2>
            <p className="text-sm text-gray-500 mb-2">
              Category:{" "}
              <span className="text-gray-700 font-semibold">Education</span>
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Deadline:{" "}
              <span className="text-gray-500 font-semibold">25-12-2024</span>
            </p>

            <Link
              className="btn bg-green-500 text-white hover:bg-green-600 transition-colors"
              to={"/volunteer-need-post-details"}
            >
              View Details
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        <Link to={'/all-volunteer-need-post'} className="gap-2 hover:gap-4 transition-all btn btn-ghost px-1 sm:px-3 md:btn-md text-green-600 mt-2 rounded-none hover:bg-transparent hover:text-green-600 !text-2xl ">See all button <FaArrowRight/></Link>
      </div>
    </div>
  );
};

export default VolunteerNeedsNow;
