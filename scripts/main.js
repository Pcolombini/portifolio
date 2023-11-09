const elemProjects = document.getElementById('projects__content');

const createImage = (image) => {
    const elemPicture = document.createElement('picture');
    const elemImg = document.createElement('img');

    elemImg.setAttribute('src', image);
    
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

const createProject = (project) => {
    const elemProject = document.createElement('a');

    elemProjects.setAttribute('href', project.link);
    elemProjects.setAttribute('target', '_blank');

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
    projects.forEach(project => {
        elemProjects.appendChild(createProject(project))
    });
}

fetch('./projects.json').then(response => response.json()).then(loadProjects);