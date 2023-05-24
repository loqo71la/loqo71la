import { component$ } from '@builder.io/qwik';
import { Boxes, HexagonHalf, Lighting } from '../common/icons';

export default component$(() => {
  return (
    <section id="about" class="bg-white dark:bg-gray-700">
      <div class="container mx-auto pt-14 md:pt-28 px-8 lg:px-32 pb-8">
        <h2 class="text-3xl md:text-5xl text-center">About Me</h2>
        <div class="mt-12 flex flex-col md:flex-row gap-6">
          <div class="md:w-3/4 flex flex-col gap-4 font-light text-sm lg:text-base text-gray-900 dark:text-gray-200 lg:pe-12">
            <p>Hello! my name is Dan, I'm a <span class="font-medium">Full Stack Developer</span> and I enjoy creating innovative solutions to complex problems, over the past 6 years, I have gained extensive experience developing a diverse range of applications and web services.</p>
            <p>Through these experiences, I came to appreciate the importance of meticulous attention to detail and the power of effective teamwork.</p>
            <p>When I'm not coding, you can often find me playing the piano, challenging my mind with a game of chess, or exploring new video games. I also enjoy learning new programming languages and frameworks to stay up-to-date with the latest trends in the industry.</p>
            <div class="mt-10 text-center md:text-left">
              <a
                class="px-6 py-3 text-gray-900 dark:text-white font-medium text-center shadow-md shadow-gray-300/60 dark:shadow-gray-500/60 rounded-full bg-yellow-400 dark:bg-emerald-500"
                href="#contact"
              >
                Contact me
              </a>
            </div>
          </div>
          <div>
            <img class="mt-12 md:mt-0" src="/dev.png" alt="Dev" />
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 90">
        <path class="fill-gray-300/60 dark:fill-gray-800/75" d="m1441.06186,90.03093l-1441.09271,0l0,-59.52756c108.74913,-20.31496 201.15252,-30.47244 277.2102,-30.47244c341.26326,0 341.26326,85.03937 737.55926,85.03937c163.67626,0 305.78401,-4.18897 426.32326,-40.56693l0,45.52756l-0.00001,0z" />
      </svg>
      <section class="bg-gray-300/60 dark:bg-gray-800/75 grid gap-4 md:gap-8 md:grid-cols-3 px-8 md:px-32 pb-8 pt-2">
        <article class="text-center text-sm opacity-80">
          <Lighting class="w-8 h-8 mx-auto opacity-80 my-2" />
          <h2 class="md:text-base font-medium">Design</h2>
          <p class="mt-2">Problem solving focused on fast load times and lag-free interaction.</p>
        </article>
        <article class="text-center text-sm opacity-80">
          <Boxes class="w-8 h-8 mx-auto opacity-80 my-2" />
          <h2 class="md:text-base font-medium">Development</h2>
          <p class="mt-2">Strong preference for intuitive UX/UI, scalable solutions by using reliable, future-proof technologies.</p>
        </article>
        <article class="text-center text-sm opacity-80">
          <HexagonHalf class="w-8 h-8 mx-auto opacity-80 my-2" />
          <h2 class="md:text-base font-medium">Quality assurance</h2>
          <p class="mt-2">Preventative approach and rigorous testing of user scenarios.</p>
        </article>
      </section>
    </section>
  );
});
