const { getAllProjects } = require('../data/projects');
const { getAllExperience } = require('../data/experience');

module.exports = {
  Query: {
    posts: (_, __, { dataSources }) => (
      dataSources.instagramAPI.getAllMediaObjects()
    ),
    projects: () => (
      getAllProjects()
    ),
    experience: () => (
      getAllExperience()
    ),
  }
}