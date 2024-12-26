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
import { Helmet } from "react-helmet-async";

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
      cancelButtonText: "No",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Cancel Request!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data } = await axiosSecure.delete(`/my-request-post/${id}`);
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Request Cancelled",
            text: "Your volunteer request has beed cancelled",
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
    <div className="sm:my-16 my-8 max-w-7xl px-2 mx-auto">
      <Helmet>
        <title>Volunary | Manage My Posts</title>
      </Helmet>
      {!myPosts || myPosts.length === 0 ? (
        <div className="min-h-[60vh]">
          <h1 className="sm:text-2xl md:text-4xl text-green-600 dark:shadow-white/10 inline-block font-bold up border-l-4 border-green-500 pl-2 mb-8">
            My Volunteer Need Post
          </h1>
          <p className="text-3xl font-semibold text-center text-red-400">
            No Post found.
          </p>
        </div>
      ) : (
        <div className="mb-16">
          <div>
            <h1 className="sm:text-2xl md:text-4xl text-green-600 dark:shadow-white/10 inline-block font-bold up border-l-4 border-green-500 pl-2 mb-8">
              My Volunteer Need Post
              <span className="badge badge-success text-white badge-lg drop-shadow-lg w-6 h-6 sm:w-8 sm:h-8  relative sm:bottom-1 md:bottom-2 ml-2">
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
                    <td className="space-x-3 md:space-x-3">
                      <Link
                        to={`/update-my-post/${post._id}`}
                        className="text-green-500 text-2xl inline-block hover:scale-125 transition-all duration-300"
                      >
                        <FaEdit />
                      </Link>
                      <button
                        onClick={() => handleDelete(post._id)}
                        className="text-red-600 text-2xl hover:text-red-700 hover:scale-125 transition-all duration-300"
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

      {/* My post request */}
      {!myRequestPosts || myRequestPosts.length === 0 ? (
        <div className="min-h-[60vh]">
          <h1 className="sm:text-2xl md:text-4xl text-green-600 dark:shadow-white/10 inline-block font-bold up border-l-4 border-green-500 pl-2 mb-8">
            My Volunteer Request Post
          </h1>
          <p className="text-3xl font-semibold text-center text-red-400">
            No Post found.
          </p>
        </div>
      ) : (
        <div>
          <div>
            <h1 className="sm:text-2xl md:text-4xl text-green-600 dark:shadow-white/10 inline-block font-bold up border-l-4 border-green-500 pl-2 mb-8">
              My Volunteer Request Post
              <span className="badge badge-success text-white badge-lg drop-shadow-lg w-6 h-6 sm:w-8 sm:h-8  relative sm:bottom-1 md:bottom-2 ml-2">
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
                  <th>Status</th>
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
                    <td className="text-green-500">{post.status}</td>
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
