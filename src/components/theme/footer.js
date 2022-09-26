import React from 'react';

import { socialLinks } from '../../data/config';

function Footer() {
  return (
    <div className="pt-16 pb-2 bg-black text-white text-center">
      <div className="flex justify-center gap-2">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            target="_blank"
            href={social.link}
            rel="noopener noreferrer"
          >
            <social.svg className="w-6 h-6 fill-gray-400 hover:fill-blue-600 dark:hover:fill-indigo-500"/>
          </a>
        ))}
      </div>
      <p className="text-sm mt-4 text-gray-400">
        © 2022
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.loqo71la.dev"
          className="ml-1 font-semibold hover:text-blue-600 dark:hover:text-indigo-500"
        >
          loqo71la
        </a>
      </p>
    </div>
  );
}

export default Footer;
