import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import PostCard from "../PostCard/PostCard";

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
    <div className="my-24">
      <h1 className="sm:text-2xl text-xl md:text-4xl text-green-600 dark:shadow-white/10 font-bold text-center mb-12">
        Volunteer Needs Now
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {posts.map((post) => (
          <Fade key={post._id} triggerOnce>
            <PostCard post={post}></PostCard>
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
