const { GitHub, HackerRank, Npm, Docker, Java } = require('@loqo71la/react-web-icons');

module.exports = {
  api: {
    headers: { 'Content-Type': 'application/json' }
  },
  socialLinks: [
    { link: 'https://github.com/loqo71la', svg: GitHub, title: 'Github' },
    { link: 'https://central.sonatype.com/namespace/dev.loqo71la', svg: Java, title: 'Maven Central' },
    { link: 'https://hub.docker.com/u/loqo71la', svg: Docker, title: 'DockerHub' },
    { link: 'https://www.npmjs.com/~loqo71la', svg: Npm, title: 'npm' },
    { link: 'https://www.hackerrank.com/loqo71la', svg: HackerRank, title: 'HackerRank' }
  ],
  contact: {
    errorMsg: 'The server encountered an internal error, please try to contact me via email',
    successMsg: 'Your message has been sent correctly'
  },
  languages: {
    'aspnet-core': 'ASP.NET Core',
    'bdd': 'BDD',
    'csharp': 'C#',
    'data-structure': 'Data Structure',
    'entity-framework-core': 'EF Core',
    'javascript': 'JavaScript',
    'junit': 'JUnit',
    'netcore': '.NET Core',
    'npm': 'npm',
    'reactjs': 'React',
    'sass': 'SASS',
    'spring-boot': 'Spring Boot',
    'spring-data': 'Spring Data',
    'spring-security': 'Spring Security',
    'tdd': 'TDD',
    'typescript': 'TypeScript',
    'xunit': 'xUnit'
  }
};
