import { component$, Slot } from '@builder.io/qwik';
import SocialLinks from '~/components/common/social-links';
import Footer from '~/components/theme/footer';
import Navbar from '~/components/theme/navbar';

export default component$(() => {
  return (
    <>
      <Navbar />
      <SocialLinks class="hidden md:flex flex-col gap-5 fixed left-4 top-1/2 -translate-y-1/2 z-10" />
      <Slot />
      <Footer />
    </>
  );
});
