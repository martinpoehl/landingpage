import React from "react";
import Logo from "/public/assets/Logo.png";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-gray-100 pt-48 pb-10">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 mb-10 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row-reverse sm:grid-cols-12 grid-rows-3 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start">
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
              <Facebook className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Twitter className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Instagram className="h-6 w-6" />
            </div>
          </div>
          <p className="text-gray-400">
            ©{new Date().getFullYear()} - Martin Pöhl
          </p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-6 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">
            Applikationen
          </p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Github{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Gitlab{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Designs</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Figma{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Color{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Standorte</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Embrach
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Online
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
