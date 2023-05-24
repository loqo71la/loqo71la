import { component$ } from '@builder.io/qwik';
import SocialLinks from '../common/social-links';

export default component$(() => {
  return (
    <footer class="pt-10 pb-2 text-center">
      <SocialLinks class="flex justify-center md:hidden gap-1" />
      <p class="text-sm mt-2 text-gray-400">
        © 2022
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.loqo71la.dev"
          class="ml-1 font-semibold hover:text-yellow-400 dark:hover:text-emerald-500"
        >
          loqo71la
        </a>
      </p>
    </footer>
  );
});