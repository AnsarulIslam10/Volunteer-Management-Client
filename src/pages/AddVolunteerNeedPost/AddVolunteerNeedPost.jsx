import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
const AddVolunteerNeedPost = () => {
  const axiosSecure = useAxiosSecure();
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
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

    const newPost = {
      title,
      thumbnail,
      category,
      location,
      volunteersNumber,
      deadline,
      organizer: {
        organizerName,
        organizerEmail,
      },
      description,
    };

    try {
      await axiosSecure.post(`/add-post`, newPost);
      form.reset();
      toast.success("Post Added Successfully");
      navigate('/manage-my-posts')
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen max-w-[1400px] mx-auto flex flex-col items-center justify-center py-10 px-2">
      <Helmet>
        <title>Volunary | Add Volunteer Need Post</title>
      </Helmet>
      <div className="shadow-xl dark:bg-[#1a242e] dark:text-white rounded-lg p-4 sm:p-6 md:p-8 w-full max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="sm:text-2xl text-xl md:text-4xl font-bold text-gray-700 dark:text-[#e0e0e0] mb-2">
            Add Volunteer Need Post
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm dark:text-[#e0e0e0] max-w-md mx-auto">
            Fill in the form below to add a new post.
          </p>
        </div>

        {/* form */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="label">
                <span className="label-text dark:text-[#e0e0e0]">
                  Post Title
                </span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Enter post title"
                className="input text-black input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text dark:text-[#e0e0e0]">
                  Thumbnail
                </span>
              </label>
              <input
                type="url"
                name="thumbnail"
                placeholder="Enter thumbnail url"
                className="input text-black input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text dark:text-[#e0e0e0]">Category</span>
              </label>
              <select
                className="select select-bordered text-black select-info w-full focus:outline-none"
                name="category"
                id=""
              >
                <option value="Health">Health</option>
                <option value="Social Welfare">Social Welfare</option>
                <option value="Environment">Environment</option>
                <option value="Education">Education</option>
                <option value="Disaster Relief">Disaster Relief</option>
                <option value="Sports">Sports</option>
                <option value="Animal Welfare">Animal Welfare</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="label">
                <span className="label-text dark:text-[#e0e0e0]">Location</span>
              </label>
              <input
                type="text"
                name="location"
                placeholder="Enter location"
                className="input text-black input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text dark:text-[#e0e0e0]">
                  No. of volunteers needed
                </span>
              </label>
              <input
                type="number"
                name="volunteersNumber"
                min="1"
                placeholder="Enter volunteer number"
                className="input text-black input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text dark:text-[#e0e0e0]">Deadline</span>
              </label>
              <div>
                <DatePicker
                  className="border p-2 text-black rounded-md cursor-pointer"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>
            <div>
              <label className="label">
                <span className="label-text dark:text-[#e0e0e0]">
                  Organizer Name
                </span>
              </label>
              <input
                type="text"
                name="username"
                placeholder="Your Name"
                defaultValue={user.displayName}
                readOnly
                className="input text-black input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text dark:text-[#e0e0e0]">
                  Organizer Email
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                defaultValue={user.email}
                readOnly
                className="input text-black input-bordered w-full"
                required
              />
            </div>
          </div>
          <div>
            <label className="label">
              <span className="label-text dark:text-[#e0e0e0]">
                Description
              </span>
            </label>
            <textarea
              name="description"
              className="textarea text-black w-full textarea-bordered"
              placeholder="Write a description"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-green-500 text-lg mt-4 text-white w-full py-3 rounded-md hover:bg-green-600 transition"
          >
            Add Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddVolunteerNeedPost;
