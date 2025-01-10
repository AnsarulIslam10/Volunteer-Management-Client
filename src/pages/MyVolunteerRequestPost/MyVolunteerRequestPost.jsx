import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Loading from "../Loading/Loading";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { FcCancel } from "react-icons/fc";
import Swal from "sweetalert2";

const MyVolunteerRequestPost = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [myRequestPosts, setMyRequestPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchMyRequestPosts = async () => {
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
    fetchMyRequestPosts();
  }, [user]);

  if (loading) {
    return <Loading></Loading>;
  }
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
  return (
    <div className="sm:my-16 my-8 max-w-[1400px] px-2 mx-auto">
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

export default MyVolunteerRequestPost;
