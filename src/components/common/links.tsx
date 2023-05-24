import { JSXNode } from '@builder.io/qwik';
import { Docker, GitHub, HackerRank, InternetExplorer, Java, Npm } from './icons';
import { styles } from '~/config';

type CardLink = {
  href: string;
}

type LinkProps = CardLink & {
  title?: string;
  class: string;
  children: JSXNode | JSXNode[];
}

const Link = (props: LinkProps) => (
  <a
    target="_blank"
    href={props.href}
    title={props.title}
    class={props.class}
    rel="noopener noreferrer"
  >
    {props.children}
  </a>
);

export const GitHubCardLink = (props: CardLink) => Link({ ...props, class: styles.cardLink.container, children: [<GitHub class={styles.cardLink.icon} />, <span class={styles.cardLink.text}>VIEW SOURCE CODE</span>] });
export const WebsiteCardLink = (props: CardLink) => Link({ ...props, class: styles.cardLink.container, children: [<InternetExplorer class={styles.cardLink.icon} />, <span class={styles.cardLink.text}>VISIT WEBSITE</span>] });

export const GitHubSocialLink = () => Link({ href: 'https://github.com/loqo71la', title: 'GitHub', class: styles.socialLink.container, children: <GitHub class={styles.socialLink.icon} /> });
export const MavenSocialLink = () => Link({ href: 'https://central.sonatype.com/namespace/dev.loqo71la', title: 'Maven Central', class: styles.socialLink.container, children: <Java class={styles.socialLink.icon} /> });
export const DockerSocialLink = () => Link({ href: 'https://hub.docker.com/u/loqo71la', title: 'DockerHub', class: styles.socialLink.container, children: <Docker class={styles.socialLink.icon} /> });
export const NpmSocialLink = () => Link({ href: 'https://www.npmjs.com/~loqo71la', title: 'npm', class: styles.socialLink.container, children: <Npm class={styles.socialLink.icon} /> });
export const HackerRankSocialLink = () => Link({ href: 'https://www.hackerrank.com/loqo71la', title: 'HackerRank', class: styles.socialLink.container, children: <HackerRank class={styles.socialLink.icon} /> });
