import React from "react";
import manIcon from "./../assets/man.png";

const AccountSettings = ({isPage, setIsPage, active, setActive}) => {
  return (
    <div className="ml-1">
      <h1 className="my-16">Account Settings</h1>
      <div className="flex gap-8">
        <img src={manIcon} className="w-32 h-32 rounded-full border" alt="" />
        <div className="flex flex-col">
          <label htmlFor="">User Name</label>
          <input
            className="border-2 rounded-md p-1"
            placeholder="UserName"
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Email</label>
          <input
            className="border-2  rounded-md p-1"
            placeholder="abc@gmail.com"
            type="email"
            name=""
            readOnly
            id=""
          />
        </div>
      </div>
      <h1 className="my-8">Subscriptions</h1>
      <div className="">
        <div className="bg-[#3c1e57] p-4 rounded-md text-white">
          <p>
            You are currently on the <span>Quest AI Basic plan!</span>
          </p>
          <span className="text-red-400 underline hover:cursor-pointer">Cancel Subscription!</span>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
