import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import { HiUserAdd } from "react-icons/hi";


const Login = () => {

  const navigate = useNavigate();


  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");

  const proceedLogin = () => {
    const user = 'admin';
    const password = '123';
    if(userName === user && password === userPass){
      navigate('/dashboard')
    }else{
      alert('enter valid credentials')
    }
  };

  return (
    <div className="bg-slate-300">
      <div className="flex justify-center items-center h-screen">
        <div className="bg-gray-800 w-[500px] h-[600px] rounded-lg">
          <h1 className="text-5xl text-center mt-3 text-white">Login</h1>
          <FaUserCircle className=" text-[150px] mx-auto mt-[50px] text-white" />
          <form onSubmit={proceedLogin} className="p-11 p-auto">
            <label className="text-white">UserName : </label>
            <input
              className="rounded-md p-1 float-end w-full my-3"
              type="text"
              placeholder=" Enter your userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <br />
            <br />
            <label className="text-white">Password : </label>
            <input
              type="password"
              placeholder=" Enter your password"
              className="rounded-md p-1 float-end w-full my-3"
              value={userPass}
              onChange={(e) => setUserPass(e.target.value)}
            />
            <br />
            <br />
            <button
              type="submit"
              className="bg-blue-400 w-full text-white rounded-md p-2 mt-[30px] text-[20px]"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
