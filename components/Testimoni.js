import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import TestimoniData from "./TestimoniData";
import ButtonPrimary from "./misc/ButtonPrimary";

const Testimoni = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className=" bg-white-500 w-full py-14" id="testimoni">
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Zufriedene Kunden
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            ></motion.p>
            <p>Dies sind einige Zufriedene Kunden.</p>
          </ScrollAnimationWrapper>
        </div>
        <ScrollAnimationWrapper className="w-full flex flex-col py-12">
          <motion.div variants={scrollAnimation}>
            <TestimoniData />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper className="relative w-full mb-16">
          <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
            <div className="absolute rounded-xl sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
              <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                <h5 className="pb-1 text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                  Bei Fragen schreiben Sie mir gerne Ihre Fragen per Mail.
                </h5>
                <p>Ich werde mich dann schnellstmöglich bei Ihnen melden.</p>
              </div>
              <ButtonPrimary>Email</ButtonPrimary>
            </div>
            <div
              className="absolute bg-black-600 opacity-5 w-11/12 rounded-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
              style={{ filter: "blur(114px)" }}
            ></div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Testimoni;
