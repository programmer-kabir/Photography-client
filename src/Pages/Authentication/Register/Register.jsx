import React, { useContext } from "react";
import Lottie from "lottie-react";
import { Button, Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import registerAnimation from "./Register.json";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthProvider";
import SocialLogin from "../SocailLogin/SocialLogin";
import Swal from "sweetalert2";

const Register = () => {
  const navigate = useNavigate();
  const { newRegister, updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if(data.password !== data.confirmPassword){
      Swal.fire("OPPS", 'password and confirm password donot match', "question");
    }
    newRegister(data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const LoggedUser = userCredential.user;
        console.log(LoggedUser);
        console.log(data.name);
        console.log(data.photoUrl);
        updateUserProfile(data.name, data.photoUrl)
          .then(() => {
            const saveUser = {name:data.name, email:data.email}
            console.log("update done");
            fetch('http://localhost:5000/users',{
              method:"POST",
              headers:{
                'content-type':'application/json'
              },
              body:JSON.stringify(saveUser)
            })
            .then(res => res.json())
            .then(data =>{
              console.log(data);
              if(data.insertedId){
                Swal.fire("Yahh!", "Data update !", "success");
              }
            })

            reset();
            Swal.fire("Yahh!", "User has successfully create !", "success");
            navigate("/");
          })
          .catch((error) => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            Swal.fire("OPPS", `${error.message}`, "question");
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire("OPPS", { errorMessage }, "question");
      });
  };
  return (
    <div>
      <h2 className="text-5xl font-bold text-center">Please Register</h2>
      <div className="md:flex mx-auto gap-10 mt-5 justify-center items-center">
        <div className="md:w-5/12 ">
          <Lottie animationData={registerAnimation}></Lottie>
        </div>
        <div className="md:w-1/2">
          <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md border-2 shadow-xl lg:max-w-xl">
              <h1 className="text-3xl font-semibold text-center  uppercase">
                Sign Up
              </h1>
              <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-2">
                  <label className="block text-sm font-semibold text-gray-800">
                    Name
                  </label>
                  <input
                    type="name"
                    name="name"
                    placeholder="Enter Your Name"
                    {...register("name", { required: true })}
                    className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  {errors.name && (
                    <span className="text-red-600 font-medium">
                      This Name is required
                    </span>
                  )}
                </div>
                <div className="mb-2">
                  <label className="block text-sm font-semibold text-gray-800">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    {...register("email", { required: true })}
                    placeholder="Enter Email Address"
                    className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  {errors.email && (
                    <span className="text-red-600 font-medium">
                      This Email is required
                    </span>
                  )}
                </div>
                <div className="mb-2">
                  <label className="block text-sm font-semibold text-gray-800">
                    Photo Url
                  </label>
                  <input
                    type="text"
                    name="photoUrl"
                    {...register("photoUrl", { required: true })}
                    placeholder="Enter photoUrl Link here"
                    className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  {errors.photoUrl && (
                    <span className="text-red-600 font-medium">
                      This photoUrl is required
                    </span>
                  )}
                </div>
                <div className="mb-2">
                  <label className="block text-sm font-semibold text-gray-800">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    {...register("password", {
                      required: true,
                      minLength: 8,
                      maxLength: 18,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}/,
                    })}
                    placeholder="Enter Password"
                    className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  {errors.password?.type == "required" && (
                    <span className="text-red-600 font-medium">
                      This Password is required
                    </span>
                  )}
                  {errors.password?.type == "minLength" && (
                    <span className="text-red-600 font-medium">
                      {" "}
                      Password Must be 6 characters
                    </span>
                  )}
                  {errors.password?.type == "maxLength" && (
                    <span className="text-red-600 font-medium">
                      {" "}
                      Password no be a 20 characters
                    </span>
                  )}
                  {errors.password?.type == "pattern" && (
                    <span className="text-red-600 font-medium">
                      Password Must have one uppercase and one lower case le,
                      one Number and one special characters
                    </span>
                  )}
                </div>
                <div className="mb-2">
                  <label className="block text-sm font-semibold text-gray-800">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    {...register("confirmPassword", {
                      required: true,
                      minLength: 8,
                      maxLength: 18,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}/,
                    })}
                    placeholder="Enter Password"
                    className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  {errors.confirmPassword?.type == "required" && (
                    <span className="text-red-600 font-medium">
                      This Password is required
                    </span>
                  )}
                  {errors.confirmPassword?.type == "minLength" && (
                    <span className="text-red-600 font-medium">
                      {" "}
                      Password Must be 6 characters
                    </span>
                  )}
                  {errors.password?.type == "maxLength" && (
                    <span className="text-red-600 font-medium">
                      {" "}
                      Password no be a 20 characters
                    </span>
                  )}
                  {errors.password?.type == "pattern" && (
                    <span className="text-red-600 font-medium">
                      Password Must have one uppercase and one lower case le,
                      one Number and one special characters
                    </span>
                  )}
                </div>
                <Link
                  to="/"
                  className="text-xs text-purple-600 hover:underline"
                >
                  Forget Password?
                </Link>
                <div className="mt-6">
                  <Button type="submit" color="purple" className="w-full">
                    Sing up
                  </Button>
                </div>
              </form>
              <SocialLogin></SocialLogin>

              <p className="mt-8 text-xs font-light text-center text-gray-700">
                Already have an account?
                <Link to="/login" className="font-medium  hover:underline">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
