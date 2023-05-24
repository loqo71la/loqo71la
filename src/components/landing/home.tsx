import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <section class="h-screen relative overflow-hidden">
      <span class="bg" />
      <span class="bg bg2" />
      <span class="bg bg3" />
      <div class="h-full flex flex-col justify-center items-center gap-4">
        <h1 class="text-2xl md:text-4xl text-gray-800 dark:text-gray-300">
          Hey there 👋 I'm Dan
        </h1>
        <h2 class="text-3xl md:text-5xl font-medium text-black dark:text-gray-100 mt-2">
          FULL STACK DEVELOPER
        </h2>
        <p class="container mt-10 w-5/6 md:w-3/4 text-sm md:text-lg text-center font-light">
          As a passionate programmer, I enjoy tackling complex challenges and finding innovative and scalable solutions, leveraging my technical skills and knowledge to deliver high-quality results through software development.
        </p>
        <a href="#projects" class="mt-8 py-3 px-6 font-medium bg-yellow-400 dark:bg-emerald-500 border border-yellow-400 dark:border-emerald-500 rounded-full shadow-md dark:shadow-gray-500/60">
          PROJECTS
        </a>
        <span id="wheel" class="mt-24 w-6 h-10 rounded-t-full rounded-b-full border border-gray-600 dark:border-gray-400 relative overflow-hidden mouse" />
      </div>
    </section>
  )
});