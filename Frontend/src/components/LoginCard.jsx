import React from "react";
import { useState } from "react";
import Loading from "./Loading";
import { Link, useNavigate } from 'react-router-dom';


const LoginCard = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [toast, setToast] = useState(null);
  const [toastType, setToastType] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    if (toast) {
      setToast(null);
      setToastType(null);
    }
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (toast) {
      setToast(null);
      setToastType(null);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!username || !password) {
      setToast("Both username and password are required.");
      setToastType("error");
      setLoading(false);
      return;
    }
    try {
      const res = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (data.success === false) {
        setToast(data.error);
        setToastType("error");
      } else {
        setToast(data.error);
        setToastType("success")
      }
    } catch (error) {
      setToast("An error occurred while logging in.");
      setToastType("error");
    } finally { setLoading(false)
    }
  };
  const handleSignUp = () => {
    navigate('/signup')
  };
  return (
    <div className="bg-base-200 flex items-center justify-center min-h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-4xl font-bold mb-6 justify-center">
            Login
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
                  placeholder="Enter password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </label>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control mt-6">
              {loading ? (
                <button className="btn btn-primary ">
                  <Loading />
                </button>
              ) : toast ? (
                <button className={`btn btn-${toastType} text-white `}>
                  {toast}
                </button>
              ) : (
                <button className="btn btn-primary ">Login</button>
              )}
            </div>
          </form>

          <div className="divider">OR</div>

          <div className="text-center">
            <p>Don't have an account?</p>
            <a className="link link-primary" onClick={handleSignUp}>
              Register Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;