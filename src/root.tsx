import { component$, useContextProvider, useStore } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';
import { GlobalStore, type SiteStore } from './context';

import './global.css';

export default component$(() => {
  const theme = useStore<SiteStore>({
    lang: 'en',
    theme: 'auto'
  });
  useContextProvider(GlobalStore, theme);

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en" class="scroll-smooth">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
