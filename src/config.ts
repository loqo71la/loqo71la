import { ProjectProps } from './components/landing/projects';

export const icons = Object.freeze({
  x16: '0 0 16 16',
  x24: '0 0 24 24',
  x305: '0 0 305.001 305.001'
});

export const message = Object.freeze({
  error: 'The server encountered an internal error, please try to contact me via email',
  success: 'Your message has been sent correctly'
});

export const styles = Object.freeze({
  cardLink: {
    container: 'mx-auto group/link inline-flex items-center gap-1.5',
    icon: 'w-5 h-5 fill-gray-600 dark:fill-gray-300 group-hover/link:fill-yellow-400 group-hover:stroke-gray-700/40 dark:fill-emerald-500 dark:group-hover/link:fill-emerald-500',
    text: 'text-lg text-gray-700 group-hover/link:text-yellow-500 dark:text-gray-100 dark:group-hover/link:text-emerald-500'
  },
  socialLink: {
    container: 'group p-1 fill-gray-600 hover:fill-yellow-400 dark:fill-gray-300 dark:hover:fill-emerald-500',
    icon: 'w-5 md:w-6 h-5 w:h-6 transition ease-in-out group-hover:stroke-gray-700/40 group-hover:duration-300 group-hover:-translate-y-1'
  }
});

export const projects = Object.freeze(JSON.parse(import.meta.env.PUBLIC_PROJECTS) as ProjectProps[]);
