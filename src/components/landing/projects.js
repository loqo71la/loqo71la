import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Fade } from 'react-awesome-reveal';

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
                    <a href={node.url} className="p-1 hover:p-1 hover:fill-white hover:bg-blue-600 hover:rounded-full">
                      <svg role="img" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    </a>
                  }
                  {node.homepageUrl &&
                    <a href={node.homepageUrl} className="p-1 hover:p-1 hover:fill-white hover:bg-blue-600 hover:rounded-full">
                      <svg role="img" width="20" height="20" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
                      </svg>
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
