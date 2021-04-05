import { myProjects } from './projects.js'

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

document.getElementById('email-me').addEventListener('submit', function(event) {
  event.preventDefault();
  emailjs.sendForm('email_me', 'email_me', this)
      .then(function() {
          console.log('SUCCESS!');
      }, function(error) {
          console.log('FAILED...', error);
      });
});
