import React from 'react';

import About from '../components/landing/about';
import Contact from '../components/landing/contact';
import Layout from '../components/theme/layout';
import Projects from '../components/landing/projects';

function IndexPage() {
  return (
    <div className="h-auto scroll-auto dark:bg-gray-800 dark:text-white">
      <Layout>
        <About />
        <Projects />
        <Contact />
      </Layout>
    </div>
  );
}

export default IndexPage;
