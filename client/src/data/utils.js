import Projects from './projects.json';

const projects = [...Projects.projects.row1, ...Projects.projects.row2];

export const getProjectById = function (id) {
    return projects.find(project => project.id == id) || {};
}