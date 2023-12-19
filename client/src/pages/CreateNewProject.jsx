import React, { useState } from "react";
import bannerIcon from "./../assets/banner.png";
import homeIcon from "./../assets/home.svg";
import addIcon from "./../assets/Vector.svg";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import CustomModel from "../components/CustomModel";
import CreateProject from "./CreateProject";
import { useSelector } from "react-redux";

const CreateNewProject = () => {
  const [open, setOpen] = useState(false);
  const { currentUser, loading, error } = useSelector((state) => state.user);
  // console.log(currentUser);
  return (
    <div>
      <Header />
      <Link
        to={"/projects"}
        className="ml-28 flex items-end border-2 rounded-l-3xl rounded-r-3xl px-1 py-1 w-[145px] my-3 font-light hover:bg-slate-200 transition delay-150"
      >
        <img src={homeIcon} className="w-7 h-7" />
        <p>Back to Home</p>
      </Link>
      <div className="flex flex-col items-center ">
        <h1 className="text-5xl font-bold text-[#7E22CE]">
          Create a New Projects
        </h1>
        <img src={bannerIcon} className="my-4" />
        <p className="w-[75%] text-center text-2xl text-slate-500">
          LAMA. Back to Home Create a New Project Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in Create New Project
        </p>
        <div className="flex items-center text-[#F8F8F8] text-3xl my-5 bg-[#211935] hover:bg-black hover:scale-125 transition px-4 py-2 rounded-lg">
          <img className="bg-black rounded-full w-8 h-8" src={addIcon} alt="" />
          <h1 onClick={() => setOpen(true)} className="pl-2 cursor-pointer">
            Create New Project
          </h1>
        </div>
      </div>
      {open && (
        <CustomModel open={open} setOpen={setOpen} component={CreateProject} />
      )}
    </div>
  );
};

export default CreateNewProject;
