import axios from "axios";
import React, { useEffect, useState } from "react";
import PostCard from "../../components/PostCard/PostCard";

const AllVolunteerNeedPosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchAddPosts();
  }, []);

  const fetchAddPosts = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/all-posts`
    );
    setPosts(data);
  };
  return (
    <div className="my-16">
     <h1 className="text-4xl text-green-600 inline-block shadow-lg p-3 drop-shadow-xl font-bold up border-l-8 border-green-500 pl-3 mb-8">
        All Volunteer Need Posts<span className="badge badge-success text-white badge-lg relative bottom-7 -right-7 drop-shadow-lg w-10 h-10">{posts.length}</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {
            posts.map(post => <PostCard key={post._id} post={post}></PostCard>)
        }
      </div>
    </div>
  );
};

export default AllVolunteerNeedPosts;
