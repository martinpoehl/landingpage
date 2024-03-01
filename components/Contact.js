import React, { useState } from 'react';
import axios from 'axios';
import ButtonPrimary from './misc/ButtonPrimary';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/api/submit-form.js', formData);
      setSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to submit form');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div id='contact' className="w-full justify-center mt-40 mb-10">
      <section className="bg-white dark:bg-gray-900">
        <div className="lg:pb-16 px-4 mx-auto max-w-screen-lg">
          {submitted ? (
            <p style={{color: "#12CD36"}} className="mt-8 mb-60 text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal text-center">Vielen Dank für Ihre Nachricht. Ich werde mich so schnell wie möglich bei Ihnen melden! 🙂</p>
          ) : (
            <div>
            <h1 className="mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal text-center"><span style={{color: "#f43855"}}>Kontakt</span>formular</h1>
            <form onSubmit={handleSubmit} className="space-y-8 pt-5">
              <div className="grid grid-cols-2 gap-x-4">
                <div>
                  <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vorname</label>
                  <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} className="px-4 py-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Max" required />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nachname</label>
                  <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} className="px-4 py-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Mustermann" required />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="px-4 py-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@domain.ch" required />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Telefonnummer</label>
                <input type="phone" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="px-4 py-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Telefonnummer" required />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nachricht</label>
                <textarea name="message" id="message" rows="6" value={formData.message} onChange={handleChange} className="px-4 py-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Hinterlassen Sie eine Nachricht..."></textarea>
              </div>
              <ButtonPrimary type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Senden</ButtonPrimary>
            </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Contact;
