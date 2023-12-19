import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./../assets/directright.svg";
import settings from "./../assets/Icon.svg";
import bell from "./../assets/notifications.svg";

export default function Header() {
  return (
    <header className=" bg-white right-[%] z-10 w-[100%]">
      <div className="flex justify-between items-center py-4 px-8">
        <Link className="flex items-center " to="/">
          <img src={logo} className="w-9 h-10" />
          <h1 className="text-[#7E22CE] font-extrabold    text-3xl ">LAMA.</h1>
        </Link>
        <ul className="flex gap-4">
          <Link to="/settings">
            <img
              src={settings}
              className="w-8 h-8 rounded-full hover:bg-slate-300 transition text-[#3C3C3C]"
            />
          </Link>
          <Link to="/notifications">
            <img
              src={bell}
              className="w-8 h-8 rounded-full hover:bg-slate-300 transition text-[#3C3C3C]"
            />
          </Link>
        </ul>
      </div>
    </header>
  );
}
