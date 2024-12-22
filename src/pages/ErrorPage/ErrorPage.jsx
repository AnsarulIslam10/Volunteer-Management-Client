import React from 'react';
import pageNotFound from "../../assets/animations/pagenotfound.json"
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
const ErrorPage = () => {
    return (
        <div className='min-h-screen flex justify-center items-center flex-col'>
            <Lottie className='w-[800px]' animationData={pageNotFound}></Lottie>
            <Link to={'/'} className='btn bg-green-500 text-white text-lg hover:bg-green-600'><FaArrowLeft/> Go back to Home</Link>
        </div>
    );
};

export default ErrorPage;