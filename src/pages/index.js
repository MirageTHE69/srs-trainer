import * as React from "react";
import { Button } from "@mui/material";

const Desktop1 = () => {
  return (
    <div className="relative bg-gray w-full h-[1024px] overflow-hidden text-left text-base text-white font-montserrat">
      <img
        className="absolute top-[88px] left-[0px] w-full h-[936px] object-cover"
        alt=""
        src="/hero.png"
      />
      <div className="absolute top-[485px] left-[60px] font-medium text-dimgray">
        Email
      </div>
      <div className="absolute top-[589px] left-[60px] font-medium text-dimgray">
        Password
      </div>
      <div className="absolute top-[530px] left-[76px]">Email</div>
      <div className="absolute top-[634px] left-[76px]">
        Enter your password
      </div>
      <div className="absolute top-[685px] left-[60px] text-[14px]">
        Forgot your password?
      </div>
      <div className="absolute top-[0px] left-[0px] box-border w-full h-[88px] border-b-[0.5px] border-solid border-darkslategray" />
      <div className="absolute top-[34px] left-[627px] flex flex-row items-start justify-start gap-[44px] text-gainsboro-100">
        <div className="relative font-medium">Home</div>
        <div className="relative font-medium">Dashboard</div>
        <div className="relative font-medium">Chat</div>
        <div className="relative font-medium">Exercises</div>
      </div>
      <div className="absolute top-[21px] left-[1442px] flex flex-row items-start justify-start">
        <button className="cursor-pointer [border:none] py-[12px] px-[46px] bg-mediumblue rounded-[102px] overflow-hidden flex flex-row items-center justify-center">
          <div className="relative text-base font-medium font-montserrat text-gainsboro-200 text-left">
            Login
          </div>
        </button>
      </div>
      <img
        className="absolute top-[33px] left-[60px] w-[78.74px] h-[21.43px]"
        alt=""
        src="/srs.svg"
      />
      <img
        className="absolute top-[248px] left-[60px] w-[92px] h-[25px]"
        alt=""
        src="/srs1.svg"
      />
      <div className="absolute top-[297px] left-[60px] text-[28px] font-medium">
        Welome Back, Trainer! 💪🏻
      </div>
      <div className="absolute top-[365px] left-[60px] text-[18px] font-medium text-dimgray inline-block w-[427px]">
        Enter your login credentials below to access your account and start
        helping your clients achieve their fitness goals.
      </div>
      <input
        className="bg-[transparent] absolute top-[512px] left-[60px] box-border w-[315px] h-12 border-[0.3px] border-solid border-white"
        type="text"
      />
      <input
        className="bg-[transparent] absolute top-[616px] left-[60px] box-border w-[315px] h-12 border-[0.3px] border-solid border-white"
        type="password"
      />
      <Button
        className="absolute top-[737px] left-[60px]"
        sx={{ width: 315 }}
        variant="contained"
        color="primary"
      > 
         Log in
      </Button>
    </div>
  );
};

export default Desktop1;
