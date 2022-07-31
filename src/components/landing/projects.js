import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Fade } from 'react-awesome-reveal';
import GithubIcon from '../common/icons/github-icon';
import WebIcon from '../common/icons/web-icon';

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
    <section id="projects" className="py-28 bg-gradient-to-tr from-indigo-100 via-blue-50 to-white">
      <div className="container mx-auto px-6 md:px-10 text-center">
        <Fade direction="up" cascade>
          <h2 className="text-3xl md:text-5xl">Projects</h2>
          <p className="text-gray-700 mt-6">In these projects you will be able to see many technologies that I have used until now.</p>
        </Fade>
        <Fade delay={250} duration={1500}>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {nodes.map((node, index) => (
              <div
                key={index}
                href={node.homepageUrl || node.url}
                className="flex flex-col pt-3 pb-1 px-4 gap-3 bg-white rounded-lg shadow-md transition hover:-translate-y-1 hover:bg-gray-100"
              >
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white inline-flex items-center justify-center gap-2">
                  {node.name}
                  {node.url &&
                    <a
                      target="_blank"
                      href={node.url}
                      rel="noopener noreferrer"
                      className="hover:fill-white hover:bg-blue-600 hover:rounded-full"
                    >
                      <GithubIcon />
                    </a>
                  }
                  {node.homepageUrl &&
                    <a
                      target="_blank"
                      href={node.homepageUrl}
                      rel="noopener noreferrer"
                      className="bg-green-200 rounded-full hover:fill-white hover:text-white hover:bg-blue-600 hover:rounded-full"
                      >
                      <WebIcon />
                    </a>
                  }
                </h5>
                <p className="text-sm flex-1 text-gray-500 dark:text-gray-400">
                  {node.description}
                </p>
                <p className="text-xs font-medium dark:text-gray-400 inline-flex items-center">
                  <svg className="mr-1" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M2.5 7.775V2.75a.25.25 0 01.25-.25h5.025a.25.25 0 01.177.073l6.25 6.25a.25.25 0 010 .354l-5.025 5.025a.25.25 0 01-.354 0l-6.25-6.25a.25.25 0 01-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 010 2.474l-5.026 5.026a1.75 1.75 0 01-2.474 0l-6.25-6.25A1.75 1.75 0 011 7.775zM6 5a1 1 0 100 2 1 1 0 000-2z"></path>
                  </svg>
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
