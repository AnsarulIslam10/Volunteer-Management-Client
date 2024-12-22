import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import securityAnimation2 from "../../assets/animations/security-animation2.json";
import Lottie from "lottie-react";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[700px] mb-96 px-2 flex shadow-xl rounded-2xl overflow-hidden">
        <div className="hidden sm:block w-1/2">
          <div className="flex flex-col justify-center items-center h-full">
            <Lottie className="w-72" animationData={securityAnimation2}></Lottie>
          </div>
        </div>

        <div className="w-full sm:w-1/2 p-8 flex flex-col justify-center ">
          <h2 className="text-3xl tracking-wider border-l-4 border-green-600 uppercase text-green-600 font-bold pl-3 mb-6">
            Register
          </h2>

          <form className="">
            <div className="form-control">
              <label className="label text-lg">
                <span>Name</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Please enter your name"
                className="input rounded-md input-bordered input-success bg-transparent  focus:outline-none"
              />
            </div>
            <div className="form-control">
              <label className="label text-lg">
                <span>Photo URL</span>
              </label>
              <input
                type="url"
                name="photo"
                required
                placeholder="Please enter your photo url"
                className="input rounded-md input-bordered input-success bg-transparent  focus:outline-none"
              />
            </div>
            <div className="form-control">
              <label className="label text-lg">
                <span>Email</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Please enter your email"
                className="input rounded-md input-bordered input-success bg-transparent  focus:outline-none"
              />
            </div>
            <div className="form-control relative">
              <label className="label text-lg">
                <span>Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                placeholder="Please enter your password"
                className="input rounded-md input-bordered input-success  bg-transparent  focus:outline-none"
              />
              <p
                onClick={() => setShowPassword(!showPassword)}
                className="absolute cursor-pointer right-4 text-neutral-300 top-[57px]"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </p>
            </div>
            <button className="btn bg-green-500 text-white text-xl hover:bg-green-600 hover:scale-105 transition-all duration-300  border-none rounded-md w-full mt-6">
              Register
            </button>
          </form>
          <p className="text-center  mt-6">
            Already have an account?{" "}
            <Link to={"/login"} className="text-cyan-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
