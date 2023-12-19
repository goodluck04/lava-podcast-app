import React, { useEffect, useState } from "react";
import uploadCloudIcon from "./../assets/cloud_upload.svg";
import ytIcon from "./../assets/Frame 5.svg";
import sfIcon from "./../assets/Frame 2.svg";
import efIcon from "./../assets/Ellipse 3.svg";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import CustomModel from "./CustomModel";
import UploadListModel from "./../pages/UploadListModel";
import toast from "react-hot-toast";

const UploadList = ({ active }) => {
  const params = useParams();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const openUploadUpModal = () => {
    setOpen(true);
  };

  // fetch list uploads
  const { currentUser } = useSelector((state) => state.user);
  const [uploads, setUploads] = useState(null);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // console.log(uploads);

  useEffect(() => {
    const fetchUploads = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `http://localhost:5000/api/uploads/${params.id}`
        );
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        setUploads(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchUploads();
  }, [params.id]);

  const DeleteHandler = async (projectId) => {
    // console.log(projectId);
    try {
      setLoading(true);
      const res = await fetch(
        `http://localhost:5000/api/upload/${params.id}/${projectId}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      if (data.success === false) {
        toast.error("Something went wrong");
        setError(true);
        setLoading(false);
        return;
      }
      setLoading(false);
      setError(false);
      toast.success("Upload deleted SuccessFully");
      navigate(0);
    } catch (error) {
      toast.error("Something went wrong");

      setError(true);
      setLoading(false);
    }
  };
  return (
    <div className="ml-8">
      <h1 className="text-5xl my-4 text-[#7E22CE] font-bold ">Upload</h1>
     {loading && (<p className="text-center">Loading...</p>)}
      <div className="gap-12 mt-12 flex flex-wrap w-[90%]">
        <div
          onClick={openUploadUpModal}
          className=" flex items-center w-64 p-4 h-24 gap-4 hover:bg-slate-100 hover:scale-110 transition rounded-2xl border-2  shadow-md"
        >
          <img className="h-12" src={ytIcon} alt="" />
          <p className="font-medium">Upload Youtube Video</p>
        </div>
        <div
          onClick={openUploadUpModal}
          className=" flex items-center w-64 p-4 h-24 gap-4 hover:bg-slate-100 hover:scale-110 transition rounded-2xl border-2  shadow-md"
        >
          <img className="h-12" src={sfIcon} alt="" />
          <p className="font-medium">Upload Sportify File</p>
        </div>
        <div
          onClick={openUploadUpModal}
          className=" flex items-center w-64 p-4 h-24 gap-4 hover:bg-slate-100 hover:scale-110 transition rounded-2xl border-2  shadow-md"
        >
          <img className="h-12" src={efIcon} alt="" />
          <p className="font-medium">Upload File</p>
        </div>
      </div>
      {/* when there is no file uploaded */}
      {uploads && uploads.length === 0  && (
        <div>
          <p className="text-slate-400 font-light text-center py-6 mr-24 text-2xl">
            or
          </p>
          <div className="w-[89%] ml-2 h-[320px] border-2 border-dashed shadow-md border-slate-400 rounded-xl mt-4 flex flex-col items-center">
            <img src={uploadCloudIcon} className="mt-6" />
            <p>
              Select a file or drag and drop here (Podcast Media or Transcript
              Text)
            </p>
            <p className="text-slate-400 ">
              MP4, MOV, MP3, WAVE, PDF, DOCX or TXT file
            </p>
            <p
              onClick={openUploadUpModal}
              className="border-2 mt-4 border-[#7E22CE] text-[#7E22CE] hover:bg-slate-300 cursor-pointer rounded-full px-6 py-3"
            >
              Select File
            </p>
          </div>
        </div>
      )}
      {/* when there is any file */}
      {open && (
        <CustomModel
          open={open}
          setOpen={setOpen}
          component={UploadListModel}
        />
      )}
      {uploads && uploads.length > 0 && (
        <p className="bg-[#7E22CE] text-white py-3 rounded-xl px-3 ml-2 pl-12 my-6 w-[89%] text-xl flex items-center justify-between">
          <span>All files are processed! Your widget is ready to go!</span>
          <span className="mr-8 shadow-2xl bg-white px-4 py-1 cursor-pointer hover:bg-slate-100 text-[#3C3C3C] rounded-md hover:scale-110 transition">
            try it out!
          </span>
        </p>
      )}
      {uploads && uploads.length > 0 &&  (
        <div className="w-[89%] overflow-y-auto ml-2 h-[320px] border py-3  shadow-xl rounded-xl mt-4 flex flex-col items-center">
          <table className=" w-full divide-y-2  divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left pl-16 text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Update Date & Time
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 pl-16 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
            </tbody>
            {uploads &&
              uploads.map((upload) => (
                <tbody
                  key={upload._id}
                  className="bg-white divide-y divide-gray-200"
                >
                  <tr className="">
                    <td className="px-6 py-2.5 pl-14 whitespace-nowrap">
                      {upload.name}
                    </td>
                    <td className="px-6 py-2.5 whitespace-nowrap">
                      {" "}
                      Last edited {getTimeAgo(upload.updatedAt)}{" "}
                    </td>
                    <td className="px-6 py-2.5 whitespace-nowrap">{upload.status}</td>
                    <td className="px-6 py-2.5 flex gap-4  whitespace-nowrap">
                      <Link
                        to={`/upload/${params.id}/${upload._id}`}
                        className="border px-3 py-1 text-blue-500 hover:underline"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => DeleteHandler(upload._id)}
                        className="border px-3 py-1 text-red-500 hover:underline "
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
          </table>
        </div>
      )}
    </div>
  );
};

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

export default UploadList;
