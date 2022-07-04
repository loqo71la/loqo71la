import React from 'react';

import { socialLinks } from '../../data/config';

function Footer() {
  return (
    <div className="pt-16 pb-2 bg-black text-white text-center">
      <div className="flex justify-center gap-2">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.link}
            aria-label={`follow me on ${social.name}`}
          >
            <svg
              role="img"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-gray-400 hover:fill-blue-600"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>{social.name}</title>
              <path d={social.path} />
            </svg>
          </a>
        ))}
      </div>
      <p className="text-sm mt-4 text-gray-400">
        © 2022
        <a
          href="https://www.loqo71la.dev"
          className="ml-1 font-semibold hover:text-blue-600"
        >
          loqo71la
        </a>
      </p>
    </div>
  );
}

export default Footer;
