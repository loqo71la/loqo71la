import { component$ } from '@builder.io/qwik';
import { DockerSocialLink, GitHubSocialLink, HackerRankSocialLink, MavenSocialLink, NpmSocialLink } from './links';

export default component$((props: { class: string }) => {
  return (
    <section class={props.class}>
      <GitHubSocialLink />
      <MavenSocialLink />
      <DockerSocialLink />
      <NpmSocialLink />
      <HackerRankSocialLink />
    </section>
  );
});
