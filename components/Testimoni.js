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
              <span style={{ color: '#f43855' }}>Kunden</span> Feedback
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >Was sagen bisherige Kunden?</motion.p>
            
          </ScrollAnimationWrapper>
        </div>
        <ScrollAnimationWrapper className="w-full flex flex-col py-12">
          <motion.div variants={scrollAnimation}>
            <TestimoniData />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper className="relative w-full mb-16">
          <motion.div variants={scrollAnimation} custom={{ duration: 6 }}>
            <div className="pt-5 absolute border-gray-500 rounded-xl sm:py-14 px-5 sm:px-10 lg:px-14 w-full flex flex-col sm:flex-row pb-4 justify-between items-center z-10 bg-white-500">
              <div className="flex flex-col text-left sm:w-8/12 lg:w-5/12 mb-6 sm:mb-0">
                <h5 className="pb-1 text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                Falls Sie <span style={{ color: '#f43855' }}>Fragen</span> haben, können Sie diese gerne per <span style={{ color: '#f43855' }}>E-Mail</span>  an mich senden.
                </h5>
                <p>Ich werde mich umgehend bei Ihnen melden.</p>
              </div>
              <a className="w-full sm:w-6/12" href="mailto:martinpoehl@me.com">
                <ButtonPrimary className="w-full sm:w-6/12 hover:shadow-orange-md">Email</ButtonPrimary>
              </a>
              
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
