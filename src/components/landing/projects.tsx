import { $, component$, useSignal } from '@builder.io/qwik';

import CardProject from '../common/card-project';
import ProjectCategory from '../common/project-category';
import { GitHubCardLink, WebsiteCardLink } from '../common/links';
import { projects } from '~/config';
import { Tag } from '../common/icons';

export type ProjectProps = {
  name: string;
  category: number;
  description: string;
  websiteUrl?: string;
  githubUrl?: string;
  languages: string;
  src: string;
}

export default component$(() => {
  const state = useSignal(projects);
  const onSelected = $((category: number) => {
    state.value = category === 0 ? projects : projects.filter(project => category === project.category);
  });

  return (
    <section id="projects" class="py-24 bg-gray-100 dark:bg-gray-900">
      <div class="container mx-auto px-6 md:px-10 text-center">
        <h2 class="text-3xl md:text-5xl">Projects</h2>
        <p class="opacity-70 mt-10">In these personal projects you will be able to see many technologies that I have used so far.</p>
        <ProjectCategory onSelected={onSelected} />
        <div class="mt-12 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-x-8 gap-y-6">
          {state.value.map((node: ProjectProps, index: number) => (
            <CardProject key={`group-${index}`}>
              <img q:slot="img" src={node.src} />
              <div q:slot="links" class="hidden group-hover:flex flex-col gap-y-5">
                {node.websiteUrl && <WebsiteCardLink href={node.websiteUrl} />}
                {node.githubUrl && <GitHubCardLink href={node.githubUrl} />}
              </div>
              <div class="flex flex-col gap-1 px-2">
                <h5 class="font-medium tracking-tight text-gray-900 dark:text-white">{node.name}</h5>
                <p class="text-xs font-light flex-1 text-gray-800 dark:text-gray-200">{node.description}</p>
                <p class="text-xs font-semibold text-left inline-flex gap-1 tracking-tight text-gray-800 dark:text-gray-300">
                  <Tag class="w-4 h-4" />
                  {node.languages}
                </p>
              </div>
            </CardProject>
          ))}
        </div>
      </div>
    </section>
  );
});
