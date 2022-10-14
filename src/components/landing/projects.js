import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { GitHub, InternetExplorer, Tag } from '@loqo71la/react-web-icons';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { languages } from '../../data/config';

const imgStyle = 'rounded-t-xl group-hover:opacity-5';
const images = {
  "loqo71la": <StaticImage alt="loqo71la" className={imgStyle} src="../../images/demo/loqo71la.png" />,
  "enforce-gradle-plugin": <StaticImage alt="enforce-gradle-plugin" className={imgStyle} src="../../images/demo/enforce-gradle-plugin.png" />,
  "great-pizza": <StaticImage alt="great-pizza" className={imgStyle} src="../../images/demo/great-pizza.png" />,
  "school-management": <StaticImage alt="school-management" className={imgStyle} src="../../images/demo/school-management.png" />,
  "react-web-icons": <StaticImage alt="react-web-icons" className={imgStyle} src="../../images/demo/react-web-icons.png" />,
  "giphy": <StaticImage alt="giphy" className={imgStyle} src="../../images/demo/giphy.png" />
}

function Projects() {
  const toCapitalCase = name => name.length ? `${name[0].toUpperCase()}${name.substring(1)}` : '';
  const loadLanguage = node => {
    const name = node.topic.name;
    return languages[name] || toCapitalCase(name);
  };
  const {
    github: {
      viewer: {
        repositories: { nodes },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            repositories(
              first: 12
              orderBy: {field: STARGAZERS, direction: DESC}
              ownerAffiliations: OWNER
            ) {
              nodes {
                name
                url
                description
                homepageUrl
                repositoryTopics(first: 10) {
                  nodes {
                    topic {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-indigo-100 to-white dark:from-indigo-500 dark:to-gray-800">
      <div className="container mx-auto px-6 md:px-10 text-center">
        <Fade direction="up" cascade>
          <h2 className="text-3xl md:text-5xl">Projects</h2>
          <p className="opacity-70 mt-6">In these personal projects you will be able to see many technologies that I have used so far.</p>
        </Fade>
        <Fade delay={250} duration={1500}>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {nodes.map((node, index) => (
              <div
                key={index}
                href={node.homepageUrl || node.url}
                className="relative group flex flex-col bg-white dark:bg-gray-700 rounded-xl shadow-md"
              >
                <section className="hidden group-hover:z-10 group-hover:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                  {node.homepageUrl &&
                    <a
                      target="_blank"
                      title="Website"
                      href={node.homepageUrl}
                      className="flex justify-center items-center gap-2 py-2 px-6 mb-2 rounded-full border border-blue-600 text-blue-600 fill-blue-600 hover:fill-white hover:bg-blue-600 hover:text-white dark:fill-indigo-500 dark:text-indigo-500 dark:border-indigo-500 dark:bg-gray-800 dark:hover:text-white dark:hover:bg-indigo-500 dark:hover:fill-white"
                      rel="noopener noreferrer"
                    >
                      <InternetExplorer className="w-6 h-6" />
                      <span className="w-28">Visit Website</span>
                    </a>
                  }
                  <a
                    target="_blank"
                    title="Github"
                    href={node.url}
                    className="flex justify-center items-center gap-2 py-2 px-6 rounded-full border border-blue-600 text-blue-600 fill-blue-600 hover:fill-white hover:bg-blue-600 hover:text-white dark:fill-indigo-500 dark:text-indigo-500 dark:border-indigo-500 dark:bg-gray-800 dark:hover:text-white dark:hover:bg-indigo-500 dark:hover:fill-white"
                    rel="noopener noreferrer"
                  >
                    <GitHub className="w-6 h-6" />
                    Visit GitHub
                  </a>
                </section>
                {node.homepageUrl && images[node.name]}
                <section className="flex-1 flex group-hover:opacity-5">
                  <div className="flex-1 flex flex-col gap-1 px-2">
                    <h5 className="text-sm font-medium tracking-tight text-gray-900 dark:text-white">{node.name}</h5>
                    <p className="text-xs flex-1 text-gray-600 dark:text-gray-300">{node.description}</p>
                    <p className="inline-flex gap-1 tracking-tight text-left text-xs dark:text-gray-300">
                      <Tag className="w-4 h-4" />
                      {node.repositoryTopics?.nodes.map(loadLanguage).join(', ')}
                    </p>
                  </div>
                </section>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default Projects;
