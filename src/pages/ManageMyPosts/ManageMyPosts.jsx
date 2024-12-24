import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Loading from "../Loading/Loading";
import moment from "moment";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { FcCancel } from "react-icons/fc";
import { toast } from "react-toastify";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ManageMyPosts = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [myPosts, setMyPosts] = useState([]);
  const [myRequestPosts, setMyRequestPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyPosts = async () => {
      try {
        setLoading(true);
        const { data } = await axiosSecure.get(
          `/my-posts?email=${user?.email}`
        );
        setMyPosts(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMyPosts();
  }, [user]);

  useEffect(() => {
    const fetchMyPosts = async () => {
      try {
        setLoading(true);
        const { data } = await axiosSecure.get(
          `/my-request-posts?email=${user?.email}`
        );
        setMyRequestPosts(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMyPosts();
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data } = await axiosSecure.delete(`/my-post/${id}`);
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your Post has been deleted.",
            icon: "success",
          });
          const remainingPosts = myPosts.filter((post) => post._id !== id);
          setMyPosts(remainingPosts);
        }
      }
    });
  };
  const handleCancel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data } = await axiosSecure.delete(`/my-request-post/${id}`);
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your Post has been deleted.",
            icon: "success",
          });
          const remainingRequestPosts = myRequestPosts.filter(
            (post) => post._id !== id
          );
          setMyRequestPosts(remainingRequestPosts);
        }
      }
    });
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="my-16 max-w-7xl px-2 mx-auto">
      {!myPosts || myPosts.length === 0 ? (
        <div className="min-h-[60vh]">
          <h1 className="text-4xl text-green-600 dark:shadow-white/10 inline-block shadow-lg p-3 drop-shadow-xl font-bold up border-l-8 border-green-500 pl-3 mb-8">
            My Posts
          </h1>
          <p className="text-3xl font-semibold text-center text-red-400">
            No Post found.
          </p>
        </div>
      ) : (
        <div className="mb-16">
          <div className="flex items-center flex-col md:flex-row justify-between">
            <h1 className="text-4xl text-green-600 dark:shadow-white/10 inline-block shadow-lg p-3 drop-shadow-xl font-bold up border-l-8 border-green-500 pl-3 mb-8">
              My Posts
              <span className="badge badge-success text-white badge-lg drop-shadow-lg w-10 h-10 relative bottom-2 ml-2">
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
                    <td className="text-2xl space-x-3">
                      <Link
                        to={`/update-my-post/${post._id}`}
                        className="text-green-500 inline-block hover:scale-125 transition-all duration-300"
                      >
                        <FaEdit />
                      </Link>
                      <button
                        onClick={() => handleDelete(post._id)}
                        className="text-red-600 hover:text-red-700 hover:scale-125 transition-all duration-300"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <div className="divider mb-16"></div>
      {/* My post request */}
      {!myRequestPosts || myRequestPosts.length === 0 ? (
        <div className="min-h-[60vh]">
          <h1 className="text-4xl text-green-600 dark:shadow-white/10 inline-block shadow-lg p-3 drop-shadow-xl font-bold up border-l-8 border-green-500 pl-3 mb-8">
            My Volunteer Request Post
          </h1>
          <p className="text-3xl font-semibold text-center text-red-400">
            No Post found.
          </p>
        </div>
      ) : (
        <div>
          <div className="flex items-center flex-col md:flex-row justify-between">
            <h1 className="text-4xl text-green-600 dark:shadow-white/10 inline-block shadow-lg p-3 drop-shadow-xl font-bold up border-l-8 border-green-500 pl-3 mb-8">
              My Volunteer Request Post
              <span className="badge badge-success text-white badge-lg drop-shadow-lg w-10 h-10 relative bottom-2 ml-2">
                {myRequestPosts.length}
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
                {myRequestPosts.map((post) => (
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
                    <td className="text-2xl space-x-3">
                      <button
                        onClick={() => handleCancel(post._id)}
                        className="text-red-600 hover:text-red-700 hover:scale-125 transition-all duration-300"
                      >
                        <FcCancel />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageMyPosts;
