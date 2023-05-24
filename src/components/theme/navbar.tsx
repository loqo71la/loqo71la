import { component$, event$, useContext, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { List, SunAndMoon } from '../common/icons';
import { GlobalStore } from '~/context';
import { getTheme, setTheme, themeListener } from '~/utils/preference';

const menus = [
  { title: 'HOME', href: '/' },
  { title: 'ABOUT', href: '#about' },
  { title: 'PROJECTS', href: '#projects' },
  { title: 'CONTACT', href: '#contact' }
];

export default component$(() => {
  const globalStore = useContext(GlobalStore);
  const isOpen = useSignal(false);

  useVisibleTask$(() => {
    globalStore.theme = getTheme();
    return themeListener((isDark) => {
      globalStore.theme = isDark ? 'dark' : 'light';
      setTheme(globalStore.theme);
    });
  });

  const changeTheme = event$(() => {
    globalStore.theme = globalStore.theme === 'light' ? 'dark' : 'light';
    setTheme(globalStore.theme);
  });

  return (
    <nav class="sticky border-b dark:border-gray-600 top-0 z-50 backdrop-blur-sm bg-white/90 dark:bg-gray-800/90">
      <div class="container mx-auto px-6 md:px-20 py-5">
        <div class="flex items-center gap-4">
          <div class="grow inline-flex gap-1 items-center">
            <img alt="logo" src="/L7-28.png" />
            <a class="ml-2 font-light md:text-lg text-gray-800 dark:text-gray-100" href="/">loqo71la</a>
          </div>
          <div class="hidden md:inline-flex items-center gap-2">
            {menus.map((menu, index) => (
              <a
                class="p-2 font-medium hover:text-shadow text-gray-800 dark:text-gray-100 hover:text-yellow-500 dark:hover:text-emerald-500"
                href={menu.href}
                key={`menu-${index}`}
              >
                {menu.title}
              </a>
            ))}
          </div>
          <button onClick$={changeTheme}>
            <SunAndMoon class="w-6 h-6 group" />
          </button>
          <button
            class="block md:hidden"
            onClick$={() => isOpen.value = !isOpen.value}
          >
            <List class="w-5 h-5 dark:fill-white" />
          </button>
        </div>
      </div>
      {isOpen.value && (
        <div class="flex flex-col md:hidden">
          {menus.map((menu, index) => (
            <a
              class="ml-4 p-2 text-sm opacity-80 hover:opacity-100 hover:font-medium"
              href={menu.href}
              onClick$={() => isOpen.value = false}
              key={`mobile-menu-${index}`}
            >
              {menu.title}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
})