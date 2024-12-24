import axios from "axios";
import React, { useEffect, useState } from "react";
import PostCard from "../../components/PostCard/PostCard";
import { FaBars, FaSearch, FaTh } from "react-icons/fa";
import { Link } from "react-router-dom";
import moment from "moment";


const AllVolunteerNeedPosts = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  useEffect(() => {
    const fetchAllPosts = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/all-posts?search=${search}`
      );
      setPosts(data);
    };
    fetchAllPosts();
  }, [search]);

  const toggleView = () => {
    setViewMode((prevMode) => (prevMode === "grid" ? "table" : "grid"));
  };

  return (
    <div className="my-16 max-w-7xl px-2 mx-auto">
      <div className="flex items-center flex-col lg:flex-row justify-between">
        <h1 className="sm:text-2xl md:text-4xl text-green-600 dark:shadow-white/10 inline-block shadow-lg p-3 drop-shadow-xl font-bold up border-l-8 border-green-500 pl-3 mb-8">
          All Volunteer Need Posts
          <span className="badge badge-success text-white badge-lg drop-shadow-lg w-6 h-6 sm:w-8 sm:h-8  relative sm:bottom-1 md:bottom-2 ml-2">
            {posts.length}
          </span>
        </h1>
        <div className="flex items-center gap-4">
          <div className="flex justify-end text-3xl gap-3 mb-3 text-gray-600">
            <button onClick={toggleView}>
              <FaTh
                className={`${viewMode === "grid" ? "text-blue-400" : ""}`}
              />
            </button>
            <button onClick={toggleView}>
              <FaBars
                className={`${viewMode === "table" ? "text-blue-400" : ""}`}
              />
            </button>
          </div>
          <label className="input input-bordered flex items-center mb-4 gap-2">
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              className="grow"
              placeholder="Search"
            />
            <FaSearch className="text-gray-500" />
          </label>
        </div>
      </div>

      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post._id} post={post}></PostCard>
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-green-500 text-white text-base">
              <tr>
                <th>Thumbnail</th>
                <th>Title</th>
                <th>Category</th>
                <th>Deadline</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post._id} className="dark:hover:bg-[#0e141a] shadow-md dark:bg-[#141c24] hover:bg-[#eceaea]">
                  <th>
                    <img
                      className="w-52 h-32 rounded-lg object-cover"
                      src={post.thumbnail}
                      alt=""
                    />
                  </th>
                  <td className="text-xs sm:text-base md:text-lg font-semibold">
                    {post.title}
                  </td>
                  <td className="text-gray-500 font-semibold">
                    {post.category}
                  </td>
                  <td className="text-gray-500">
                    {moment(post.deadline).format("DD/MM/YYYY")}
                  </td>
                  <td>
                    <Link
                      className="btn border-none bg-green-500 text-white hover:bg-green-600 transition-colors"
                      to={`/volunteer-need-post-details/${post._id}`}
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllVolunteerNeedPosts;
