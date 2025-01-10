import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import securityAnimation from "../../assets/animations/security-animation.json";
import Lottie from "lottie-react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import { errorHandler } from "../../firebase/FirebaseErrorHandler";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

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

    signInUser(email, password)
      .then((result) => {
        toast.success("Login successful");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        if (err && err.code) {
          errorHandler(err);
        }
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        toast.success("Login Successfull");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        if (err && err.code) {
          errorHandler(err);
        }
      });
  };

  return (
    <div className="flex justify-center items-center max-w-7xl mx-auto px-2 my-16 min-h-screen">
      <Helmet>
        <title>Volunary | Login</title>
      </Helmet>
      <div className="w-[700px] mb-96 px-2 dark:bg-[#1a242e] flex shadow-xl rounded-2xl overflow-hidden">
        <div className="hidden sm:block w-1/2">
          <div className="flex flex-col justify-center items-center h-full">
            <Lottie animationData={securityAnimation}></Lottie>
          </div>
        </div>

        <div className="w-full sm:w-1/2 p-8 flex flex-col justify-center ">
          <h2 className="text-3xl tracking-wider border-l-4 border-green-600 text-green-600 font-bold pl-2 mb-6">
            LOGIN
          </h2>

          <form onSubmit={handleLogin} className="space-y-2">
            <div className="form-control">
              <label className="label ">
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
              <label className="label ">
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
            <div>
              <a href="#" className="text-sm  hover:underline">
                Forgot your password?
              </a>
            </div>
            <button className="btn bg-green-500 text-white text-xl hover:bg-green-600 hover:scale-105 transition-all duration-300  border-none rounded-md w-full mt-4">
              Login
            </button>

            <div className="divider divider-success ">OR</div>
            <div className="flex justify-center gap-4 mb-4">
              <a
                onClick={handleGoogleSignIn}
                className="btn w-full drop-shadow-sm border-none rounded-md hover:bg- text-xl hover:scale-105 transition-all duration-300"
              >
                Login with
                <FcGoogle />
              </a>
            </div>
          </form>
          <p className="text-center  mt-6">
            Don't have an account?{" "}
            <Link to={"/register"} className="text-cyan-600 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
