import React, { useContext } from "react";
import Lottie from "lottie-react";
import { Button, Label, TextInput } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import login from "./login.json";
import SocialLogin from "../SocailLogin/SocialLogin";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const {singIn} = useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {register,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    singIn(data.email, data.password)
    .then((userCredential) => {
      // Signed in 
      const LoggedUser = userCredential.user;
      console.log(LoggedUser);
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Successfully Login',
        showConfirmButton: false,
        timer: 1500
      })
      navigate(from, { replace: true });
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Swal.fire(
        'OPPS',
        {errorMessage},
        'question'
      )
    });
  };
  return (
    <div>
      <h2 className="text-5xl font-bold text-center">Please Login</h2>
      <div className="md:flex mx-auto gap-10 mt-5 justify-center items-center">
        <div className="md:w-5/12 ">
          <Lottie animationData={login}></Lottie>
        </div>
        <div className="md:w-1/2">
          <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md border-2 shadow-xl lg:max-w-xl">
              <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
                Sign in
              </h1>
              <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                <div className="mb-2">
                  <label className="block text-sm font-semibold text-gray-800">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    {...register("email", { required: true })}
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-sm font-semibold text-gray-800">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    {...register("password", { required: true })}
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <Link
                  href="#"
                  className="text-xs text-purple-600 hover:underline"
                >
                  Forget Password?
                </Link>
                <div className="mt-6">
                  <Button type="submit" color="purple" className="w-full">
                    Login
                  </Button>
                </div>
              </form>
              <SocialLogin></SocialLogin>

              <p className="mt-8 text-xs font-light text-center text-gray-700">
                Don't have an account?
                <Link type="submit"
                  to='/register'
                  className="font-medium text-purple-600 hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
