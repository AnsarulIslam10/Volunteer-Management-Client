import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import VolunteerNeedsNowCard from "../VolunteerNeedsNowCard/VolunteerNeedsNowCard";
import { Fade } from "react-awesome-reveal";

const VolunteerNeedsNow = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchAllPosts = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/volunteer-needs-now`
      );
      setPosts(data);
    };
    fetchAllPosts();
  }, []);
  return (
    <div className="my-16">
      <h1 className="sm:text-2xl md:text-4xl text-green-600 dark:shadow-white/10 inline-block font-bold up border-l-4 border-green-500 pl-2 mb-8">
        Volunteer Needs Now
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Fade key={post._id} triggerOnce>
            <VolunteerNeedsNowCard post={post}></VolunteerNeedsNowCard>
          </Fade>
        ))}
      </div>

      <div className="mt-4 flex justify-end">
        <Link
          to={"/all-volunteer-need-posts"}
          className="gap-2 hover:gap-4 transition-all btn btn-ghost px-1 sm:px-3 md:btn-md text-green-600 md:mt-2 rounded-none hover:bg-transparent hover:text-green-600 md:!text-2xl "
        >
          See all button <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default VolunteerNeedsNow;
