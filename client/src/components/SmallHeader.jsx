import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./../assets/directright.svg";
import flagIcon from "./../assets/flag.png";
import bellIcon from "./../assets/notifications.svg";
import arrowdownIcon from "./../assets/arrow_drop_down.svg";

export default function Header() {
  return (
    <header className=" bg-white  sticky top-0 z-10">
      <div className="flex justify-end items-center py-5">
        <ul className="flex gap-4">
          <p className="flex gap-1.5 items-center">
            <img
              src={arrowdownIcon}
              className="w-8 h-8 rounded-full hover:bg-slate-300 transition text-[#3C3C3C]"
            />
            <span className="font-bold ">EN</span>
            <img
              src={flagIcon}
              className="w-8 h-8 rounded-full hover:bg-slate-300 transition text-[#3C3C3C]"
            />
          </p>
          <Link to="/notifications">
            <img
              src={bellIcon}
              className="w-8 h-8 rounded-full hover:bg-slate-300 transition text-[#3C3C3C]"
            />
          </Link>
        </ul>
      </div>
    </header>
  );
}
