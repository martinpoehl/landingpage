import React from "react";
import Logo from "/public/assets/Logo.png";
import Github from "../../public/assets/Icon/gridicon_github.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-gray-100 pt-48 pb-10 ">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 mb-10 lg:px-16 grid grid-rows-2 sm:grid-rows-1 grid-flow-row sm:grid-cols-5 grid-rows-1 gap-2">
        <div className="row-span-1 sm:col-span-2 col-start-1 col-end-2 sm:col-end-2 flex flex-col items-start">
          <Image
            className="shadow-2xl"
            src={Logo}
            width={100}
            height={100}
            alt="logo"
            style={{ borderRadius: "6%" }}
          />
          <p className="my-4">
            <strong className="font-medium">Martinpoehl</strong><br></br>Webseiten erstellen und
            verwalten.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Instagram className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Github className="h-6 w-6" />
            </div>
          </div>
          <p className="text-gray-400">
            ©2023 - Martin Pöhl
          </p>
          
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
