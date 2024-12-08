import React from "react";
import { useState } from "react";
import Loading from "./Loading";
import { Link, useNavigate } from 'react-router-dom';


const RegistrationCard = () => {
    const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    if (toastMessage) {
      setToastType("");
      setToastMessage("");
    }
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (toastMessage) {
      setToastType("");
      setToastMessage("");
    }
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (toastMessage) {
      setToastType("");
      setToastMessage("");
    }
  };
  const handleMobileChange = (e) => {
    setMobile(e.target.value);
    if (toastMessage) {
      setToastType("");
      setToastMessage("");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!username || !password || !mobile || !email) {
      setToastMessage("Please Fill In All Data");
      setToastType("error");
      setLoading(false);
      return;
    }
    try {
      const res = await fetch("http://localhost:8080/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, email, mobile }),
      });
      const data = await res.json();
      if (data.success === false) {
        setToastType("error");
        setToastMessage(data.error);
      } else {
        setToastType("success");
        setToastMessage("Successfully Registered");
      }
    } catch (error) {
      setToastMessage("An error occurred during registration");
      setToastType("error");
    } finally {
      setLoading(false);
    }
  };
  const handleLogin = () => {
    navigate('/login')
  };
  return (
    <div className="bg-base-200 flex items-center justify-center min-h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-4xl font-bold mb-6 justify-center">
            Registration
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="username"
                  className="grow"
                  placeholder="Enter Username"
                  value={username}
                  onChange={handleUsernameChange}
                />
              </label>
            </div>

            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  className="grow"
                  placeholder="Enter Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </label>
            </div>
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="email"
                  className="grow"
                  placeholder="Enter Email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </label>
            </div>
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Mobile Number</span>
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="mobile"
                  className="grow"
                  placeholder="Enter Mobile Number"
                  value={mobile}
                  onChange={handleMobileChange}
                />
              </label>
            </div>
            <div className="form-control mt-6">
              {loading ? (
                <button className="btn btn-primary ">
                  <Loading />
                </button>
              ) : toastMessage ? (
                <button className={`btn btn-${toastType} text-white`}>
                  {toastMessage}
                </button>
              ) : (
                <button className="btn btn-primary ">Register</button>
              )}
            </div>
          </form>

          <div className="divider">OR</div>

          <div className="text-center">
            <p>Already have an account?</p>
            <a className="link link-primary" onClick={handleLogin}>
              Login Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationCard;