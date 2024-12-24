import moment from "moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const VolunteerNeedPostDetails = () => {
  const axiosSecure = useAxiosSecure()
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchPostData();
  }, [id]);

  const fetchPostData = async () => {
    const { data } = await axiosSecure.get(
      `/post/${id}`
    );
    setPost(data);
  };
  const {
    title,
    thumbnail,
    category,
    location,
    deadline,
    organizer,
    volunteersNumber,
    description,
  } = post;


  return (
    <div className="mt-16 px-2">
      <div className="max-w-5xl mx-auto border p-4 sm:p-8 md:p-12 shadow-sm">
        <h2 className="text-4xl text-green-600 mb-4 font-semibold">
          <span>{title}</span>
        </h2>
        <div>
          <img
            className="w-full aspect-video object-cover"
            src={thumbnail}
            alt=""
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 text-lg mt-4">
          <div>
            <p className="font-semibold text-gray-700">
              Category:{" "}
              <span className="font-normal text-gray-600">{category}</span>
            </p>
            <p className="font-semibold text-gray-700">
              Location:{" "}
              <span className="font-normal text-gray-600">{location}</span>
            </p>
            <p className="font-semibold text-gray-700">
              Volunteers Neede:{" "}
              <span className="font-normal text-gray-600">
                {volunteersNumber}
              </span>
            </p>
            <p className="font-semibold text-gray-700 mb-4">
              Deadline:{" "}
              <span className="font-normal text-gray-600">
                {moment(deadline).format("DD/MM/YYYY")}
              </span>
            </p>
          </div>

          <div>
            <h3 className="text-gray-700 font-semibold">Organizers’s info:</h3>
            <div className="p-2 mb-2">
              <p className="font-semibold text-gray-700">
                Name:
                <span className="font-normal ml-1 text-gray-600">
                  {organizer?.organizerName}
                </span>
              </p>
              <p className="font-semibold text-gray-700">
                Email:
                <span className="font-normal ml-1 text-gray-600">
                  {organizer?.organizerEmail}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Description:</h3>
          {description}
        </div>
        <button
          onClick={() => document.getElementById("my_modal_5").showModal()}
          className="btn mt-6 w-full bg-green-500 text-white hover:bg-green-600 transition-all duration-300"
        >
          Be a Volunteer
        </button>
      </div>

      <Modal post={post}></Modal>
    </div>
  );
};

export default VolunteerNeedPostDetails;
