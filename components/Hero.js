import React, { useMemo } from "react";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Lottie from "lottie-react";
import Main from "/public/assets/Main.json";

const Hero = ({
  listUser = [
    {
      name: "Webseite",
      number: "",
      icon: "/assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: "SEO",
      number: "",
      icon: "/assets/Icon/gridicons_location.svg",
    },
    {
      name: "Wartung & Support",
      number: "",
      icon: "/assets/Icon/bx_bxs-server.svg",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="hero">
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 grid-rows-1 gap-2 py-6 sm:py-16"
          variants={scrollAnimation}
        >
          <div className="flex w-full">
            <motion.div className="h-full w-full" variants={scrollAnimation}>
              <Lottie
                animationData={Main}
                alt="Works"
                layout="responsive"
                quality={100}
                height={414}
                width={508}
              />
            </motion.div>
          </div>
          <div className="pb-5 flex flex-col justify-center items-start row-start-2 sm:row-start-1">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
  Möchten Sie eine <span style={{ color: '#f43855' }}>moderne Webseite</span> für Ihr Unternehmen?
</h1>

            <p className="text-black-500 mt-4 mb-6">
            Dann setzen Sie sich doch mit mir in Verbindung.
            </p>
            <ButtonPrimary>Anfragen</ButtonPrimary>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <div className="relative w-full flex">
        <ScrollAnimationWrapper className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
              custom={{ duration: 2 + index }}
              variants={scrollAnimation}
            >
              <div className="flex mx-auto w-60 sm:w-auto">
                <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                  <img src={listUsers.icon} className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-100 font-bold max-w-40">
                    {listUsers.name}
                  </p>
                  <p className="text-lg text-black-500">{listUsers.nuber}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </ScrollAnimationWrapper>
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
