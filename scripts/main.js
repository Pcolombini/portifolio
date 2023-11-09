const elemProjects = document.getElementById('projects__content');

const createImage = (image) => {
    const elemPicture = document.createElement('picture');
    const elemImg = document.createElement('img');

    elemImg.setAttribute('src', image);
    elemImg.setAttribute('alt', 'Imagem de capa do projeto');
    
    elemPicture.appendChild(elemImg);

    return elemPicture;
}

const createStrong = (name) => {
    const elemStrong = document.createElement('strong');

    elemStrong.innerText = name;

    return elemStrong;
}

const createTags = (tags) => {
    const elemTags = document.createElement('section');

    tags.forEach(tags => {
        const elemTag = document.createElement('span');

        elemTag.innerText = tags;

        elemTags.appendChild(elemTag);
    }); 

    return elemTags;
}

const createProject = (project,index) => {
    const elemProject = document.createElement('a');

    elemProject.setAttribute('href', project.link);
    elemProject.setAttribute('target', '_blank');

    elemProject.setAttribute('data-aos','zoom-in-up')
    elemProject.setAttribute('data-aos-duration','800');
    elemProject.setAttribute('data-aos-easing','ease-in-out');
    elemProject.setAttribute('data-aos-offset','-100');
    elemProject.setAttribute('data-aos-delay',300 * (index +1));

    elemProject.classList.add('project');

    // add Picture

    elemProject.appendChild(createImage(project.image));

    // add Strong

    elemProject.appendChild(createStrong(project.name)); 

    // add tags Section span

    elemProject.appendChild(createTags(project.tags));

    return elemProject;
}

const loadProjects = (projects) => {
    projects.forEach((project,index) => {
        elemProjects.appendChild(createProject(project,index))
    });
}

fetch('./projects.json').then(response => response.json()).then(loadProjects);