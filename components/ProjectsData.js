import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const ProjectsData = ({
  listProjects = [
    {
      name: "Schweizer Fusspflege AG",
      image: "/assets/schweizerfusspflege.png",
      info: "Schweizer Fusspflege - An 3 Standorten in der Schweiz",
      url: "https://schweizerfusspflege.ch/",
    },
    {
      name: "Regioport AG",
      image: "/assets/regioport.png",
      info: "Regioport AG - Ein Bootshafen am Dreiländereck!",
      url: "https://regioport-basel.ch/",
    },
    {
      name: "AI-Assistent",
      image: "/assets/ai-assist.png",
      info: "Ein KI-Assistent für die Erstellung der verschidensten Bereiche",
      url: "",
    },
    {
      name: "Groomify",
      image: "/assets/groomify.png",
      info: "Eine Hunde-Dienstleisungs-Webapplikation, wo Kunden und Geschäfte sich finden",
      url: "",
    },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all"></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20",
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex"
      >
        {listProjects.map((listProjects, index) => (
          <div className="px-3" key={index}>
            
              <div className="flex flex-col xl:flex-row w-full border-gray-500 items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                <div class="max-w-sm min-h-64 rounded overflow-hidden shadow-lg">

                  <a href={listProjects.url} class="flex flex-col items-center border h-90 bg-white hover:border-orange-500 hover:border-2 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                      <img class="object-cover w-60 rounded-t-lg md:w-40 md:rounded-none md:rounded-s-lg" src={listProjects.image} alt=""/>
                      <div class="flex flex-col justify-between p-4 leading-normal">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white md: text-sm">{listProjects.name}</h5>
                          <p class="mb-1 font-normal text-gray-700 dark:text-gray-400 md: text-sm">{listProjects.info}</p>
                      </div>
                  </a>
                
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsData;
