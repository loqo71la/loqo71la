import React from 'react';
import { socialLinks } from '../data/config';

function Social({ className = '' }) {
  return (
    <section className={className}>
      {socialLinks.map((social, index) => (
        <a
          key={`social-${index}`}
          target="_blank"
          href={social.link}
          rel="noopener noreferrer"
          className="group p-1 fill-gray-400 hover:fill-blue-600 dark:hover:fill-indigo-500"
        >
          <social.svg className="w-5 h-5 transition ease-in-out group-hover:duration-300 group-hover:-translate-y-1" title={social.title} />
        </a>
      ))}
    </section>
  );
}

export default Social;
