import React, { useState } from "react";
import uploadCloudIcon from "./../assets/cloud_upload.svg";
import ytIcon from "./../assets/Frame 5.svg";

const UploadList = () => {
  const [active, setActive] = useState("general");
  return (
    <div className="ml-8">
      <h1 className="text-5xl my-4 text-[#7E22CE] font-bold ">Configuration</h1>
      <div>
        <div className="flex relative p-1  gap-6 text-[#3C3C3C]">
          <span
            className={`cursor-pointer border-b-4 absolute ${
              active === "general" ? "border-[#7E22CE]" : "border-transparent"
            } rounded-sm transition delay-75 hover:text-[#7E22CE]`}
            onClick={() => setActive("general")}
          >
            General
          </span>
          <span
            className={`cursor-pointer border-b-4 left-20 absolute ${
              active === "display" ? "border-[#7E22CE]" : "border-transparent"
            } rounded-sm transition delay-75 hover:text-[#7E22CE]`}
            onClick={() => setActive("display")}
          >
            Display
          </span>
          <span
            className={`cursor-pointer left-40 border-b-4 absolute ${
              active === "advanced" ? "border-[#7E22CE]" : "border-transparent"
            } rounded-sm transition delay-75 hover:text-[#7E22CE]`}
            onClick={() => setActive("advanced")}
          >
            Advanced
          </span>
        </div>
        <hr className="border-2 w-[97%] ml-1 mt-5" />
      </div>
      <div>
        {active === "general" && (
          <div className="flex flex-col my-10 ">
            <label className="mb-2" htmlFor="">
              Chatbot Name
            </label>
            <input
              placeholder="Chatbot Name"
              className="mb-2 border-2 rounded-md p-2 w-[35%] "
              type="text"
              name=""
              id=""
            />
            <span className="text-slate-400 mb-3">
              hi hter yuo jshaks sknfns
            </span>
            <label className="mb-2" htmlFor="">
              Welcome Message
            </label>
            <input
              placeholder="Welcome Message"
              className="mb-2 border-2 rounded-md p-2 w-[35%] "
              type="text"
              name=""
              id=""
            />
            <span className="text-slate-400 mb-3">
              hi hter yuo jshaks sknfns
            </span>
            <label className="mb-2" htmlFor="">
              Input PlaceHolder
            </label>
            <input
              placeholder="Input PlaceHolder"
              className="mb-2 border-2 rounded-md p-2 w-[35%] "
              type="text"
              name=""
              id=""
            />
            <span className="text-slate-400 mb-3">
              hi hter yuo jshaks sknfns
            </span>
          </div>
        )}
        {active === "display" && (
          <div>
            <div className="grid grid-cols-2 mt-8">
              <div className="flex flex-col p-2">
                <label className="font-semibold" htmlFor="">
                  Primary Color
                </label>
                <div className="flex gap-4 py-2">
                  <input
                    placeholder="#7E22CE"
                    defaultValue="#7E22CE"
                    className="border-2 px-8 rounded-md"
                    type="text"
                  />
                  <input
                    className="appearance-none w-10 h-10 bg-transparent border-transparent cursor-pointer rounded-full overflow-hidden"
                    type="color"
                  />
                </div>
                <span>snfowifowifwpfhwp</span>
              </div>
              <div className="flex flex-col p-2">
                <label className="font-semibold" htmlFor="">
                  Primary Color
                </label>
                <div className="flex gap-4 py-2">
                  <input
                    placeholder="#7E22CE"
                    defaultValue="#7E22CE"
                    className="border-2 px-8 rounded-md"
                    type="text"
                  />
                  <input
                    className="appearance-none w-10 h-10 bg-transparent border-transparent cursor-pointer rounded-full overflow-hidden"
                    type="color"
                  />
                </div>
                <span>snfowifowifwpfhwp</span>
              </div>
              <div className="flex flex-col p-2">
                <label className="font-semibold" htmlFor="">
                  Primary Color
                </label>
                <div className="flex gap-4 py-2">
                  <input
                    className="border-2 px-16 py-1.5 rounded-md"
                    type="text"
                  />
                </div>
                <span>snfowifowifwpfhwp</span>
              </div>
              <div className="flex flex-col p-2">
                <label className="font-semibold" htmlFor="">
                  Primary Color
                </label>
                <div className="flex gap-4 py-2">
                  <input
                    className="border-2 px-16 py-1.5 rounded-md"
                    type="text"
                  />
                </div>
                <span>snfowifowifwpfhwp</span>
              </div>
            </div>
            <hr className="border-2 w-[97%] ml-1 mt-5" />

            <div className="grid grid-cols-2 gap-8 mt-8">
              <div>
                <h1>Hello hte</h1>
                <select className="border-2  bg-white w-[53%] px-2 py-2  rounded-md">
                  <option className="rounded-full" value="option1">
                    Option 1
                  </option>
                  <option className="rounded-full" value="option2">
                    Option 2
                  </option>
                  <option className="rounded-full" value="option3">
                    Option 3
                  </option>
                </select>
              </div>
              <div>
                <h1>Hello hte</h1>
                <select className="border-2  bg-white w-[53%] px-2 py-2  rounded-md">
                  <option className="rounded-full" value="option1">
                    Option 1
                  </option>
                  <option className="rounded-full" value="option2">
                    Option 2
                  </option>
                  <option className="rounded-full" value="option3">
                    Option 3
                  </option>
                </select>
              </div>
              <div>
                <h1>Hello hte</h1>
                <select className="border-2  bg-white w-[53%] px-2 py-2  rounded-md">
                  <option className="rounded-full" value="option1">
                    Option 1
                  </option>
                  <option className="rounded-full" value="option2">
                    Option 2
                  </option>
                  <option className="rounded-full" value="option3">
                    Option 3
                  </option>
                </select>
              </div>
              <div>
                <h1>Hello hte</h1>
                <select className="border-2  bg-white w-[53%] px-2 py-2  rounded-md">
                  <option className="rounded-full" value="option1">
                    Option 1
                  </option>
                  <option className="rounded-full" value="option2">
                    Option 2
                  </option>
                  <option className="rounded-full" value="option3">
                    Option 3
                  </option>
                </select>
              </div>
              <div>
                <h1>Hello hte</h1>
                <select className="border-2  bg-white w-[53%] px-2 py-2  rounded-md">
                  <option className="rounded-full" value="option1">
                    Option 1
                  </option>
                  <option className="rounded-full" value="option2">
                    Option 2
                  </option>
                  <option className="rounded-full" value="option3">
                    Option 3
                  </option>
                </select>
              </div>
            </div>
          </div>
        )}
        {active === "Advanced" && <div></div>}
      </div>
    </div>
  );
};

export default UploadList;
