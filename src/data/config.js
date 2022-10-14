const { Telegram, GitHub, HackerRank, Npm } = require('@loqo71la/react-web-icons');

module.exports = {
  api: {
    headers: { 'Content-Type': 'application/json' }
  },
  socialLinks: [
    { link: 'https://t.me/loqo71la', svg: Telegram },
    { link: 'https://github.com/loqo71la', svg: GitHub },
    { link: 'https://www.npmjs.com/~loqo71la', svg: Npm },
    { link: 'https://www.hackerrank.com/loqo71la', svg: HackerRank }
  ],
  contact: {
    errorMsg: 'The server encountered an internal error, please try to contact me via email',
    successMsg: 'Your message has been sent correctly'
  },
  languages: {
    'aspnet-core': 'ASP.NET Core',
    'bdd': 'BDD',
    'csharp': 'C#',
    'data-structures': 'Data Structures',
    'entity-framework-core': 'EF Core',
    'javascript': 'JavaScript',
    'junit': 'JUnit',
    'npm': 'npm',
    'reactjs': 'React',
    'sass': 'SASS',
    'spring-boot': 'Spring Boot',
    'spring-data': 'Spring Data',
    'tdd': 'TDD',
    'typescript': 'TypeScript',
    'xunit': 'xUnit'
  }
};
