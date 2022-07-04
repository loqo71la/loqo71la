import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';

import saveContact from '../../services/contact.service';
import config from '../../data/config';

function Contact() {
  const newContact = () => ({ name: '', email: '', message: '' });
  const [contact, setContact] = useState(newContact);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setIsLoading(true);
    saveContact(contact)
      .then(_ => {
        alert(config.contact.successMsg);
        setContact(newContact);
      })
      .catch(error => alert(error.message))
      .finally(() => setIsLoading(false))
  };

  return (
    <section id="contact" className="py-28 container mx-auto px-6 md:px-10 text-center">
      <Fade cascade>
        <h2 className="text-3xl md:text-5xl">Have an Project in Mind?</h2>
        <p className="md:text-lg mt-6 opacity-80">
          If you have an exciting project where you need some help, feel free to get in touch.
        </p>
        <form className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
          <input
            required
            type="text"
            placeholder="Your Name*"
            value={contact.name}
            onChange={e => setContact({ ...contact, name: e.target.value })}
            className="p-3 text-sm bg-gray-100 border-none rounded-none text-gray-900 focus:outline-blue-500"
          />
          <input
            required
            type="email"
            placeholder="Your Email*"
            value={contact.email}
            onChange={e => setContact({ ...contact, email: e.target.value })}
            className="p-3 text-sm bg-gray-100 border-none rounded-none text-gray-900 focus:outline-blue-500"
          />
          <textarea
            rows="5"
            placeholder="How can I help you?"
            value={contact.message}
            onChange={e => setContact({ ...contact, message: e.target.value })}
            className="md:col-span-2 p-3 text-sm bg-gray-100 border-none rounded-none text-gray-900 focus:outline-blue-500"
          />
          <button
            className="md:col-span-2 inline-flex items-center px-6 py-2.5 mx-auto w-fit rounded-full text-white bg-blue-600 hover:bg-blue-800 transition">
            {isLoading &&
              <svg className="animate-spin mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            }
            Send Message
          </button>
        </form>
      </Fade>
      <Fade>
        <p className="mt-24 mb-6">You can also just send me an <a href="mailto:hello@loqo71la.dev" className="text-blue-600 hover:font-semibold">email</a></p>
        <p className="mx-auto transition hover:-translate-y-1 w-fit">
          <a href="mailto:hello@loqo71la.dev" className="text-blue-600 text-xl hover:font-semibold">hello@loqo71la.dev</a>
        </p>
      </Fade>
    </section>
  );
}

export default Contact;
