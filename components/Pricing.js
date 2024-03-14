import React, { useMemo } from "react";
import Image from "next/image";
import ButtonOutline from "./misc/ButtonOutline";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const plans = [
    {
      name: "Einfach",
      products: [{ name: "Webseite erstellen" }],
      src: "/assets/Free.png",
    },
    {
      name: "Mittel",
      products: [{ name: "Webseite erstellen" }, { name: "Hosting" }],
      src: "/assets/Standard.png",
    },
    {
      name: "Professionell",
      products: [
        { name: "Beratung" },
        { name: "Webseite erstellen" },
        { name: "Hosting" },
        { name: "Support" },
      ],
      src: "/assets/Premium.png",
    },
  ];

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14 shadow-2xl"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Welche <span style={{ color: '#f43855' }}>Anforderungen</span> haben Sie?
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              Die individuellen Bedürfnisse und Kosten können im Rahmen des Erstgesprächs festgelegt werden.
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            {plans.map((plan) => (
              <ScrollAnimationWrapper className="flex justify-center">
                <motion.div
                  variants={scrollAnimation}
                  className="flex flex-col justify-center px-10 items-center border-2 border-gray-500 rounded-xl md:py-4 px-4 lg:px-12 xl:px-20"
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.8,
                    },
                  }}
                >
                  <p style={{ color: '#f43855' }} className="text-2xl underline text-black-600 font-medium font-semibold capitalize my-5 sm:my-4">
                    {plan.name}
                  </p>
                  <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow mb-2">
                    {plan.products.map((product) => (
                      <li className="relative check custom-list my-1">
                        {product.name}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col w-full justify-center my-4 flex-none">
                    <ButtonOutline><a href="/contact">Anfragen</a></ButtonOutline>
                  </div>
                </motion.div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
