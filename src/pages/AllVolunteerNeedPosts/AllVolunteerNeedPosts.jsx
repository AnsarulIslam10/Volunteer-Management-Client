import axios from "axios";
import React, { useEffect, useState } from "react";
import PostCard from "../../components/PostCard/PostCard";
import { FaBars, FaSearch, FaTh } from "react-icons/fa";
import { Link } from "react-router-dom";
import moment from "moment";
import { Helmet } from "react-helmet-async";
import { Slide, Zoom } from "react-awesome-reveal";

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
      <Helmet>
        <title>Volunary | All Volunteer Need Posts</title>
      </Helmet>
      <div className="flex items-center flex-col lg:flex-row justify-between">
        <Slide triggerOnce>
          <h1 className="sm:text-2xl md:text-4xl text-green-600 dark:shadow-white/10 inline-block font-bold mb-8">
            All Volunteer Need Posts
            <span className="badge badge-success text-white badge-lg drop-shadow-lg w-6 h-6 sm:w-8 sm:h-8  relative sm:bottom-1 md:bottom-2 ml-2">
              {posts.length}
            </span>
          </h1>
        </Slide>
        <Slide triggerOnce direction="right">
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
            <label className="input input-bordered rounded-full input-sm sm:input-md flex items-center mb-4 gap-2">
              <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                className="grow text-black"
                placeholder="Search"
              />
              <FaSearch className="text-gray-500" />
            </label>
          </div>
        </Slide>
      </div>

      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <Zoom key={post._id} triggerOnce>
              <PostCard post={post}></PostCard>
            </Zoom>
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
                <th>Volunteer Need</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr
                  key={post._id}
                  className="dark:hover:bg-[#0e141a] shadow-md dark:bg-[#141c24] hover:bg-[#eceaea]"
                >
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
                  <td className="text-green-500 text-center">
                    {post.volunteersNumber <= 0 ? (
                      <p className="text-sm text-green-500 mb-4">
                        Recruitment Closed
                      </p>
                    ) : (
                      <p className="text-sm dark:text-[#e0e0e0] text-gray-500 mb-4">
                        <span className="text-green-500 font-semibold">
                          {post.volunteersNumber}
                        </span>
                      </p>
                    )}
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
