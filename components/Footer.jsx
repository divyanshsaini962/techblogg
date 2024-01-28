import Image from "next/image";
import logoLight from "../public/images/logoLight.png";
import {
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaSquareBehance, FaXTwitter } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";


const Footer = () => {
  return (
    <div className="w-full py-10 bg-bgColor text-white/80 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-center items-center md:justify-between">
        <div className="flex items-center flex-wrap gap-3">
          <Image src={logoLight} width={200} height={200} alt="logo" />
          <p className="flex items-center text-xs md:text-sm font-titleFont gap-1">
            <AiOutlineCopyrightCircle className="mt-[1px]" />
            <a target="_blank" href="https://www.linkedin.com/in/divyanshu-saini-8ab623231/">Mr.Divyanshu Saini</a> & <a target="_blank" href="https://www.linkedin.com/in/ashish-sharma-118400185/">Ashish Sharma</a> || all rights reserved 2023
          </p>
        </div>

        <div className="flex gap-6">
        <a target="_blank" href="https://www.behance.net/divyanshusaini1">
          <FaSquareBehance className="w-6 h-6 text-white/50 hover:text-white duration-300 cursor-pointer" />
         </a>
         <a target="_blank" href="https://www.fiverr.com/users/divyanshusaini9/"> 
          <TbBrandFiverr className="w-6 h-6 text-white/50 hover:text-white duration-300 cursor-pointer" />
         </a>
          <a target="_blank" href="https://github.com/divyanshsaini962">
            <BsGithub className="w-6 h-6 text-white/50 hover:text-white duration-300 cursor-pointer" /></a>
          <a target="_blank" href="https://www.linkedin.com/in/divyanshu-saini-8ab623231/">
          <BsLinkedin className="w-6 h-6 text-white/50 hover:text-white duration-300 cursor-pointer" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/divyanshu-saini-8ab623231/">
          <FaXTwitter  className="w-6 h-6 text-white/50 hover:text-white duration-300 cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
