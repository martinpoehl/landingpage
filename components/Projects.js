import Image from "next/image";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Slider from "react-slick";
import Stars from "../public/assets/Icon/stars.svg";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";
import ProjectsData from "./ProjectsData";

const Projects = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <motion.div className="shadow-2xl from-black-500 to-white-500 w-full py-14" id="projects">
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Meine <span style={{ color: '#f43855' }}>Projekte</span>
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >Mit langjähriger Expertise in verschiedenen IT-Bereichen.</motion.p>
          
          </ScrollAnimationWrapper>
        </div>
        <ScrollAnimationWrapper className="w-full flex flex-col py-5">
          <motion.div variants={scrollAnimation}>
            <ProjectsData />
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </motion.div>
  );
};

export default Projects;
