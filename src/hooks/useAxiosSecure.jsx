import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { signOutUser } = useContext(AuthContext);
  const navigate = useNavigate()
  useEffect(()=>{
    axiosSecure.interceptors.response.use(
        (res) => {
          return res;
        },
        async (error) => {
          if (error.response.status === 401 || error.response.status === 403) {
            signOutUser()
            navigate('/login')
            toast.error(error.response.data.message)
          }
        }
      );
  },[signOutUser, navigate])
  return axiosSecure;
};

export default useAxiosSecure;
