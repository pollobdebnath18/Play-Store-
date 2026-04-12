import React from "react";
import LogoImg from "../../assets/images/logo.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="min-h-[30vh] bg-[#001931] text-white">
      <div className="flex justify-between items-center max-w-[1200px] mx-auto pt-6 pb-7">
        <div className="flex justify-center items-center gap-3">
          <img className="w-[40px]  h-[40px]" src={LogoImg} alt="LogoImg" />
          <a className=" ">PLAY STORE</a>
        </div>
        <div>
            <h1>Social Icons</h1>
            <div className="flex justify-center items-center gap-2 pt-3">
                <FaXTwitter></FaXTwitter>
                <FaLinkedin></FaLinkedin>
                <FaFacebook></FaFacebook>
            </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto text-center border-t border-white/50  pt-7 pb-4">
        <p className="text-white/80 ">Copyright © 2025 - All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
