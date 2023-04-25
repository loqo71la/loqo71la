import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { StaticImage } from 'gatsby-plugin-image';
import { List, Moon, Sun } from '@loqo71la/react-web-icons';
import useDarkMode from '../../hooks/useDarkMode';

const menus = ['About', 'Projects', 'Contact'];

function Navbar() {
  const [isDark, changeMode] = useDarkMode();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="sticky border-b dark:border-gray-500 top-0 z-50 backdrop-blur-sm bg-white/90 dark:bg-gray-800/90">
      <div className="container mx-auto px-6 md:px-20 py-3">
        <div className="flex items-center gap-4">
          <div className="grow inline-flex gap-1 items-center">
            <StaticImage alt="logo" src="../../images/L7-28.png" />
            <a className="font-light" href="/">loqo71la</a>
          </div>
          <div className="hidden md:inline-flex items-center gap-2">
            {menus.map((menu, index) => (
              <AnchorLink
                className="p-2 text-sm opacity-80 border-b border-transparent hover:opacity-100 hover:font-medium hover:border-gray-800/90 dark:hover:border-white/90"
                href={`#${menu.toLocaleLowerCase()}`}
                key={index}
              >
                {menu}
              </AnchorLink>
            ))}
          </div>
          <button onClick={changeMode}>
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            className="block md:hidden"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <List className="w-5 h-5 dark:fill-white" />
          </button>
        </div>
      </div>
      {openMenu && (
        <div className="flex flex-col md:hidden">
          {menus.map((menu, index) => (
            <AnchorLink
              className="ml-4 p-2 text-sm opacity-80 hover:opacity-100 hover:font-medium"
              href={`#${menu.toLocaleLowerCase()}`}
              onClick={() => setOpenMenu(false)}
              key={index}
            >
              {menu}
            </AnchorLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
