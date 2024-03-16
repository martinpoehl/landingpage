import React, { useState, useEffect } from "react";
import axios from "axios";
import ButtonPrimary from "./misc/ButtonPrimary";
import Check from "/public/assets/Check.json";
import Lottie from "lottie-react";
import { animateScroll as scroll } from "react-scroll";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    option: "Einfach", // Set the default value to "Einfach"
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      scroll.scrollToTop({
        duration: 500,
        smooth: true,
      });
    }
  }, [submitted]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/api/contact", formData);
      setSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Failed to submit form");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div id="contact" className="w-full justify-center mt-24 mb-10 sm:mt-40">
      <section className="bg-white dark:bg-gray-900">
        <div className="lg:pb-16 px-4 mx-auto max-w-screen-lg">
          {submitted ? (
            <>
              <div className="flex w-full justify-center">
                <Lottie
                  animationData={Check}
                  alt="Works"
                  layout="responsive"
                  quality={100}
                  height={414}
                  width={508}
                  loop={false}
                />
              </div>
              <p
                style={{ color: "#12CD36" }}
                className="mt-8 mb-60 text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal text-center"
              >
                Vielen Dank für Ihre Nachricht. Ich werde mich so schnell wie
                möglich bei Ihnen melden! 🙂
              </p>
            </>
          ) : (
            <div>
              <h1 className="mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal text-center">
                <span style={{ color: "#f43855" }}>Kontakt</span>formular
              </h1>
              <form onSubmit={handleSubmit} className="space-y-8 pt-5">
                <div className="grid grid-cols-2 gap-x-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Vorname
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="px-4 py-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="Max"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Nachname
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="px-4 py-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="Mustermann"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="px-4 py-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="name@provider.ch"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Telefonnummer
                  </label>
                  <input
                    type="phone"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="px-4 py-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="079 xxx xx xx"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Nachricht
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className="px-4 py-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Ich hätte gerne eine Beratung per Email/Telefon/Zoom an einem dieser Daten ..."
                  ></textarea>
                </div>
                <div>
                  <label
                    htmlFor="option"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Ich benötige:
                  </label>

                  <div className="flex items-center mb-2 flex-wrap">
                    <div>
                      <input
                        type="radio"
                        id="option1"
                        name="option"
                        value="Einfach"
                        checked={formData.option === "Einfach"} // Check if the option is "Einfach"
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <label htmlFor="option1">Einfach</label>

                      <input
                        type="radio"
                        id="option2"
                        name="option"
                        value="Mittel"
                        checked={formData.option === "Mittel"} // Check if the option is "Mittel"
                        onChange={handleChange}
                        className="mr-2 ml-4"
                      />
                      <label htmlFor="option2">Mittel</label>

                      <input
                        type="radio"
                        id="option3"
                        name="option"
                        value="Professionell"
                        checked={formData.option === "Professionell"} // Check if the option is "Professionell"
                        onChange={handleChange}
                        className="mr-2 ml-4"
                      />
                      <label htmlFor="option3">Professionell</label>
                    </div>

                    <div>
                      <input
                        type="radio"
                        id="option4"
                        name="option"
                        value="Webshop"
                        checked={formData.option === "Webshop"} // Check if the option is "Webshop"
                        onChange={handleChange}
                        className="mr-2 ml-4"
                      />
                      <label htmlFor="option4">Webshop</label>
                      <input
                        type="radio"
                        id="option5"
                        name="option"
                        value="Webapplikation"
                        checked={formData.option === "Webapplikation"} // Check if the option is "Webapplikation"
                        onChange={handleChange}
                        className="mr-2 ml-4"
                      />
                      <label htmlFor="option5">Webapplikation</label>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/4">
                  <ButtonPrimary type="submit">Absenden</ButtonPrimary>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;
