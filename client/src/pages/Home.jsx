import React, { useState } from "react";
import CustomModel from "../components/CustomModel";
import SignUp from "./SignUp";
import Login from "./Login";
import Header from "./../components/Header";

const Home = () => {
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);

  const openSignUpModal = () => {
    setSignUpOpen(true);
    setLoginOpen(false); // Close Login modal if open
  };

  const openLoginModal = () => {
    setLoginOpen(true);
    setSignUpOpen(false); // Close SignUp modal if open
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center text-center py-64">
        <h1 className="text-3xl text-[#7E22CE] font-semibold tracking-tight hover:text-red-500">
          Welcome To Lama Podcast
        </h1>
        <div className="flex items-center">
          <p className="text-2xl text-slate-500">If your visiting first time then click Sign Up  </p>
          <button
            className="border-2 rounded-lg py-4 hover:bg-slate-500 text-white bg-[#7E22CE] hover:scale-125 transition delay-75 px-12 m-8 "
            onClick={openSignUpModal}
          >
            SignUp
          </button>
        </div>
        <div className="flex items-center">
        <p className="text-2xl text-slate-500">If your have already Sign Up the LogIn  </p>
          <button
            className="border-2 ml-20 rounded-lg py-4 hover:bg-slate-500 text-white bg-[#7E22CE] hover:scale-125 transition delay-75 px-12 m-8 "
            onClick={openLoginModal}
          >
            Login
          </button>
        </div>
      </div>

      {isSignUpOpen && (
        <CustomModel
          open={isSignUpOpen}
          setOpen={setSignUpOpen}
          component={SignUp}
        />
      )}

      {isLoginOpen && (
        <CustomModel
          open={isLoginOpen}
          setOpen={setLoginOpen}
          component={Login}
        />
      )}
    </div>
  );
};

export default Home;
