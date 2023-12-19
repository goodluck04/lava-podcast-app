import React, { useState } from "react";
import AccountSettings from "../components/AccountSettings";
import SmallHeader from "./../components/SmallHeader";
import { Link } from "react-router-dom";
import logoIcon from "./../assets/directright.svg";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineHome } from "react-icons/md";
import UploadList from "../components/UploadList";
import EditTranscript from "../components/EditTranscript";
import WidgetCofig from "../components/WidgetConfig";

const UploadFlow = () => {
  const [active, setActive] = useState("Upload");

  return (
    <>
      <div className="flex">
        {/* side bar */}
        <div className="w-[20%] top-0 relative h-screen z-20  bg-[#F3E8FF] rounded-md">
          <Link className="flex items-center p-3 sticky top-0" to="/">
            <img src={logoIcon} className="w-9 h-10" />
            <h1 className="text-[#7E22CE] font-extrabold    text-3xl ">
              LAMA.
            </h1>
          </Link>
          <p className="px-4 mb-2 font-light">Podcast Upload Flow</p>
          <div
            onClick={() => setActive("Upload")}
            className={`flex p-2 ml-3 hover:bg-[#7E22CE] transition hover:scale-105 delay-75 rounded-3xl w-[90%] ${
              active === "Upload" ? "bg-[#7E22CE]" : "bg-[#F3E8FF]"
            }`}
          >
            <p
              className={`rounded-full  text-white w-6 text-center font-medium ${
                active === "Upload" ? "bg-[#211935]" : "bg-[#CAC4D0]"
              }`}
            >
              1
            </p>
            <p className="pl-2">Project</p>
          </div>
          <div
            onClick={() => setActive("Widget Configuration")}
            className={`flex p-2 ml-3 hover:bg-[#7E22CE] transition  hover:scale-105 delay-75 rounded-3xl w-[90%] ${
              active === "Widget Configuration"
                ? "bg-[#7E22CE]"
                : "bg-[#F3E8FF]"
            }`}
          >
            <p
              className={`rounded-full  text-white w-6 text-center font-medium  ${
                active === "Widget Configuration"
                  ? "bg-[#211935]"
                  : "bg-[#CAC4D0]"
              }`}
            >
              2
            </p>
            <p className="pl-2">Widget Configurations</p>
          </div>
          <hr className="border-t-2 ml-3  border-[#CAC4D0] w-[88%] my-4" />
          <hr className="border-t-2 ml-3 absolute bottom-14  border-[#CAC4D0] w-[88%] my-4" />
          <div
            onClick={() => setActive("Settings")}
            className={`flex p-2 ml-3 bottom-4 absolute hover:bg-[#7E22CE] transition hover:scale-105 delay-75 rounded-3xl w-[90%] ${
              active === "Settings" ? "bg-[#7E22CE] text-white" : "bg-[#F3E8FF]"
            }`}
          >
            <p
              className={`rounded-full bg-[#CAC4D0] text-white w-6 p-1 text-center font-medium ${
                active === "Settings"
                  ? "!bg-[#211935] !text-white"
                  : "bg-[#CAC4D0]"
              }`}
            >
              <IoSettingsOutline
                className={`${
                  active === "Settings"
                    ? "bg-[#211935] text-white"
                    : "bg-[#CAC4D0]"
                }`}
              />
            </p>
            <p className="pl-2">Settings</p>
          </div>
        </div>
        <div className="flex flex-col w-[78%]">
          <SmallHeader />
          <div className="w-full ml-6">
            {active === "Settings" ? (
              <AccountSettings
                
              />
            ) : (
              <></>
            )}

            {active === "Upload" ? <div>
              <UploadList active={active}  />
            </div> : <></>}
            {active === "Widget Configuration" ? <div>
            <WidgetCofig />
            </div> : <></>}
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadFlow;
