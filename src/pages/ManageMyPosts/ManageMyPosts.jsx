import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Loading from "../Loading/Loading";
import moment from "moment";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageMyPosts = () => {
  const { user } = useContext(AuthContext);
  const [myPosts, setMyPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchMyPosts = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/my-posts?email=${user?.email}`
        );
        setMyPosts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMyPosts();
  }, [user]);

  console.log(myPosts);


  if (loading) {
    return <Loading></Loading>;
  }

  if (!myPosts || myPosts.length === 0) {
    return (
      <div className="flex min-h-[60vh] justify-center items-center">
        <p className="text-3xl font-semibold text-red-400">No Post found.</p>
      </div>
    );
  }

  return (
    <div className="my-16">
      <div className="flex items-center flex-col md:flex-row justify-between">
        <h1 className="text-4xl text-green-600 inline-block shadow-lg p-3 drop-shadow-xl font-bold up border-l-8 border-green-500 pl-3 mb-8">
          My Posts
          <span className="badge badge-success text-white badge-lg relative bottom-7 -right-7 drop-shadow-lg w-10 h-10">
            {myPosts.length}
          </span>
        </h1>
      </div>
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
            {myPosts.map((post) => (
              <tr key={post._id} className="hover shadow-md">
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
                <td className="text-gray-500 font-semibold">{post.category}</td>
                <td className="text-gray-500">
                  {moment(post.deadline).format("DD/MM/YYYY")}
                </td>
                <td className="text-2xl space-x-3">
                  <button className="text-green-500 hover:scale-125 transition-all duration-300">
                    <FaEdit />
                  </button>
                  <button className="text-red-600 hover:text-red-700 hover:scale-125 transition-all duration-300">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageMyPosts;
