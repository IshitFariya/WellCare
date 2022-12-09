import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let [data, setData] = useState({
    username: "",
    password: "",
  });
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  const submit_form = async (event) => {
    //send the data to the backend
    try {
      event.preventDefault();
      let postData = {
        username: data.email,
        password: data.password,
      };

      setLoad(true);
      let res = await axios.post("http://127.0.0.1:4000/auth/login", postData);
      if (res.data.status === "success") {
        Swal.fire({
          icon: "success",
          title: res.data.message,
        });
        navigate("/landing");
      }
      setLoad(false);
    } catch (err) {
      setLoad(false);
      console.log("error in login : ", err);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.response.data.error,
      });
    }
  };

  const login = (event) => {
    const { name, value } = event.target;
    setData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  return (
    <>
      {/* main container */}
      <div className="bg-dark-100  w-full  h-screen">
        <div className="flex p-5 space-x-5 h-full text-white">
          {/* leftsidebar */}
          <div className="flex flex-col w-1/3 bg-blue-600  rounded-lg px-14 py-8 justify-between ">
            {/* heading */}
            <div className="flex-col space-y-0 text-center">
              <div className="font-black text-4xl">WellCare</div>
              <div className="text-xs">Must for HealthCare</div>
            </div>

            {/* Center Tagline */}
            <div className="flex flex-col space-y-5">
              <div className="font-bold text-5xl leading-10">
                Start your journey with us.
              </div>
              <div className="text-base leading-7 font-thin">
                Discover the health portal full of of doctors and trainers who are waiting to help you on making your health journey easier.

              </div>
            </div>

            {/* Container 3 */}
            <div className="flex flex-col rounded-lg bg-blue-700 p-5">
              {/* Message */}
              <div className="">
                <b>
                  Being healthy has countless benefits. So what is stopping you? Just connect with us and take a step towards improving your health...
                </b>
              </div>

              {/*  */}
              <div></div>
            </div>
          </div>

          {/* right sidebar */}
          <div className="w-2/3 h-full text-black p-5">
            {/* logo */}
            <div className="flex-col space-y-0 text-center ">
              <div className="font-black text-4xl text-blue-700">WellCare</div>
              <div className="text-xs text-white">Must for HealthCare</div>
            </div>

            {/* form */}
            <div className=" py-8 px-6 shadow rounded-lg sm:px-10">
              <form className="mb-0 space-y-6" action="#" method="POST">
                {/*  */}

                {/* email */}
                <div>
                  <label
                    for="email"
                    className="block text-sm font-medium text-gray-200"
                  >
                    Username/Email ID
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="username"
                      type="email"
                      autocomplete="email"
                      required
                      className="w-full rounded p-2 text-lg"
                      onClick={login}
                    />
                  </div>
                </div>

                {/* password */}
                <div>
                  <label
                    for="password"
                    className="block text-sm font-medium text-gray-200"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autocomplete="current-password"
                      required
                      className="w-full rounded p-2 text-lg"
                      onClick={login}
                    />
                  </div>
                </div>
                {/* Sign in Button */}
                <div>
                  <button
                    type="submit"
                    className="w-1/3 flex justify-center py-3 rounded-md text-md font-medium text-white bg-blue-700 hover:bg-blue-800"
                    onClick={submit_form}
                  >
                    {
                      load ? "Loading..." : "Login"
                    }
                  </button>
                  <div className="text-white my-3">
                    Don't have an account??
                    <a
                      href="/signup"
                      className="hover:underline-offset-8 text-blue-600 mx-2"
                    >
                      Register
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
