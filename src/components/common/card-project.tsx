import { Slot, component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div class="group">
      <div class="relative">
        <div class="transition duration-200 group-hover:scale-105 group-hover:-translate-y-4 group-hover:shadow-sm group-hover:shadow-gray-400">
          <Slot name="img" />
        </div>
        <div class="transition duration-200 absolute top-0 w-full h-full group-hover:opacity-95 group-hover:bg-gray-100 dark:group-hover:bg-gray-800 group-hover:scale-105 group-hover:-translate-y-4" />
        <div class="w-full absolute top-1/2 transform -translate-y-1/2">
          <Slot name="links" />
        </div>
      </div>
      <div class="w-[99%] ml-auto rounded bg-gray-400 dark:bg-gray-700 -translate-y-3 translate-x-1">
        <div class="p-2 rounded transition bg-gray-200 group-hover:bg-yellow-400 dark:bg-gray-700 dark:group-hover:bg-emerald-500 border border-gray-400 dark:border-gray-500 group-hover:border-yellow-400 dark:group-hover:border-emerald-500 group-hover:-translate-y-1 group-hover:-translate-x-1">
          <Slot />
        </div>
      </div>
    </div>
  );
});