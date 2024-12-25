import moment from "moment";
import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Modal = ({ post, fetchPostData }) => {
  const { user } = useContext(AuthContext);
  const [status, setStatus] = useState("requested");
  const [suggestion, setSuggestion] = useState("");
  const navigate = useNavigate();
  const {
    _id,
    title,
    thumbnail,
    category,
    location,
    volunteersNumber,
    deadline,
    organizer,
    description,
  } = post;

  const handleRequest = async (e) => {
    e.preventDefault();
    if (volunteersNumber <= 0) {
      toast.error("Recruitment closed for this post");
      return;
    }
    const volunteerInfo = {
      postId: _id,
      title,
      thumbnail,
      category,
      location,
      status,
      organizer,
      description,
      deadline,
      volunteersNumber,
      suggestion,
      volunteer: {
        volunteerName: user?.displayName,
        volunteerEmail: user?.email,
      },
    };

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/volunteer-request`,
        volunteerInfo
      );
      toast.success("Request added successfully");
      fetchPostData();
      navigate('/manage-my-posts')
    } catch (error) {
      toast.error(error.response.data || "Something went wrong");
    }
  };

  return (
    <dialog
      id="my_modal_5"
      className="modal-middle dark:bg-[#1a242e]  drop-shadow-2xl"
    >
      <div className="md:w-[700px] mx-auto p-0">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost dark:dark:text-white absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div className="shadow-xl rounded-lg p-8 w-full max-w-4xl">
          <div className="text-center mb-2">
            <h2 className="text-xl sm:text-2xl dark:text-[#e0e0e0] md:text-4xl font-bold text-gray-700 mb-2">
              Be a Volunteer
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm dark:text-[#e0e0e0] max-w-md mx-auto">
              Fill in the form below to become a volunteer.
            </p>
          </div>

          {/* form */}
          <form onSubmit={handleRequest}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <label className="label">
                  <span className="label-text dark:text-white">Post Title</span>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter post title"
                  value={title}
                  className="input input-bordered w-full"
                  readOnly
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text dark:text-white">Thumbnail</span>
                </label>
                <input
                  type="url"
                  name="thumbnail"
                  value={thumbnail}
                  placeholder="Enter thumbnail url"
                  className="input input-bordered w-full"
                  readOnly
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text dark:text-white">Category</span>
                </label>
                <input
                  type="text"
                  name="category"
                  value={category}
                  placeholder="Enter category"
                  className="input input-bordered w-full"
                  readOnly
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text dark:text-white">Location</span>
                </label>
                <input
                  type="text"
                  name="location"
                  value={location}
                  placeholder="Enter location"
                  className="input input-bordered w-full"
                  readOnly
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text dark:text-white">
                    No. of volunteers needed
                  </span>
                </label>
                <input
                  type="number"
                  name="volunteersNumber"
                  value={volunteersNumber}
                  placeholder="Enter volunteer number"
                  className="input input-bordered w-full"
                  readOnly
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text dark:text-white">Deadline</span>
                </label>
                <div className="w-full">
                  <DatePicker
                    value={moment(deadline).format("DD/MM/YYYY")}
                    readOnly
                    className="border p-2 w-full rounded-md cursor-pointer"
                  />
                </div>
              </div>
              <div>
                <label className="label">
                  <span className="label-text dark:text-white">
                    Organizer Name
                  </span>
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Your Name"
                  value={organizer?.organizerName}
                  readOnly
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text dark:text-white">
                    Organizer Email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  value={organizer?.organizerEmail}
                  readOnly
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>
            <div>
              <label className="label">
                <span className="label-text dark:text-white">Description</span>
              </label>
              <textarea
                name="description"
                value={description}
                className="textarea w-full textarea-bordered"
                placeholder="Write a description"
                required
                readOnly
              ></textarea>
            </div>
            <div className="divider divider-success dark:text-[#e0e0e0]">
              additional info
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <label className="label">
                  <span className="label-text dark:text-white">
                    Volunteer's Name
                  </span>
                </label>
                <input
                  type="text"
                  name="volunteerName"
                  placeholder="name"
                  defaultValue={user?.displayName}
                  readOnly
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text dark:text-white">
                    Volunteer's Email
                  </span>
                </label>
                <input
                  type="email"
                  name="volunteerEmail"
                  placeholder="email"
                  defaultValue={user?.email}
                  readOnly
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text dark:text-white">Suggestion</span>
                </label>
                <textarea
                  name="suggestion"
                  value={suggestion}
                  onChange={(e) => setSuggestion(e.target.value)}
                  className="textarea w-full textarea-xs textarea-bordered"
                  placeholder="Write a suggestion"
                  required
                ></textarea>
              </div>

              <div>
                <label className="label">
                  <span className="label-text dark:text-white">Status</span>
                </label>
                <input
                  type="text"
                  name="status"
                  placeholder="status"
                  value={status}
                  readOnly
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-green-500 mt-4 text-lg text-white w-full py-3 rounded-md hover:bg-green-600 transition"
            >
              Request
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
