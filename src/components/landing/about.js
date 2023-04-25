import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Fade } from 'react-awesome-reveal';
import { Boxes, HexagonHalf, Lighting } from '../icons';

function About() {
  return (
    <section id="about" className="relative overflow-hidden z-0">
      <div className="container mx-auto pt-14 md:pt-28 pb-6 px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:content-center">
          <div className="md:mx-20">
            <Fade>
              <h1 className="ml-6 text-base md:text-lg">
                Hey There 👋!<span className="text-5xl block -ml-6">I'm Dan</span>
              </h1>
              <h2 className="text-lg md:text-xl font-medium opacity-75 mt-2">
                Full Stack Developer
              </h2>
            </Fade>
            <Fade direction="up">
              <p className="mt-6 ml-2 opacity-80 text-sm">
                I'm a programming enthusiast and I really enjoy finding solutions to complex problems through software development.
              </p>
              <p className="mt-3 ml-2 opacity-80 text-sm">
                Since 2016 I have developed many types of applications and web services where I learned to give importance to small details and teamwork.
              </p>
              <p className="mt-3 ml-2 opacity-80 text-sm">
                When I'm not behind a computer, I usually play the piano, chess or video games, other times I learn a new language or framework.
              </p>
              <div className="mt-10 text-center md:text-left">
                <AnchorLink
                  className="px-6 py-2.5 text-white text-center rounded-full bg-blue-600 hover:bg-blue-800 dark:bg-indigo-500 dark:hover:bg-indigo-700"
                  href="#contact"
                >
                  Contact me
                </AnchorLink>
              </div>
            </Fade>
          </div>
          <StaticImage className="mt-12 md:mt-0" src="../../images/dev.png" alt="Dev" />
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 90">
        <path className="fill-white/60 dark:fill-gray-800/75" d="m1441.06186,90.03093l-1441.09271,0l0,-59.52756c108.74913,-20.31496 201.15252,-30.47244 277.2102,-30.47244c341.26326,0 341.26326,85.03937 737.55926,85.03937c163.67626,0 305.78401,-4.18897 426.32326,-40.56693l0,45.52756l-0.00001,0z" />
      </svg>
      <section className="bg-white/60 dark:bg-gray-800/75 grid gap-4 md:gap-8 md:grid-cols-3 px-8 md:px-32 pb-8 pt-2">
        <article className="text-center text-sm opacity-80">
          <Lighting className="w-8 h-8 mx-auto opacity-80 my-2" />
          <h2 className="md:text-base font-medium">Design</h2>
          <p className="mt-2">Problem solving focused on fast load times and lag-free interaction.</p>
        </article>
        <article className="text-center text-sm opacity-80">
          <Boxes className="w-8 h-8 mx-auto opacity-80 my-2" />
          <h2 className="md:text-base font-medium">Development</h2>
          <p className="mt-2">Strong preference for intuitive UX/UI, scalable solutions by using reliable, future-proof technologies.</p>
        </article>
        <article className="text-center text-sm opacity-80">
          <HexagonHalf className="w-8 h-8 mx-auto opacity-80 my-2" />
          <h2 className="md:text-base font-medium">Quality assurance</h2>
          <p className="mt-2">Preventative approach and rigorous testing of user scenarios.</p>
        </article>
      </section>
    </section>
  );
}

export default About;
