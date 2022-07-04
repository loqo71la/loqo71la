import React from 'react';
import Helmet from "react-helmet";

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
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </>
  );
}

export default Layout;
