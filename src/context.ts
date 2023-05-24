import { createContextId } from '@builder.io/qwik';

export type SiteStore = {
  lang: 'en' | 'es' | 'fr';
  theme: 'dark' | 'light' | 'auto';
}

export const GlobalStore = createContextId<SiteStore>('site-store');
