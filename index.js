const myProjects = [
  {
    projectName: 'Politico',
    description: 'Politico enables citizens vote for politicians running for various government offices',
    repository: 'https://github.com/Blaise-Shyaka/Politico',
    liveLink: 'https://blaise-shyaka.github.io/Politico/templates/',
    screenshotSource: './screenshots/politico.png',
    stack: 'HTML | CSS | Node JS | PostgreSQL'
  },
  {
    projectName: 'AnnounceIT',
    description: 'AnnounceIT is a solution enabling broadcasting agencies to receive and manage announcements.',
    repository: 'https://github.com/Blaise-Shyaka/AnnounceIT',
    liveLink: 'https://blaise-shyaka.github.io/AnnounceIT/templates/',
    screenshotSource: './screenshots/announceit.png',
    stack: 'HTML | CSS | Node JS | PostgreSQL'
  },
  {
    projectName: 'Drum-kit',
    description: 'Drum-kit allows users to play a drum using their keyboard',
    repository: 'https://github.com/Blaise-Shyaka/drum-kit',
    liveLink: 'https://blaise-shyaka.github.io/drum-kit/',
    screenshotSource: './screenshots/drum-kit.png',
    stack: 'HTML | CSS | JS'
  },
  {
    projectName: 'Politico-react',
    description: 'An experimental version of the politico app developed using React JS',
    repository: 'https://github.com/Blaise-Shyaka/politico-react',
    screenshotSource: './screenshots/politico.png',
    stack: 'React JS'
  }
];

const displayTemplateOne = (obj) => {
  return `<div class="project card">
  <section class="front">
  <img 
    class="screenshot"
    src="${obj.screenshotSource}"
    alt="${obj.projectName} Home Page"
  />
</section>
<section class="back">
  <h2 class="title">${obj.projectName}</h2>
  <p class="description">
    ${obj.description}
  </p>
  <p class="tech-stack">${obj.stack}</p>
</section>
<section class="links">
  <a
    href="${obj.liveLink}"
    target="_blank"
    rel="noopener noreferrer"
    class="view-page"
    >View site</a
  >
  <a
    href="${obj.repository}"
    target="_blank"
    rel="noopener noreferrer"
    class="view-github"
    >View on Github</a
  >
</section>
</div>`
}

const displayTemplateTwo = (obj) => {
  return `<div class="project card">
  <section class="front">
  <img 
    class="screenshot"
    src="${obj.screenshotSource}"
    alt="${obj.projectName} Home Page"
  />
</section>
<section class="back">
  <h2 class="title">${obj.projectName}</h2>
  <p class="description">
    ${obj.description}
  </p>
  <p class="tech-stack">${obj.stack}</p>
</section>
<section class="links">
  <a
    href="${obj.repository}"
    target="_blank"
    rel="noopener noreferrer"
    class="view-github"
    >View on Github</a
  >
</section>
</div>`
}

const projectDisplay = document.querySelector('.projects')

const displayAllProjects = (listOfProjects) => {
  const markup = listOfProjects.map(proj => {
    if(proj.liveLink) return displayTemplateOne(proj)
    return displayTemplateTwo(proj)
  })

  return markup.join('')
}

projectDisplay.innerHTML = displayAllProjects(myProjects)
