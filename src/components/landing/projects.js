import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { GitHub, InternetExplorer, Tag } from '@loqo71la/react-web-icons';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const images = {
  "loqo71la": <StaticImage alt="loqo71la" src="../../images/demo/loqo71la.png" />,
  "enforce-gradle-plugin": <StaticImage alt="enforce-gradle-plugin" src="../../images/demo/enforce-gradle-plugin.png" />,
  "great-pizza": <StaticImage alt="great-pizza" src="../../images/demo/great-pizza.png" />,
  "school-management": <StaticImage alt="school-management" src="../../images/demo/school-management.png" />,
  "react-web-icons": <StaticImage alt="react-web-icons" src="../../images/demo/react-web-icons.png" />,
  "giphy": <StaticImage alt="giphy" src="../../images/demo/giphy.png" />
}

function Projects() {
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
              first: 10
              orderBy: { field: STARGAZERS, direction: DESC }
              ownerAffiliations: OWNER
            ) {
              nodes {
                name
                url
                description
                languages(first: 5) {
                  nodes {
                    name
                  }
                }
                homepageUrl
              }
            }
          }
        }
      }
    `
  );

  return (
    <section id="projects" className="py-28 bg-gradient-to-tr from-indigo-100 to-white dark:from-indigo-500 dark:to-gray-800">
      <div className="container mx-auto px-6 md:px-10 text-center">
        <Fade direction="up" cascade>
          <h2 className="text-3xl md:text-5xl">Projects</h2>
          <p className="opacity-70 mt-6">In these projects you will be able to see many technologies that I have used until now.</p>
        </Fade>
        <Fade delay={250} duration={1500}>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {nodes.map((node, index) => (
              <div
                key={index}
                href={node.homepageUrl || node.url}
                className="flex flex-col pt-3 pb-1 px-4 gap-3 bg-white dark:bg-gray-700 rounded-lg shadow-md transition hover:-translate-y-1 hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                <h5 className="text-xl font-medium tracking-tight text-gray-900 dark:text-white inline-flex items-center justify-center gap-2">
                  {node.name}
                  {node.url &&
                    <a
                      target="_blank"
                      href={node.url}
                      rel="noopener noreferrer"
                    >
                      <GitHub className="w-5 h-5 dark:fill-white hover:fill-blue-600 dark:hover:fill-indigo-400" />
                    </a>
                  }
                  {node.homepageUrl &&
                    <a
                      target="_blank"
                      href={node.homepageUrl}
                      rel="noopener noreferrer"
                    >
                      <InternetExplorer
                        title="Website"
                        className="w-5 h-5 fill-blue-500 dark:fill-indigo-400 hover:fill-blue-700 dark:hover:fill-indigo-500"
                      />
                    </a>
                  }
                </h5>
                <p>{node.images}</p>
                {node.homepageUrl && images[node.name]}
                <p className="text-sm flex-1 text-gray-600 dark:text-gray-300">
                  {node.description}
                </p>
                <p className="inline-flex items-center gap-2 text-xs dark:text-gray-300">
                  <Tag className="w-5 h-5" />
                  {node.languages.nodes.map(lang => lang.name).join(', ')}
                </p>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default Projects;
