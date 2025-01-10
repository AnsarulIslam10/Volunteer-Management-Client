import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import securityAnimation2 from "../../assets/animations/security-animation2.json";
import Lottie from "lottie-react";
import { toast } from "react-toastify";
import { AuthContext } from "../../provider/AuthProvider";
import { errorHandler } from "../../firebase/FirebaseErrorHandler";
import { Helmet } from "react-helmet-async";
const Register = () => {
  const { createUser, setUser, updateUserProfile } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    setError("");
    if (password.length < 6) {
      setError("Password must be at least 6 charecters long.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one Uppercase letter");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({ displayName: name, photoURL: photo });
        toast.success("Registration successfull");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        if (err && err.code) {
          errorHandler(err);
        }
      });
  };

  return (
    <div className="flex justify-center items-center max-w-[1400px] mx-auto px-2 my-16 min-h-screen">
      <Helmet>
        <title>Volunary | Register</title>
      </Helmet>
      <div className="w-[700px] mb-96 dark:bg-[#1a242e] px-2 flex shadow-xl rounded-2xl overflow-hidden">
        <div className="hidden sm:block w-1/2">
          <div className="flex flex-col justify-center items-center h-full">
            <Lottie
              className="w-72"
              animationData={securityAnimation2}
            ></Lottie>
          </div>
        </div>

        <div className="w-full sm:w-1/2 p-8 flex flex-col justify-center ">
          <h2 className="text-3xl tracking-wider border-l-4 border-green-600 uppercase text-green-600 font-bold pl-2 mb-6">
            Register
          </h2>

          <form onSubmit={handleRegister}>
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
              {error && (
                <div className="text-red-500 font-semibold text-sm mt-2">
                  <p>{error}</p>
                </div>
              )}
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
