import moment from "moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const VolunteerNeedPostDetails = () => {
  const axiosSecure = useAxiosSecure();
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchPostData();
  }, [id]);

  const fetchPostData = async () => {
    const { data } = await axiosSecure.get(`/post/${id}`);
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
    <div className="my-16 px-2">
      <Helmet>
        <title>Volunary | Volunteer Need Post Details</title>
      </Helmet>
      <div className="max-w-5xl mx-auto border dark:border-gray-500 rounded-3xl p-4 sm:p-8 md:p-12 shadow-sm">
        <h2 className="text-4xl text-green-600 inline-block shadow-lg p-3 drop-shadow-xl font-bold up border-l-4 border-green-500 pl-2 mb-8">
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
            <p className="font-semibold dark:text-[#e0e0e0] text-gray-700">
              Category:{" "}
              <span className="font-normal dark:text-[#c0bebe]  text-gray-600">
                {category}
              </span>
            </p>
            <p className="font-semibold dark:text-[#e0e0e0] text-gray-700">
              Location:{" "}
              <span className="font-normal dark:text-[#c0bebe]  text-gray-600">
                {location}
              </span>
            </p>
            <p className="font-semibold dark:text-[#e0e0e0] text-gray-700 mb-2">
              Deadline:{" "}
              <span className="font-normal dark:text-[#c0bebe]  text-gray-600">
                {moment(deadline).format("DD/MM/YYYY")}
              </span>
            </p>

            {volunteersNumber <= 0 ? (
              <p className="text-lg font-semibold text-green-500 mb-2">Recruitment Closed</p>
            ) : (
              <p className="font-semibold mb-2 dark:text-[#e0e0e0] text-gray-700">
                Volunteers Neede:{" "}
                <span className="font-normal text-green-500">
                  {volunteersNumber}
                </span>
              </p>
            )}
          </div>

          <div>
            <h3 className="text-gray-700 dark:text-[#e0e0e0] font-semibold">
              Organizers’s info:
            </h3>
            <div className="p-2 mb-2">
              <p className="font-semibold dark:text-[#e0e0e0] text-gray-700">
                Name:
                <span className="font-normal dark:text-[#c0bebe]  ml-1 text-gray-600">
                  {organizer?.organizerName}
                </span>
              </p>
              <p className="font-semibold dark:text-[#e0e0e0] text-gray-700">
                Email:
                <span className="font-normal dark:text-[#c0bebe]  ml-1 text-gray-600">
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
          disabled={volunteersNumber <= 0}
          className="btn border-none mt-6 w-full bg-green-500 text-white hover:bg-green-600 transition-all duration-300"
        >
          {volunteersNumber <= 0 ? "Requretment Closed" : "Be a Volunteer"}
        </button>
      </div>

      <Modal post={post} fetchPostData={fetchPostData}></Modal>
    </div>
  );
};

export default VolunteerNeedPostDetails;
