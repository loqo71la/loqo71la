import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Fade } from 'react-awesome-reveal';

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
              <h2 className="opacity-80 text-lg md:text-xl font-light mt-2">
                Full Stack
                <span className="opacity-90 font-medium ml-1">Developer</span>
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
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8 mx-auto opacity-80 my-2" viewBox="0 0 16 16">
            <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z" />
          </svg>
          <h2 className="md:text-base font-medium">Design</h2>
          <p className="mt-2">Problem solving focused on fast load times and lag-free interaction.</p>
        </article>
        <article className="text-center text-sm opacity-80">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8 mx-auto opacity-80 my-2" viewBox="0 0 16 16">
            <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z" />
          </svg>
          <h2 className="md:text-base font-medium">Development</h2>
          <p className="mt-2">Strong preference for intuitive UX/UI, scalable solutions by using reliable, future-proof technologies.</p>
        </article>
        <article className="text-center text-sm opacity-80">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8 mx-auto opacity-80 my-2" viewBox="0 0 16 16">
            <path d="M14 4.577v6.846L8 15V1l6 3.577zM8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866L8.5.134z" />
          </svg>
          <h2 className="md:text-base font-medium">Quality assurance</h2>
          <p className="mt-2">Preventative approach and rigorous testing of user scenarios.</p>
        </article>
      </section>
    </section>
  );
}

export default About;
