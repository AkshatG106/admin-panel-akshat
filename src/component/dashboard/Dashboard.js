import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { FaUserAlt } from "react-icons/fa";
// import { HiUserAdd } from "react-icons/hi";
import { FaUsers } from "react-icons/fa";
import axios from "axios";
import Sidebar from "./sidebar";
// import Menu from "./menu";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://65eaab35c9bf92ae3d3be3a5.mockapi.io/userData")
      .then((info) => setData(info.data));
  }, []);

  return (
    <div className="">
      <div className="flex">
        <Sidebar/>
        <div className="flex-1 bg-slate-300 w-full">
          <div className="h-full">
            <div className="flex p-1 rounded-lg">
              <div className="text-[40px] ml-2">DASHBOARD</div>
              <div className="flex items-center justify-end ml-auto">
                {/* <div className="ml-2 w-[40px] h-[40px] bg-black rounded-full flex justify-center items-center mr-1">
                  <FaUserAlt className="text-white" />
                </div> */}
              </div>
            </div>
            <div className="flex mt-3">
              {/* card */}
              <div className="w-1/4 m-2 p-6 bg-white border rounded-lg shadow hover:bg-gray-100 items-center justify-between">
                <div>
                  <div className="bg-emerald-500 w-[100px] h-[100px] rounded-full flex justify-center items-center">
                    <FaUsers className="text-[50px] text-black" />
                  </div>
                  <p className="text-[30px] text-black">Total User</p>
                </div>
                <div className="items-end">
                  <h1 className="text-[70px] text-black ml-4">{data.length}</h1>
                </div>
              </div>
              <div className="w-1/4 m-2 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 flex items-center justify-between">
                {/* <HiUserAdd className="text-[80px] text-white" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
