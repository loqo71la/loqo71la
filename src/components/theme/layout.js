import React from 'react';
import Helmet from 'react-helmet';
import Social from '../social';

import Footer from './footer';
import Navbar from './navbar';

function Layout({ children }) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="loqo71la Personal Portfolio" />
        <link rel="canonical" href="https://loqo71la.dev" />
        <title>loqo71la</title>
      </Helmet>
      <Navbar />
      <Social className="hidden md:flex flex-col gap-4 fixed left-2 top-1/2 -translate-y-1/2 z-10" />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
