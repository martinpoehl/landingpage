import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Link as LinkScroll } from "react-scroll";
import ButtonOutline from "../misc/ButtonOutline";

const Header = () => {
  const NavItems = [
    { name: "Home", to: "hero" },
    { name: "Angebot", to: "products" },
    { name: "Kosten", to: "pricing" },
    { name: "Projekte", to: "projects" },
    { name: "Kunden", to: "testimoni" },
  ];

  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 5);
    });
  }, []);
  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-white-500 transition-all opacity-90" +
          (scrollActive ? " shadow-md pt-0" : " pt-1")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-1 sm:py-4">
          <a href="/">
            <div className="col-start-1 col-end-2 flex items-center">
              <Image
                className="w-auto"
                src={"/assets/Logo_lg.png"}
                height={65}
                width={65}
              />

              <div className="ml-4 mb-1">
                <a
                  href="/"
                  className="drop-shadow-lg font-bold font-mono text-sm md:text-xl"
                >
                  Martin <br />
                  Pöhl
                </a>
              </div>
            </div>
          </a>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
            {NavItems.map((item) => (
              <LinkScroll
                activeClass="active"
                to={item.to}
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink(item.to);
                }}
                className={
                  "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                  (activeLink === item.to
                    ? " text-orange-500 animation-active "
                    : " text-black-500 hover:text-orange-500 a")
                }
              >
                {item.name}
              </LinkScroll>
            ))}
          </ul>

          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <Link href="/about_me">
              <a className="text-black-600 mx-2 sm:mx-4 tracking-wide hover:text-orange-500 transition-all">
                Über mich
              </a>
            </Link>
            <Link href="/contact">
              <a>
                <ButtonOutline>Kontakt</ButtonOutline>
              </a>
            </Link>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation */}
      <nav className="bg-white-500 opacity-70 fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
            {NavItems.map((item) => (
              <LinkScroll
                activeClass="active"
                to={item.to}
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink(item.to);
                }}
                className={
                  "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                  (activeLink === item.to
                    ? "  border-orange-500 text-orange-500"
                    : " border-transparent")
                }
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {item.name}
              </LinkScroll>
            ))}
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
