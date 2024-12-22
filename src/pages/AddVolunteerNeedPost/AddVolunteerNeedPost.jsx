import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";
const AddVolunteerNeedPost = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);

  const handleSubmit = async(e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const thumbnail = form.thumbnail.value;
    const category = form.category.value;
    const location = form.location.value;
    const volunteersNumber = form.volunteersNumber.value;
    const photo = form.photo.value;
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
      photo,
      deadline,
      organizer: {
          organizerName,
          organizerEmail
      },
      description,
    };

    console.log(newPost)

    try {
        await axios.post(`${import.meta.env.VITE_API_URL}/add-post`, newPost)
        form.reset()
        toast.success('Post Added Successfully')
        // navigate ===>
    } catch (error) {
        console.log(error)
        toast.error(error.message)
    }


  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10">
      <div className="shadow-xl rounded-lg p-8 w-full max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-700 mb-2 font-ranch">
            Add Volunteer Need Post
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Fill in the form below to add a new post.
          </p>
        </div>

        {/* form */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="label">
                <span className="label-text">Post Title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Enter post title"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Thumbnail</span>
              </label>
              <input
                type="url"
                name="thumbnail"
                placeholder="Enter thumbnail url"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                name="category"
                placeholder="Enter category"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                name="location"
                placeholder="Enter location"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">No. of volunteers needed</span>
              </label>
              <input
                type="number"
                name="volunteersNumber"
                placeholder="Enter coffee category"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Deadline</span>
              </label>
              <div className="w-full">
                <DatePicker
                  className="border p-2 w-full rounded-md cursor-pointer"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>
            <div>
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter photo URL"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                name="username"
                placeholder="Your Name"
                defaultValue={user.displayName}
                readOnly
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">User Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                defaultValue={user.email}
                readOnly
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          <div>
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="description"
              className="textarea w-full textarea-bordered"
              placeholder="Write a description"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-green-500 text-lg text-white w-full py-3 rounded-md hover:bg-green-600 transition"
          >
            Add Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddVolunteerNeedPost;
