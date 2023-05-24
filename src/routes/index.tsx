import { component$ } from '@builder.io/qwik';
import { DocumentHead, routeAction$ } from '@builder.io/qwik-city';

import About from '~/components/landing/about';
import Contact from '~/components/landing/contact';
import Home from '~/components/landing/home';
import Projects from '~/components/landing/projects';
import { message } from '~/config';

type SendContactProps = {
  success: boolean;
  message: string;
}

export const sendContact = routeAction$<SendContactProps>(async (data, requestEvent) => {
  const settings = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  };
  try {
    const response = await fetch(requestEvent.env.get('API_CONTACT_URL')!, settings);
    if (response.ok) return { success: true, message: message.success };
  } catch (error) {
    console.error(error);
  }
  return { success: false, message: message.error };
});

export default component$(() => {
  return (
    <main>
      <Home />
      <About />
      <Projects />
      <Contact />
    </main>
  );
});

export const head: DocumentHead = {
  title: 'loqo71la',
  meta: [
    {
      name: 'description',
      content: 'loqo71la Personal Portfolio',
    },
  ],
};
