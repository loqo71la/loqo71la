import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Fade } from 'react-awesome-reveal';

function About() {
  return (
    <section id="about" className="container mx-auto py-32 px-6 md:px-10">
      <div className="flex flex-col md:flex-row md:content-center xl:mx-32">
        <div className="md:mx-12">
          <Fade>
            <h1 className="text-xl md:text-2xl">
              Hey There 👋!<span className="text-5xl block mt-3">I'm Dan</span>
            </h1>
            <h2 className="opacity-80 text-xl font-light mt-6">
              Full-stack
              <span className="opacity-90 font-medium">Developer</span>
            </h2>
          </Fade>
          <Fade direction="up">
            <p className="mt-10 opacity-80">
              I'm a knowledge enthusiast, I really enjoy finding more optimal solutions to problems through software development.
            </p>
            <p className="mt-2 opacity-80">
              When I’m not behind a computer, I love to travel and learn about new cultures and customs.
            </p>
            <div className="mt-8">
              <AnchorLink
                className="px-6 py-2.5 text-white text-center rounded-full bg-blue-600 hover:bg-blue-800 dark:bg-indigo-500 dark:hover:bg-indigo-700"
                href="#contact"
              >
                Contact me
              </AnchorLink>
            </div>
          </Fade>
        </div>
        <StaticImage className="mt-8 md:mt-0" src="../../images/dev.png" alt="Dev" />
      </div>
    </section>
  );
}

export default About;
