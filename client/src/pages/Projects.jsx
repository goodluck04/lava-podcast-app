import React, { useEffect, useState } from "react";
import bannerIcon from "./../assets/banner.png";
import homeIcon from "./../assets/home.svg";
import addIcon from "./../assets/Vector.svg";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import CustomModel from "../components/CustomModel";
import CreateProduct from "./CreateProject";
import { useSelector } from "react-redux";

const Projects = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState(null);
  const { currentUser } = useSelector((state) => state.user);
  console.log(projects);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/projects");
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        setProjects(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchProjects();
  }, [currentUser._id]);

  return (
    <div>
      <Header />
      <Link
        to={"/"}
        className="ml-28 flex items-end border-2 rounded-l-3xl rounded-r-3xl px-1 py-1 w-[145px] my-3 font-light hover:bg-slate-200 transition delay-150"
      >
        <img src={homeIcon} className="w-7 h-7" />
        <p>Back to Home</p>
      </Link>
      <div className="flex justify-between px-28  py-8 items-center ">
        <h1 className="text-5xl text-[#7E22CE] font-bold">Projects</h1>
        <div
          onClick={() => setOpen(true)}
          className="flex ml-32 mb-4  w-[15%] right-[25.5rem] items-center text-[#F8F8F8] text-base  bg-[#211935] hover:bg-black hover:scale-125 transition px-4 py-2 rounded-lg"
        >
          <img className="bg-black rounded-full w-8 h-8" src={addIcon} alt="" />
          <button className="pl-2">Create New Project</button>
        </div>
      </div>

      {open && (
        <CustomModel open={open} setOpen={setOpen} component={CreateProduct} />
      )}
      {loading && <p className="text-center">Loading...</p>}
      <div className="mx-28 my-4 flex flex-wrap gap-16">
        {projects &&
          projects.map((project) => (
            <Link
              key={project._id}
              to={`/project/${project._id}`}
              className="border flex gap-2 hover:bg-slate-300 w-3/12 items-center rounded-xl px-1 shadow-md hover:scale-105 transition delay-200"
            >
              <p
                style={{ backgroundColor: getRandomColor(project.name) }}
                className="capitalize text-4xl font-bold text-white border ml-2 px-4 py-3 rounded-md   "
              >
                {getInitials(project.name)}
              </p>
              <div className="flex flex-col ml-6 mt-6">
                <h1 className="text-2xl text-[#7E22CE]">{project.name}</h1>
                <p className="text-slate-700 ">4 Epidodes</p>
                <p className="text-slate-400 font-light mt-1">
                  Last edited {getTimeAgo(project.updatedAt)}{" "}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getInitials(name) {
  const words = name.split(" ");
  return words.map((word) => word.charAt(0)).join("");
}

function getTimeAgo(timestamp) {
  const updatedAtDate = new Date(timestamp);
  const now = new Date();
  const timeDifference = now - updatedAtDate;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);

  if (weeks > 0) {
    return `a week ago`;
  } else if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    return `a few seconds ago`;
  }
}

export default Projects;
