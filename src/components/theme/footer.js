import React from 'react';
import Social from '../social';

function Footer() {
  return (
    <footer className="pt-10 pb-2 text-center">
      <Social className='md:hidden flex justify-center gap-1' />
      <p className="text-sm mt-2 text-gray-400">
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
    </footer>
  );
}

export default Footer;
