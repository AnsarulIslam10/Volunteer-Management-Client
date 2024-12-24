import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const AddVolunteerNeedPost = () => {
  const axiosSecure = useAxiosSecure()
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);

  const handleSubmit = async(e) => {
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
          organizerEmail
      },
      description,
    };

    try {
        await axiosSecure.post(`/add-post`, newPost)
        form.reset()
        toast.success('Post Added Successfully')
        // navigate ===>
    } catch (error) {
        toast.error(error.message)
    }


  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10 px-2">
      <div className="shadow-xl dark:bg-[#1a242e] dark:text-white rounded-lg p-8 w-full max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-700 dark:text-[#e0e0e0] mb-2 font-ranch">
            Add Volunteer Need Post
          </h2>
          <p className="text-gray-500 dark:text-[#e0e0e0] max-w-md mx-auto">
            Fill in the form below to add a new post.
          </p>
        </div>

        {/* form */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="label">
                <span className="label-text dark:text-[#e0e0e0]">Post Title</span>
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
                <span className="label-text dark:text-[#e0e0e0]">Thumbnail</span>
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
              <input
                type="text"
                name="category"
                placeholder="e.g., healthcare, education, social service etc."
                className="input text-black input-bordered w-full"
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
                placeholder="Enter location"
                className="input text-black input-bordered w-full"
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
                <span className="label-text dark:text-[#e0e0e0]">Organizer Name</span>
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
                <span className="label-text dark:text-[#e0e0e0]">Organizer Email</span>
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
              <span className="label-text dark:text-[#e0e0e0]">Description</span>
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
            className="bg-green-500 text-lg text-white w-full py-3 rounded-md hover:bg-green-600 transition"
          >
            Add Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddVolunteerNeedPost;
