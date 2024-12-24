import React, { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const UpdateMyPost = () => {
  const axiosSecure = useAxiosSecure()
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [post, setPost] = useState([])
  const navigate = useNavigate()
  const [startDate, setStartDate] = useState(new Date());
  useEffect(() => {
    fetchMyPost()
  }, [id]);
  const fetchMyPost = async () => {
    const { data } = await axiosSecure.get(
      `/update-my-post/${id}`
    );
    setPost(data)
    setStartDate(new Date(data.deadline))
  };

  const handleUpdate = async(e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const thumbnail = form.thumbnail.value;
    const category = form.category.value;
    const location = form.location.value;
    const volunteersNumber = parseInt(form.volunteersNumber.value);
    const deadline = startDate;
    const organizerName = user?.displayName;
    const organizerEmail = user?.email;
    const description = form.description.value;

    const formData = {
        title,
        thumbnail,
        category,
        location,
        volunteersNumber,
        deadline,
        organizer: {
            organizerName,
            organizerEmail
        },
        description,
      };

      try {
        await axiosSecure.put(
          `/update-my-post/${id}`,
          formData
        )
        form.reset()
        toast.success('Post Updated Successfully!!!')
        navigate('/manage-my-posts')
      } catch (err) {
        toast.error(err.message)
      }
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10">
      <div className="shadow-xl dark:bg-[#1a242e] rounded-lg p-8 w-full max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold dark:text-[#e0e0e0] text-gray-700 mb-2 font-ranch">
            Update Volunteer Need Post
          </h2>
          <p className="text-gray-500 max-w-md dark:text-[#e0e0e0] mx-auto">Update your post</p>
        </div>

        {/* form */}
        <form onSubmit={handleUpdate}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="label">
                <span className="label-text dark:text-[#e0e0e0]">Post Title</span>
              </label>
              <input
                type="text"
                name="title"
                defaultValue={post?.title}
                placeholder="Enter post title"
                className="input input-bordered text-black w-full"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text dark:text-[#e0e0e0]">Thumbnail</span>
              </label>
              <input
                type="url"
                name="thumbnail"
                defaultValue={post?.thumbnail}
                placeholder="Enter thumbnail url"
                className="input input-bordered text-black w-full"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text dark:text-[#e0e0e0]">Category</span>
              </label>
              <input
                type="text"
                defaultValue={post?.category}
                name="category"
                placeholder="Enter category"
                className="input input-bordered text-black w-full"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text dark:text-[#e0e0e0]">Location</span>
              </label>
              <input
                type="text"
                name="location"
                defaultValue={post?.location}
                placeholder="Enter location"
                className="input input-bordered text-black w-full"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text dark:text-[#e0e0e0]">No. of volunteers needed</span>
              </label>
              <input
                type="number"
                name="volunteersNumber"
                defaultValue={post?.volunteersNumber}
                placeholder="Enter volunteer number"
                className="input input-bordered text-black w-full"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text dark:text-[#e0e0e0]">Deadline</span>
              </label>
              <div className="w-full">
                <DatePicker
                  className="border text-black p-2 w-full rounded-md cursor-pointer"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>
            <div>
              <label className="label">
                <span className="label-text dark:text-[#e0e0e0]">Organizer Name</span>
              </label>
              <input
                type="text"
                name="username"
                placeholder="Your Name"
                defaultValue={user.displayName}
                readOnly
                className="input input-bordered text-black w-full"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text dark:text-[#e0e0e0]">Organizer Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                defaultValue={user.email}
                readOnly
                className="input input-bordered text-black w-full"
                required
              />
            </div>
          </div>
          <div>
            <label className="label">
              <span className="label-text dark:text-[#e0e0e0]">Description</span>
            </label>
            <textarea
              name="description"
              className="textarea text-black w-full textarea-bordered"
              placeholder="Write a description"
              defaultValue={post?.description}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-green-500 text-lg text-white w-full py-3 rounded-md hover:bg-green-600 transition"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateMyPost;
