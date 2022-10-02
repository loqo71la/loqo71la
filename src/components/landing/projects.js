import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { GitHub, Tag } from '@loqo71la/react-web-icons';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const imgStyle = 'rounded-t-xl group-hover:opacity-40';
const images = {
  "loqo71la": <StaticImage alt="loqo71la" className={imgStyle} src="../../images/demo/loqo71la.png" />,
  "enforce-gradle-plugin": <StaticImage alt="enforce-gradle-plugin" className={imgStyle} src="../../images/demo/enforce-gradle-plugin.png" />,
  "great-pizza": <StaticImage alt="great-pizza" className={imgStyle} src="../../images/demo/great-pizza.png" />,
  "school-management": <StaticImage alt="school-management" className={imgStyle} src="../../images/demo/school-management.png" />,
  "react-web-icons": <StaticImage alt="react-web-icons" className={imgStyle} src="../../images/demo/react-web-icons.png" />,
  "giphy": <StaticImage alt="giphy" className={imgStyle} src="../../images/demo/giphy.png" />
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
                className="group flex flex-col bg-white dark:bg-gray-700 rounded-xl shadow-md hover:bg-gray-300 dark:hover:bg-gray-900"
              >
                {node.homepageUrl &&
                  <a
                    target="_blank"
                    title="Website"
                    href={node.homepageUrl}
                    rel="noopener noreferrer"
                  >
                    {images[node.name]}
                  </a>
                }
                <a
                  target="_blank"
                  href={node.url}
                  title="GitHub repository"
                  rel="noopener noreferrer"
                  className="flex-1 flex flex-col pt-3 pb-1"
                >
                  <section className="flex-1 flex text-left">
                    <div className="px-4">
                      <GitHub className="w-8 h-8 dark:fill-white hover:fill-blue-600 dark:hover:fill-indigo-400" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h5 className="text-sm font-medium tracking-tight text-gray-900 dark:text-white">{node.name}</h5>
                      <p className="text-xs flex-1 text-gray-600 dark:text-gray-300">{node.description}</p>
                      <p className="inline-flex gap-1 text-xs dark:text-gray-300">
                        <Tag className="w-4 h-4" />
                        {node.languages.nodes.map(lang => lang.name).join(', ')}
                      </p>
                    </div>
                  </section>
                </a>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default Projects;
