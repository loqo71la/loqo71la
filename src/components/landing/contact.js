import { Spinner } from '@loqo71la/react-web-icons';
import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';

import config from '../../data/config';
import saveContact from '../../services/contact.service';

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
      </Fade>
      <Fade delay={250} duration={1500}>
        <form className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
          <input
            required
            type="text"
            title="Please enter at least 3 characters"
            pattern=".{3}"
            placeholder="Your Name*"
            value={contact.name}
            onChange={e => setContact({ ...contact, name: e.target.value })}
            className="p-3 text-sm bg-gray-100 dark:bg-gray-600 border-none text-gray-900 dark:text-gray-200 focus:outline focus:outline-blue-500 dark:focus:outline-indigo-400"
          />
          <input
            required
            type="email"
            placeholder="Your Email*"
            value={contact.email}
            onChange={e => setContact({ ...contact, email: e.target.value })}
            className="p-3 text-sm bg-gray-100 dark:bg-gray-600 border-none text-gray-900 dark:text-gray-200 focus:outline focus:outline-blue-500 dark:focus:outline-indigo-400"
          />
          <textarea
            rows="5"
            placeholder="How can I help you?"
            value={contact.message}
            onChange={e => setContact({ ...contact, message: e.target.value })}
            className="md:col-span-2 p-3 text-sm bg-gray-100 dark:bg-gray-600 border-none text-gray-900 dark:text-gray-200 focus:outline focus:outline-blue-500 dark:focus:outline-indigo-400"
          />
          <button
            disabled={isLoading}
            className={`md:col-span-2 inline-flex items-center gap-2 px-6 py-2.5 mx-auto w-fit rounded-full text-white ${isLoading ? 'bg-blue-800 dark:bg-indigo-700' : 'bg-blue-600 dark:bg-indigo-500 hover:bg-blue-800 dark:hover:bg-indigo-700'} transition`}>
            {isLoading && <Spinner className="animate-spin h-4 w-4 fill-white" />}
            Send Message
          </button>
        </form>
      </Fade>
      <Fade>
        <p className="mt-24 mb-6">You can also just send me an email</p>
        <a
          href="mailto:hello@loqo71la.dev"
          className="text-xl text-blue-600 dark:text-indigo-400 hover:font-medium"
        >
          hello@loqo71la.dev
        </a>
      </Fade>
    </section>
  );
}

export default Contact;
