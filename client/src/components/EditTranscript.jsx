import React, { useEffect, useState } from "react";
import pencilIcon from "./../assets/mode.svg";
import searchIcon from "./../assets/search.svg";
import UploadFlow from "../pages/UploadFlow";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const UploadList = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [upload, setUpload] = useState(null);
  // console.log(upload);

  const params = useParams();
  const [isEditable, setIsEditable] = useState(true);
  // console.log(upload);

  // Get the current URL path
  const urlPath = window.location.pathname;

  // Split the path by '/'
  const parts = urlPath.split("/");

  // Extract the two IDs
  const firstId = parts[parts.length - 2];
  const secondId = parts[parts.length - 1];

  // console.log("First ID:", firstId);
  // console.log("Second ID:", secondId);

  const SubmitHandler = async () => {
    try {
      setLoading(true);
  
      const res = await fetch(
        `/api/upload/${firstId}/${secondId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ description: upload.description }),
        }
      );
  
      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        toast.error("something went wrong")
        return;
      }
      
      setLoading(false);
      setError(null);
      toast.success("update successfully")
      navigate(-1);
    } catch (error) {
      toast.error("something went wrong")
      setError(error.message);
      setLoading(false);
    }
  };
  
  useEffect(() => {
    const getHandler = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `/api/upload/${firstId}/${secondId}`
        );
        const data = await res.json();
        console.log(data);
        if (data.success === false) {
          console.log(data.message);
          setError(true);
          setLoading(false);
          return;
        }
        setUpload(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    getHandler();
  }, [params.id]);

  const EditHandler = (e) => {
    e.preventDefault();
    setUpload((prevUpload) => ({
      ...prevUpload,
      description: e.target.value,
    }));
  };
  return (
    <>
      <div className="w-full ml-12">
        <div className="flex items-center  justify-between w-[89%]">
          <h1 className="text-5xl my-8 text-[#7E22CE] font-bold ">Upload</h1>
          {!isEditable && (
            <div className="flex gap-3">
              <button
                onClick={() => navigate(-1)}
                className="border text-red-500 border-red-500 shadow-lg hover:bg-slate-300   px-6 py-2 rounded-md"
              >
                Discard
              </button>
              <button onClick={SubmitHandler} className="border bg-black text-white shadow-lg px-6 py-2 hover:bg-slate-700 rounded-md">
                Save & Exit
              </button>
            </div>
          )}
        </div>
        <div className="w-[89%] ml-2 h-[640px] border-2 z-20 border-[#7E22CE] py-3  shadow-md rounded-xl mt-4 items-center">
          <div className="flex justify-between px-2">
            <div className="flex rounded-3xl px-4 text-white gap-2 py-1 justify-between bg-slate-800 hover:bg-black cursor-pointer">
              <img className="" src={pencilIcon} />
              <span onClick={() => setIsEditable(false)} className="w-full">
                Edit Mode
              </span>
            </div>
            <img
              className="mr-8 rounded-full border border-[#7E22CE]"
              src={searchIcon}
            />
          </div>
          <p className="text-[#7E22CE] text-xl py-1 px-4 font-semibold">
            Speaker
          </p>
          {upload && (
            <textarea
              className="w-[100%] h-[530px] focus:outline-none border-transparent  border rounded-md p-4 resize-none  overflow-y-auto"
              type="text"
              readOnly={isEditable}
              defaultValue={upload ? upload.description : ""}
              id="description"
              name="description"
              onChange={EditHandler}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default UploadList;
