import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import MenuIcon from '../common/icons/menu-icon';

const menus = ['About', 'Projects', 'Contact'];

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="sticky border-b top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="container mx-auto px-6 md:px-20 py-3">
        <div className="flex items-center justify-between">
          <div className="w-full justify-between flex items-center">
            <a className="flex-shrink-0 font-4xl font-medium" href="/">
              loqo71la
            </a>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {menus.map((menu, index) => (
                  <AnchorLink
                    className="p-2 text-sm font-medium opacity-60 hover:opacity-100"
                    href={`#${menu.toLocaleLowerCase()}`}
                    key={index}
                  >
                    {menu}
                  </AnchorLink>
                ))}
              </div>
            </div>
          </div>
          <div className="mr-2 flex md:hidden">
            <button onClick={() => setOpenMenu(!openMenu)}>
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>
      {openMenu && (
        <div className="flex flex-col md:hidden">
          {menus.map((menu, index) => (
            <AnchorLink
              className="ml-4 p-2 text-sm font-medium opacity-60 hover:opacity-100"
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
